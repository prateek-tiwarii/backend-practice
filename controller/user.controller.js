import { v4 as uuid } from 'uuid';

import HttpError from "../models/https-error.js"
import { express } from 'express';

 const DummyData = [

  {
      id: 1,
      name: "'jshwjhw",
      phone: "'hswhsj",
      email: "skjnjksn",
      password : "jsnjb",
  }
]

const retrieveUsers = (req,res,next)=>{

     res.status(200).json({users : DummyData});

}



const loginUser = (req,res,next) =>{
  const {email , password} = req.body;

  const identifyUser = DummyData.find(u=>{
    u.email === email })

    if(!identifyUser || identifyUser.password !==  password){
        throw new HttpError("invalid request",404)
    }

    res.status(201).json({message:"logged in sucessfully"})



}



const createNewUser = (req,res,next) =>{
  const { name , phone , email , password} = req.body;

  const createdUser = {
    id : uuid(),
    name,
    phone,
    email,
    password
  }

  DummyData.push(createdUser);

  res.status(201).json({message:"user created sucessfully"})

}

export {
  retrieveUsers,
  createNewUser,
  loginUser
}


