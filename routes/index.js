const {Router}=require('express')
const router=Router()


router.use('/questions',require('./questions'))
router.use('/options',require('./options'))

module.exports=router