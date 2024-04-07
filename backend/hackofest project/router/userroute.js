const express=require("express");
const app=express();
const mongoose=require("mongoose");
 const users =require('../model/asuser');
const router=express.Router();

// show all data
router.get('/',async(req,res)=>{
    try {
        const showall=await users.find();
        res.status(200).json(showall);
    } catch (error) {
       console.log(error);
       res.status(400).json({error:error.message}); 
    }
});

// add data to database
router.post("/",async(req,res)=>{
    const{name,AadharNo,country,Address,city,pincode,phonenumber,password,policeid}=req.body;
    console.log(req.body)
    // const admin=require("./model/asAdmin");
    try {
        const useraddeddata=await users.create({
            name:name,
            AadharNo:AadharNo,
            country:country,
            Address:Address,
            city:city,
            pincode:pincode,
            phonenumber:phonenumber,
            password:password,
        });
        res.status(201).json(useraddeddata);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
});

// get data by some unique id
router.get("/:id",async(req,res)=>{
    const {id}=req.params;
    try {
        const searchuser=await users.findById({id:id});
        res.status(200).json(searchpolice);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message});
    }
});

// delete the data
router.get("/:id",async(req,res)=>{
    const {id}=req.params;
    try {
        const deleteuser=await users.findByIdAndDelete({id:id});
        res.status(200).json(deletepolice);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message});
    }
});

//update the data 
router.patch("/:id",async(req,res)=>{
    const{id}=req.params;
    const{name,AadharNo,country,Address,city,pincode,phonenumber,password,}=req.body;
    try {
        const updateuser=await users.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(updateuser);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message});
    }
});

module.exports=router
