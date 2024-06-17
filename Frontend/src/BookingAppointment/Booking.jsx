import React, { useContext } from 'react';
import './Booking.css';
import { ContextCreateApi } from '../Context/ContextApi';

function Doctor_data() {
  const { appointData, email, deleteAppointment } = useContext(ContextCreateApi);
  const filter_Data = appointData.filter((item) => item.email === email)
  const deleteClickHandler=(id)=>{
    deleteAppointment(id)
    window.location.reload();
  }
  return (
    <div className="doctor-container">
      <h1>Doctor Details</h1>
      <div className="doctor-list">
        {filter_Data.map((doctor) => (
          <div className="doctor-card" key={doctor.id}>
            <div className="doctor-card-content">
              <img src={doctor.img} alt={doctor.name} className="doctor-img" />
              <div className="doctor-info">
                <h2>{doctor.name}</h2>
                <p>{doctor.experiences}</p>
                <button className="appointment-button" onClick={()=>deleteClickHandler(doctor._id)}>cancel Appointment</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctor_data;