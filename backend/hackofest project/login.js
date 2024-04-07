const express = require('express');
const cors=require("cors");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv=require("dotenv")
dotenv.config();

const login=require('./model/loginfn')
const loginroute =require('./router/loginroute');
const PORT = process.env.PORT ;

const app = express();
app.use(cors()); 
app.use(bodyParser.json());

// Routes
app.use('/login',loginroute); // Authentication routes

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
