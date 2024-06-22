import React, { useEffect, useState, } from 'react';
import { ContextCreateApi } from './ContextApi';
import { toast, Bounce } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function ContextProvider({ children }) {
    const url = "http://localhost:3000/Hospital";
    const [slider, setSliderData] = useState([]);
    const [hospitalSlider, setHospitalSlider] = useState([]);
    const [name, setName] = useState(localStorage.getItem("name"));
    const [doctorData, setDoctorData] = useState([]);
    const [email, setEmail] = useState(localStorage.getItem("email"));
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [appointData, setAppointmentData] = useState([]);
    const [isAuthenticated, setisAuthenticated] = useState(false);
    const [signupData, setSignupData] = useState([]);
    const [check, setCheck] = useState(false);
    const navigate = useNavigate();
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


        const fetchAppointmentData = async () => {
            try {

                const getAllAppointmentData = await axios.get(`${url}/appointmentdata`, {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true
                })
                setAppointmentData(getAllAppointmentData.data.messages)

            }
            catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        const fetchSignupData = async () => {
            try {

                const getAllsignupdata = await axios.get(`${url}/signupdata`, {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true
                })
                setSignupData(getAllsignupdata.data.messages)

            }
            catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchallDoctorData();
        fetchHomeData();
        fetchHospitalData();
        fetchAppointmentData();
        fetchSignupData()
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
            });

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
                localStorage.setItem("name", responce.data.name)
                setName(responce.data.name);
                navigate("/login");

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
            setToken(response.data.token);
            setisAuthenticated(true)
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
                localStorage.setItem("email", response.data.email)
                setEmail(response.data.email);
                const Email = response.data.email
                const doctor = doctorData.find(doc => doc.email === Email);
                console.log(Email)
                if (doctor && doctor.email === Email) {
                    console.log(doctor.img)
                    navigate("/")
                    setCheck(true)

                }
                else if (role === "patient") {
                    navigate("/doctors")
                    setCheck(false)
                }
                else {
                    navigate("/doctorDashboard")
                    setCheck(true)
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


    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token)
        }
        const tokenFromLocalStorage = localStorage.getItem("token", token)
        if (tokenFromLocalStorage) {
            setToken(tokenFromLocalStorage);
            setisAuthenticated(true)
        }
    }, [token]);


    const logOut = () => {
        localStorage.removeItem("token", token)
        setToken("")
        setisAuthenticated(false);
        setCheck(false)
    }

    const Doctor_data = async (title, experiences, img, phoneNumber, OPD, hospital, fees, details, email) => {
        try {
            const responce = await axios.post(`${url}/doctordata`, { name, title, experiences, img, phoneNumber, OPD, hospital, fees, details, email },
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


    const appointment = async (time, details, email, img, name, experiences, Email) => {
        console.log(time, details, email, img, name, experiences);
        try {
            const responce = await axios.post(`${url}/appointment`, { time, details, email, img, name, experiences, Email },
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true
                });
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

        }
        catch (error) {
            console.log("Showing error in fetching data", error)
        }
    }


    const deleteAppointment = async (id) => {
        try {
            const response = await axios.delete(`${url}/appointments/${id}`, { method: "DELETE" });
            console.log(response)
        }
        catch (error) {
            console.log("Showing error in fetching data", error)
        }
    }


    return (
        <ContextCreateApi.Provider value={
            {
                email,
                slider,
                hospitalSlider,
                SendMessage,
                signup,
                Login,
                Doctor_data,
                doctorData,
                appointment,
                appointData,
                deleteAppointment,
                logOut,
                isAuthenticated,
                setisAuthenticated,
                check,
                signupData
            }}>
            {children}
        </ContextCreateApi.Provider>
    );
}

export default ContextProvider;


