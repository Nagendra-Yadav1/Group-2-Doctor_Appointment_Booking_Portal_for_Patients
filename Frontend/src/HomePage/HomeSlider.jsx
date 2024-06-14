import React, { useContext, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ContextCreateApi } from "../Context/ContextApi";


function HomeSlider() {
    const sliderRef = useRef(null);
    const{hospitalSlider}=useContext(ContextCreateApi)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const goToNextSlide = () => {
        sliderRef.current.slickNext();
    };

    const goToPrevSlide = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <div className="slider-container">
            <Slider ref={sliderRef} {...settings}>
                {hospitalSlider.map((item, index) => (
                    <div key={index} className="slider-item">
                        <div className="h-screen w-full flex relative overflow-hidden bg-teal-400">
                            <div className="w-full h-full flex items-center justify-center">
                                <div className=" w-full rounded ml-12">
                                    <h1 className="text-3xl font-bold text-blue-700 leading-8">
                                        {item.name}
                                    </h1>
                                    <br />
                                    <p className="text-xl font-bold text-slate-600">
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-between">
                                <button onClick={goToPrevSlide}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button onClick={goToNextSlide}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                            <div className="w-[130%] flex">
                                <img
                                    src={item.img}
                                    alt={item.altText}
                                    className="w-full h-auto rounded shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default HomeSlider;
