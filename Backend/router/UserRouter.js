import express from "express"
import { Login, Register, getAllSignupdata } from "../controller/UserController.js"

const router = express.Router()
router.post("/signup", Register);
router.post("/login",Login)
router.get("/signupdata",getAllSignupdata)
export default router






