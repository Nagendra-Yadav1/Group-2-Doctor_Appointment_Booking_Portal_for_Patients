import React from 'react'

function Appointment() {
    return (
        <div className='h-[95vh]   flex  justify-around items-center shadow-lg bg-slate-700 ' >
            <div className="w-[50%] px-6 ">
                <h4 className=" text-cyan-400 text-3xl font-bold mb-4">
                    APPOINTMENT
                </h4>
                <h1 className='text-white font-bold text-5xl'>Make an AppointmentToday
                </h1>
                <br />
                <p className=" text-blue-500 text-xl font-bold mb-6">
                    Cupidatat laborum qui excepteur anim magna occaecat veniam et consequat ad eiusmod et incididunt. Occaecat nisi amet eiusmod elit. Est culpa culpa nisi excepteur duis ad duis mollit.
                </p>
                <button className="l bg-teal-500  font-bold py-3 px-4 rounded shadow">
                    Click Here
                </button>
            </div>

            <div className='w-[45%]'>
                <img src="https://doctors-portal-visit.web.app/static/media/5790-removebg.b7d9c9e6.png" alt="Dentist smiling at a patient" className='mb-10' />
            </div>
        </div>
    )
}

export default Appointment