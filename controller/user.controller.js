import { v4 as uuid } from 'uuid';
import { validationResult } from 'express-validator';
import HttpError from "../models/https-error.js"

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

  const errors = validationResult(req);

  if(!errors.isEmpty()){
   console.log(errors);
   throw new HttpError("invalid input", 422);
  }


  const { name ,  email , password} = req.body;
   
  const alreadyUser = DummyData.find(u=>{
    u.email === email
  })
    
  if(alreadyUser){
    throw new HttpError("email already in use",401)

  }
  const createdUser = {
    id : uuid(),
    name,
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


