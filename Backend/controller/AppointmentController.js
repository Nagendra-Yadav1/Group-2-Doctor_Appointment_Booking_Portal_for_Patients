import { Appointment } from "../models/AppointmentModel.js";

export const createAppointment = async (req, res) => {
    const { time, details, email, img, name, experiences, Email } = req.body;

    if (!time || !details || !email || !img || !name || !experiences || !Email) {
        return res.status(400).json({ success: false, message: "Please fill in all fields!" });
    }

    try {
        let appointment = await Appointment.findOne({ time });
        if (appointment) {
            return res.status(409).json({ success: false, message: "This time is already taken" });
        }

        const data = await Appointment.create({ time, details, email, img, name, experiences, Email });
        res.status(201).json({
            success: true,
            message: "Appointment created successfully!",
            data: data
        });
    } catch (error) {
        console.log(error)
    }

};


export const getAppointment = async (req, res) => {
    const messages = await Appointment.find();
    res.status(200).json({
        success: true,
        messages,
    });
}




export const deleteAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndDelete(req.params.id);
        if (!appointment) {
            return res.status(404).send('Appointment not found');
        }
        res.status(200).send('Appointment deleted successfully');
    }

    catch (error) {
        res.status(500).send('Server error');
    }
}
