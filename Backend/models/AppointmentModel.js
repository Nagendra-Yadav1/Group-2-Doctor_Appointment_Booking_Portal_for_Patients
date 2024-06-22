import mongoose from "mongoose";
import validator from "validator";

const appointmentSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid email!"],
    },
    Email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid email!"],
    },
    img: {
        type: String,
        required: true,
        validate: [validator.isURL, "Provide a valid URL!"],
    },
    name: {
        type: String,
        required: true,
        minLength: [3, "Name must contain at least 3 characters!"],
    },
    time: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
        minLength: [3, "Details must contain at least 3 characters!"],
    },
    experiences: {
        type: String,
        required: false,
        minLength: [3, "Experiences must contain at least 3 characters!"],
    },
});

export const Appointment = mongoose.model("Appointment", appointmentSchema);
