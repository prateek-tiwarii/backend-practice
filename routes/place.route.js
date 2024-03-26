import express from "express";
import { Router } from "express";
import exportDefault from "../controller/places.controller.js";
import HttpError from "../models/https-error.js";
 
 const router =  Router();

router.get('/:pid', exportDefault.getPlaceById);
router.get('/users/:uid', exportDefault.getPlaceByUserId);

router.post('/',exportDefault.createPlace)
export default router;
