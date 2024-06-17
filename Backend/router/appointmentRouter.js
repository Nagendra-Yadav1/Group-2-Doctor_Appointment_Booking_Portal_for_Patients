import express from "express"
import { createAppointment, deleteAppointment, getAppointment } from "../controller/AppointmentController.js"

const router = express.Router();
router.post("/appointment", createAppointment);
router.get("/appointmentdata", getAppointment);
router.delete("/appointments/:id", deleteAppointment);
export default router;

