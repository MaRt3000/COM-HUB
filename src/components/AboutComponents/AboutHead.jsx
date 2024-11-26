import React, { useState, useEffect } from "react";
import HeadLogo from '../../assets/headLogo.png'
import Background1 from '../../assets/preacher.png'
import Background2 from '../../assets/gathering.png'
import { Link } from 'react-router-dom'


const AboutHead = () => {
  const [currentBackground, setCurrentBackground] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const backgroundImages = [Background1, Background2
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgroundImages.length);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <>
    <section className="h-[80vh] mb-6 flex flex-col text-center "
    style={{
    backgroundImage: `url(${backgroundImages[currentBackground]})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      transition: "background-image 1s ease-in-out", // Smooth transition
    }}>
      <div className='flex justify-between items-center px-8 '>
      <img src={HeadLogo} alt="Page logo" className=' w-[80px] pt-4  z-[90]  ' />
        <nav>
            
            <div className={`flex flex-col gap-10 md:flex-row lg:items-center md:items-center  fixed lg:relative md:relative top-0 bg-[#002945] pt-40 md:pt-0 lg:pt-0 pl-5 lg:pl-0 md:pl-0 z-50 h-full md:top-0 left-0 w-[50%] md:w-auto  md:bg-transparent transition-transform ${
            isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}>
            <Link to="/LandingPage" className="font-Jost text-white text-[21px] hover:underline">
                Home
              </Link>
              <Link to="/AboutUs" className="font-Jost flex flex-col items-center justify-center text-white text-[21px] hover:underline">
                About Us
                <div className='w-2 h-2 bg-white rounded-full '></div>
              </Link>
              <Link to="/GalleryAll"  className="font-Jost text-white text-[21px] hover:underline">
                Gallery
              </Link>
              <Link to="/ContactHeader" className="font-Jost text-white text-[21px] hover:underline">
                Contact Us
              </Link>
    
            </div>
            <div
          className="text-white md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </div>
        </nav>
      </div>
      <h1 className="font-Jost text-[55px] font-extrabold text-white lg:pt-[5%] pt-[8%] ">LEARN ABOUT US</h1>
    </section>
    <section className='lg:p-[50px_100px] px-4  flex flex-col items-center text-center gap-10 '>
      <h1 className='font-Jost text-[#003255] font-[700] text-[18px] p-[8px_20px] rounded-[35px] bg-[#0007B60A]  '>ABOUT US</h1>
      <p className='font-Jost font-[400] leading-[31px] text-[15px] lg:text-[19px] text-[#000000B8] '>COM is a Non-profit organization and a spiritual body with the message of salvation, restoration, deliverance and show of charity to better lives. We help in relationship issues for both singles and married. We belief in a united home and a transformed life.</p>
      <button className='font-Jost text-[#fff] font-[600] text-[18px] p-[8px_20px] rounded-[10px] bg-[#FF792E]   '>Learn more</button>
    </section>
    </>
  )
}

export default AboutHead
