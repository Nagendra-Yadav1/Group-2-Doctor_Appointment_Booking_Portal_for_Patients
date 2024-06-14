import express from "express"
import { Login, Register } from "../controller/UserController.js"

const router = express.Router()
router.post("/signup", Register);
router.post("/login",Login)

export default router






