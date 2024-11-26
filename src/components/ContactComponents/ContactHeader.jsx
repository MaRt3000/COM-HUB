import React, {useState} from "react";
import HeadLogo from '../../assets/headLogo.png'
import { Link } from 'react-router-dom'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>

      <div className='flex justify-between items-center text-center px-8 bg-opacity-50 '>
      <img src={HeadLogo} alt="Page logo" className=' w-[80px] pt-4  z-[90]  ' />
            
            <div className={`flex flex-col gap-10 md:flex-row lg:items-center md:items-center  fixed lg:relative md:relative top-0 bg-[#002945] pt-40 md:pt-0 lg:pt-0 pl-5 lg:pl-0 md:pl-0 z-50 h-full md:top-0 left-0 w-[50%] md:w-auto  md:bg-transparent transition-transform ${
            isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}>
            <Link to="/LandingPage" className="font-Jost  text-white text-[21px] hover:underline">
                Home
              </Link>
              <Link to="/AboutUs" className="font-Jost  text-white text-[21px] hover:underline">
                About Us
                
              </Link>
              <Link to="/GalleryAll"  className="font-Jost text-white text-[21px] hover:underline">
                Gallery
              </Link>
              <Link to="/ContactHeader" className="font-Jost flex flex-col items-center justify-center text-white text-[21px] hover:underline">
                Contact Us
                <div className='w-2 h-2 bg-white rounded-full '></div>
              </Link>
    
            </div>
            <div
          className="text-white md:hidden z-50 cursor-pointer"
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
      </div>
   
    </>
  )
}

export default Header
