import { Doctor } from "../models/doctormodel.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";

export const createDoctor = catchAsyncErrors(async (req, res, next) => {
    const { name, title, experiences, img, phoneNumber, OPD, hospital, fees, rating, details } = req.body;

    if (!name || !title || !experiences || !img || !phoneNumber || !OPD || !hospital || !fees  || !details ) {
        return next(new ErrorHandler("Please fill out the entire form!", 400));
    }

    const doctor = new Doctor({
        name,
        title,
        experiences,
        img,
        phoneNumber,
        OPD,
        hospital,
        fees,
        details
    });

    const validationError = doctor.validateSync();
    if (validationError) {
        return next(new ErrorHandler(validationError.message, 400));
    }

    await doctor.save();
    
    res.status(201).json({
        success: true,
        message: "Doctor record created successfully!",
        doctor
    });
});

export const getDoctorData = catchAsyncErrors(async (req, res, next) => {
    const doctors = await Doctor.find();
    res.status(200).json({
        success: true,
        doctors,
    });
});
