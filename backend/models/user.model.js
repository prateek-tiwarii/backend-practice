import mongoose from "mongoose";
import { Schema } from "mongoose";
import { Place } from "./place.model.js";


const userSchema = new Schema({
   name:{type: String, required:true},
   email:{type: String, required:true,unique:true},
   password:{type: String, required:true,minlength:6},
   image:{type: String, required:true},
   places:[{type: mongoose.Types.ObjectId ,required :true , ref : "Place"}]
})

export const User = mongoose.model("User", userSchema);
