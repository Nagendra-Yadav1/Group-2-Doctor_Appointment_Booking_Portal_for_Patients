import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="nav bg-dark p-2 d-flex justify-content-between align-items-center">
            <Link to="/" className="left" style={{ textDecoration: "none", color: "white" }}>
                <h2>Hospital App</h2>
            </Link>
            <div className="right d-flex align-items-center">
                <Link to="/" className="btn btn-info mx-2">
                    Home
                </Link>
                <Link to="/profile" className="btn btn-warning mx-2">
                    Profile
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
                <Link to="/appointment" className="btn btn-primary mx-2">
                Appointment
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
