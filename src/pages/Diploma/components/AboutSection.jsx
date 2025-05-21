import React from 'react';

const AboutSection = ({ aboutContent, aboutImages, isCulinary, isPatisserie, isBarista }) => {
  return (
    <div className="mx-4 sm:mx-20 my-4 p-4 sm:p-5 md:p-20 rounded-lg lg-mb-8 relative overflow-hidden">
      {/* Course-specific floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {isCulinary && (
          <>
            <div className="absolute top-5 left-5 w-16 h-16 opacity-10 animate-pulse">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="20" r="15" stroke="#003044" strokeWidth="2" fill="none" />
                <path d="M50,35 L50,95" stroke="#003044" strokeWidth="2" />
                <path d="M30,50 L70,50" stroke="#003044" strokeWidth="2" />
                <path d="M30,70 L70,70" stroke="#003044" strokeWidth="2" />
              </svg>
            </div>
            <div className="absolute bottom-10 right-10 w-24 h-24 opacity-5 animate-spin" style={{animationDuration: '20s'}}>
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20,50 A30,30 0 1,1 80,50 A30,30 0 1,1 20,50" stroke="#003044" strokeWidth="2" fill="none" />
                <path d="M35,50 A15,15 0 1,1 65,50 A15,15 0 1,1 35,50" stroke="#003044" strokeWidth="2" fill="none" />
                <path d="M50,20 L50,35" stroke="#003044" strokeWidth="2" />
                <path d="M50,65 L50,80" stroke="#003044" strokeWidth="2" />
                <path d="M20,50 L35,50" stroke="#003044" strokeWidth="2" />
                <path d="M65,50 L80,50" stroke="#003044" strokeWidth="2" />
              </svg>
            </div>
          </>
        )}
        
        {isPatisserie && (
          <>
            <div className="absolute top-8 left-6 w-20 h-20 opacity-10" style={{animation: 'float 7s ease-in-out infinite alternate'}}>
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10,70 Q50,90 90,70 L90,40 Q50,20 10,40 Z" stroke="#F1592D" strokeWidth="2" fill="none" />
                <path d="M10,40 Q50,60 90,40" stroke="#F1592D" strokeWidth="1.5" fill="none" />
                <circle cx="50" cy="30" r="8" stroke="#F1592D" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
            <div className="absolute bottom-5 right-8 w-16 h-16 opacity-10" style={{animation: 'spin 15s linear infinite'}}>
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" stroke="#F1592D" strokeWidth="1.5" fill="none" />
                <path d="M50,10 L50,90" stroke="#F1592D" strokeWidth="1.5" />
                <path d="M10,50 L90,50" stroke="#F1592D" strokeWidth="1.5" />
                <path d="M20,20 L80,80" stroke="#F1592D" strokeWidth="1.5" />
                <path d="M20,80 L80,20" stroke="#F1592D" strokeWidth="1.5" />
              </svg>
            </div>
          </>
        )}
        
        {isBarista && (
          <>
            <div className="absolute top-6 left-8 w-16 h-16 opacity-10" style={{animation: 'rise 8s ease-in-out infinite'}}>
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30,80 L70,80 L80,30 L20,30 Z" stroke="#603913" strokeWidth="2" fill="none" />
                <path d="M35,30 C35,20 65,20 65,30" stroke="#603913" strokeWidth="2" fill="none" />
                <path d="M30,55 Q50,45 70,55" stroke="#603913" strokeWidth="1.5" fill="none" strokeDasharray="3,2" />
              </svg>
            </div>
            <div className="absolute bottom-10 right-10 w-20 h-20 opacity-5" style={{animation: 'bounce 6s ease-in-out infinite'}}>
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" stroke="#603913" strokeWidth="1.5" fill="none" />
                <circle cx="50" cy="50" r="5" stroke="#603913" strokeWidth="1.5" fill="none" />
                <circle cx="30" cy="40" r="4" stroke="#603913" strokeWidth="1" fill="none" />
                <circle cx="70" cy="40" r="4" stroke="#603913" strokeWidth="1" fill="none" />
                <circle cx="40" cy="70" r="3" stroke="#603913" strokeWidth="1" fill="none" />
                <circle cx="60" cy="70" r="3" stroke="#603913" strokeWidth="1" fill="none" />
              </svg>
            </div>
          </>
        )}
      </div>

      <h2 className="text-black text-3xl font-bold text-center mb-6 relative z-10">
        {aboutContent.heading}
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="bg-[#003044] text-white p-4 rounded-xl flex-1">
          <p className="text-lg leading-relaxed text-justify">{aboutContent.text}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 flex-1">
          {aboutImages.map((img, index) => (
            <img
              src={img}
              alt={`About course ${index + 1}`}
              key={index}
              className="rounded-lg object-cover w-full h-auto sm:h-40 md:h-45 lg:h-50"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
