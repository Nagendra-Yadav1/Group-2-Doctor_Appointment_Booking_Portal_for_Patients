import React from 'react';

function UserSlider() {
    return (
        <div className="h-[500px] flex items-center justify-center bg-gray-100">
            <div className="max-w-5xl mx-auto px-6 lg:flex lg:justify-around lg:items-center">
                <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
                    <h1 className="text-xl lg:text-3xl font-bold text-gray-900 mb-6">
                        Find & Book <span className="text-teal-500">Appointment</span> With Your Favorite <span className="text-teal-500">Doctors</span>
                    </h1>
                    <p className=" text-gray-700 mb-8">
                        One-stop solution to manage all aspects of OPD, from patient registration to generating digital prescriptions, bills, and revenue analysis. Pharmacy and lab management are also simplified, enabling doctors to view lab reports within the software.
                    </p>
                    <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded shadow-lg transition-colors duration-300">
                        Explore Now
                    </button>
                </div>
                <div className="lg:w-1/2">
                    <img src="https://i.ibb.co/yy8JWTy/pexels-tima-miroshnichenko-5407235.jpg" alt="Dentist smiling at a patient" className="rounded-lg shadow-lg" />
                </div>
                
            </div>
        </div>
    );
}

export default UserSlider;
