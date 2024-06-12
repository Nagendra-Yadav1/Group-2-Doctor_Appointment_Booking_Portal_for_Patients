import React, { createContext, useState } from 'react';
import { doctors } from './data.jsx';

// Create a context
export const DoctorContext = createContext();

// Create a provider component
export const DoctorProvider = ({ children }) => {
  const [doctorData, setDoctorData] = useState(doctors);

  return (
    <DoctorContext.Provider value={{ doctorData, setDoctorData }}>
      {children}
    </DoctorContext.Provider>
  );
};
