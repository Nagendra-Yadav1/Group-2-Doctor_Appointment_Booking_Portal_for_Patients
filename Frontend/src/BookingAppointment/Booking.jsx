import React, { useContext } from 'react';
import { ContextCreateApi } from '../Context/ContextApi';

function Doctor_data() {
  const { appointData, deleteAppointment, email } = useContext(ContextCreateApi);

  const filter_Data = appointData.filter((item) => item.email === email);


  const deleteClickHandler = (id) => {
    deleteAppointment(id);
    window.location.reload();
  };


  const formatDateTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    const date = dateTime.toLocaleDateString();
    const time = dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return { date, time };
  };

  return (
    <div className="doctor-container bg-gray-100 py-8 px-4">
      {filter_Data.map((appointment) => (
        <div className="appointment-card bg-white shadow-md rounded p-4 mb-4 flex items-center" key={appointment._id}>
          <div className="patient-initial-circle bg-blue-500 text-white rounded-full flex items-center justify-center w-24 h-24 mr-4">
            <img src={appointment.img} alt={appointment.name} className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="appointment-card-content flex-grow">
            <h3 className="text-lg font-semibold">Doctor: {appointment.name}</h3>
            <p className="text-gray-600">Experience: {appointment.experiences}</p>
            <p className="text-gray-600">Details: {appointment.details}</p>
            <p className="text-gray-600">Date: {formatDateTime(appointment.time).date}</p>
            <p className="text-gray-600">Time: {formatDateTime(appointment.time).time}</p>
          </div>
          <button
            className="cancel-button ml-auto bg-red-500 text-white py-1 px-4 rounded"
            onClick={() => deleteClickHandler(appointment._id)}
          >
            Cancel Appointment
          </button>
        </div>
      ))}
    </div>
  );
}

export default Doctor_data;
