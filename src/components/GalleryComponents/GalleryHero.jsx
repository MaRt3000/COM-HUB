import React from 'react';
import GalleryHeader from './GalleryHeader'
import HandBg from '../../assets/GalleryHero.jpeg'

const HeroSection = () => {
  const HandBag = HandBg
  return (
    <section>
      <div className=' '
        style={{
          backgroundImage: `url(${HandBag})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "background-image 1s ease-in-out", // Smooth transition
          }}>
      <GalleryHeader />

    <div className="relative h-[40vh]  flex items-center justify-center overflow-hidden">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Hero content */}
      <div className="relative z-10 text-center">
        <h1 className="text-white text-5xl font-bold tracking-wider">
          OUR GALLERY
        </h1>
      </div>
      </div>
      
      {/* Decorative hand image */}
      <div className="absolute right-0 top-0 h-full w-1/3">
        <div className="h-full w-full bg-[url('/hand.jpg')] bg-cover bg-center opacity-50"></div>
      </div>
    </div>
    </section>
  );
};

export default HeroSection;
