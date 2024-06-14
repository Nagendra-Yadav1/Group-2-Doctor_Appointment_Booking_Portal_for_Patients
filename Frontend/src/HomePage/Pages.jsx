import React from 'react';

function Pages() {
    return (
        <div className='h-[90vh] bg-white  flex items-center justify-around shadow-lg' >
            <div className="w-[40%] px-6 ">
                <h1 className="text-black text-4xl font-bold mb-4">
                    Your New Smile Starts Here
                </h1>
                <p className=" text-slate-600 text-xl font-bold mb-6">
                    Oral health is a key indicator of overall health, well-being, and quality of life. It encompasses a range of diseases and conditions that include dental caries, Periodontal disease, Tooth loss, Oral cancer, Oral manifestations of HIV infection, Oro-dental trauma, Noma and birth defects such as cleft lip and palate.
                </p>
                <button className="l bg-teal-500  font-bold py-3 px-4 rounded shadow">
                    GET APPOINTMENT
                </button>
            </div>
            <div className='w-[45%]'>
                <img src="https://doctors-portal-visit.web.app/static/media/Mask%20Group%201.f112c368.png" alt="Dentist smiling at a patient" />
            </div>
        </div>
    );
}

export default Pages;








