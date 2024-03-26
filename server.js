import express from "express"
import placeRouter from "./routes/place.route.js"
// import bodyParser from "body-parser"

const app = express()

app.use("/api/places",placeRouter);


app.listen(8000,(req,res)=>{
    console.log("server is running ")
})