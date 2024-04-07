const express=require("express");
const app=express();
const mongoose=require("mongoose");
const polices =require('../model/aspolice');
const router=express.Router();

// show all data
router.get('/signupPolice',async(req,res)=>{
    try {
        const showall=await polices.find();
        res.status(200).json(showall);
    } catch (error) {
       console.log(error);
       res.status(400).json({error:error.message}); 
    }
});

// add data to database
router.post("/signupPolice",async(req,res)=>{
    const{name,AadharNo,country,Address,city,pincode,phonenumber,password,policeid}=req.body;
    // const admin=require("./model/asAdmin");
    try {
        const adminaddeddata=await polices.create({
            name:name,
            AadharNo:AadharNo,
            country:country,
            Address:Address,
            city:city,
            pincode:pincode,
            phonenumber:phonenumber,
            password:password,
            policeid:policeid,
        });
        res.status(201).json(adminaddeddata);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
});

// get data by some unique id
router.get("/signupPolice:id",async(req,res)=>{
    const {id}=req.params;
    try {
        const searchpolice=await polices.findById({id:id});
        res.status(200).json(searchpolice);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message});
    }
});

// delete the data
router.get("/signupPolice:id",async(req,res)=>{
    const {id}=req.params;
    try {
        const deletepolice=await polices.findByIdAndDelete({id:id});
        res.status(200).json(deletepolice);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message});
    }
});

//update the data 
router.patch("/signupPolice:id",async(req,res)=>{
    const{id}=req.params;
    const{name,AadharNo,country,Address,city,pincode,phonenumber,password,policeid}=req.body;
    try {
        const updatepolice=await polices.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(updatepolice);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message});
    }
});

module.exports=router
