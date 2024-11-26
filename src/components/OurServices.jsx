import React from 'react'
import counselling from '../assets/counselling.jpeg'
import outreach from '../assets/outreach.jpeg'
import prayer from '../assets/prayer.jpeg'

export const OurServices = () => {
  return (
   <div className='flex flex-col align-center justify-center gap-[10rem] text-center  text-white px-[18px]  py-[100px] pb-[150px]'>
        <div>
             <button className="bg-[rgba(0,7,182,0.04)] text-gray-700 mb-4 text-[10px] px-8 py-4 font-semibold sm:text-[10px] lg:text-lg rounded-full hover:bg-orange-600 transition">
          OUR SERVICES
        </button>
        </div>
     
     <div className='flex flex-col gap-[170px] items-center justify-between text-white   px-12 py-[100px]) sm:gap-[176px] sm:flex-col lg:flex-row lg:gap-[10px] '>
       
        {[counselling, outreach, prayer].map((image, index) => (
      <div key={index} className="flex flex-col items-center shadow-[0px_2.06px_15.41px_0px_rgba(0,50,85,0.09)] px-8 pb-8 rounded-3xl">
       
         <img src={image} alt={`img-${index + 1}`} className=" object-cover rounded-full h-[150px] w-[150px] mt-[-4.5rem] mb-5" />
      
        <h2 className=" w-full pl-7 p-4 text-[rgba(0,0,0,1)] font-semibold text-[14px] sm:text-[14px] lg:text-[18px]">{["COUNSELLING", "OUTREACH", "PRAYER"][index]}</h2>
        <p className=" w-full p-0 text-[rgba(0,0,0,0.72)] max-w-[17rem] h-auto text-[13px] sm:text-[13px] lg:text-[14px] ">{[
            "With the help of the Holy Spirit, the Lord has been blessing lives through our one on one counseling and its always a moment of Joy for all participants. Book for an appointment today and you will glorify the Almighty.",
             
             "Our pleasure is to bless lives not only in spiritual matters but with material things as well, showing the love of Christ. We evangelize from one village to another as well as honour invitations for both crusades and revivals anywhere.",
             
             
             "Divine encounter happens whenever people pray with faith to God. Join us in our prayer programmes and be the next to testify. We organize prayer conferences for SINGLES, MARRIED, INDIVIDUALS and also, accept INVITATIONS TO PRAYER PROGRAMMES"]
             
             [index]}</p>
      </div>
      
    ))} 
        
        </div>
   </div>
  )
}
