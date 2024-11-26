import React from 'react'
import HeroSection from './GalleryHero';
import PhotoGallery from './PhotoGallery';
import VideoCarousel from './VideoCarousel';
import ContactSection from './ContactSection';
import GalleryFooter from './GalleryFooter'

const GalleryAll = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <PhotoGallery />
      <VideoCarousel />
      <ContactSection />
      <GalleryFooter />
    </div>
  )
}
export default GalleryAll