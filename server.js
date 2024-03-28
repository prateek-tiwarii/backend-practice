import express from "express"
import placeRouter from "./routes/place.route.js"
import bodyParser from "body-parser";
import HttpError from "./models/https-error.js";
// import bodyParser from "body-parser"

const app = express()

app.use(bodyParser.json());

app.use("/api/places",placeRouter);

app.use((req,res,next)=>{
  const error =  new HttpError("route can not be found ", 404)
  throw error;
})

app.use((error ,req,res,next)=>{
    if(res.headerSent){
       return next(error);
    }

    else{
      res.status(error.code|| 500);
      res.message(error.message || "garbage error")

    }
})


app.listen(8000,(req,res)=>{
    console.log("server is running ")
})