const Question=require('../models/Question')
const Option=require('../models/Option')
const { json } = require('express')

module.exports.getQuestion=async (req,res)=>{

    try{
        let question=await Question.findById(req.params.id).populate('options')
        if(question){
            return res.status(200).json({
                message:"Question found successfully",
                success:true,
                data:question
            })
        }
        else{
            return res.status(200).json({
                message:"Cannot find question in database",
                success:false
            })
        }
        
    }
    catch(err){
        console.log(`Error:${err}`)
        return res.status(500).json({
            message:"Failed to add question successfully",
            success:false
        })

    }
}

module.exports.createQuestion=async (req,res)=>{
   
    console.log(req.body)
    const {title}=req.body
    
    try{
        await Question.create({
            title:title,
            options: []
        })
        return res.status(200).json({
            message:"Created question successfully",
            success:true
        })
    }
    catch(err){
        console.log(`Error:${err}`)
        return res.status(500).json({
            message:"Failed to add question successfully",
            success:false
        })

    }
}



module.exports.deleteQuestion=async (req,res)=>{
    const {title}=req.body
    try{
        let question=await Question.findById(req.params.id).populate('options')
        let {options}=question;
        let optionsHasNoVote=true;
       
        if(options.length!=0){
            for(let option of options){
                if(option.votes!==0){
                    optionsHasNoVote=false;
                    break;
                }
            }
        }
        if(optionsHasNoVote){
            //delete question if options do not have a vote
            await Question.findByIdAndDelete(req.params.id)
            return res.status(200).json({
                message:"Deleted question successfully",
                success:true
            })
        }
        else{
            return res.status(200).json({
                message:"Deletion of questions not permitted as options has a vote",
                success:false
            })
        }
       
    }
    catch(err){
        console.log(`Error:${err}`)
        return res.status(500).json({
            message:"Internal server error while deleting question",
            success:false
        })

    }
}

module.exports.createOption=async (req,res)=>{
    const {text}=req.body
 
    try{
        let option=await Option.create({
            text:text,
            votes: 0,
            link_to_vote:""
        })
        option.link_to_vote=`${process.env.EXPRESS_SERVER_URL}/options/${option.id}/add_vote`
        await option.save()
        let question=await Question.findById(req.params.id)
        question.options.push(option._id)
        await question.save()

        return res.status(200).json({
            message:"Added option successfully",
            success:true
        })
    }
    catch(err){
        console.log(`Error:${err}`)
        return res.status(500).json({
            message:"Internal error while adding option",
            success:false
        })
    }
}

