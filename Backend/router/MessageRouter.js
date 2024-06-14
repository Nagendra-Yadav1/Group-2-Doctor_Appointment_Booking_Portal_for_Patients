import express from "express";
import {
    getAllMessages,
    sendMessage,
} from "../controller/MessageController.js";
import { Authenticate } from "../middlewares/Auth.js";
const router = express.Router();

router.post("/send", sendMessage);
router.get("/getall", getAllMessages);
export default router;
