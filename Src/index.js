var express=require('express');
require('dotenv').config();
var mongoose = require("mongoose")
var bodyParser=require("body-parser")
var cookieParser = require('cookie-parser');



const app=express();

//middlewares
const {authenticateToken}= require("./MiddleWare/AuthVerify")

//routes
const UserRoute=require("./UserAuth/UserAuthRouter");
const Meetings=require("./Meeting/MeetingRouter")

mongoose.connect(process.env.MONGOURL , { useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify: false  })
mongoose.connection.once("open",()=>{
    console.log("connected");
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/",UserRoute);
app.use("/m",authenticateToken,Meetings)


app.listen(3001,()=>{
    console.log("im listeing")
})