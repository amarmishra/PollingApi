const Option=require('../models/Option')



module.exports.deleteOption=async (req,res)=>{
    try{
        let option=await Option.findById(req.params.id)
        if(option.votes===0){
            //proceed to delete
            await Option.findByIdAndDelete(req.params.id)
            return  res.status(200).json({
                success:true,
                message:"Deleted option successfully"
            })
        }
        else{
            return  res.status(200).json({
                success:true,
                message:"Option is not deleted since it has votes attached to it"
            })
        }
    }
    catch(err){
        console.log(`Error:${err}`)
        return res.status(500).json({
            message:"Internal error: Failed to delete option",
            success:false
        })
    }
}

module.exports.addVote=async (req,res)=>{
    try{
        
        let option=await Option.findById(req.params.id)
        option.votes=option.votes+1
        await option.save()
        
        return  res.status(200).json({
            success:true,
            message:"Votes updated successfully"
        })
       
    }
    catch(err){
        console.log(`Error:${err}`)
        return res.status(500).json({
            message:"Internal error: Failed to add vote to the option",
            success:false
        })
    }
}