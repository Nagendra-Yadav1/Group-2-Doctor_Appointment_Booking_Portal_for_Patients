import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContextCreateApi } from '../Context/ContextApi';
import { useLocation } from 'react-router-dom';

const AppointmentPage = () => {
  const { appointment, email } = useContext(ContextCreateApi);
  const location = useLocation();
  const img = location.state.img;
  const name = location.state.name;
  const experiences = location.state.experiences;
  const Email = location.state.Email;
  console.log(Email);

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
      appointment(formData.time, formData.details, email, img, name, experiences, Email);
      resetForm();
    } else {
      toast.error('Please fill out all fields correctly.', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
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
      <div className="flex flex-col lg:flex-row">
        <div className="bg-gradient-to-r from-teal-400 to-teal-600 w-full lg:w-2/3 h-screen p-8 flex items-center justify-center">
          <form className="w-full lg:w-3/4 bg-white rounded-lg p-14 shadow-lg" onSubmit={handleSubmit}>
            <h2 className="text-center text-3xl font-bold mb-8">Book Appointment</h2>
            <input
              id="datetime"
              className="w-full p-3 mb-4 border border-blue-600 rounded"
              type="datetime-local"
              name="time"
              value={formData.time}
              onChange={handleChange}
              min={getCurrentDateTime()}
              required
            />
            {formData.time && isWeekend(formData.time) && (
              <p className="text-red-600 mb-4">Appointments cannot be scheduled on weekends. Please select a weekday.</p>
            )}
            <textarea
              className="w-full p-3 mb-4 border border-blue-600 rounded"
              name="details"
              id="details"
              placeholder="Additional Details"
              value={formData.details}
              onChange={handleChange}
              required
            />
            <button type="submit" className="w-full bg-green-600 text-white font-bold p-4 rounded-lg hover:bg-green-700 transition">
              Submit
            </button>
          </form>
        </div>
        <div className="w-full lg:w-1/2 h-screen bg-cover bg-center rounded-md" style={{ backgroundImage: 'url(https://i.ibb.co/yy8JWTy/pexels-tima-miroshnichenko-5407235.jpg)' }}>
        </div>
      </div>
    </>
  );
};


export default AppointmentPage;


