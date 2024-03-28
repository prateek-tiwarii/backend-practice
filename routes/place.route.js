import express from "express";
import { Router } from "express";
// import exportDefault from "../controller/places.controller.js";

import {createPlace, deletePlace, getPlaceById, getPlacesByUserId, updatePlaceById} from "../controller/places.controller.js"

import HttpError from "../models/https-error.js";
 
const router =  Router();

router.get('/:pid', getPlaceById);
router.get('/users/:uid', getPlacesByUserId);

router.post('/',createPlace);

router.patch('/:pid',updatePlaceById );

router.delete("/:pid",deletePlace)
export default router;
