import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { Slider } from "../models/slider.js";

export const sliderData = catchAsyncErrors(async (req, res, next) => {
    const { name, title, img } = req.body;
    if (!name || !title || !img) {
        return next(new ErrorHandler("Please fill out the entire form!", 400));
    }
    await Slider.create({ name, title, img });
    res.status(201).json({
        success: true,
        message: "Slider entry created successfully!",
    });
});


export const getsliderdata = catchAsyncErrors(async (req, res, next) => {
    const sliders = await Slider.find();
    res.status(200).json({
        success: true,
        sliders,
    });
});
