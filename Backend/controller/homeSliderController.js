import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { HomeSlider } from "../models/homeSliderModel.js";



export const homesliderData = catchAsyncErrors(async (req, res, next) => {
    const { name, title, img } = req.body;
    if (!name || !title || !img) {
        return next(new ErrorHandler("Please fill out the entire form!", 400));
    }
    await HomeSlider.create({ name, title, img });
    res.status(201).json({
        success: true,
        message: "Home Slider Data created successfully!",
    });
});

export const homegetsliderdata = catchAsyncErrors(async (req, res, next) => {
    const sliders = await HomeSlider.find();
    res.status(200).json({
        success: true,
        sliders,
    });
});
