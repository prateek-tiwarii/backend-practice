import mongoose from "mongoose";
import { Schema } from "mongoose";


const userSchema = new Schema({
   name:{type: String, required:true},
   email:{},
   password:{}
})

export const User = mongoose.model("User", userSchema);
