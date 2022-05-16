const mongoose=require('mongoose')

const connectToMongo=()=>{
    mongoose.connect(`mongodb+srv://Lakshya_roonwal:wTnISnRNXgiGdKpJ@cluster0.5uao7.mongodb.net/schoolproject?retryWrites=true&w=majority`,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
        if(!err) console.log(`connected db`);
        else console.log(`db error`);
    })
}

module.exports=connectToMongo;
