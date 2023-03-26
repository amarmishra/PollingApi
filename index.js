const express=require('express')
const app=express()
const PORT=8000

const db=require('./config/mongoose')
app.use(express.urlencoded({extended: true}))
app.use(express.json({limit:'1mb'}))

app.use('/',require('./routes'))


app.listen(PORT,(err)=>{
    if(err){console.log(err);return}
    console.log(`Server up and running on port:${PORT}`)
})
