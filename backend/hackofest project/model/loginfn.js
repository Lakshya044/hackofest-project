const mongoose=require("mongoose");
const loginfn=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    AadharNo:{
        type:Number,
        unique:true,
        required:true
    },
},{timestamps:true});
const login =mongoose.model("login",loginfn)
module.exports=login;