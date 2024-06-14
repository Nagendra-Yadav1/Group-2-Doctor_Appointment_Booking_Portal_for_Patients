import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "First Name Is Required!"],
        minlength: [3, "First Name Must Contain At Least 3 Characters!"],
    },

    email: {
        type: String,
        required: [true, "Email Is Required!"],
        validate: [validator.isEmail, "Provide A Valid Email!"],
    },
    password: {
        type: String,
        required: [true, "Password Is Required!"],
        minlength: [8, "Password Must Contain At Least 8 Characters!"],
    },
    role:{
        type:String,
        required:[true,"Role Is Required!"],
        minlength: [3, "Role Name Must Contain At Least 3 Characters!"],
    }
});
export const User = mongoose.model("registers", userSchema);








