import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaCopyright } from 'react-icons/fa'

const AboutFooter = () => {
  return (
    <>
    <section className='bg-[#003255] p-[40px_20%] '>
                    <div className="pt-[40px] border-t-[1px] flex items-center text-white gap-6 justify-center pb-[40px] ">
                        <FaFacebook /> <FaTwitter /> <FaInstagram /> <FaLinkedin />
            </div>
        <div className='flex justify-center '>
       
        </div>
        <p className='font-Jost flex items-center gap-3 justify-center font-[450] lg:text-[19px] text-white text-center pb-10 '>
        <FaCopyright /> 2023, COM. All Rights Reserved.
        </p>
        <p className='font-Jost font-[450] lg:text-[19px] text-white text-center '>About Page By Uyi</p>
    </section>
    </>
  )
}
export default AboutFooter