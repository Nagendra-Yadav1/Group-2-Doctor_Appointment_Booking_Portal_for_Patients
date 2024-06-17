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
<<<<<<< HEAD:Frontend/src/main.jsx
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />

    </BrowserRouter>
  </React.StrictMode>,
)

=======
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
>>>>>>> 2a6dc78cff7d91b57e69d13a4bba90f9055a9f77:src/main.jsx
