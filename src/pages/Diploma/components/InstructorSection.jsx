import React from 'react';

const InstructorSection = ({ instructorData, isCulinary, isPatisserie, isBarista }) => {
  if (!instructorData) return null;

  return (
    <div className="bg-white p-4 mt-15 sm:mt-24 sm:p-8 lg:p-12 rounded-lg shadow-md lg-mb-8 relative overflow-hidden">
      {/* Add floating elements based on course type */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {isCulinary && (
          <div className="absolute top-0 right-0 w-40 h-40 opacity-[0.03]">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20,20 L80,20 L80,80 L20,80 Z" stroke="#003044" strokeWidth="1" fill="none" />
              <path d="M30,30 L70,30 L70,70 L30,70 Z" stroke="#003044" strokeWidth="1" fill="none" />
              <path d="M40,40 L60,40 L60,60 L40,60 Z" stroke="#003044" strokeWidth="1" fill="none" />
              <path d="M20,20 L40,40" stroke="#003044" strokeWidth="0.5" />
              <path d="M80,20 L60,40" stroke="#003044" strokeWidth="0.5" />
              <path d="M20,80 L40,60" stroke="#003044" strokeWidth="0.5" />
              <path d="M80,80 L60,60" stroke="#003044" strokeWidth="0.5" />
            </svg>
          </div>
        )}
        
        {isPatisserie && (
          <div className="absolute top-0 right-0 w-40 h-40 opacity-[0.03]">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="30" stroke="#F1592D" strokeWidth="1" fill="none" />
              <path d="M30,60 Q50,80 70,60" stroke="#F1592D" strokeWidth="1" fill="none" />
              <path d="M30,40 Q50,20 70,40" stroke="#F1592D" strokeWidth="1" fill="none" />
              <circle cx="50" cy="50" r="5" stroke="#F1592D" strokeWidth="1" fill="none" />
            </svg>
          </div>
        )}
        
        {isBarista && (
          <div className="absolute top-0 right-0 w-40 h-40 opacity-[0.03]">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30,70 L70,70 L65,40 L35,40 Z" stroke="#603913" strokeWidth="1" fill="none" />
              <ellipse cx="50" cy="35" rx="15" ry="5" stroke="#603913" strokeWidth="1" fill="none" />
              <path d="M35,55 Q50,65 65,55" stroke="#603913" strokeWidth="0.8" fill="none" strokeDasharray="1,1" />
              <path d="M40,40 L40,25" stroke="#603913" strokeWidth="0.8" />
              <path d="M60,40 L60,25" stroke="#603913" strokeWidth="0.8" />
            </svg>
          </div>
        )}
      </div>
      
      <h3 className="text-2xl font-bold mb-6 text-center text-black relative z-10">Meet The Instructor</h3>
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-shrink-0 w-full lg:w-1/3">
          <img
            src={instructorData.image}
            alt={instructorData.name}
            className="w-full h-auto sm:h-[50vh] lg:h-[60vh] object-cover rounded-lg"
          />
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-bold text-black mb-2">{instructorData.name}</h4>
          <p className="text-sm font-semibold text-gray-600 mb-4">{instructorData.title}</p>
          {instructorData.description.map((paragraph, index) => (
            <p key={index} className="text-gray-700 text-justify leading-relaxed mt-4 px-4 sm:px-0">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
