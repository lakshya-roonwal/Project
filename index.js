const express = require('express');
const connectToMongo=require('./db')
const {mongoose}=require('mongoose')
const app=express();
const port=80;


//Connecting to mongodb
connectToMongo()

//Decraling the public folder for / route
app.use(express.static('./public'))

//Using json middleware for api testing
app.use(express.json())

//Declaring routes for students
app.use('/student',require('./routes/students'))

app.listen(port,()=>{
    console.log(`App has started on http://localhost:${port} `);
})