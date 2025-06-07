import React from 'react';

const Video = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-sans mb-11">
      {/* Background section */}
      <div className="relative w-full overflow-hidden rounded-lg mb-4">
        <div className="relative h-96">
          <img 
            src="/img/home.webp" 
            alt="Blurred background" 
            className="absolute inset-0 w-full h-full object-cover object-top blur-sm" 
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center text-[#f8f8f8]">
              <h1 className="text-3xl md:text-4xl font-bold mb-1">Internship &</h1>
              <h2 className="text-3xl md:text-4xl font-bold">Job Placement in Japan</h2>
            </div>
          </div>
        </div>
      </div>

      {/* 3-video layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-6 md:mx-0">
        {['/bgvedio.mp4', '/bgvedio.mp4', '/bgvedio.mp4'].map((video, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <video
              controls
              className="w-full h-64 object-cover"
            >
              <source src={`${video}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;
