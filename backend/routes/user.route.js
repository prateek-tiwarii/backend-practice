import { Router } from "express";
import { check } from "express-validator";
import { retrieveUsers ,createNewUser , loginUser } from "../controller/user.controller.js";

const router = Router();




router.get("/",retrieveUsers)

router.post("/signup",[
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({min:6}),
    check('name').notEmpty(),

],createNewUser)

router.post("/login",loginUser)








export default router;
