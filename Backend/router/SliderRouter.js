import express from "express";
import { getsliderdata, sliderData } from "../controller/slider.js";

const router = express.Router();

router.post("/sliderdata", sliderData);


router.get("/sliders", getsliderdata);

export default router;


