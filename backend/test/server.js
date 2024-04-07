const express=require('express' );
const cors=require("cors");
const bodyparser=require("body-parser");
const dotenv=require("dotenv");
const mongoose=require("mongoose");
dotenv.config()
const tests=require("./model/test")
const server=express();

const db=process.env.URIt
mongoose.connect(db).then(()=>{
    console.log("succesfull setup");
}).catch((err)=>{
    console.log("no connection established")
});

server.use(bodyparser.json());
server.use(cors());
server.post("/",async(req,res)=>{
    console.log(req.body)
    // const{name,aadharno,country,address,city,pincode,phoneno,password}=req.body


    // try {
    //     const adminaddeddata=await tests.create({
    //         name:name,
    //         aadharno:aadharno,
    //         country:country,
    //         address:address,
    //         city:city,
    //         pincode:pincode,
    //         phoneno:phoneno,
    //         password:password,
    //         // policeid:policeid
    //     });
    //     res.status(201).json(adminaddeddata);
    // } catch (error) {
    //     res.status(400).json({error:error.message})
    // }

    res.status(200).json({msg:'ssc'})
});
server.get("/",(req,res)=>{
    res.send("hyyy,it's working");
})
server.listen(5000,()=>{
    console.log("api working");
});