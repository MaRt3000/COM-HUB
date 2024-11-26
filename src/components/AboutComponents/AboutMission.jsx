import React from 'react'
import Crusade from '../../assets/worship.png'

const AboutMission = () => {
  return (
    <section className='bg-[#003255] p-[70px_40px] '>
                    <div className="flex items-center justify-center pb-[40px] ">
            <h1 className='font-Jost text-white font-[700] text-[18px] text-center p-[8px_20px] rounded-[35px] bg-[#FFFFFF4A]  '>OUR MISSION</h1>

            </div>
        <div className='flex justify-center '>
            <img src={Crusade} alt="crusade people" className='pb-[40px]  ' />
       
        </div>
        <p className='font-Jost font-[400] lg:text-[25px] text-white text-center pb-10 '>
        We desire a world where couples will live in harmony, children will be free from negative decision of parents. A place where everyone will live a fulfilled life through the love of Christ, which our charitable attitude will contribute to.
        </p>
    </section>
    
  )
}

export default AboutMission
