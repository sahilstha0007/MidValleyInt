import React from 'react';

const Video = () => {
  return (
    <div className=" max-w-6xl mx-auto px-4 py-8 font-sans mb-11">
      <div className="relative w-full overflow-hidden rounded-lg mb-8">
        <div className="relative h-72">
          <img 
            src="/img/home.webp" 
            alt="Blurred interior background" 
            className="absolute inset-0 w-full h-full object-cover blur-sm" 
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center text-[#f8f8f8]">
              <h1 className="text-3xl md:text-4xl font-bold mb-1">Experience an</h1>
              <h2 className="text-3xl md:text-4xl font-bold">enriching journey</h2>
            </div>
          </div>
        </div>

        <div className="relative -mt-16 mx-6 md:mx-12">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="relative">
              <img 
                src="/img/home.webp" 
                alt="Interior living room with beige furniture and teal accents" 
                className="w-full h-64 md:h-96 object-cover" 
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-orange-500 rounded-full p-3 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Video;