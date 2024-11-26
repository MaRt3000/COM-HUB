import React from 'react';

function AboutUsSection() {
  return (
    <div className="flex flex-col items-center justify-center py-[10rem]  px-[30px] ">
      <div className="text-center max-w-[60rem]">
        <button className="bg-[rgba(0,7,182,0.04)] text-gray-700 mb-4 text-[10px] px-6 py-2 font-semibold rounded-full sm:text-[10px] lg:text-lg  hover:bg-orange-600 transition">
          ABOUT US
        </button>
        
        <p className="text-[rgba(0,0,0,0.72)] text-[16px] px-leading-relaxed mb-10 py-10 sm:mb-10 sm-text-[16px]  lg:mb-20 lg:text-[20px] ">
          COM is a Non-profit organization and a spiritual body with the message
          of salvation, restoration, deliverance and show of charity to better lives.
          We help in relationship issues for both singles and married. We believe
          in a united home and a transformed life.
        </p>
        <button className="bg-orange-500 text-white  rounded  text-[9px] px-6 py-3 sm:px-6  sm:py-3 sm:text-[10px] lg:py-3 lg:px-8 lg:text-[21px] hover:bg-orange-600 transition">
          Learn more
        </button>
      </div>
    </div>
  );
}

export default AboutUsSection;
