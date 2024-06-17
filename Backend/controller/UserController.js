import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { User } from '../models/userSchema.js'

export const Register = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password, role } = req.body;

    try {
        if (!name || !email || !password || !role) {
            return next(new ErrorHandler("Please fill in all fields!", 400));
        }

        let user = await User.findOne({ email });
        if (user) {
            return next(new ErrorHandler("User already exists", 409));
        }

        const hashPass = await bcrypt.hash(password, 10);
        if (!hashPass) {
            return next(new ErrorHandler("Error hashing password", 500));
        }

        user = await User.create({ name, email, password: hashPass, role });
        console.log(user)
        res.status(201).json({
            success: true,
            message: "User registered successfully!",
            role:role,
            name:name,
            email:email
        });
    } catch (error) {
        next(error);
    }
});





export const Login = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new ErrorHandler("Please provide both email and password", 400));
    }

    try {
        let user = await User.findOne({ email });
        if (!user) {
            return next(new ErrorHandler("User does not exist", 404));
        }

        if (typeof user.password !== 'string') {
            return next(new ErrorHandler("Password in database is not a valid string", 500));
        }


        const hashedPassword = user.password.toString();

        const validPass = await bcrypt.compare(password, hashedPassword);
        if (!validPass) {
            return next(new ErrorHandler("Invalid credentials", 401));
        }

        const token = jwt.sign({ userId: user._id }, "!@#$%^&*()", {
            expiresIn: '1d'
        });
        const role = user.role
        res.status(200).json({
            success: true,
            email:email,
            message: `Welcome ${user.name}`,
            token,
            role

        });

    } catch (error) {
        next(new ErrorHandler(error.message || "Internal Server Error", 500));
    }
});




export const profile = async (req, res) => {
    res.json({ user: req.user })
}