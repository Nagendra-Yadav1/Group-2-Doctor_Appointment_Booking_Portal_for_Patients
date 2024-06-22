import React, { useContext, useState } from 'react';
import { ContextCreateApi } from '../Context/ContextApi';
import { ToastContainer } from 'react-toastify';

const DoctorDashboard = () => {
    const { Doctor_data } = useContext(ContextCreateApi);
    const { email } = useContext(ContextCreateApi)
    const [formData, setFormData] = useState({
        title: '',
        experiences: '',
        img: '',
        phoneNumber: '',
        OPD: '',
        hospital: '',
        fees: '',
        details: '',
        email
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'phoneNumber') {
            const regex = /^[0-9\b]+$/;
            if (value === '' || regex.test(value)) {
                setFormData((prevData) => ({
                    ...prevData,
                    [name]: value
                }));
            }
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.phoneNumber.length !== 10) {
            alert('Phone number must be exactly 10 digits');
            return;
        }
        Doctor_data(formData.title, formData.experiences, formData.img, formData.phoneNumber, formData.OPD, formData.hospital, formData.fees, formData.details,formData.email)
    };

    return (
        <>
            <ToastContainer />
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-8 shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Doctor Information Form</h2>

                {[
                    { id: 'title', label: 'Title', type: 'text', value: formData.title },
                    { id: 'experiences', label: 'Experiences', type: 'text', value: formData.experiences },
                    { id: 'img', label: 'Image URL', type: 'url', value: formData.img },
                    { id: 'phoneNumber', label: 'Phone Number', type: 'text', value: formData.phoneNumber },
                    { id: 'OPD', label: 'OPD', type: 'text', value: formData.OPD },
                    { id: 'hospital', label: 'Hospital', type: 'text', value: formData.hospital },
                    { id: 'fees', label: 'Fees', type: 'number', value: formData.fees },
                ].map(({ id, label, type, value, ...rest }) => (
                    <div key={id} className="mb-4">
                        <label htmlFor={id} className="block text-gray-700 font-bold mb-2">{label}</label>
                        <input
                            type={type}
                            id={id}
                            name={id}
                            value={value}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                            required
                            {...rest}
                        />
                    </div>
                ))}

                <div className="mb-4">
                    <label htmlFor="details" className="block text-gray-700 font-bold mb-2">Details</label>
                    <textarea
                        id="details"
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        rows="4"
                        required
                    ></textarea>
                </div>

                <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700">
                    Submit
                </button>
            </form>
        </>
    );
};

export default DoctorDashboard;
