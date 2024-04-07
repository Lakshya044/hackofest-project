const express=require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config();
const db=process.env.URIu
const port=process.env.PORT
const users =require('./model/asuser');
app.use(cors()); 
app.use(express.json());
const bp = require("body-parser");
app.use(bp.urlencoded({ extended: true }));

mongoose.connect(db);

const userroute=require('./router/userroute');
// app.use('/users',userroute);

app.get('/users',(req,res) => {
    return res.status(200).json([])
})

app.post('/users',(req,res) => {
    const bdy = req.body;
    return res.status(201).json(bdy)
})

app.use(cors());

app.listen(port||5000,(error)=>{
    if(error) console.log(err);
    console.log("Hurrahh user!!!, It's working");
})