import mongoose from "mongoose";
import validator from "validator";
const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [3, "Name must contain at least 3 characters!"]
  },
  title: {
    type: String,
    required: true,
    minLength: [3, "Title must contain at least 3 characters!"]
  },
  experiences: {
    type: String,
    required: true,
    minLength: [3, "Experiences must contain at least 3 characters!"]
  },
  img: {
    type: String,
    required: true,
    validate: {
      validator: (value) => validator.isURL(value),
      message: "Invalid URL for image!"
    }
  },
  phoneNumber: {
    type: String,
    required: true,
    validate: {
      validator: (value) => /^\d{10}$/.test(value),
      message: "Phone number must contain exactly 10 digits!"
    }
  },
  OPD: {
    type: String,
    required: true,
    minLength: [3, "OPD must contain at least 3 characters!"]
  },
  hospital: {
    type: String,
    required: true,
    minLength: [3, "Hospital must contain at least 3 characters!"]
  },
  fees: {
    type: Number,
    required: true,
    min: [0, "Fees must be a positive number!"]
  },
  email: {
    type: String,
    required: [true, "Email Is Required!"],
    validate: [validator.isEmail, "Provide A Valid Email!"],
  },
  details: {
    type: String,
    minLength: [3, "Details must contain at least 3 characters!"],
    required: false
  }
});

export const Doctor = mongoose.model("Doctor", doctorSchema);
