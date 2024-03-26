import express from "express"
import placeRouter from "./routes/place.route.js"
import bodyParser from "body-parser";
// import bodyParser from "body-parser"

const app = express()

app.use(bodyParser.json());

app.use("/api/places",placeRouter);

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