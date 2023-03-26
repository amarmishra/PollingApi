const {Router}=require('express')
const router=Router()

const {deleteOption,addVote}=require('../controllers/options_controller')
router.delete('/:id/delete',deleteOption)
router.post('/:id/add_vote',addVote)
module.exports=router