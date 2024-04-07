const mongoose=require("mongoose");
const asTest=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    aadharno:{
        type:String,
        unique:true,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    phoneno:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    // policeid:{
    //     type:String,
    //     unique:true,
    //     required:true
    // }
},{timestamps:true});
const tests =mongoose.model("admin",asTest)
module.exports=tests;