const {Router}=require('express')
const router=Router()

const {getQuestion,createQuestion,deleteQuestion,createOption}=require('../controllers/questions_controller')

//get question and related data
router.get('/:id',getQuestion)

//create a question
router.post('/create',createQuestion)

//delete a question
router.delete('/:id/delete',deleteQuestion)

//create option on a question
router.post('/:id/options/create',createOption)


module.exports=router