import express from "express";
import { Router } from "express";
import { check } from "express-validator";
// import exportDefault from "../controller/places.controller.js";

import {createPlace, deletePlace, getPlaceById, getPlacesByUserId, updatePlaceById} from "../controller/places.controller.js"

import HttpError from "../models/https-error.js";
 
const router =  Router();

router.get('/:pid', getPlaceById);
router.get('/users/:uid', getPlacesByUserId);

router.post('/',[

check('title').notEmpty(),
check('description').isLength({min:5}),
check('addrress').notEmpty()

],createPlace);

router.patch('/:pid',[
    check('address').notEmpty(),
    
],updatePlaceById );

router.delete("/:pid",deletePlace)
export default router;
