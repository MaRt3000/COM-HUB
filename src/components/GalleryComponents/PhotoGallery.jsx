import React from 'react';
import Frame1 from '../../assets/Frame1.png'
import Frame2 from '../../assets/Frame2.png'
import Frame3 from '../../assets/Frame3.png'
import Frame4 from '../../assets/Frame4.png'



const PhotoGallery = () => {
  const photos = [
    {
      id: 1,
      src: Frame1,
      alt: 'People studying together',
    },
    {
      id: 2,
      src: Frame2,
      alt: 'Modern church exterior with cross',
    },
    {
      id: 3,
      src: Frame3,
      alt: 'People worshipping together',
    },
    {
      id: 4,
      src: Frame4,
      alt: 'Historic church interior',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Photos tab indicator */}
      <div className="flex justify-center mb-12">
        <span className="px-6 py-2 bg-slate-100 text-slate-900 font-medium rounded-full">
          PHOTOS
        </span>
      </div>

      {/* Photo grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {photos.map((photo) => (
          <div 
            key={photo.id}
            className="aspect-[4/3] overflow-hidden rounded-lg"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* View more link */}
      <div className="text-center mt-12">
        <a 
          href="#" 
          className="text-slate-900 hover:text-slate-700 font-medium"
        >
          View more photos
        </a>
      </div>
    </div>
  );
};

export default PhotoGallery;
