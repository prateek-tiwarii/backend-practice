import HttpError from "../models/https-error.js";
import { v4 as uuid } from 'uuid';
import { geoLocation } from "../utils/geo.location.js";
import { validationResult } from "express-validator";
import { Place } from "../models/place.model.js";
import mongoose from "mongoose";


const Dummy_place = [
    {
        id: "1",
        title: "berkshire hathway",
        description : "this is a good desc",
        
        address: "empire states buildind",
        location:{
            lat: "18.922064"
        ,
            log: "72.834641"
     },

        creator:"luv"
    }
 ]



const getPlaceById = async(req,res,next)=>{
    const pLaceId = req.params.pid

    let place;
    

    try {

         place =  await Place.findById(pLaceId)

    } catch (error) {
        
        const Error = new HttpError("provided if doesnt exist",404);
        return next(Error);
    }

    
    
    if(!place){
       throw new HttpError("something went wrong", 404)
    }
    else{
 
    res.json({place});
    }
}

 const getPlacesByUserId = (req,res,next)=>{
    const userId  = req.params.uid
    const user = Dummy_place.filter(u=>{
        return u.creator === userId;
    });
      if(!user){
        throw new HttpError("some thing went wrong", 404);
        
      }
    res.json({user})
}

 const createPlace = async(req,res,next)=>{
   const errors = validationResult(req);

   if(!errors.isEmpty()){
    console.log(errors);
      return next (new HttpError("please enter all fields carefully", 422));

   }

    const {title , description , address  , creator} = req.body

       let coordinates = geoLocation(address);


    const createdPlace = new Place({
        title,
        address,
        description,
        location : coordinates,
        image: "https://picsum.photos/200",
        creator,
        
    })

    // Dummy_place.push(createdPlace);

    try {
        await createdPlace.save()
    } catch (error) {
        const Error = new HttpError("creation failed please try again",500);
        return next(Error);
    }

    res.status(201).json({place : createdPlace});


}

 const updatePlaceById = (req,res,next)=>{
    const placeId = req.params.pid;

    const errors = validationResult(req);

    if(!errors.isEmpty()){
     console.log(errors);
     throw new HttpError("please enter all fields carefully", 422);
    }
    
    const { title , description} = req.body

    const updatePlace = {...Dummy_place.find(p=>{p.id === placeId})}
    const placeIndex = Dummy_place.findIndex(p=>p.id===placeId);

    updatePlace.title = title;
    updatePlace.description = description;

    Dummy_place[placeIndex]  = updatePlace;

    res.status(200).json({message:"the data has been updated"});


    }

     const deletePlace = (req,res,next)=>{
        const placeId = req.params.pid;

        Dummy_place = Dummy_place.filter(p=>{
            p.id ==! placeId
        })

        res.status(200).json({message:"data deleted sucessfully"})


    }



 export {getPlaceById,getPlacesByUserId,createPlace , updatePlaceById, deletePlace , };

