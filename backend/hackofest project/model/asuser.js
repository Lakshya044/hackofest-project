const mongoose=require("mongoose");
const asUser=new mongoose.Schema({
    name:{
        type:String,
        // required:true
    },
    AadharNo:{
        type:Number,
        // unique:true,
        // required:true
    },
    country:{
        type:String,
        // required:true
    },
    Address:{
        type:String,
        // required:true
    },
    city:{
        type:String,
        // required:true
    },
    pincode:{
        type:String,
    //     required:true
     },
    phonenumber:{
        type:String,
        // unique:true,
        // required:true
    },
    password:{
        type:String,
        // required:true
    },
    
},{timestamps:true});
const users =mongoose.model("users",asUser)
module.exports=users;