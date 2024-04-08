import { validationResult } from 'express-validator';
import HttpError from "../models/https-error.js"
import { User } from '../models/user.model.js';
import { Place } from '../models/place.model.js';
import bcrypt from 'bcryptjs';


 const DummyData = [

  {
      id: 1,
      name: "'jshwjhw",
      phone: "'hswhsj",
      email: "skjnjksn",
      password : "jsnjb",
  }
]

const retrieveUsers = async (req,res,next)=>{
     


  let user;
  try {

    user = await User.find({},"-password");
    
  } catch (error) {

    console.error(error.message);

    const Error = new HttpError("something went wrong", 500);

    return next(Error);
    
  }
    

     res.status(201).json({user : user.map(Find=>Find.toObject({getters:true}))});
     

}



const loginUser = async (req,res,next) =>{
  
  const {email , password} = req.body; 

  let alreadyUser;

  try {
      
    alreadyUser = await User.findOne({email:email})

  } catch (error) {
    console.error(error.message);

    const Error = new HttpError("something went wrong",500);

    return next(Error);
  }


    if(!alreadyUser){
       const Error = new HttpError("no user found",404)

       return next(Error);
    }

    let isValid = false; 

    try {
      isValid = await bcrypt.compare(password,alreadyUser.password);
    } catch (error) {
      console.error(error.message);
      const Error = new HttpError("could not process the request try again", 500);
       return next(Error);
    }

    

    res.status(201).json({message:"logged in sucessfully"})



}



const createNewUser = async(req,res,next) =>{

  const errors = validationResult(req);

  if(!errors.isEmpty()){
   console.log(errors);
   const Error =  new HttpError("invalid input", 422);

   return next(Error);
  }


  const { name ,  email , password } = req.body;
   
  let alreadyUser;


  try {
      
    alreadyUser = await User.findOne({email:email})

  } catch (error) {
    console.error(error.message);

    const Error = new HttpError("something went wrong",500);

    return next(Error);
  }
  
    
  if(alreadyUser){
    const Error = new HttpError("email already in use",401);

    return next(Error);

  }

  let hashedPassword;

  try {
    hashedPassword = await bcrypt.hash(password,12);
  } catch (error) {
   console.error(error.message);
   const Error = new HttpError("something is wrong with the server " , 500); 
   return next(Error);
  }


  const createdUser = new User({
    name,
    email,
    password : hashedPassword,
    image: "https://picsum.photos/200",
    places :[]
  })

  try {
    await createdUser.save();
  } catch (error) {
   
    console.error(error.message);

    const Error = new HttpError("Something Went Wrong",500);

    return next(Error);

  }

  

  res.status(201).json({User: createdUser.toObject({getters:true})})

}

export {
  retrieveUsers,
  createNewUser,
  loginUser
}


