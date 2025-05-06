import React from 'react';
import { partnerData } from '../../datas/Partners';

const Partners = () => {
  const {
    frontImage,
    title,
    description,
    universityPartner,
    viceChancellorMessage,
    vicePresidentMessage,
    diplomaPartner,
    pteTestCenter,
    partneringInstitutes,
  } = partnerData;

  return (
    <div className="bg-gray-100">
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
            Home &gt; Patners &gt;{" "}
            <span className="text-[#F1592D] font-bold">{title}</span>
          </p>
        </div>
      </div>
      <div className='m-20'></div>

      {/* Title and Description */}
      <div className="bg-white mx-4 sm:mx-20 my-4 p-4 sm:p-5 md:p-30 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-black mb-6 text-center">{title}</h1>
        <p className="text-gray-700 text-lg whitespace-pre-line text-justify">{description}</p>
      </div>

      {/* University Partner Section */}
      <div className="mx-4 sm:mx-30 my-4 p-4 sm:p-5 md:p-20 rounded-lg">
        <h2 className="text-3xl font-bold text-black text-center mb-8">
          Our University Partner
        </h2>

        <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-4">
          <div className="flex-1 bg-[#0f4c5c] text-white p-6 sm:p-8 lg:p-10 rounded-lg">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">{universityPartner.patnerCompany}</h2>
            <a href="https://help.edu.my" target="_blank" rel="noopener noreferrer">
              <img
                src={universityPartner.logo}
                alt={`${universityPartner.patnerCompany} Logo`}
                className="w-24 sm:w-32 h-auto bg-white rounded-2xl mb-4"
              />
            </a>
            <p className="text-md text-justify leading-relaxed">
              {universityPartner.description}
            </p>
          </div>

          <div className="relative w-full lg:w-1/2 mb-10 lg:mb-0">
            {/* Decorative elements that scale with container */}
            <div className="absolute top-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-blue-100 rounded-full opacity-70"></div>
            <div className="absolute bottom-1/4 left-5 w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-full"></div>
            <div className="absolute top-8 right-5 w-12 h-12 sm:w-16 sm:h-16 bg-pink-200 transform rotate-45"></div>
            <div className="absolute right-1/4 top-1/3 w-0 h-0 
              border-l-[20px] sm:border-l-[35px] border-l-transparent 
              border-b-[35px] sm:border-b-[60px] border-b-yellow-400 
              border-r-[20px] sm:border-r-[35px] border-r-transparent"></div>
              
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg pt-10 px-4 sm:px-8 lg:px-6">
              <img
                src={universityPartner.image}
                alt={universityPartner.patnerCompany}
                className="w-full h-auto rounded-lg relative z-10"
              />
            </div>
            
            <svg className="hidden sm:block absolute top-10 right-10 sm:right-24 w-20 sm:w-32 h-20 sm:h-32 text-blue-400" viewBox="0 0 100 100" fill="none">
              <path d="M20 40C40 10 60 50 80 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            
            <div
              className="
                absolute -bottom-5 -left-2 sm:-left-8 
                w-3/4 max-w-[220px] sm:max-w-xs
                bg-white p-3 sm:p-4 rounded-lg shadow-md z-10
              "
            >
              <p className="text-black text-xs sm:text-sm font-semibold text-left">
                Your Gateway to an<br />International Degree in Nepal
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages Section */}
      <div className="bg-white mx-4 sm:mx-20 my-4 mt-10 p-4 sm:p-5 md:p-30 rounded-lg shadow-md overflow-hidden">
        <div className="relative flex flex-col lg:flex-row items-center gap-8">
          {/* More varied decorative elements for first message */}
          <div className="absolute top-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-blue-100 rounded-full opacity-70"></div>
          <div className="absolute bottom-1/4 left-5 w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-full"></div>
          <div className="absolute top-8 right-5 w-12 h-12 sm:w-16 sm:h-16 bg-pink-200 transform rotate-45"></div>
          
          {/* Added triangle decoration */}
          <div className="absolute right-1/4 top-1/3 w-0 h-0 
            border-l-[15px] sm:border-l-[25px] border-l-transparent 
            border-b-[25px] sm:border-b-[40px] border-b-blue-300 
            border-r-[15px] sm:border-r-[25px] border-r-transparent"></div>
          
          {/* Added zigzag line */}
          <svg className="hidden sm:block absolute bottom-10 right-1/4 w-24 sm:w-32 h-12 sm:h-16 text-indigo-300" viewBox="0 0 100 30" fill="none">
            <path d="M0 15 L20 5 L40 25 L60 5 L80 25 L100 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          </svg>
          
          <div className="flex-1 lg:pr-20 relative z-10">
            <h3 className="text-2xl font-bold text-black mb-4">{viceChancellorMessage.title}</h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line text-justify">{viceChancellorMessage.text}</p>
            <p className="mt-4 font-bold">{viceChancellorMessage.profName}</p>
            <p className="text-sm text-gray-600">{viceChancellorMessage.position}</p>
          </div>
          <div className="flex-shrink-0 w-full lg:w-1/3 relative z-10">
            <img
              src={viceChancellorMessage.image}
              alt="Vice Chancellor"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Horizontal Breaker */}
        <div className="my-8 mt-20 border-t border-gray-300"></div>

        <div className="relative flex flex-col-reverse lg:flex-row items-center gap-8 mt-20">
          {/* Enhanced decorative elements for second message */}
          <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 bg-yellow-100 rounded-full opacity-70"></div>
          <div className="absolute bottom-1/4 right-5 w-6 h-6 sm:w-8 sm:h-8 bg-orange-600 rounded-full"></div>
          <div className="absolute top-8 left-5 w-12 h-12 sm:w-16 sm:h-16 bg-green-200 transform rotate-12"></div>
          
          {/* Added diamond decoration */}
          <div className="absolute left-1/4 top-1/3 w-10 h-10 sm:w-16 sm:h-16 bg-teal-300 transform rotate-45"></div>
          
          {/* Added curved line */}
          <svg className="hidden sm:block absolute top-1/2 left-1/3 w-24 sm:w-32 h-24 sm:h-32 text-orange-300" viewBox="0 0 100 100" fill="none">
            <path d="M90 20 C70 0, 30 0, 10 20 S0 70, 20 90" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          </svg>
          
          <div className="flex-shrink-0 w-full lg:w-1/3 relative z-10">
            <img
              src={vicePresidentMessage.image}
              alt="Vice President"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="flex-1 lg:pl-20 relative z-10">
            <h3 className="text-2xl font-bold text-black mb-4">{vicePresidentMessage.title}</h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line text-justify">{vicePresidentMessage.text}</p>
            <p className="mt-4 font-bold">{vicePresidentMessage.profName}</p>
            <p className="text-sm text-gray-600">{vicePresidentMessage.position}</p>
          </div>
        </div>
      </div>

      {/* Diploma Partner Section */}
      <div className="mx-4 sm:mx-30 my-4 p-4 sm:p-5 md:p-20 rounded-lg">
        <h2 className="text-3xl font-bold text-black text-center mb-8">
          {diplomaPartner.title}
        </h2>

        <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-4">
          <div className="flex-1 bg-[#0f4c5c] text-white p-6 sm:p-8 lg:p-10 rounded-lg">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">{diplomaPartner.subheading}</h2>
            <a href="https://www.cityandguilds.com" target="_blank" rel="noopener noreferrer">
              <img
                src={diplomaPartner.logo}
                alt={`${diplomaPartner.subheading} Logo`}
                className="w-24 sm:w-32 h-auto bg-white rounded-2xl mb-4"
              />
            </a>
            <p className="text-md text-justify leading-relaxed">
              {diplomaPartner.description}
            </p>
          </div>

          <div className="relative w-full lg:w-1/2 mb-10 lg:mb-0">
            {/* Decorative elements that scale with container */}
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 bg-yellow-100 rounded-full opacity-70"></div>
            <div className="absolute bottom-1/4 right-5 w-6 h-6 sm:w-8 sm:h-8 bg-orange-600 rounded-full"></div>
            <div className="absolute top-8 left-5 w-12 h-12 sm:w-16 sm:h-16 bg-green-200 transform rotate-12"></div>
            <div className="absolute left-1/4 top-1/3 w-0 h-0 
              border-l-[20px] sm:border-l-[35px] border-l-transparent 
              border-b-[35px] sm:border-b-[60px] border-b-teal-400 
              border-r-[20px] sm:border-r-[35px] border-r-transparent"></div>
            
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg pt-10 px-4 sm:px-8 lg:px-6">
              <img
                src={diplomaPartner.image}
                alt={diplomaPartner.subheading}
                className="w-full h-auto rounded-lg relative z-10"
              />
            </div>
            
            <svg className="hidden sm:block absolute bottom-20 left-10 sm:left-16 w-20 sm:w-32 h-20 sm:h-32 text-teal-400" viewBox="0 0 100 100" fill="none">
              <path d="M80 60C60 90 40 50 20 80" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            
            <div
              className="
                absolute -bottom-5 -left-2 sm:-left-8
                w-3/4 max-w-[220px] sm:max-w-xs
                bg-white p-3 sm:p-4 rounded-lg shadow-md z-10
              "
            >
              <p className="text-black text-xs sm:text-sm font-semibold text-left">
                Industry-Ready Education <br /> Built with Practicality in Mind
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* PTE Test Center Section */}
      <div className="mx-4 sm:mx-30 my-4 p-4 sm:p-5 md:p-20 rounded-lg">
        <h2 className="text-3xl font-bold text-black text-center mb-8">
          {pteTestCenter.title}
        </h2>

        <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-4">
          <div className="flex-1 bg-[#0f4c5c] text-white p-6 sm:p-8 lg:p-10 rounded-lg">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">{pteTestCenter.subheading}</h2>
            <a href="https://pearsonpte.com" target="_blank" rel="noopener noreferrer">
              <img
                src={pteTestCenter.logo}
                alt={`${pteTestCenter.subheading} Logo`}
                className="w-24 sm:w-32 h-auto bg-white rounded-2xl mb-4"
              />
            </a>
            <p className="text-md text-justify leading-relaxed">
              {pteTestCenter.description}
            </p>
          </div>

          <div className="relative w-full lg:w-1/2 mb-10 lg:mb-0 pt-10 px-4 sm:px-8 lg:px-6">
            {/* Decorative elements that scale with container */}
            <div className="absolute top-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-blue-100 rounded-full opacity-70"></div>
            <div className="absolute bottom-1/4 left-5 w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-full"></div>
            <div className="absolute top-8 right-5 w-12 h-12 sm:w-16 sm:h-16 bg-pink-200 transform rotate-45"></div>
            <div className="absolute right-1/4 top-1/3 w-0 h-0 
              border-l-[20px] sm:border-l-[35px] border-l-transparent 
              border-b-[35px] sm:border-b-[60px] border-b-yellow-400 
              border-r-[20px] sm:border-r-[35px] border-r-transparent"></div>
            
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
              <img 
                src={pteTestCenter.image} 
                alt={pteTestCenter.subheading}
                className="rounded-lg w-full h-auto relative z-10"
              />
              
              <div className="absolute left-0 bottom-1/3 transform -translate-x-1/4 sm:-translate-x-1/3 z-20">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-600 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <svg className="hidden sm:block absolute top-10 right-10 sm:right-24 w-20 sm:w-32 h-20 sm:h-32 text-blue-400" viewBox="0 0 100 100" fill="none">
              <path d="M20 40C40 10 60 50 80 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            
            <div className="absolute -bottom-5 -left-2 sm:-left-8 w-3/4 max-w-[220px] sm:max-w-xs bg-white p-3 sm:p-4 rounded-lg shadow-md z-20">
              <p className="text-black text-xs sm:text-sm font-semibold text-left">
                Start Your<br />English Proficiency Journey
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Partnering Institutes Section */}
      <div className="bg-white mx-4 sm:mx-20 my-4 p-4 sm:p-5 md:p-30 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-black text-center mb-8">{partneringInstitutes.title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {partneringInstitutes.imagePaths.map((image, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
              <img src={image} alt={`Partner ${index + 1}`} className="w-full h-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
