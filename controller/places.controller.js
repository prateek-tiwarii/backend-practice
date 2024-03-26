

import HttpError from "../models/https-error";


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

const exportDefault = {getPlaceById,getPlaceByUserId};

export default exportDefault;
