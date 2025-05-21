import React from 'react';
import { animationStyles } from './animations';

const OverviewSection = ({ title, overview, additionalDetails }) => {
  return (
    <div className="bg-white mx-4 sm:mx-20 my-4 p-4 sm:p-5 md:p-20 rounded-lg shadow-md lg-mb-8 relative overflow-hidden">
      {/* Decorative culinary elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Chef hat */}
        <div style={{
          position: 'absolute',
          top: '5%',
          left: '5%',
          width: '60px',
          height: '60px',
          opacity: 0.2,
          animation: 'float 8s ease-in-out infinite'
        }}>
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25,80 L75,80 C85,80 95,70 95,55 C95,40 85,30 75,30 C75,15 65,5 50,5 C35,5 25,15 25,30 C15,30 5,40 5,55 C5,70 15,80 25,80 Z" 
              stroke="#F1592D" 
              strokeWidth="3"
              fill="none" />
            <rect x="25" y="80" width="50" height="10" fill="#F1592D" fillOpacity="0.2" />
          </svg>
        </div>
        
        {/* Whisk */}
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '50px',
          height: '50px',
          opacity: 0.2,
          animation: 'spin 12s linear infinite'
        }}>
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="50" y1="10" x2="50" y2="90" stroke="#003044" strokeWidth="4" />
            <path d="M30,15 Q50,30 70,15" stroke="#003044" strokeWidth="2" fill="none" />
            <path d="M30,25 Q50,40 70,25" stroke="#003044" strokeWidth="2" fill="none" />
            <path d="M30,35 Q50,50 70,35" stroke="#003044" strokeWidth="2" fill="none" />
          </svg>
        </div>
        
        {/* Plate */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '-5%',
          width: '100px',
          height: '100px',
          opacity: 0.15,
          animation: 'slideIn 15s ease-in-out infinite'
        }}>
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" stroke="#003044" strokeWidth="2" fill="none" />
            <circle cx="50" cy="50" r="35" stroke="#003044" strokeWidth="1" fill="none" />
          </svg>
        </div>
        
        {/* Coffee/Steam */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '40px',
          height: '40px',
          opacity: 0.2,
          animation: 'rise 7s ease-in-out infinite'
        }}>
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30,90 C60,90 70,80 70,70 C70,60 60,55 50,55 C40,55 30,60 30,70 C30,80 40,90 70,90" stroke="#F1592D" strokeWidth="2" fill="none" />
            <path d="M40,55 C40,55 45,40 50,40 C55,40 60,55 60,55" stroke="#F1592D" strokeWidth="2" fill="none" strokeDasharray="2,2" />
            <path d="M45,40 C45,40 50,30 55,30" stroke="#F1592D" strokeWidth="2" fill="none" strokeDasharray="2,2" />
            <path d="M50,30 C50,30 55,20 60,20" stroke="#F1592D" strokeWidth="2" fill="none" strokeDasharray="2,2" />
          </svg>
        </div>
        
        {/* Knife */}
        <div style={{
          position: 'absolute',
          bottom: '5%',
          left: '10%',
          width: '80px',
          height: '30px',
          opacity: 0.2,
          animation: 'slideRight 10s ease-in-out infinite'
        }}>
          <svg viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5,15 L80,5 L95,15 L80,25 L5,15" stroke="#003044" strokeWidth="2" fill="none" />
            <line x1="80" y1="5" x2="80" y2="25" stroke="#003044" strokeWidth="2" />
          </svg>
        </div>
        
        {/* Pastry */}
        <div style={{
          position: 'absolute',
          top: '75%',
          right: '20%',
          width: '45px',
          height: '45px',
          opacity: 0.15,
          animation: 'bounce 9s ease-in-out infinite'
        }}>
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20,70 C20,40 40,20 50,20 C60,20 80,40 80,70 L20,70 Z" stroke="#F1592D" strokeWidth="2" fill="none" />
            <path d="M30,40 C30,40 50,50 70,40" stroke="#F1592D" strokeWidth="1" fill="none" />
            <path d="M30,55 C30,55 50,65 70,55" stroke="#F1592D" strokeWidth="1" fill="none" />
            <circle cx="50" cy="25" r="5" stroke="#F1592D" strokeWidth="1" fill="none" />
          </svg>
        </div>
      </div>
      
      {/* Add global keyframe styles */}
      <style jsx="true" global="true">{animationStyles}</style>
      
      <h3 className="text-2xl font-bold mb-4 text-center text-black relative z-10">{title}</h3>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
        <a
          href="/path/to/brochure.pdf" // Replace with the actual path to the brochure file
          download
          className="bg-[#0f4c5c] text-white px-6 py-2 rounded-full hover:bg-[#083a45] transition duration-300 text-center"
        >
          Download Brochure
        </a>
      </div>
      <p className="text-gray-700 mb-4 text-justify whitespace-pre-line px-0 sm:px-10">{overview}</p>
      <ul className="list-disc list-inside text-gray-700 space-y-2 px-0 sm:px-10">
        {additionalDetails.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default OverviewSection;
