import mongoose from "mongoose";
import { Schema } from "mongoose";


const placeSchema = new Schema({
   title : {type: String, required:true},
   description:{type:String , required:true},
   address:{type:String , required:true},
   image:{type:String , required:true},
   location:{
    lat:{
        type:String,
        required:true
    },

    log:{
        type:String,
        required:true
    },
},

    creator:{type:String , required:true},
   
});


export const Place = mongoose.model("Place", placeSchema);


