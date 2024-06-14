import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContextCreateApi } from '../Context/ContextApi';


const Login = () => {
    const { Login } = useContext(ContextCreateApi)
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });


    const emailChangeHandler = (event) => {
        setFormData({ ...formData, email: event.target.value })
    }


    const passwordChangeHandler = (event) => {
        setFormData({ ...formData, password: event.target.value })
    }

    const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValidEmail(formData.email)) {
            toast.warn('Invalid Email', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }
        Login(formData.email, formData.password)
        setFormData({
            email: "",
            password: ""
        })
    };

    return (
        <>
            <ToastContainer />
            <div className="min-h-screen flex items-center justify-center bg-black">
                <div className=" p-8 rounded-lg shadow-md w-full max-w-md border-2 border-blue-500 ">
                    <h2 className="text-3xl font-bold mb-6 text-center text-white">Login</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-white">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={emailChangeHandler}
                                className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-white"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={passwordChangeHandler}
                                className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-white"
                                required
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
export default Login;
