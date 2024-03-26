

import HttpError from "../models/https-error.js";


const Dummy_place = [
    {
        id: "1",
        location : "usa",
        place: "empire states buildind",
        loc:{
                lat: "550:7800"
            ,
                log: "0000.1111.222"
            
        },
        creator:"luv"
    }
 ]



const getPlaceById = (req,res,next)=>{
    const pLaceId = req.params.pid
    const place =  Dummy_place.find(p=>{
       return  p.id === pLaceId;
    }); 
    
    if(!place){
       throw new HttpError("something went wrong", 404)
    }
    else{
 
    res.json({place});
    }
}

const getPlaceByUserId = (req,res,next)=>{
    const userId  = req.params.uid
    const user = Dummy_place.find(u=>{
        return u.creator === userId;
    });
      if(!user){
        throw new HttpError("some thing went wrong", 404);
        
      }
    res.json({user})
}

const createPlace = (req,res,next)=>{
    const {id , location , place, coordinates , creator} = req.body

    const createdPlace = {
        id,
        location,
        place,
        loc : coordinates,
        creator

    }

    Dummy_place.push(createdPlace);

    res.status(201).json({place : createdPlace});


}

const exportDefault = {getPlaceById,getPlaceByUserId,createPlace};

export default exportDefault;
