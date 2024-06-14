import React from 'react';
import { FaEye, FaBullseye, FaHeart } from 'react-icons/fa'; 

function VisionMissionValues() {
    return (
        <div className="bg-gray-100 py-16 " style={{ width: '100%' }}>
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision, Mission & Values</h2>
                    <p className="text-lg text-gray-600">Empowering healthcare access through innovation and commitment.</p>
                </div>

                <div className="flex justify-center w-full">
                    {/* Vision */}
                    <div className="flex-1 bg-white p-6 rounded-lg shadow-md text-center mr-8">
                        <FaEye className="text-4xl text-blue-500 mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Vision</h3>
                        <p className="text-gray-700">
                            To revolutionize healthcare access through innovative technology, ensuring timely and efficient care for every patient.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="flex-1 bg-white p-6 rounded-lg shadow-md text-center mr-8">
                        <FaBullseye className="text-4xl text-green-500 mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Mission</h3>
                        <p className="text-gray-700">
                            Empower patients with seamless appointment scheduling, support healthcare providers by streamlining processes, and drive efficiency with advanced technology.
                        </p>
                    </div>

                    {/* Values */}
                    <div className="flex-1 bg-white p-6 rounded-lg shadow-md text-center">
                        <FaHeart className="text-4xl text-red-500 mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Values</h3>
                        <p className="text-gray-700">
                            Patient-centric care, reliability in service, continuous innovation, integrity in operations, collaboration with healthcare professionals, and accessibility for all.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VisionMissionValues;
