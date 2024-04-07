const express=require("express");
const app=express();
const mongoose=require("mongoose");
const admins =require('../model/asAdmin');
const router=express.Router();

// show all data
router.get('/signupJudge',async(req,res)=>{
    try {
        const showall=await admins.find();
        res.status(200).json(showall);
    } catch (error) {
       console.log(error);
       res.status(400).json({error:error.message}); 
    }
});

// add data to database
router.post("/signupJudge",async(req,res)=>{
    const{name,AadharNo,country,Address,city,pincode,phonenumber,password,judgeid}=req.body;
    // const admin=require("./model/asAdmin");
    try {
        const adminaddeddata=await admins.create({
            name:name,
            AadharNo:AadharNo,
            country:country,
            Address:Address,
            city:city,
            pincode:pincode,
            phonenumber:phonenumber,
            password:password,
            judgeid:judgeid,
        });
        res.status(201).json(adminaddeddata);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
});

// get data by some unique id
router.get("/signupJudge:id",async(req,res)=>{
    const {id}=req.params;
    try {
        const searchadmin=await admins.findById({id:id});
        res.status(200).json(searchadmin);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message});
    }
});

// delete the data
router.delete("/signupJudge:id",async(req,res)=>{
    const {id}=req.params;
    try {
        const deleteadmin=await admins.findByIdAndDelete({id:id});
        res.status(200).json(deleteadmin);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message});
    }
});

//update the data 
router.patch("/signupJudge:id",async(req,res)=>{
    const{id}=req.params;
    const{name,AadharNo,country,Address,city,pincode,phonenumber,password,judgeid}=req.body;
    try {
        const updateadmin=await admins.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(updateadmin);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message});
    }
});

module.exports=router
