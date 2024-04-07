const express=require("express");
const app=express();
const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config();
const db=process.env.URIp
const port=process.env.PORT
const polices =require('./model/aspolice');
const policeroute=require('./router/policeroute')
app.use(express.json());
app.use(policeroute)

mongoose.connect(db).then(()=>{
    console.log("succesfull setup");
}).catch((err)=>{
    console.log("no connection established")
});
app.listen(port||5000,(error)=>{
    if(error) console.log(err);
    console.log("Hurrahh Police!!!, It's working");
})