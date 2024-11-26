import React, { useState } from "react";
import hero from '../assets/hero.jpeg'
import hero2 from '../assets/hero2.jpeg'
import hero3 from '../assets/hero3.jpeg'
import Header from './Header'
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: hero,
      label: "WE ARE CHOSEN FOR",
      title: "COUNSELING / OUTREACH / PRAYERS",
      subtitle: "Let's build lives together for Christ",
    },
    {
      image: hero2,
      label: "A NON PROFIT ORGANIZATION",
      title: "BUILDING LIVES IS OUR PRIORITY",
      subtitle: "Let's build lives together for Christ",
    },
    {
      image: hero3,
      label: "A NON PROFIT ORGANIZATION",
      title: "FIXING ALL THINGS IN PRAYER IS KEY TO US",
      subtitle: "Let's build lives together for Christ",
    },
  ];

  return (
    <div className="  w-full ">
      {/* Slide Container */}
      <div className="overflow-hidden ">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${
              index === currentIndex ? "block" : "hidden"
            }   w-full h-[600px] sm:h-[600px] lg:h-[900px]  bg-cover bg-[73%] sm:bg-73%] lg:bg-center`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
      <Header />

            <div className="bg-black  bg-opacity-50 w-full h-full flex items-center justify-start px-10 ">
              <div className="text-center text-white mt-[60px] px-2 sm:px-2 sm:mt-[130px]   lg:mt-[20px] sm:text-center lg:px-8 lg:text-start">
                <p className="text-[16.5px] mt-[-145px]  sm:mt-[-145px]  sm:text-[16.5px] lg:text-[31px]  ">{slide.label}</p>
                <h2 className="text-[28.6px]   sm:text-[28.6px] py-[15px] sm:py-[15px] lg:py-[58px] lg:text-[49px] font-bold ">
                  {slide.title}
                </h2>
                <p className="text-[17px]  sm:text-[17px]  lg:text-[33px] mt-2 ">{slide.subtitle}</p>
                <button className="mt-[30px]  px-4 py-2 bg-orange-500  sm:mt-[30px]hover:bg-orange-600 lg:py-4 font-semibold lg:px-8 text-white lg:mt-[80px] rounded-md">
                 LEARN MORE
                </button>
                
              </div>
              
            </div>
          </div>
        ))}
        {/* Indicators */}
      <div className="absolute   inset-0 flex items-center justify-center mb-[-100%]  sm:mb-[-100%] md:mb-[-40%] lg:mb-[-50%]">
        <div className="flex space-x-2 mb-[-60px]  sm:mb-[-60px]">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-8 h-1  ${
                index === currentIndex
                  ? "bg-orange-500"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
      </div>

      
    </div>
  );
};

export default Carousel;
