import React from "react";

export const BecomeAVolunteer = () => {
  return (
    <div className="flex px-[30px] flex-col sm:flex-row items-center sm:justify-between bg-[rgba(0,50,85,1)]  sm:px-12 py-10 sm:py-16 gap-8 lg:px-[60px]">
      {/* Text Section */}
      <div className="text-center sm:text-start text-white">
        <h2 className="text-[12.59px] sm:text-2xl font-semibold mb-4 sm:text-[12.60px]  lg:text-xl">BECOME A VOLUNTEER</h2>
        <p className="text-[12px] sm:text-lg leading-relaxed mb-6 max-w-2xl mx-auto sm:mx-0 sm:text-[12px] lg:text-base">
          Do you have passion for "lives"? Our slogan is "COP". You are welcome to our team. For you to become a volunteer, we would need to know you better. Contact us below, so we can have a chat with you.
        </p>
      </div>

      {/* Button */}
      <button className="bg-orange-500 text-white text-[9px] px-6 py-3 sm:px-6  sm:py-3 sm:text-[9px]  lg:text-[21px] rounded hover:bg-orange-600 transition lg:py-4 lg:px-10">
        Contact Us
      </button>
    </div>
  );
};
