import React, { useEffect, useState, } from 'react';
import { ContextCreateApi } from './ContextApi';
import { toast, Bounce } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function ContextProvider({ children }) {
    const url = "http://localhost:3000/Hospital";
    const [slider, setSliderData] = useState([]);
    const [hospitalSlider, setHospitalSlider] = useState([]);
    const [name, setName] = useState(localStorage.getItem("name"))
    const [doctorData, setDoctorData] = useState([])
    const [token, setToken] = useState("")
    const navigate = useNavigate()
    useEffect(() => {
        const fetchHomeData = async () => {
            try {
                const response = await axios.get(`${url}/sliders`, {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true
                });
                setSliderData(response.data.sliders);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        const fetchHospitalData = async () => {
            try {

                const HomeData = await axios.get(`${url}/homesliders`, {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true
                })
                setHospitalSlider(HomeData.data.sliders)


            }
            catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        const fetchallDoctorData = async () => {

            try {

                const getAllDoctorData = await axios.get(`${url}/doctors`, {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true
                })

                setDoctorData(getAllDoctorData.data.doctors)

            }
            catch (error) {
                console.error("Error fetching data:", error);
            }
        }


        fetchallDoctorData();
        fetchHomeData();
        fetchHospitalData();
    }, [url, name]);


    const SendMessage = async (firstName, lastName, email, phone, message) => {
        try {
            const messageData = await axios.post(`${url}/send`, {
                firstName,
                lastName,
                email,
                phone,
                message

            }, {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json"
                }
            });
            toast.success(messageData.data.message, {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });

        } catch (error) {
            console.log("Error fetching data:", error);
            toast.warn("Data Insertion Failed", {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });

        }
    };


    const signup = async (name, email, password, role) => {
        try {

            const responce = await axios.post(`${url}/signup`, { name, email, password, role }, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })

            toast.success(responce.data.message, {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });

            setTimeout(() => {
                if (responce.data.role === "doctor") {
                    localStorage.setItem("name", responce.data.name)
                    setName(responce.data.name)
                    navigate("/doctorDashboard");
                }
            }, 1500)

        }

        catch (error) {
            console.log("Showing error in fetching data", error)
            toast.warn("Account ia already exists!!", {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }

    }



    const Login = async (email, password) => {
        try {
            const response = await axios.post(`${url}/login`, { email, password }, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })
            const role = response.data.role
            setToken(response.data.token)
            toast.success(response.data.message, {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                progress: undefined,
                theme: "dark",
            });
            setTimeout(() => {
                if (role === "doctor") {
                    navigate("/doctors");
                }
            }, 1500)

        }
        catch (error) {
            console.log("Showing error in fetching data", error)
            toast.warn("Invalid Login!!", {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    }



    const Doctor_data = async (title, experiences, img, phoneNumber, OPD, hospital, fees, details) => {
        try {
            const responce = await axios.post(`${url}/doctordata`, { name, title, experiences, img, phoneNumber, OPD, hospital, fees, details },
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true
                })
            toast.success(responce.data.message, {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });

            setTimeout(() => {
                navigate("/")
            }, 1500)

        }

        catch (error) {
            console.log("Showing error in fetching data", error)
            toast.warn("Account ia already exists!!", {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    }




    return (
        <ContextCreateApi.Provider value={{ slider, hospitalSlider, SendMessage, signup, Login, Doctor_data, doctorData }}>
            {children}
        </ContextCreateApi.Provider>
    );
}

export default ContextProvider;
