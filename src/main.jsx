// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )






import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DoctorProvider } from './DoctorContext';



ReactDOM.createRoot(document.getElementById('root')).render(
  <DoctorProvider>
    <App />
  </DoctorProvider>,
)










// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { DoctorProvider } from './DoctorContext';

// ReactDOM.render(
//   <DoctorProvider>
//     <App />
//   </DoctorProvider>,
//   document.getElementById('root')
// );
