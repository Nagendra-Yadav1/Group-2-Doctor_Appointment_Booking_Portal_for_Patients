import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Services = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Unique Services</h2>
        <p className="text-lg text-center text-gray-700 mb-8">
          Explore our unique services designed to provide you with the best healthcare experience.
        </p>
        <Slider {...settings} className="slick-slider">
          <ServiceCard
            title="Telemedicine Options"
            description="Consult with doctors remotely via video calls or chat."
            icon="video-camera"
          />
          <ServiceCard
            title="Home Visits"
            description="Arrange for doctors to visit patients at their homes."
            icon="home"
          />
          <ServiceCard
            title="Multilingual Support"
            description="Receive consultations in multiple languages."
            icon="translate"
          />
          <ServiceCard
            title="Specialist Network"
            description="Access a wide range of medical specialists."
            icon="users"
          />
          <ServiceCard
            title="Second Opinion Services"
            description="Get second opinions from other doctors."
            icon="document-text"
          />
          <ServiceCard
            title="Health Monitoring Apps"
            description="Use mobile apps for health monitoring."
            icon="phone"
          />
        </Slider>
      </div>
    </div>
  );
};

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="p-8 bg-white rounded-lg shadow-xl mb-6 m-4 ">
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-500 mb-4">
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icons[icon]} />
        </svg>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const icons = {
  'video-camera': 'M12 14l9-5-9-5-9 5 9 5z',
  home: 'M12 2L2 7l1.41 1.42L5 7.83V18a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-6h5v6a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7.83l1.59 1.59L22 7l-10-5z',
  translate: 'M21 3h-7a2 2 0 0 0-2 2H8a2 2 0 0 0-2-2H3a1 1 0 0 0-1 1v16a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2h4a2 2 0 0 0 2 2h7a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM10 12v2h4v-2h3l-4-4-4 4h3z',
  users: 'M12 14l9-5-9-5-9 5 9 5z',
  'document-text': 'M4 6h16M4 10h16M4 14h16M4 18h16',
  phone: 'M12 14l9-5-9-5-9 5 9 5z',
};

export default Services;