import React from 'react';

const CareerPathwaysSection = ({ careerPathways, isCulinary, isPatisserie, isBarista }) => {
  return (
    <div className="p-6 rounded-lg mb-8 mt-15 sm:mt-24 bg-white shadow-md relative overflow-hidden">
      {/* Add course-specific background patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {isCulinary && (
          <div className="absolute inset-0 opacity-[0.03]" style={{background: 'repeating-linear-gradient(45deg, #003044, #003044 10px, transparent 10px, transparent 20px)'}}>
          </div>
        )}
        
        {isPatisserie && (
          <div className="absolute inset-0 opacity-[0.03]" style={{background: 'radial-gradient(circle, #F1592D 2px, transparent 2px)', backgroundSize: '20px 20px'}}>
          </div>
        )}
        
        {isBarista && (
          <div className="absolute inset-0 opacity-[0.03]" style={{background: 'repeating-radial-gradient(circle at 20px 20px, #603913, #603913 2px, transparent 2px, transparent 20px)'}}>
          </div>
        )}
      </div>
      
      <h3 className="text-2xl font-bold mb-4 text-center text-black relative z-10">Career Pathways</h3>
      {careerPathways.description.map((paragraph, index) => (
        <p key={index} className="text-gray-700 mb-4 text-justify px-4 sm:px-10 lg:px-20">
          {paragraph}
        </p>
      ))}
      <div className="px-4 sm:px-10 lg:px-20">
        <img
          src={careerPathways.image}
          alt="Career Pathways"
          className="w-full h-auto rounded-lg mb-4"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-4 px-4 sm:px-10 lg:px-20">
        {careerPathways.companyImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Company ${index + 1}`}
            className="h-12 sm:h-16 lg:h-20 object-contain"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default CareerPathwaysSection;
