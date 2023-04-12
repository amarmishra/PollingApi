require('dotenv').config()
const express = require("express");
const PORT=process.env.EXPRESS_SERVER_PORT_NO || 8000
const app=express()


const db=require('./config/mongoose')
app.use(express.urlencoded({extended: true}))
app.use(express.json({limit:'1mb'}))

app.use('/',require('./routes'))


app.listen(PORT,(err)=>{
    if(err){
        console.log(`Error:${err}`)
    }
    console.log(`Exxpress server running on port:${PORT}`)
})