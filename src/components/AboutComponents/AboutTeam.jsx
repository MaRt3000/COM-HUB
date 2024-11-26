import React from 'react'
import Team1 from '../../assets/png1.png'
import Team2 from '../../assets/png2.png'
import Team3 from '../../assets/png3.png'
import Team4 from '../../assets/png4.png'
import Team5 from '../../assets/png5.png'
import Team6 from '../../assets/png6.png'


const AboutTeam = () => {
  return (
    <>
        <section className='lg:p-[50px_100px] px-4 py-10  flex flex-col items-center text-center gap-10 '>
      <h1 className='font-Jost text-[#003255] font-[700] text-[18px] p-[8px_20px] rounded-[35px] bg-[#0007B60A]  '>MEET OUR TEAM</h1>
      <p className='font-Jost font-[400] leading-[31px] text-[15px] lg:text-[19px] text-[#000000B8] '>
      By the grace of God, we have dedicated people from few countries with the passion for a transformed society. The team consists of doctors, pharmacist, IT experts, Aerobic trainers, pastors and other categories, seeking to better situations here on earth.        </p>
    </section>

    <section className='p-[70px] '>
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
    {[Team1, Team2, Team3, Team4, Team5, Team6].map((image, index) => (
      <div key={index} className="flex flex-col items-center">
        <img src={image} alt={`img-${index + 1}`} className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300" />
        <h2 className=" w-full font-Jost font-[500] text-[18px] pt-6 ">{["Rev. Peller", "Snr. Evan. Pablo", "Sis. Arike PreOrder", "Sis. Slay Queen", "Pastor. Richi", "Pastor Pablo Monie"][index]}</h2>
        <h2 className=" w-full pb-10 font-Jost font-[500] text-[18px] ">{["Preacher", "Evangelist", "Head Usher", "Musician", "HypeMan", "Head Chorister"][index]}</h2>
      </div>
    ))}
  </div>
  </section>
  </>
  )
}

export default AboutTeam