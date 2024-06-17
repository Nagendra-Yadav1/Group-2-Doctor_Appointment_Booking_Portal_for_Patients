import React, { useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ContextCreateApi } from '../Context/ContextApi';

function DoctorOneData() {
  const { id } = useParams();
  const { doctorData } = useContext(ContextCreateApi);
  const doctor = doctorData.find(doc => doc._id === id);
  const navigate = useNavigate();

  if (!doctor) {
    return <div className="max-w-screen-2xl mx-auto p-4 text-gray-700">Doctor not found</div>;
  }

  const filteredDoctors = doctorData.filter(doc => doc.title === doctor.title);

  const handleBookAppointment = () => {
    navigate('/appointment', { state: { img: doctor.img, name: doctor.name, experiences: doctor.experiences } });
  };

  return (
    <div className="max-w-screen-2xl mx-auto p-4 flex flex-wrap">

      <div className="w-full md:w-3/4 md:pr-8">
        <h1 className="text-3xl font-bold mb-4">Doctor Details</h1>
        <div className="bg-gray-200 shadow-md rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            <img
              className="w-full md:w-96 h-96 object-cover m-4 rounded-lg shadow-lg"
              src={doctor.img}
              alt={doctor.name}
            />

            <div className="p-4 md:flex-1">
              <h2 className="text-2xl font-bold mb-2">{doctor.name}</h2>
              <h3 className="text-xl font-semibold mb-2">{doctor.title}</h3>
              <p className="text-sm text-gray-600 mb-2">Experience: {doctor.experiences}</p>
              <p className="text-sm text-gray-600 mb-2">Phone: {doctor.phoneNumber}</p>
              <p className="text-sm text-gray-600 mb-2">OPD Hours: {doctor.OPD}</p>
              <p className="text-sm text-gray-600 mb-4">{doctor.hospital}</p>
              <p className="text-sm text-gray-600 mb-4">Rating: {doctor.rating}</p>
              <h1 className="text-xl font-bold mb-4">Fees: ${doctor.fees}</h1>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
                onClick={handleBookAppointment}
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <div className="bg-gray-200 shadow-md rounded-lg overflow-hidden p-4">
            <p className="text-sm text-gray-700 mb-4">{doctor.details}</p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/4 mt-8 md:mt-0">
        <h2 className="text-2xl font-bold mb-4">Related Doctors</h2>
        <div className="bg-gray-200 shadow-md rounded-lg overflow-hidden p-4">
          {filteredDoctors.map(doc => (
            <Link key={doc._id} to={`/doctor/${doc._id}`} className="block mb-4 p-4 bg-white shadow-md rounded-lg flex items-center hover:bg-gray-100">
              <img
                className="w-16 h-16 object-cover rounded-full mr-4"
                src={doc.img}
                alt={doc.name}
              />

              <div>
                <h3 className="text-lg font-semibold">{doc.name}</h3>
                <p className="text-sm text-gray-600">{doc.title}</p>
                <p className="text-sm text-gray-600">Experience: {doc.experiences}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DoctorOneData;
