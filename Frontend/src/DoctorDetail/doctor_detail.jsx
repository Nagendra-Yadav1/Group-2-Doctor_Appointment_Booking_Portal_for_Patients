import React, { useContext } from 'react';
import './DoctorDetail.css';
import { ContextCreateApi } from '../Context/ContextApi';
function Doctor_data() {
    const { doctorData } = useContext(ContextCreateApi)
    return (
        <div className="doctor-container">
            <h1>Doctor Details</h1>
            <div className="doctor-list">
                {doctorData.map((doctor) => (
                    <div className="doctor-card" key={doctor.id}>
                        <div className="doctor-card-content">
                            <img src={doctor.img} alt={doctor.name} className="doctor-img" />
                            <div className="doctor-info">
                                <h2>{doctor.name}</h2>
                                <p>{doctor.title}</p>
                                <p>{doctor.experiences}</p>
                                <p>{doctor.phoneNumber}</p>
                                <p>{doctor.OPD}</p>
                                <p>{doctor.hospital}</p>
                                <button className="appointment-button">Book Appointment</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Doctor_data;