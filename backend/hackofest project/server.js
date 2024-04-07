const express=require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config();
const db=process.env.URIu
const port=process.env.PORT
const users =require('./model/asuser');
const userroute=require('./router/userroute');
const polices =require('./model/aspolice');
const policeroute=require('./router/policeroute')
const admins =require('./model/asAdmin');
const adminroute=require('./router/adminroute')
const login=require('./model/loginfn')
const loginroute =require('./router/loginroute');
app.use(express.json());
server.use(cors());
app.use(bodyParser.json());
app.use('/signupClient',userroute);
app.use('/signupPolice',policeroute)
app.use('/signupJudge',adminroute);
app.use('/login',loginroute); 
const PORT = process.env.PORT ;


app.listen(PORT||5000,(error)=>{
    if(error) console.log(err);
    console.log("Hurrahh user!!!, It's working");
})