import mongoose from "mongoose";
import validator from "validator";
const sliderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [3, "First Name Must Contain At Least 3 Characters!"],
    },
    title: {
        type: String,
        required: true,
        minLength: [3, "Last Name Must Contain At Least 3 Characters!"],
    },
    img: {
        type: String,
        required: true,
        validate: {
            validator: (value) => validator.isURL(value),
            message: "Invalid URL for image!"
        }
    },
})

export const Slider = mongoose.model("Slider", sliderSchema)

