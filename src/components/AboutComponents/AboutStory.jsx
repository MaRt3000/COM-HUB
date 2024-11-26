import React from 'react'
import PrayerWarrior from '../../assets/prayers.png'

const AboutStory = () => {
  return (
    <section className='bg-[#003255] p-[70px_40px] '>
                    <div className="flex items-center justify-center pb-[40px] ">
            <h1 className='font-Jost text-white font-[700] text-[18px] text-center p-[8px_20px] rounded-[35px] bg-[#FFFFFF4A]  '>OUR STORY</h1>

            </div>
        <div className='flex justify-center '>
            <img src={PrayerWarrior} alt="crusade people" className='pb-[40px]  ' />
       
        </div>
        <p className='font-Jost font-[400] lg:text-[25px] text-white text-center pb-10 '>
        8 years gone by, we had focused on how to better lives especially "relationship". But we have been called to do more, these are: winning of souls, charitable deeds with prayer for lives to be transformed.
        The high rate of divorce and broken relationship with singles that causes depression, prostitution, sickness and early death are the reasons for focusing on relationship to better lives and our society at large. God has used us to fix relationship and marriages even beyond the shores of this Country. We have decided to do more by seeking for volunteers in order to hasten the work worldwide.        </p>
    </section>
  )
}


export default AboutStory
