import React, { useContext } from 'react';
import Slider from "react-slick";
import { ContextCreateApi } from '../Context/ContextApi';

function Hospital() {
    const{slider}=useContext(ContextCreateApi)
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 500,
        cssEase: "linear"
    };

    return (
        <div className="slider-container mx-auto py-8 max-w-7xl">
            <Slider {...settings}>
                {slider.map((item, index) => (
                    <div key={index} className="p-4">
                        <div className="h-[450px] flex flex-col justify-between rounded-lg shadow-lg  cursor-pointer transform transition duration-300 hover:scale-105 ">
                            <div className="flex-shrink-0">
                                <img src={item.img} alt={item.name} className="h-[300px] w-full object-cover rounded-t-lg" />
                            </div>
                            <div className=" h-[150px] text-center text-lime-400  rounded-b-lg mt-2">
                                <p className="text-2xl font-bold">{item.name}</p>
                                <p className="text-lg">{item.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Hospital;
