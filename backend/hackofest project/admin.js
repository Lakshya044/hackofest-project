const express=require("express");
const app=express();
const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config();
const db=process.env.URIa
const port=process.env.PORT
const admins =require('./model/asAdmin');
const adminroute=require('./router/adminroute')
app.use(express.json());
app.use(adminroute);

//mongoose connect to compass atlas
mongoose.connect(db).then(()=>{
    console.log("succesfull setup");
}).catch((err)=>{
    console.log("no connection established")
});

// server connected
app.listen(port||5000,(error)=>{
    if(error) console.log(err);
    console.log("Hurrahh admin!!!, It's working");
})
