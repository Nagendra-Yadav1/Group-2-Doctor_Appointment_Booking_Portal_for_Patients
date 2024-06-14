import express from "express"
import { homegetsliderdata, homesliderData } from "../controller/homeSliderController.js";
const router=express.Router()

router.post("/homesliderdata",homesliderData);


router.get("/homesliders", homegetsliderdata);

export default router;

