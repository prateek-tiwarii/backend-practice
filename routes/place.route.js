import express from "express";
import { Router } from "express";
import exportDefault from "../controller/places.controller";
import HttpError from "../models/https-error";
 
 const router =  Router();

router.get('/:pid', exportDefault.getPlaceById)


router.get('/users/:uid', exportDefault.getPlaceByUserId)
export default router;
