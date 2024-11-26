import React from "react";
import coupleHangout from "../assets/coupleHangout.png";
import magazineCover from "../assets/magazineCover.png";
import timeout from "../assets/timeout.png";

export const Events = () => {
  return (
    <div className="flex flex-col items-center justify-center    text-center text-white bg-[rgba(0,50,85,1)] py-1 sm:py-16">
      {/* Header */}
      <div>
        <button className="bg-[rgba(255,255,255,0.29)]  text-[10px]  px-6 py-3 font-semibold my-[6rem] sm:text-[10px] sm:px-6 sm:py-3 lg:text-[20px] lg:px-10 lg:py-4 rounded-full hover:bg-orange-600 transition">
          EVENTS
        </button>
      </div>

      {/* Events Grid */}
      <div className="flex flex-col gap-8 mb-[60px] justify-center items-center px-4 sm:px-8 lg:px-12 sm:flex-col lg:flex-row ">
        {[coupleHangout, magazineCover, timeout].map((image, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-screen max-w-xs sm:max-w-sm"
          >
            {/* Image */}
            <img
              src={image}
              alt={`Event ${index + 1}`}
              className="w-full h-auto object-cover "
            />
            {/* Title */}
            <h2 className="text-[13px] sm:text-xl font-semibold my-[26px] sm:text-[13px] lg:text-lg">
              {["COUPLES HANGOUT", "PUBLICATION OF OUR MAGAZINE", "TIMEOUT WITH SINGLES"][index]}
            </h2>
            {/* Divider */}
            <div className="w-full h-px bg-gray-400  mb-15"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
