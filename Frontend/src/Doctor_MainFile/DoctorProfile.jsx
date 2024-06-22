import React, { useContext } from 'react';
import { ContextCreateApi } from '../Context/ContextApi';

function DoctorProfile() {
  const { appointData, email, deleteAppointment, signupData } = useContext(ContextCreateApi);

  const doctorDetails = signupData.find((item) => item.email === email);

  const filteredAppointments = appointData
    .filter((item) => item.Email === email)
    .map((appointment) => {
      const patientDetails = signupData.find((user) => user.email === appointment.email);
      const appointmentDate = new Date(appointment.time);
      const date = appointmentDate.toLocaleDateString();
      const time = appointmentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Extract time
      return {
        ...appointment,
        doctorName: doctorDetails ? doctorDetails.name : 'Unknown Doctor',
        patientName: patientDetails ? patientDetails.name.split(' ')[0] : 'Unknown Patient',
        patientInitial: patientDetails ? patientDetails.name.charAt(0) : 'U',
        date,
        time
      };
    });

  const deleteClickHandler = (id) => {
    deleteAppointment(id);
    window.location.reload();
  };

  return (
    <>
      <h1>{doctorDetails ? `Dr. ${doctorDetails.name}` : 'Doctor Profile'}</h1>
      <div className="doctor-container">
        <div className="appointment-list">
          {filteredAppointments.length > 0 ? (
            filteredAppointments.map((appointment) => (
              <div className="appointment-card bg-white shadow-md rounded p-4 mb-4 flex items-center w-3/3 m-4" key={appointment._id}>
                <div className="patient-initial-circle bg-blue-500 text-white rounded-full flex items-center justify-center w-16 h-16 mr-4 text-2xl">
                  {appointment.patientInitial}
                </div>
                <div className="appointment-card-content flex-grow">
                  <h3 className="text-lg font-semibold">Patient: {appointment.patientName}</h3>
                  <p className="text-gray-600">Date: {appointment.date}</p>
                  <p className="text-gray-600">Time: {appointment.time}</p>
                  <p className="text-gray-600">Detail: {appointment.details}</p>
                </div>
                <button
                  className="cancel-button ml-auto bg-red-500 text-white py-1 px-4 rounded"
                  onClick={() => deleteClickHandler(appointment._id)}
                >
                  Cancel Appointment
                </button>
              </div>
            ))
          ) : (
            <p>No appointments found.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default DoctorProfile;
