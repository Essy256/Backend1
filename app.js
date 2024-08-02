const express = require ('express');
const mongoose = require('mongoose');
require('dotenv/config')
const routes = require ('./routes')

const app = express();
const port = 4000


// MIDDLEWARE
app.use('/api',routes)

app.listen(process.env.port,()=>{
console.log(`server runing on port ${process.env.port}`)

})



//function student(req,res){
//console.log(req+res)

//}

//const student = (req,res)=>{console.log(req+res)}

//(req,res)=>{console.log(req+res)}



//CONNECT TO THE DATABASE
mongoose.connect(process.env.MONGODBLINK)
    .then (
()=>{console.log('connected to the DB')}

).catch (err=>{
    console.log('error connecting to the DB',err)


})
