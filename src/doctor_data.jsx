import React from 'react';
import './DoctorData.css';
import Carousell from './Carousel.jsx'
function Doctor_data() {
    return (

        <div className="doctor-container">

            <h1>Doctor Data</h1>
            <Carousell />
            <div className="card">
                <div className="doctor-row">
                    {/* <div className="doctor-column"> */}
                    <img src="https://img.freepik.com/premium-photo/medical-concept-indian-beautiful-female-doctor-white-coat-with-stethoscope-waist-up-medical-student-woman-hospital-worker-looking-camera-smiling-studio-blue-background_185696-621.jpg" alt="Doctor" />
                    {/* </div> */}
                    <div className="doctor-info">
                        <h2>Dr. Mamta</h2>
                        <h2>Gastroenterology</h2>
                        <p>12 years Experience</p>
                        <p>0114299999</p>
                        <p>Tue, Fri 09:00AM - 07:00PM</p>
                        <p>Medical & Interventional Gastroenterology & Hepatology</p>
                        <p>Rating: 2</p>
                        <p>Dr Baswaraj Biradar had done BDS, MDS (prosthodontics and Implantology)

                            Dr Baswaraj, graduated as the Best outgoing student of the year 1998,<br />
                            during his Bachelors at M S Ramaiah Dental College. He secured 20th Rank in the Karnataka state entrance examination. <br />Subsequently, pursued his Masters from premier institute, A B Shetty Memorial He has 13 years of experience as a dental teaching Faculty. <br />He held various positions as a Professor, Postgraduate guide and head of the prosthodontics department in various <br /> institutions such as MS Ramaiah Dental college, Vydehi Dental College, Oxford Dental college, Subbaiah institute of Dental Sciences.

                        </p>
                        <h1>Fees: 500</h1>
                        <button className="appointment-button">Book Appointment</button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Doctor_data;