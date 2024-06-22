// import React, { useContext, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { FaHome, FaInfoCircle, FaSignInAlt, FaUserPlus, FaStethoscope, FaBars, FaTimes } from "react-icons/fa";
// import { ContextCreateApi } from "../Context/ContextApi";

// const Navbar = () => {
//     const { email, isAuthenticated, logOut, check } = useContext(ContextCreateApi);
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     const firstChar = email ? email.charAt(0).toUpperCase() : "?";
//     localStorage.setItem("check", check)
//     console.log()

//     const toggleDropdown = () => {
//         setIsDropdownOpen(!isDropdownOpen);
//     };

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);

//     };

//     const clickHandler = () => {
//         console.log("Logout clicked");
//         logOut();
//     };

//     return (
//         <div className="nav bg-slate-100 p-2 flex justify-between items-center">
//             <Link to="/" className="left" style={{ textDecoration: "none", color: "black" }}>
//                 <h2>Hospital App</h2>
//             </Link>
//             <div className="right hidden md:flex items-center">
//                 {isAuthenticated ? (
//                     <>
//                         <Link to="/" className="btn btn-light mx-2 flex items-center shadow-lg">
//                             <FaHome className="mr-1" /> Home
//                         </Link>

//                         {check === false ? (<Link to="/doctors" className="btn btn-light mx-2 flex items-center shadow-lg">
//                             <FaStethoscope className="mr-1" /> Doctor
//                         </Link>) : (<Link to="/profile" className="btn btn-light mx-2 flex items-center shadow-lg">
//                             <FaStethoscope className="mr-1" /> Appointment
//                         </Link>)
//                         }
//                         <Link to="/about" className="btn btn-light mx-2 flex items-center shadow-lg">
//                             <FaInfoCircle className="mr-1" /> About
//                         </Link>

//                         {email && (
//                             <div className="relative">
//                                 <div
//                                     className="profile-initial bg-orange-200 text-dark mx-3 flex justify-center items-center rounded-full cursor-pointer"
//                                     style={{ width: "40px", height: "40px", fontSize: "1.5rem" }}
//                                     onClick={toggleDropdown}
//                                 >
//                                     <span className="block">{firstChar}</span>
//                                 </div>
//                                 {isDropdownOpen && (
//                                     <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
//                                         <Link to="/my-booking" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
//                                             My Booking
//                                         </Link>
//                                         <button
//                                             onClick={clickHandler}
//                                             className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
//                                         >
//                                             Logout
//                                         </button>
//                                     </div>
//                                 )}
//                             </div>
//                         )}
//                     </>
//                 ) : (
//                     <>
//                         <Link to="/" className="btn btn-light mx-2 flex items-center shadow-lg">
//                             <FaHome className="mr-1" /> Home
//                         </Link>
//                         <Link to="/login" className="btn btn-light mx-2 flex items-center shadow-lg">
//                             <FaSignInAlt className="mr-1" /> Login
//                         </Link>
//                         <Link to="/signup" className="btn btn-light mx-2 flex items-center shadow-lg">
//                             <FaUserPlus className="mr-1" /> Register
//                         </Link>
//                     </>
//                 )}
//             </div>


//             <div className="md:hidden flex items-center">
//                 <button onClick={toggleSidebar} className="text-2xl">
//                     <FaBars />
//                 </button>
//             </div>

//             {isSidebarOpen && (
//                 <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex justify-end">
//                     <div className="w-64 bg-white h-full shadow-lg p-4">
//                         <button onClick={toggleSidebar} className="text-2xl mb-4">
//                             <FaTimes />
//                         </button>
//                         <nav className="flex flex-col">
//                             {isAuthenticated ? (
//                                 <>
//                                     <Link to="/" className="btn btn-light mx-2 flex items-center shadow-lg">
//                                         <FaHome className="mr-1" /> Home
//                                     </Link>


//                                     {localStorage.getItem("check") ? (<Link to="/profile" className="btn btn-light mx-2 flex items-center shadow-lg">
//                                         <FaStethoscope className="mr-1" /> Appointment
//                                     </Link>) : (<Link to="/doctors" className="btn btn-light mx-2 flex items-center shadow-lg">
//                                         <FaStethoscope className="mr-1" /> Doctor
//                                     </Link>)
//                                     }

//                                     <Link to="/about" className="btn btn-light mx-2 flex items-center shadow-lg">
//                                         <FaInfoCircle className="mr-1" /> About
//                                     </Link>
//                                     {email && (
//                                         <div className="relative">
//                                             <div
//                                                 className="profile-initial bg-orange-200 text-dark mx-3 flex justify-center items-center rounded-full cursor-pointer"
//                                                 style={{ width: "40px", height: "40px", fontSize: "1.5rem" }}
//                                                 onClick={toggleDropdown}
//                                             >
//                                                 <span className="block">{firstChar}</span>
//                                             </div>
//                                             {isDropdownOpen && (
//                                                 <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
//                                                     <Link to="/my-booking" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
//                                                         My Booking
//                                                     </Link>
//                                                     <button
//                                                         onClick={clickHandler}
//                                                         className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
//                                                     >
//                                                         Logout
//                                                     </button>
//                                                 </div>
//                                             )}
//                                         </div>
//                                     )}
//                                 </>
//                             ) : (
//                                 <>
//                                     <Link to="/" className="btn btn-light mx-2 flex items-center shadow-lg">
//                                         <FaHome className="mr-1" /> Home
//                                     </Link>
//                                     <Link to="/login" className="btn btn-light mx-2 flex items-center shadow-lg">
//                                         <FaSignInAlt className="mr-1" /> Login
//                                     </Link>
//                                     <Link to="/signup" className="btn btn-light mx-2 flex items-center shadow-lg">
//                                         <FaUserPlus className="mr-1" /> Register
//                                     </Link>
//                                 </>
//                             )}

//                         </nav>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Navbar;









import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaSignInAlt,
  FaUserPlus,
  FaStethoscope,
  FaBars,
  FaTimes
} from "react-icons/fa";
import { ContextCreateApi } from "../Context/ContextApi";

const Navbar = () => {
  const { email, isAuthenticated, logOut, check } = useContext(ContextCreateApi);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [storedCheck, setStoredCheck] = useState(false);

  useEffect(() => {
    localStorage.setItem("check", check);
    setStoredCheck(check);
  }, [check,email]);

  const isValidImageUrl = (url) => {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const clickHandler = () => {
    logOut();
  };

  return (
    <div className="nav bg-slate-100 p-2 flex justify-between items-center">
      <Link to="/" className="left" style={{ textDecoration: "none", color: "black" }}>
        <h2>Hospital App</h2>
      </Link>
      <div className="right hidden md:flex items-center">
        {isAuthenticated ? (
          <>
            <Link to="/" className="btn btn-light mx-2 flex items-center shadow-lg">
              <FaHome className="mr-1" /> Home
            </Link>

            {storedCheck ? (
              <Link to="/profile" className="btn btn-light mx-2 flex items-center shadow-lg">
                <FaStethoscope className="mr-1" /> Appointment
              </Link>
            ) : (
              <Link to="/doctors" className="btn btn-light mx-2 flex items-center shadow-lg">
                <FaStethoscope className="mr-1" /> Doctor
              </Link>
            )}
            <Link to="/about" className="btn btn-light mx-2 flex items-center shadow-lg">
              <FaInfoCircle className="mr-1" /> About
            </Link>

            {email && (
              <div className="relative">
                <div
                  className="profile-initial bg-orange-200 text-dark mx-3 flex justify-center items-center rounded-full cursor-pointer"
                  style={{ width: "40px", height: "40px", fontSize: "1.5rem" }}
                  onClick={toggleDropdown}
                >
                  {isValidImageUrl(email) ? (
                    <img
                      src={email}
                      alt="profile"
                      style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                    />
                  ) : (
                    <span className="block">{email.charAt(0).toUpperCase()}</span>
                  )}
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
          </>
        ) : (
          <>
            <Link to="/" className="btn btn-light mx-2 flex items-center shadow-lg">
              <FaHome className="mr-1" /> Home
            </Link>
            <Link to="/login" className="btn btn-light mx-2 flex items-center shadow-lg">
              <FaSignInAlt className="mr-1" /> Login
            </Link>
            <Link to="/signup" className="btn btn-light mx-2 flex items-center shadow-lg">
              <FaUserPlus className="mr-1" /> Register
            </Link>
          </>
        )}
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleSidebar} className="text-2xl">
          <FaBars />
        </button>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex justify-end">
          <div className="w-64 bg-white h-full shadow-lg p-4">
            <button onClick={toggleSidebar} className="text-2xl mb-4">
              <FaTimes />
            </button>
            <nav className="flex flex-col">
              {isAuthenticated ? (
                <>
                  <Link to="/" className="btn btn-light mx-2 flex items-center shadow-lg">
                    <FaHome className="mr-1" /> Home
                  </Link>

                  {storedCheck ? (
                    <Link to="/profile" className="btn btn-light mx-2 flex items-center shadow-lg">
                      <FaStethoscope className="mr-1" /> Appointment
                    </Link>
                  ) : (
                    <Link to="/doctors" className="btn btn-light mx-2 flex items-center shadow-lg">
                      <FaStethoscope className="mr-1" /> Doctor
                    </Link>
                  )}

                  <Link to="/about" className="btn btn-light mx-2 flex items-center shadow-lg">
                    <FaInfoCircle className="mr-1" /> About
                  </Link>
                  {email && (
                    <div className="relative">
                      <div
                        className="profile-initial bg-orange-200 text-dark mx-3 flex justify-center items-center rounded-full cursor-pointer"
                        style={{ width: "40px", height: "40px", fontSize: "1.5rem" }}
                        onClick={toggleDropdown}
                      >
                        {isValidImageUrl(email) ? (
                          <img
                            src={email}
                            alt="profile"
                            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                          />
                        ) : (
                          <span className="block">{email.charAt(0).toUpperCase()}</span>
                        )}
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
                </>
              ) : (
                <>
                  <Link to="/" className="btn btn-light mx-2 flex items-center shadow-lg">
                    <FaHome className="mr-1" /> Home
                  </Link>
                  <Link to="/login" className="btn btn-light mx-2 flex items-center shadow-lg">
                    <FaSignInAlt className="mr-1" /> Login
                  </Link>
                  <Link to="/signup" className="btn btn-light mx-2 flex items-center shadow-lg">
                    <FaUserPlus className="mr-1" /> Register
                  </Link>
                </>
              )}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;






































