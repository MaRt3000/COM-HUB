import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const AboutFocus = () => {
  const slides = [
    [
      { index: "1", title: "BRINGING HOPE TO EVERY CORNER", description: "Sharing the message of love and faith through dedicated outreach, reaching villages and rural areas to spread the word and uplift communities." },
      { index: "2", title: "UNITY IN PRAYER, STRENGTH IN FAITH", description: "Gathering in the spirit of devotion, our prayer conferences provide a sacred space for our community to come together, seek solace, and strengthen their connection with the divine." },
      { index: "3", title: "GUIDING HEARTS, HEALING SOULS", description: "Offering compassionate counseling sessions for individuals of all genders, providing a supportive environment for emotional well-being and personal growth." },
    ],
    [
      { index: "1", title: "BRINGING HOPE TO EVERY CORNER", description: "Sharing the message of love and faith through dedicated outreach, reaching villages and rural areas to spread the word and uplift communities." },
      { index: "2", title: "UNITY IN PRAYER, STRENGTH IN FAITH", description: "Gathering in the spirit of devotion, our prayer conferences provide a sacred space for our community to come together, seek solace, and strengthen their connection with the divine." },
      { index: "3", title: "GUIDING HEARTS, HEALING SOULS", description: "Offering compassionate counseling sessions for individuals of all genders, providing a supportive environment for emotional well-being and personal growth." },
    ],
    [
      { index: "1", title: "BRINGING HOPE TO EVERY CORNER", description: "Sharing the message of love and faith through dedicated outreach, reaching villages and rural areas to spread the word and uplift communities." },
      { index: "2", title: "UNITY IN PRAYER, STRENGTH IN FAITH", description: "Gathering in the spirit of devotion, our prayer conferences provide a sacred space for our community to come together, seek solace, and strengthen their connection with the divine." },
      { index: "3", title: "GUIDING HEARTS, HEALING SOULS", description: "Offering compassionate counseling sessions for individuals of all genders, providing a supportive environment for emotional well-being and personal growth." },
    ],
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="pb-[40px] " >
            
            <div className="flex items-center justify-center py-[40px] ">
            <h1 className='font-Jost text-[#003255] font-[700] text-[18px] text-center p-[8px_20px] rounded-[35px] bg-[#0007B60A]  '>OUR FOCUS</h1>

            </div>

    <div className="relative w-[80%] lg:w-[90%] mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="grid grid-rows-1 w-[70%] lg:grid-cols-3 min-w-full gap-6 justify-center items-center  lg:justify-between px-4 space-x-4">
              {slide.map((card, cardIndex) => (
                <div
                  key={cardIndex}
                  className="bg-white shadow-md rounded-lg p-6 text-left flex-1"
                >
                  <p className="w-8 h-8 p-1 text-center font-Jost font-[500] text-[16px] rounded-full bg-gray-400 text-black ">{card.index}</p>
                  <h3 className="font-Jost font-[600] py-4 text-[15px] ">{card.title}</h3>
                  <p className="font-Jost font-[400] text-[14px] text-[#000000B8] ">{card.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-transparent text-gray-700 p-2 rounded-full hover:bg-gray-500 hover:text-white transition"
        onClick={handlePrev}
      >
        <FaChevronLeft />
      </button>
      <button
        className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-transparent text-gray-700 p-2 rounded-full hover:bg-gray-500 hover:text-white transition"
        onClick={handleNext}
      >
        <FaChevronRight />
      </button>
      <div className="flex justify-center mt-4 space-x-4">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            } transition-all duration-300`}
          ></div>
        ))}
      </div>
    </div>
    </section>
    
  );
};

export default AboutFocus;
