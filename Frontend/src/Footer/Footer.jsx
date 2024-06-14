import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-gray-100  w-full">
            <div className="px-6 lg:px-20 w-full ">
                <div className="flex flex-wrap justify-between mb-10  ">
                    <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">About Us</h3>
                        <p>
                            We are dedicated to providing the best healthcare services. Our team of
                            experienced doctors and staff ensure that you receive the highest quality care.
                        </p>
                    </div>

                    <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <p>
                            <strong>Address:</strong> 1234 Health St, Wellness City, HC 56789<br />
                            <strong>Phone:</strong> (123) 456-7890<br />
                            <strong>Email:</strong> contact@healthcare.com
                        </p>
                    </div>

                    <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0 ">
                        <h3 className="text-xl font-bold mb-4">Services</h3>
                        <ul>
                            <li>General Consultation</li>
                            <li>Emergency Care</li>
                            <li>Surgery</li>
                            <li>Pediatrics</li>
                            <li>Pharmacy</li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">Operating Hours</h3>
                        <ul>
                            <li>Mon - Fri: 9:00 AM - 8:00 PM</li>
                            <li>Sat: 10:00 AM - 5:00 PM</li>
                            <li>Sun: Closed</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between items-center mb-10">
                    <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                        <h3 className="text-xl font-bold mb-4">Subscribe to our Newsletter</h3>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-3 py-2.5 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <ul className="flex space-x-6">
                            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Facebook</a></li>
                            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Twitter</a></li>
                            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Instagram</a></li>
                            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between mb-10">
                    <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">Testimonials</h3>
                        <p>
                            "The healthcare services here are top-notch. The doctors are very professional and caring." - John Doe
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul>
                            <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
                            <li><a href="/services" className="hover:text-blue-400">Services</a></li>
                            <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
                            <li><a href="/faq" className="hover:text-blue-400">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">Our Location</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.092832480839!2d144.9537363154724!3d-37.81627944202143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727a7d8d870adf!2sRMIT%20University!5e0!3m2!1sen!2sau!4v1610331571230!5m2!1sen!2sau"
                            width="100%"
                            height="200"
                            frameBorder="0"
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                            className="rounded-lg"
                        ></iframe>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-10 pt-6 text-center">
                    <p>&copy; {new Date().getFullYear()} Healthcare. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
