import { createDoctor, getDoctorData } from "../controller/doctorConroller.js";
import express from "express";

const router = express.Router();


router.post("/doctordata",createDoctor);

router.get("/doctors", getDoctorData);

export default router;



