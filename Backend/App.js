import express from "express"
import mongoose from "mongoose"
import messageRouter from "./router/MessageRouter.js"
import userRouter from "./router/UserRouter.js"
import doctorRouter from "./router/doctorMessage.js"
import sliderRouter from "./router/SliderRouter.js"
import homeSliderRouter from "./router/homeSliderRouter.js"
import { errorMiddleware } from "./middlewares/error.js";
import appointmentRouter from "./router/appointmentRouter.js"
import bodyParser from "body-parser"
import cors from "cors"


const app = express()
const url = "mongodb+srv://nagendrayadav13938:bGpDM8dw7Vba0mhl@cluster0.2m4pjjo.mongodb.net/"
mongoose.connect(url, {
    dbName: "Doctor_details"
}).then((data) => {
    console.log("Mongodb Database Connected Successfully!!")
}).catch((error) => {
    console.log("Mongodb Database Disconnected!!")
})
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: true,
    methods: ["GET", "POSt", "DELETE", "PUT"],
    credentials: true
}))
app.use("/Hospital", messageRouter);
app.use("/Hospital", userRouter)
app.use("/Hospital", doctorRouter)
app.use("/Hospital", sliderRouter)
app.use("/Hospital", homeSliderRouter)
app.use("/Hospital",appointmentRouter)
app.use(errorMiddleware)

app.listen(3000, () => {
    console.log("Server is running on 3000 port very well")
});


















