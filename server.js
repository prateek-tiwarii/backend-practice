import express from "express"
import placeRouter from "./routes/place.route.js"
import bodyParser from "body-parser";
import HttpError from "./models/https-error.js";
import userRouter from "./routes/user.route.js"
import mongoose from "mongoose";
import 'dotenv/config';



const app = express()

app.use(bodyParser.json());

app.use("/api/places",placeRouter);

app.use("/api/users",userRouter);


app.use((req,res,next)=>{
  const error =  new HttpError("route can not be found ", 404)
  throw error;
})

app.use((error ,req,res,next)=>{
    if(res.headerSent){
       return next(error);
    }
      res.status(error.code|| 500);
      res.json({message:error.message || "an unknown error occured"});

    
})


mongoose.connect(`${process.env.mongoDbUri}`).then(
  app.listen(8000,(req,res)=>{
    console.log("server is running ")
})
).catch((e)=>{
   console.log(e);
})

