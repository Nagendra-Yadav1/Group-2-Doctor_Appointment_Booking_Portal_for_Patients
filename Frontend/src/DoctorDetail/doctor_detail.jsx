import React, { useContext, useState } from 'react';
import { ContextCreateApi } from '../Context/ContextApi';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth, faHeartbeat, faBone, faBrain, faDeaf, faUserMd } from '@fortawesome/free-solid-svg-icons';

function Doctor_data() {
    const { doctorData } = useContext(ContextCreateApi);
    const [filterData, setFilterData] = useState([])
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const clickHanlder = (id) => {
        navigate(`/doctor/${id}`)
    }

    const searchChangeHanlder = (event) => {
        setSearch(event.target.value)
    }
    const clickHandler = () => {
        const filterData = doctorData.filter((item) => item.title === search)
        setSearch("")
        setFilterData(filterData)
    }

    const onClickHanlder = (id) => {
        const filterData = doctorData.filter((item) => item.title ===id)
        setFilterData(filterData)
    }
    return (
        <>
            <div className="h-[300px] flex flex-col items-center justify-center bg-gray-100">
                <div className="p-5 max-w-screen-lg w-full">
                    <div className="mb-8">
                        <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 text-center">Search Doctors</h1>
                        <p className="text-gray-600 text-center mt-2">Search Your Doctors and Book Appointment in one click</p>
                    </div>
                    <div className="mb-8 flex items-center justify-center">
                        <input value={search} className="border border-gray-300 rounded-l px-3 py-2 focus:outline-none focus:border-blue-500 flex-1 text-sm md:text-base max-w-[200px] mr-4" placeholder="Search" onChange={searchChangeHanlder} />
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none" onClick={clickHandler}>Search</button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        <div className="flex flex-col items-center bg-white p-2 md:p-4 rounded-lg shadow-md w-full cursor-pointer" onClick={() => onClickHanlder("Dentist")}>
                            <FontAwesomeIcon icon={faTooth} className="text-3xl md:text-4xl text-blue-500 mb-2" />
                            <p className="text-sm md:text-base">Dentist</p>
                        </div>
                        <div className="flex flex-col items-center bg-white p-2 md:p-4 rounded-lg shadow-md w-full cursor-pointer" onClick={() => onClickHanlder("Cardiologist")}>
                            <FontAwesomeIcon icon={faHeartbeat} className="text-3xl md:text-4xl text-blue-500 mb-2" />
                            <p className="text-sm md:text-base">Cardiologist</p>
                        </div>
                        <div className="flex flex-col items-center bg-white p-2 md:p-4 rounded-lg shadow-md w-full cursor-pointer" onClick={() => onClickHanlder("Orthopedic")}>
                            <FontAwesomeIcon icon={faBone} className="text-3xl md:text-4xl text-blue-500 mb-2" />
                            <p className="text-sm md:text-base">Orthopedic</p>
                        </div>
                        <div className="flex flex-col items-center bg-white p-2 md:p-4 rounded-lg shadow-md w-full cursor-pointer" onClick={() => onClickHanlder("Neurologist")}>
                            <FontAwesomeIcon icon={faBrain} className="text-3xl md:text-4xl text-blue-500 mb-2" />
                            <p className="text-sm md:text-base">Neurologist</p>
                        </div>
                        <div className="flex flex-col items-center bg-white p-2 md:p-4 rounded-lg shadow-md w-full cursor-pointer" onClick={() => onClickHanlder("Otology")}>
                            <FontAwesomeIcon icon={faDeaf} className="text-3xl md:text-4xl text-blue-500 mb-2" />
                            <p className="text-sm md:text-base">Otology</p>
                        </div>
                        <div className="flex flex-col items-center bg-white p-2 md:p-4 rounded-lg shadow-md w-full cursor-pointer" onClick={() => onClickHanlder("Gastroenterology")}>
                            <FontAwesomeIcon icon={faUserMd} className="text-3xl md:text-4xl text-blue-500 mb-2" />
                            <p className="text-sm md:text-base">Gastroenterology</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-screen-2xl mx-auto p-4">
                <h1 className="text-3xl font-bold mb-6">Popular Doctors</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filterData.length > 0 ?

                        filterData.map((doctor) => (
                            <div className="bg-white shadow-md rounded-lg overflow-hidden" key={doctor.id}>
                                <img
                                    src={doctor.img}
                                    alt={doctor.name}
                                    className="w-full h-64 object-cover"
                                />
                                <div className=" text-center p-4">
                                    <h2 className="text-xl font-bold mb-2">{doctor.name}</h2>
                                    <p className="text-sm text-gray-600 mb-2">{doctor.title}</p>
                                    <p className="text-sm text-gray-600 mb-4">{doctor.experiences}</p>
                                    <button className="bg-blue-500 text-white px-4 py-2 w-full rounded hover:bg-blue-700 transition-colors" onClick={() => clickHanlder(doctor._id)}>
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        ))

                        :
                        doctorData.map((doctor) => (
                            <div className="bg-white shadow-md rounded-lg overflow-hidden" key={doctor.id}>
                                <img
                                    src={doctor.img}
                                    alt={doctor.name}
                                    className="w-full h-64 object-cover"
                                />
                                <div className=" text-center p-4">
                                    <h2 className="text-xl font-bold mb-2">{doctor.name}</h2>
                                    <p className="text-sm text-gray-600 mb-2">{doctor.title}</p>
                                    <p className="text-sm text-gray-600 mb-4">{doctor.experiences}</p>
                                    <button className="bg-blue-500 text-white px-4 py-2 w-full rounded hover:bg-blue-700 transition-colors" onClick={() => clickHanlder(doctor._id)}>
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </>

    );
}


export default Doctor_data;
