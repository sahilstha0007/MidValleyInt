import React from 'react';

export default function TestimonialCards() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="relative max-w-2xl w-full overflow-visible">
        {/* Decorative background shapes */}
        <div className="absolute bottom-[-60px] right-[-90px] w-48 h-48 bg-blue-200 rounded-full blur-2xl z-0"></div>
        <div className=' absolute -left-44 top-11'>
        <div className="absolute -left-12 top-0">
              <div className="grid grid-cols-6 gap-1">
                {Array(36).fill().map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                ))}
              </div>
            </div>
             {/* Circle Design */}
             <div className="w-32 h-32 rounded-full border-8 border-blue-100"></div>
             </div>

            

        {/* Main card with blue background */}
        <div className="bg-blue-600 p-6 md:p-12 rounded-lg relative shadow-lg z-10">
          <div className="flex flex-col md:flex-row">
            {/* Left content area with controlled width */}
            <div className="max-w-sm pr-4 md:pr-12 mb-6 md:mb-0 z-10">
              {/* Testimonial logo */}
              <div className="flex items-center mb-6">
                <div className="w-6 h-6 rounded-full bg-blue-300/80 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                <span className="text-white text-xs ml-2 opacity-80"> Alumni</span>
              </div>

              {/* Name */}
              <h2 className="text-2xl font-bold text-white mb-4">Student</h2>
              <h3 className="text-sm text-white/70 mb-6">Bachelor of Business (BBA-Finance)</h3>

              {/* Testimonial text */}
              <p className="text-white/90 text-justify mr-10 mb-8">
              “The BBA-Finance (Hons) program equipped me with real-world
               financial acumen and leadership skills that set me apart in the 
               corporate world. The hands-on experience and mentorship from industry 
               experts made all the difference in shaping my career.”
              </p>

              {/* Rating stars */}
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-blue-300 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Right side with image - positioned to float above the blue background */}
            <div className="md:absolute md:right-8 md:top-0 md:-mt-8 z-20 ">
              <div className="relative">
                {/* Image container with no rotation, elevated position */}
                <div className="w-full md:w-60 h-80 ">
                  <img 
                    src="/img/bachelor-1.webp" 
                    alt="Professional in suit" 
                    className="w-full h-full object-cover "
                  />
                </div>

                {/* "What they say about us" label */}
                <div className="absolute -right-2 md:-right-6 bottom-12 md:bottom-8">
                  <div className="bg-white p-2 shadow-lg">
                    <p className="text-blue-600 font-bold text-xs leading-tight">
                      WHAT THEY<br />SAY<br />ABOUT US
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> {/* End of blue card */}
      </div>
    </div>
  );
}
