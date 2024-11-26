import React from 'react'

const AboutTouch = () => {
  return (
    <>
    <section  className='relative '>
    <p className='bg-[#EF8A171C] w-[206px] h-[206px] absolute rounded-full -top-20 lg:left-[12rem] blur-[70px] -z-10 '></p>
    <div className='text-center m-[10%] lg:m-[50px_300px] p-[50px] shadow-xl rounded-[34px] flex flex-col bg-white z-10 items-center gap-10 '>
       <h1 className='font-Jost font-[600] text-[30px] lg:text-[40px] text-black '>Get in touch</h1> 
       <p className='font-Jost font-[400] text-[16px] lg:text-[20px] text-[#000000CC] '>Whether you have questions, prayer requests, or just want to say hello, we'd love to hear from you.</p>
       <button className='font-Jost font-[500] text-[21px] text-[#fff] bg-[#FF792E] w-[203px] h-[73px] rounded-[200px] '>Contact Us</button>
    </div>
    <p className='bg-[#EF8A171C] w-[206px] h-[206px] absolute rounded-full -bottom-20 right-1 lg:right-[12rem] blur-[70px] -z-10 '></p>
    </section>
    
    </>
  )
}

export default AboutTouch
