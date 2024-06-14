import React from 'react'

function ManagementClinic() {
    return (
        <>
            <div className='h-[90vh]   flex  justify-around items-center' >
                <div className='w-[45%]'>
                    <img src="https://docpulse.com/wp-content/uploads/2024/02/clinic-management-001.jpg" alt="Dentist smiling at a patient" />
                </div>
                <div className="w-[50%] px-6 items-center">
                    <h1 className="text-black text-4xl font-bold mb-4">
                        Medical Practice Management Software
                    </h1>
                    <p className=" text-slate-600 text-xl font-bold mb-6">
                    Adopt our digital healthcare ecosystem for a holistic approach towards patient management. Our patient management system comes with a wide range of features like managing multi-chain facilities centrally, appointment scheduling portals for patients, feedback collection channels, maintaining Electronic Health Records (EHR), tracking pharmacy operations and stocks, LIS for in-house pathology and radiology diagnostics.
                    </p>
                    <button className="l bg-teal-500  font-bold py-3 px-4 rounded shadow">
                        Click Here
                    </button>
                </div>
            </div>
        </>
    )
}

export default ManagementClinic