import mongoose from "mongoose";
import { Schema } from "mongoose";
import { User } from "./user.model.js";


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

    creator:{type: mongoose.Types.ObjectId ,required :true , ref : "User"},
   
});


export const Place = mongoose.model("Place", placeSchema);


