const express = require('express');
const mongoose=require('mongoose')
const app=express();
const port=80;

mongoose.connect(`mongodb://localhost:27017/project`,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(!err) console.log(`connected db`);
    else console.log(`db error`);
})
const studentSchema=new mongoose.Schema({
    name:String,
    fathername:String,
    motername:String,
    class:Number,
    address:Number,
    contactno:Number
})
const studentModel=new mongoose.model('students',studentSchema);



app.use(express.static('./public'))
app.use(express.json())

app.post('/addstudent',(req,res)=>{
    console.log(req.body)
    const addstudent=studentModel(req.body)
    addstudent.save();
    res.json({msg:"Studnet added"})
})

app.listen(port,()=>{
    console.log(`App has started on http://localhost:${port} `);
})