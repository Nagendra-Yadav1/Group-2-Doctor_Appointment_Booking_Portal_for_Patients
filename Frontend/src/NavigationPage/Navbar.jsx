import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ContextCreateApi } from "../Context/ContextApi";

const Navbar = () => {
    const { email } = useContext(ContextCreateApi);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const firstChar = email ? email.charAt(0).toUpperCase() : "?";

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };


    const clickHandler = () => {
        console.log("My name is Nagendra Yadav")
    }

    return (
        <div className="nav bg-dark p-2 flex justify-between items-center">
            <Link to="/" className="left" style={{ textDecoration: "none", color: "white" }}>
                <h2>Hospital App</h2>
            </Link>
            <div className="right flex items-center">
                <Link to="/" className="btn btn-info mx-2">
                    Home
                </Link>
                <Link to="/doctorDashboard" className="btn btn-danger mx-2">
                    Dashboard
                </Link>
                <Link to="/login" className="btn btn-primary mx-2">
                    Login
                </Link>
                <Link to="/signup" className="btn btn-warning mx-2">
                    Register
                </Link>
                <Link to="/about" className="btn btn-light mx-2">
                    About
                </Link>
                <Link to="/doctors" className="btn btn-primary mx-2">
                    Doctor
                </Link>


                {email && (
                    <div className="relative">
                        <div
                            className="profile-initial bg-orange-200 text-dark mx-3 flex justify-center items-center rounded-full cursor-pointer"
                            style={{ width: "40px", height: "40px", fontSize: "1.5rem" }}
                            onClick={toggleDropdown}
                        >
                            <span className="block">{firstChar}</span>
                        </div>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">

                                <Link to="/my-booking" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                    My Booking
                                </Link>

                                <button
                                    onClick={clickHandler}
                                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
