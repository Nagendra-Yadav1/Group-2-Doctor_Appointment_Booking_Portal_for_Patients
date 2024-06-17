import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Appointment_page.css';
import { ContextCreateApi } from '../Context/ContextApi';
import { useLocation } from 'react-router-dom';

const AppointmentPage = () => {
  const { appointment, email } = useContext(ContextCreateApi)
  const location = useLocation();
  const img = location.state.img;
  const name = location.state.name
  const experiences = location.state.experiences
  const [formData, setFormData] = useState({
    time: '',
    details: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      time: '',
      details: '',
    });
  };


  const isValidForm = () => {
    return formData.time && !isWeekend(formData.time) && formData.details;
  };

  const isWeekend = (datetime) => {
    const date = new Date(datetime);
    const day = date.getUTCDay();
    return day === 6 || day === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidForm()) {

      appointment(formData.time, formData.details, email, img, name, experiences)
      resetForm();

    } else {

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
      <div className='flex'>
        <div className='doctorHeading'>
          <form className='section' onSubmit={handleSubmit}>
            <div className='form'>
              <label className='text-center font-bold text-3xl ml-32 mt-8'>Book Appointment</label><br />
              <input
                id="datetime"
                className='rounded-md  py-3'
                type="datetime-local"
                name="time"
                value={formData.time}
                onChange={handleChange}
                min={getCurrentDateTime()}
                required
              />
              {formData.time && isWeekend(formData.time) && (
                <p className="error rounded-md py-3 border-2">Appointments cannot be scheduled on weekends. Please select a weekday.</p>
              )}
              <br />
              <textarea
                className='rounded-md py-8'
                name="details"
                id="details"
                placeholder="Additional Details"
                value={formData.details}
                onChange={handleChange}
                required
              />
              <br />
              <button type="submit" className="submit-button">Submit</button>
            </div>
          </form>
        </div>
        <div className='w-[38%]  bg-red-400'>
          <img src="https://i.ibb.co/yy8JWTy/pexels-tima-miroshnichenko-5407235.jpg" alt="" className='h-screen ' />
        </div>
      </div>
    </>
  );
};

export default AppointmentPage;
