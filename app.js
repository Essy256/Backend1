const express = require ('express');

const app = express();
const port = 4000

app.get('/',(req,res) =>{
    res.send('we are the code queen')
})

app.listen(process.env.PORT,()=>{
console.log(`server runing on port ${port}`)

})

require(dotenv/config)
//function student(req,res){
//console.log(req+res)

//}


//const student = (req,res)=>{console.log(req+res)}

//(req,res)=>{console.log(req+res)}

const mongoose = require('mongoose');
//CONNECT TO THE DATABASE
mongoose.connect(process.env.MONGODBLINK,)
    {useNewUrIParser:true}
    //parsing error
).then(
()=>{console.log('connected to the DB')}

).Catch (err=>{
    console.log('error connecting to the DB',err)

    app


})