const express = require('express');
const {mongoose}=require('mongoose')
const app=express();
const port=80;

mongoose.connect(`mongodb+srv://Lakshya_roonwal:wTnISnRNXgiGdKpJ@cluster0.5uao7.mongodb.net/schoolproject?retryWrites=true&w=majority`,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(!err) console.log(`connected db`);
    else console.log(`db error`);
})
const studentSchema=new mongoose.Schema({
    name:String,
    fathername:String,
    mothername:String,
    address:String,
    class:String,
    contactno:Number
})
const studentModel=new mongoose.model('student',studentSchema);



app.use(express.static('./public'))
app.use(express.json())

app.post('/addstudent',(req,res)=>{
    console.log(req.body)
    const addstudent=studentModel(req.body)
    addstudent.save();
    res.json({msg:"Studnet added"})
})
app.get('/getallstudents',async(req,res)=>{
    const students=await studentModel.find();
    res.json(students);
})

app.listen(port,()=>{
    console.log(`App has started on http://localhost:${port} `);
})