import React from 'react';
import video from '../../assets/Frame1000006298.png'


const VideoSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      
      <div className="flex justify-center mb-12">
        <span className="px-6 py-2 bg-slate-100 text-slate-900 font-medium rounded-full">
          VIDEOS
        </span>
      </div>

      
      <div className="relative aspect-video w-full max-w-4xl mx-auto mb-8">
        <div className="relative h-full w-full rounded-lg overflow-hidden">
          <img
            src={video}
            alt="Worship service video"
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-sm">
              {/* <Play className="w-8 h-8 text-white fill-white" /> */}
            </div>
          </div>
        </div>
      </div>

      {/* Static pagination dots */}
      <div className="flex justify-center gap-2">
        {[1, 2, 3, 4].map((num) => (
          <button
            key={num}
            className={`w-8 h-8 rounded-full ${
              num === 1
                ? 'bg-slate-900 text-white'
                : 'bg-slate-200 text-slate-600'
            }`}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VideoSection;