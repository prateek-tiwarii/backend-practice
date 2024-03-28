import { Router } from "express";

import { retrieveUsers ,createNewUser , loginUser } from "../controller/user.controller.js";

const router = Router();




router.get("/",retrieveUsers)

router.post("/signup",createNewUser)

router.post("/login",loginUser)








export default router;
