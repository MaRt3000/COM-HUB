import React, { useState } from "react";
import princess from "../assets/princess.png";
import mercy from "../assets/mercy.png";
import jane from "../assets/jane.png";
import grace from "../assets/grace.png";

export const Testimonies = () => {
  const testimonies = [
    {
      image: princess,
      title: "PEACE RESTORATION",
      content:
        "I was in a state of dilemma when I met God's servant. My loyalty and commitment at work was being questioned, several duties were withdrawn from me to the extent of being hopeless. But when I met with God's servant, he prayed with me. The next day at work was unbelievable as everyone who deserted me came together to defend me, and all my tasks were given back. I return all Glory to God.",
      name: "Princess",
    },
    {
      image: mercy,
      title: "DELIVERANCE FROM DISAPPOINTMENT AND UNTIMELY DEATH",
      content:
        "Blessed in business, my romantic life was a series of failures despite responsible suitors. Frustrated, I met a man of God through a friend. Miraculously, God swiftly resolved my challenges. Alive and with a stable relationship, I'm grateful to the Almighty.",
      name: "Sister Mercy",
    },
    {
      image: jane,
      title: "HOME RESTORATION",
      content:
        "Amid marital turmoil, I attended the president's ministration. Meeting the president brought transformative scriptural revelations, empowering me to reclaim my home. Grateful for the imparted wisdom, my family now thrives in peace.",
      name: "Sister Jane",
    },
    {
      image: grace,
      title: "SAFE DELIVERY",
      content:
        "Grateful for God's intervention, the servant of God revealed manipulations concerning my pregnancy. Through prayers, I gave birth to a healthy baby boy at the 11th month, overcoming all manipulations. A testament to God's grace.",
      name: "Sister Grace",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonies.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonies.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center text-center text-white py-20 gap-10">
      {/* Header */}
      <button className="bg-[rgba(0,7,182,0.04)] text-gray-700 mb-12 text-[10px] px-8 py-4 font-semibold sm:text-[10px] lg:text-lg rounded-full hover:bg-orange-600 transition">
        TESTIMONIES
      </button>

      {/* Carousel Container */}
      <div className="relative w-full max-w-5xl px-4">
        {/* Carousel Slides */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonies.map((testimony, index) => (
              <div
                key={index}
                className="flex-none w-full flex flex-col items-center bg-white text-black p-8 rounded-xl shadow-lg gap-10 py-10"
              >
                
                <h2 className="text-[13px] font-semibold sm:text-[13px] lg:text-[25px] ">{testimony.title}</h2>
                <p className=" text-[rgba(0,0,0,0.7)] font-[400]  max-w-[53.9rem] text-[13px] sm:text-[13px]  md:text-[23px] sm:max-w-[80%] md:max-w-[90%] lg:text-[24px]">{testimony.content}</p>
                <img
                  src={testimony.image}
                  alt={`Testimony ${index + 1}`}
                  className="object-cover rounded-full mt-12 h-25 w-25 sm:h-25 sm:w-25 lg:h-32 lg:w-32"
                />
                <h3 className="font-[400] mt[-15px] text-[13px] sm:text:[13px] sm:mt[-15px] lg:mt[0px] lg:text-[25px]">{testimony.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <button
          onClick={prevSlide}
          className="absolute top-[74%] left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 w-10 h-10  sm:left-0 sm:top-[74%] lg:top-1/2 lg:left-5 rounded-full hover:bg-gray-600"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-[74%] right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 w-10 h-10 sm:right-0 lg:right-5 sm:top-[74%] lg:top-1/2 rounded-full hover:bg-gray-600"
        >
          &#8594;
        </button>
      </div>

      {/* Indicators */}
      <div className="flex gap-2">
        {testimonies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full sm:w-2 sm:h-2 lg:w-3 lg:h-3 ${
              currentIndex === index ? "bg-orange-600" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};
