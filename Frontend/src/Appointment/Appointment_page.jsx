import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Appointment_page.css"


const AppointmentPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    treatment: '',
    doctor: '',
    time: '',
    details: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    if (isValidStep()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const resetForm = () => {
    setFormData({
      treatment: '',
      doctor: '',
      time: '',
      details: '',
    });
    setStep(1);
  };

  const isValidStep = () => {
    switch (step) {
      case 1:
        return formData.treatment && formData.doctor;
      case 2:
        return formData.time && !isWeekend(formData.time);
      case 3:
        return formData.details;
      default:
        return true;
    }
  };

  const isWeekend = (datetime) => {
    const date = new Date(datetime);
    const day = date.getUTCDay();
    return day === 6 || day === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidStep()) {
      Toastify({
        text: "Appointment booked successfully!",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "#4caf50",
      }).showToast();
      resetForm();
    }
  };


  const getCurrentDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  return (
    <>
      <ToastContainer />
      <div className='doctorPortal'>
        <div className='doctorHeading'>
          <h1>Book Appointment</h1>
          <div className='doctorTitle'>
            <ul>
              <li>Service</li>
              <li>Time</li>
              <li>Details</li>
              <li>Done</li>
            </ul>
          </div>
          <form className='section' onSubmit={handleSubmit}>
            {step === 1 && (
              <div className='form'>
                <label>Please Select Service</label>
                <div>
                  <select
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Treatment</option>
                    <option value="General Checkup">General Checkup</option>
                    <option value="Dental Cleaning">Dental Cleaning</option>
                    <option value="Eye Examination">Eye Examination</option>
                    <option value="Therapy Session">Therapy Session</option>
                  </select>
                  <br />
                  <select
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Doctor</option>
                    <option value="Dr. Smith">Dr. Smith</option>
                    <option value="Dr. Johnson">Dr. Johnson</option>
                    <option value="Dr. Williams">Dr. Williams</option>
                    <option value="Dr. Brown">Dr. Brown</option>
                  </select>
                </div>
                <button type="button" onClick={resetForm}>Cancel</button>
                <button type="button" onClick={nextStep}>Next</button>
              </div>
            )}

            {step === 2 && (
              <div className='form'>
                <label>Select Date and Time</label><br />
                <input
                  type="datetime-local"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  min={getCurrentDateTime()}
                  required
                />
                {formData.time && isWeekend(formData.time) && (
                  <p className="error">Appointments cannot be scheduled on weekends. Please select a weekday.</p>
                )}
                <br />
                <button type="button" onClick={prevStep}>Previous</button>
                <button type="button" onClick={nextStep} disabled={isWeekend(formData.time)}>Next</button>
              </div>
            )}

            {step === 3 && (
              <div className='form'>
                <textarea
                  name="details"
                  placeholder="Additional Details"
                  value={formData.details}
                  onChange={handleChange}
                  required
                />
                <br />
                <button type="button" onClick={prevStep}>Previous</button>
                <button type="button" onClick={nextStep}>Next</button>
              </div>
            )}

            {step === 4 && (
              <div className='form'>
                <label>Your appointment details</label>
                <p>Treatment: {formData.treatment}</p>
                <p>Doctor: {formData.doctor}</p>
                <p>Time: {formData.time}</p>
                <p>Details: {formData.details}</p>
                <button type="button" onClick={prevStep}>Previous</button>
                <button type="submit">Submit</button>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default AppointmentPage;