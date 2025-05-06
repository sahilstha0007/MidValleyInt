import React from 'react';
import careerPathData from '../datas/CareerPath';

const CareerPath = () => {
  const { 
    frontImage, 
    title, 
    subtitle, 
    breadcrumbPath, 
    description, 
    universities
  } = careerPathData;

  return (
    <div className="bg-gray-100 font-sans">
      {/* Front Image */}
      <div className="relative">
        <img
          src={frontImage}
          alt={title}
          className="w-full max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-[70vh] xl:max-h-[80vh] object-cover object-center"
          loading="lazy"
        />
      </div>

      {/* Breadcrumb Section */}
      <div className="bg-[#003044] text-white py-4 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm">
            {breadcrumbPath.split('>').map((item, index, array) => (
              <React.Fragment key={index}>
                {index > 0 && <span className="mx-1">&gt;</span>}
                {index === array.length - 1 ? 
                  <span className="text-[#F1592D] font-bold">{item.trim()}</span> : 
                  <span>{item.trim()}</span>
                }
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
      <div className="m-20"></div>

      {/* Introduction Section */}
      <div className="bg-white mx-4 sm:mx-20 my-4 p-4 sm:p-5 md:p-30 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-black mb-6 text-center">{title}</h1>
        <h4 className="text-xl md:text-2xl font-normal text-center text-gray-700 mb-6">{subtitle}</h4>
        <div className="max-w-4xl mx-auto">
          {description.map((paragraph, index) => (
            <p key={index} className="mb-5 leading-relaxed text-gray-700 text-justify">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* University Cards Section */}
      <div className="mx-4 sm:mx-30 my-12 p-4 sm:p-5 md:p-20 rounded-lg">
        <h2 className="text-3xl font-bold text-black text-center mb-10">Our Partner Universities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {universities.map((university, index) => (
            <div key={index} className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-2.5 hover:shadow-xl transition-all duration-300">
              {/* Decorative elements */}
              <div className={`absolute top-0 ${index % 2 === 0 ? 'left-0' : 'right-0'} w-16 h-16 ${university.decorations.circle1} rounded-full opacity-70`}></div>
              <div className={`absolute bottom-1/4 ${index % 2 === 0 ? 'left-5' : 'right-5'} w-6 h-6 ${university.decorations.circle2} rounded-full`}></div>
              <div className={`absolute top-8 ${index % 2 === 0 ? 'right-5' : 'left-5'} w-12 h-12 ${university.decorations.shape} transform rotate-${index % 2 === 0 ? '45' : '12'}`}></div>
              
              <div className="p-6 relative z-10">
                <h3 className="text-2xl font-bold mb-2 text-blue-900">{university.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{university.transferFrom}</p>
                <h4 className="text-lg font-semibold mb-5 text-gray-700 leading-snug">{university.program}</h4>
                {university.altProgram && (
                  <>
                    <p className="text-center font-semibold my-4 text-gray-500">OR</p>
                    <h4 className="text-lg font-semibold mb-5 text-gray-700 leading-snug">{university.altProgram}</h4>
                  </>
                )}
                
                {/* University Image - Simplified */}
                <div className="mb-6 overflow-hidden rounded-lg shadow-inner">
                  <img
                    src={university.image}
                    alt={`${university.name} campus`}
                    className="w-full h-56 object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/placeholder-university.webp";
                    }}
                  />
                </div>
                
                <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                  {university.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="mb-3">
                      <span className="block font-semibold text-sm text-gray-500 mb-1">{detail.label}:</span>
                      <span className="text-base text-gray-800">{detail.value}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full py-2.5 font-semibold text-base bg-[#003044] hover:bg-blue-950 text-white rounded transition-colors duration-300">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerPath;
