import HttpError from "../models/https-error.js";
import * as jwt from 'jsonwebtoken';


const checkAuth = (req,res,next)=>{

    try {

        if(req.method === "OPTIONS"){
            return next();
        }

        const token = req.headers.authorization.split(" ")[1];

        if(!token){
            const Error = new HttpError("not a valid token ",401)
            return next(Error);
        }

       const decodedToken =  jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)

       req.userData = {userId:decodedToken.userId};

       next()
    
        
    } catch (error) {
        console.error(error.message);

        const Error = new HttpError("something went wrong",500)
    }

   
}

export{checkAuth}