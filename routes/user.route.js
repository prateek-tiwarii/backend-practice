import { Router } from "express";
import { check } from "express-validator";
import { retrieveUsers ,createNewUser , loginUser } from "../controller/user.controller.js";

const router = Router();




router.get("/",retrieveUsers)

router.post("/signup"[
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({min:6}),
    check('name').notEmpty(),
    check('phone').isLength({min:10 , max:10})

],createNewUser)

router.post("/login",loginUser)








export default router;
