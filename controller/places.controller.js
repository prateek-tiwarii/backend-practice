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

 const updatePlaceById = (req,res,next)=>{
    const placeId = req.params.pid;
    const { location , place} = req.body

    const updatePlace = {...Dummy_place.find(p=>{p.id === placeId})}
    const placeIndex = Dummy_place.findIndex(p=>p.id===placeId);

    updatePlace.location = location;
    updatePlace.place = place;

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

