const express = require('express');
const studentModel=require('../models/Students')
const router=express.Router();

// Set student data with POST at http://localhost/student/addstudent
router.post('/addstudent',(req,res)=>{
    try
    {
        const addstudent=studentModel(req.body)
        addstudent.save();
        res.json({msg:"Studnet added"})
    }
    catch(err)
    {
        console.log(err)
        res.send("Internal Server Error")
    }

})

// Get all Students with GET at http://localhost/student/getallstudents
router.get('/getallstudents',async(req,res)=>{
    try
    {
        const students=await studentModel.find();
        console.log(students)
        res.json(students);
    }
    catch(err)
    {
        console.log(err)
        res.send("Internal Server Error")
    }
})

router.put('/updatestudent/:id',async(req,res)=>{
    let newStudent={
        name:req.body.name,
        fathername:req.body.fathername,
        mothername:req.body.mothername,
        address:req.body.address,
        class:req.body.class,
        contactno:req.body.contactno
    }
    const updatestudent=await studentModel.findByIdAndUpdate(req.params.id,{$set:newStudent},{new:true})
    res.json({msg:"Data updated",data:updatestudent})
})
router.delete('/deletestudent/:id',async(req,res)=>{
    
    await studentModel.findByIdAndDelete(req.params.id)
    res.json({msg:"Student Deleted"})
})



module.exports=router;