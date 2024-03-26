import express from "express";
import { Router } from "express";
 
 const router =  Router();

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

router.get('/:pid', (req,res,next)=>{
    const pLaceId = req.params.pid
    const place =  Dummy_place.find(p=>{
       return  p.id === pLaceId;
    }); 


    res.json({place});

})


router.get('/users/:uid',(req,res,next)=>{
    const userId  = req.params.uid
    const user = Dummy_place.find(u=>{
        return u.creator === userId;
    });

    res.json({user})
})
export default router;
