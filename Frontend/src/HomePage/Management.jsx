import React from 'react'

function Management() {
    return (
        <div className='h-[90vh]   flex  justify-around items-center' >
            <div className='w-[45%]'>
                <img src="https://docpulse.com/wp-content/uploads/2024/02/hospital-software0001.jpg" alt="Dentist smiling at a patient" />
            </div>
            <div className="w-[50%] px-6 items-center">
                <h1 className="text-black text-4xl font-bold mb-4">
                    Medical Practice Management Software
                </h1>
                <p className=" text-slate-600 text-xl font-bold mb-6">
                    One-stop solution to manage all the aspects of OPD starting from patient registration to generating digital prescriptions, bills and revenue analysis. Pharmacy and Lab management is also simplified, enabling doctors to view lab reports in the software. Customisable medical case sheets to create electronic medical records (EMR)
                </p>
                <button className="l bg-teal-500  font-bold py-3 px-4 rounded shadow">
                    Click Here
                </button>
            </div>
        </div>
    )
}
export default Management