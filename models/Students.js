const {mongoose}=require('mongoose')
const studentSchema=new mongoose.Schema({
    name:String,
    fathername:String,
    mothername:String,
    address:String,
    class:String,
    contactno:Number
})
const studentModel=new mongoose.model('student',studentSchema);

module.exports=studentModel;