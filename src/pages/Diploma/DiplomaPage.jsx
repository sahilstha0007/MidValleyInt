import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import courses from '../../datas/Diploma/index';
import Card from '../../components/Elements/Card';

const DiplomaPage = () => {
  const { course } = useParams(); // Get the course parameter from the route
  const courseData = courses[course]; // Dynamically fetch the course data

  if (!courseData) {
    return <div className="text-center text-red-500">Course not found!</div>;
  }

  // Define course categories for decoration variations
  const isCulinary = course === 'DiplomaInFoodPreparationCulinaryArtsLevel2' || 
                    course === 'AdvanceDiplomaInCulinaryArtsAndSupervisionLevel3';
  
  const isPatisserie = course === 'DiplomaInFoodPreparationCulinaryArtsPatisserieLevel2' || 
                       course === 'DiplomaInProfessionalPatisserieAndConfectionaryLevel3' || 
                       course === 'IVQCertificateInProfessionalPatisserieAndConfectionary';
  
  const isBarista = course === 'InternationalAwardInBaristaSkills';

  // useState for FAQ toggle
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const { instructorData, testimonials = [], faqs = [] } = courseData; // Provide default values
  const [activeTab, setActiveTab] = useState("program");
  return (
    <div className="bg-gray-100">
      {/* Large Static Image with floating elements */}
      <div className="relative">
        <img
          src={courseData.frontImage}
          alt="Course main image"
          className="w-full max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-[70vh] xl:max-h-[80vh] object-cover object-center"
          loading="lazy"
        />
        {/* Hero section floating elements based on course type */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {isCulinary && (
            <>
              <div className="absolute top-[15%] right-[10%] w-16 h-16 opacity-40 animate-pulse">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30,20 L70,20 Q90,20 90,40 L90,60 Q90,80 70,80 L30,80 Q10,80 10,60 L10,40 Q10,20 30,20 Z" stroke="#fff" strokeWidth="2" fill="none" />
                  <rect x="45" y="20" width="10" height="60" fill="#fff" fillOpacity="0.6" />
                  <path d="M35,30 H65" stroke="#fff" strokeWidth="2" />
                  <path d="M30,40 H70" stroke="#fff" strokeWidth="2" />
                  <path d="M25,50 H75" stroke="#fff" strokeWidth="2" />
                  <path d="M35,60 H65" stroke="#fff" strokeWidth="2" />
                  <path d="M45,70 H55" stroke="#fff" strokeWidth="2" />
                </svg>
              </div>
              <div className="absolute bottom-[20%] left-[7%] w-20 h-20 opacity-40 animate-bounce" style={{animationDuration: '5s'}}>
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25,80 L75,80 C85,80 95,70 95,55 C95,40 85,30 75,30 C75,15 65,5 50,5 C35,5 25,15 25,30 C15,30 5,40 5,55 C5,70 15,80 25,80 Z" 
                    stroke="#fff" strokeWidth="3" fill="none" />
                </svg>
              </div>
            </>
          )}
          
          {isPatisserie && (
            <>
              <div className="absolute top-[10%] right-[15%] w-16 h-16 opacity-40 animate-pulse">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" stroke="#fff" strokeWidth="2" fill="none" />
                  <path d="M30,40 C40,20 60,20 70,40 L70,70 L30,70 L30,40 Z" stroke="#fff" strokeWidth="2" fill="none" />
                  <path d="M40,40 L40,25" stroke="#fff" strokeWidth="2" />
                  <path d="M60,40 L60,25" stroke="#fff" strokeWidth="2" />
                  <path d="M50,40 L50,20" stroke="#fff" strokeWidth="2" />
                </svg>
              </div>
              <div className="absolute bottom-[30%] left-[10%] w-14 h-14 opacity-40 animate-bounce" style={{animationDuration: '7s'}}>
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20,20 L80,20 L80,40 C80,62 65,80 50,80 C35,80 20,62 20,40 L20,20 Z" stroke="#fff" strokeWidth="2" fill="none" />
                  <path d="M30,20 C30,10 70,10 70,20" stroke="#fff" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </>
          )}
          
          {isBarista && (
            <>
              <div className="absolute top-[20%] right-[8%] w-16 h-16 opacity-40 animate-pulse">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30,90 C60,90 70,80 70,70 C70,60 60,55 50,55 C40,55 30,60 30,70 C30,80 40,90 70,90" stroke="#fff" strokeWidth="3" fill="none" />
                  <path d="M40,55 C40,55 45,40 50,40 C55,40 60,55 60,55" stroke="#fff" strokeWidth="2" fill="none" />
                  <path d="M45,40 C45,40 50,25 55,25" stroke="#fff" strokeWidth="2" fill="none" strokeDasharray="2,2" />
                </svg>
              </div>
              <div className="absolute bottom-[25%] left-[12%] w-12 h-12 opacity-40 animate-spin" style={{animationDuration: '15s'}}>
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="50" cy="50" rx="25" ry="35" transform="rotate(45 50 50)" stroke="#fff" strokeWidth="2" fill="none" />
                  <ellipse cx="50" cy="50" rx="15" ry="25" transform="rotate(-45 50 50)" stroke="#fff" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Breadcrumb Section with floating decorations */}
      <div className="bg-[#003044] text-white py-4 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-sm">
            Home &gt; City & Guilds &gt;{" "}
            <span className="text-[#F1592D] font-bold">{courseData.title}</span>
          </p>
        </div>
        
        {/* Course-specific floating elements in breadcrumb */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {isCulinary && (
            <div className="absolute right-[5%] top-1/2 transform -translate-y-1/2 w-8 h-8 opacity-10">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10,30 L90,30 L90,90 L10,90 Z" stroke="#fff" strokeWidth="2" fill="none" />
                <path d="M30,10 L70,10 L70,30 L30,30 Z" stroke="#fff" strokeWidth="2" fill="none" />
                <path d="M45,30 L55,30 L55,50 L45,50 Z" stroke="#fff" strokeWidth="2" fill="none" />
              </svg>
            </div>
          )}
          
          {isPatisserie && (
            <div className="absolute right-[8%] top-1/2 transform -translate-y-1/2 w-10 h-10 opacity-10">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20,70 C20,40 40,20 50,20 C60,20 80,40 80,70 L20,70 Z" stroke="#fff" strokeWidth="2" fill="none" />
                <path d="M30,40 C30,40 50,50 70,40" stroke="#fff" strokeWidth="1" fill="none" />
              </svg>
            </div>
          )}
          
          {isBarista && (
            <div className="absolute right-[7%] top-1/2 transform -translate-y-1/2 w-8 h-8 opacity-10">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="65" r="25" stroke="#fff" strokeWidth="2" fill="none" />
                <path d="M30,65 C30,65 40,45 50,45 C60,45 70,65 70,65" stroke="#fff" strokeWidth="2" fill="none" />
                <path d="M35,25 C35,15 65,15 65,25" stroke="#fff" strokeWidth="2" fill="none" />
                <path d="M40,25 L40,40" stroke="#fff" strokeWidth="2" />
                <path d="M60,25 L60,40" stroke="#fff" strokeWidth="2" />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/*for extra space*/}
      <div className='p-4'></div>
      
      {/* Overview section - existing decorative elements are good, but let's add more animations */}
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
        <style jsx="true" global="true">{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(5deg); }
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes slideIn {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(100px); }
          }
          @keyframes rise {
            0%, 100% { transform: translateY(0) scale(1); opacity: 0.2; }
            50% { transform: translateY(-20px) scale(0.8); opacity: 0.1; }
          }
          @keyframes slideRight {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(40px); }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          @keyframes rotateAndMove {
            0% { transform: rotate(0deg) translateX(0); }
            25% { transform: rotate(90deg) translateX(10px); }
            50% { transform: rotate(180deg) translateX(0); }
            75% { transform: rotate(270deg) translateX(-10px); }
            100% { transform: rotate(360deg) translateX(0); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.1; }
            50% { transform: scale(1.1); opacity: 0.2; }
          }
        `}</style>
        
        <h3 className="text-2xl font-bold mb-4 text-center text-black relative z-10">{courseData.title}</h3>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
          <a
            href="/path/to/brochure.pdf" // Replace with the actual path to the brochure file
            download
            className="bg-[#0f4c5c] text-white px-6 py-2 rounded-full hover:bg-[#083a45] transition duration-300 text-center"
          >
            Download Brochure
          </a>
        </div>
        <p className="text-gray-700 mb-4 text-justify whitespace-pre-line px-0 sm:px-10">{courseData.overview}</p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 px-0 sm:px-10">
          {courseData.additionalDetails.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>

        {/* About Section */}
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
                    <path d="M30,55 Q50,45 70,55" stroke="#603913" strokeWidth="1.5" fill="none" stroke-dasharray="3,2" />
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
            {courseData.aboutContent.heading}
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="bg-[#003044] text-white p-4 rounded-xl flex-1">
              <p className="text-lg leading-relaxed text-justify">{courseData.aboutContent.text}</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 flex-1">
              {courseData.aboutImages.map((img, index) => (
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

        <div className="container mx-auto px-4  py-8">
          {/* Program Overview */}
          <div className="bg-[rgba(241,89,45,0.10)] mx-4 sm:mx-20 my-4 p-4 sm:p-5 md:p-20 rounded-xl sm mb-8 relative overflow-hidden">
            {/* Course-specific decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {isCulinary && (
                <>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 opacity-5" style={{animation: 'spin 30s linear infinite'}}>
                    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="100" cy="100" r="80" stroke="#003044" strokeWidth="1" fill="none" />
                      <circle cx="100" cy="100" r="60" stroke="#003044" strokeWidth="1" fill="none" />
                      <circle cx="100" cy="100" r="40" stroke="#003044" strokeWidth="1" fill="none" />
                      <path d="M100,20 L100,180" stroke="#003044" strokeWidth="0.5" />
                      <path d="M20,100 L180,100" stroke="#003044" strokeWidth="0.5" />
                      <path d="M34,34 L166,166" stroke="#003044" strokeWidth="0.5" />
                      <path d="M34,166 L166,34" stroke="#003044" strokeWidth="0.5" />
                    </svg>
                  </div>
                </>
              )}
              
              {isPatisserie && (
                <>
                  <div className="absolute -top-5 -right-5 w-32 h-32 opacity-5" style={{animation: 'float 20s ease-in-out infinite alternate'}}>
                    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M40,100 C40,60 60,40 100,40 C140,40 160,60 160,100 C160,140 140,160 100,160 C60,160 40,140 40,100 Z" stroke="#F1592D" strokeWidth="1" fill="none" />
                      <path d="M70,70 C70,50 80,40 100,40 C120,40 130,50 130,70 C130,90 120,100 100,100 C80,100 70,90 70,70 Z" stroke="#F1592D" strokeWidth="1" fill="none" />
                      <path d="M70,130 C70,110 80,100 100,100 C120,100 130,110 130,130 C130,150 120,160 100,160 C80,160 70,150 70,130 Z" stroke="#F1592D" strokeWidth="1" fill="none" />
                    </svg>
                  </div>
                </>
              )}
              
              {isBarista && (
                <>
                  <div className="absolute -bottom-5 -right-5 w-36 h-36 opacity-5" style={{animation: 'pulse 15s ease-in-out infinite'}}>
                    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="100" cy="150" r="40" stroke="#603913" strokeWidth="1" fill="none" />
                      <path d="M60,150 C60,150 70,70 100,70 C130,70 140,150 140,150" stroke="#603913" strokeWidth="1" fill="none" />
                      <path d="M70,70 C70,50 130,50 130,70" stroke="#603913" strokeWidth="1" fill="none" />
                      <path d="M85,70 L85,50" stroke="#603913" strokeWidth="1" />
                      <path d="M115,70 L115,50" stroke="#603913" strokeWidth="1" />
                    </svg>
                  </div>
                </>
              )}
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
              <button
                onClick={() => setActiveTab("program")}
                className={`px-6 py-2 rounded-full flex items-center text-center transition duration-300 ${
                  activeTab === "program"
                    ? "bg-[#F1592D] text-white shadow-md"
                    : "bg-white text-[#F1592D] border border-[#F1592D] hover:bg-[#F1592D] hover:text-white hover:shadow-lg"
                }`}
              >
                Course Detail
              </button>
              <button
                onClick={() => setActiveTab("details")}
                className={`px-6 py-2 rounded-full flex items-center text-center transition duration-300 ${
                  activeTab === "details"
                    ? "bg-[#F1592D] text-white shadow-md"
                    : "bg-white text-[#F1592D] border border-[#F1592D] hover:bg-[#F1592D] hover:text-white hover:shadow-lg"
                }`}
              >
                Program Overview
              </button>
              <button
                onClick={() => setActiveTab("certification")}
                className={`px-6 py-2 rounded-full flex items-center text-center transition duration-300 ${
                  activeTab === "certification"
                    ? "bg-[#F1592D] text-white shadow-md"
                    : "bg-white text-[#F1592D] border border-[#F1592D] hover:bg-[#F1592D] hover:text-white hover:shadow-lg"
                }`}
              >
                Certification
              </button>
            </div>

            {/* Content */}
            {activeTab === "program" && (
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1 flex flex-col justify-center">
                  <img
                    src={courseData.programOverview.logo}
                    alt="City & Guilds logo"
                    className="w-32 h-32 sm:h-40 md:48 lg:h-56 object-contain mx-auto mb-6"
                  />
                  <p className="text-black leading-relaxed text-justify px-4">
                    {courseData.programOverview.description}
                  </p>
                </div>
                <div className="flex-1 bg-white p-6 rounded-xl">
                  <p className="text-gray-700 mb-6 text-justify">
                    Students will have the following criteria to fulfill before becoming a part of this course.
                  </p>
                  <div className="space-y-4">
                    {courseData.programOverview.requirements.map((req, index) => (
                      <div key={index} className="flex justify-between border-b pb-2">
                        <span className="font-bold">{req.label}</span>
                        <span>{req.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "details" && (
              <div className="p-6 rounded-xl text-gray-800">
                <p className="text-center mb-6 text-gray-700">
                  Some description on all the course materials and their sub-details explaining what you'll learn in this course.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {courseData.programOverview.topics.map((topic, index) => (
                    <div key={index} className="bg-[#fcded5] p-4 rounded-lg">
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "certification" && (
              <div className="flex justify-center">
                <img
                  src={courseData.programOverview.certificationImage}
                  alt="Certification"
                  className="rounded-xl shadow-lg w-full max-w-md object-contain"
                />
              </div>
            )}
          </div>


          {/* Career Pathways */}
          <div className="p-6 rounded-lg mb-8  mt-15 sm:mt-24 bg-white shadow-md relative overflow-hidden">
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
            {courseData.careerPathways.description.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-4 text-justify px-4 sm:px-10 lg:px-20">
                {paragraph}
              </p>
            ))}
            <div className="px-4 sm:px-10 lg:px-20">
              <img
                src={courseData.careerPathways.image}
                alt="Career Pathways"
                className="w-full h-auto rounded-lg mb-4"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-4 px-4 sm:px-10 lg:px-20">
              {courseData.careerPathways.companyImages.map((img, index) => (
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

          {/* Meet the Instructor Section */}
          {instructorData && (
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
                      <path d="M35,55 Q50,65 65,55" stroke="#603913" strokeWidth="0.8" fill="none" stroke-dasharray="1,1" />
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
          )}

          {/* Testimonials Section */}
          {testimonials.length > 0 && (
            <div className="bg-gray-100 mt-10 sm:mt-24 py-12 relative overflow-hidden">
              {/* Course-specific background patterns */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {isCulinary && (
                  <div className="absolute inset-0 opacity-[0.02]" style={{background: 'linear-gradient(90deg, #003044 1px, transparent 1px), linear-gradient(#003044 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
                  </div>
                )}
                
                {isPatisserie && (
                  <div className="absolute inset-0 opacity-[0.02]" style={{background: 'radial-gradient(#F1592D 1px, transparent 1px)', backgroundSize: '15px 15px'}}>
                  </div>
                )}
                
                {isBarista && (
                  <div className="absolute inset-0 opacity-[0.02]" style={{background: 'repeating-linear-gradient(-45deg, #603913, #603913 1px, transparent 1px, transparent 10px)'}}>
                  </div>
                )}
                
                {/* Floating icons */}
                {isCulinary && (
                  <>
                    <div className="absolute top-10 left-[5%] w-16 h-16 opacity-10 animate-float" style={{animationDuration: '8s'}}>
                      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30,20 L70,20 L70,80 L30,80 Z" stroke="#003044" strokeWidth="2" fill="none" />
                        <line x1="30" y1="50" x2="70" y2="50" stroke="#003044" strokeWidth="2" />
                        <line x1="50" y1="20" x2="50" y2="80" stroke="#003044" strokeWidth="2" />
                      </svg>
                    </div>
                  </>
                )}
                
                {isPatisserie && (
                  <>
                    <div className="absolute top-10 right-[5%] w-14 h-14 opacity-10 animate-bounce" style={{animationDuration: '9s'}}>
                      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30,80 C30,50 70,50 70,80" stroke="#F1592D" strokeWidth="2" fill="none" />
                        <path d="M20,80 L80,80" stroke="#F1592D" strokeWidth="2" />
                        <path d="M30,30 Q50,10 70,30" stroke="#F1592D" strokeWidth="2" fill="none" />
                        <path d="M30,30 L70,30" stroke="#F1592D" strokeWidth="2" />
                        <path d="M30,30 L30,80" stroke="#F1592D" strokeWidth="2" />
                        <path d="M70,30 L70,80" stroke="#F1592D" strokeWidth="2" />
                      </svg>
                    </div>
                  </>
                )}
                
                {isBarista && (
                  <>
                    <div className="absolute bottom-10 left-[8%] w-12 h-12 opacity-10 animate-pulse" style={{animationDuration: '6s'}}>
                      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="30" r="10" stroke="#603913" strokeWidth="2" fill="none" />
                        <path d="M45,40 L35,90" stroke="#603913" strokeWidth="2" />
                        <path d="M55,40 L65,90" stroke="#603913" strokeWidth="2" />
                        <path d="M35,60 L65,60" stroke="#603913" strokeWidth="2" />
                      </svg>
                    </div>
                  </>
                )}
              </div>
              
              <h3 className="text-2xl font-bold text-center text-black mb-8 relative z-10">
                What People Say About City and Guilds
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-10 lg:px-20 relative z-10">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-[#F1592D] text-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mb-4 object-cover"
                    />
                    <h4 className="text-lg font-bold mb-2">{testimonial.name}</h4>
                    <p className="text-sm font-semibold mb-2">{testimonial.title}</p>
                    <p className="text-sm">{testimonial.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQs Section */}
          {faqs.length > 0 && (
            <div className="bg-gray-100 py-12 relative overflow-hidden">
              {/* Course-specific side decorations */}
              <div className="absolute h-full w-12 left-0 top-0 overflow-hidden pointer-events-none">
                {isCulinary && (
                  <div className="absolute inset-y-0 left-0 w-12 opacity-10">
                    <div className="h-full" style={{background: 'repeating-linear-gradient(0deg, #003044, #003044 10px, transparent 10px, transparent 30px)'}}>
                    </div>
                  </div>
                )}
                
                {isPatisserie && (
                  <div className="absolute inset-y-0 left-0 w-12 opacity-10">
                    <div className="h-full" style={{background: 'repeating-radial-gradient(circle at 6px 30px, #F1592D, #F1592D 3px, transparent 3px, transparent 15px)'}}>
                    </div>
                  </div>
                )}
                
                {isBarista && (
                  <div className="absolute inset-y-0 left-0 w-12 opacity-10">
                    <div className="h-full" style={{background: 'repeating-linear-gradient(90deg, #603913, #603913 2px, transparent 2px, transparent 8px)'}}>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="absolute h-full w-12 right-0 top-0 overflow-hidden pointer-events-none">
                {isCulinary && (
                  <div className="absolute inset-y-0 right-0 w-12 opacity-10">
                    <div className="h-full" style={{background: 'repeating-linear-gradient(0deg, #003044, #003044 10px, transparent 10px, transparent 30px)'}}>
                    </div>
                  </div>
                )}
                
                {isPatisserie && (
                  <div className="absolute inset-y-0 right-0 w-12 opacity-10">
                    <div className="h-full" style={{background: 'repeating-radial-gradient(circle at 6px 30px, #F1592D, #F1592D 3px, transparent 3px, transparent 15px)'}}>
                    </div>
                  </div>
                )}
                
                {isBarista && (
                  <div className="absolute inset-y-0 right-0 w-12 opacity-10">
                    <div className="h-full" style={{background: 'repeating-linear-gradient(90deg, #603913, #603913 2px, transparent 2px, transparent 8px)'}}>
                    </div>
                  </div>
                )}
              </div>
              
              <h3 className="text-2xl font-bold text-center text-black mb-8 relative z-10">
                Frequently Asked Questions
              </h3>
              <div className="px-4 sm:px-10 lg:px-20 relative z-10">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="mb-4 rounded-lg border border-gray-300 bg-white overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className={`w-full flex justify-between items-center text-left px-4 py-3 font-semibold transition-colors duration-300 ${
                        openIndex === index ? "bg-[#0f4c5c] text-white" : "text-[#0f4c5c] hover:bg-gray-100"
                      }`}
                    >
                      <span>{faq.question}</span>
                      <span
                        className={`transform transition-transform duration-300 ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      >
                        {openIndex === index ? "▲" : "▼"}
                      </span>
                    </button>
                    {openIndex === index && (
                      <div className="px-4 pb-4 text-sm text-gray-100 bg-[#0f4c5c]">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Courses - Enhanced with decorations */}
          <div className="p-8 sm:px-20 relative overflow-hidden">
            {/* Dynamic decorations based on course type */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {isCulinary ? (
                <>
                  {/* Culinary Arts decorations */}
                  <div style={{
                    position: 'absolute',
                    top: '15%',
                    right: '8%',
                    width: '50px',
                    height: '50px',
                    opacity: 0.15,
                    animation: 'float 10s ease-in-out infinite'
                  }}>
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25,80 L75,80 C85,80 95,70 95,55 C95,40 85,30 75,30 C75,15 65,5 50,5 C35,5 25,15 25,30 C15,30 5,40 5,55 C5,70 15,80 25,80 Z" 
                        stroke="#F1592D" strokeWidth="3" fill="none" />
                    </svg>
                  </div>
                  
                  <div style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '5%',
                    width: '60px',
                    height: '20px',
                    opacity: 0.2,
                    animation: 'slideRight 8s ease-in-out infinite'
                  }}>
                    <svg viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5,15 L80,5 L95,15 L80,25 L5,15" stroke="#003044" strokeWidth="2" fill="none" />
                      <line x1="80" y1="5" x2="80" y2="25" stroke="#003044" strokeWidth="2" />
                    </svg>
                  </div>
                  
                  {/* Add new unique culinary decoration */}
                  <div style={{
                    position: 'absolute',
                    top: '40%',
                    left: '8%',
                    width: '40px',
                    height: '40px',
                    opacity: 0.15,
                    animation: 'spin 12s linear infinite'
                  }}>
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="50" cy="50" r="40" stroke="#003044" strokeWidth="2" fill="none" />
                      <circle cx="50" cy="50" r="35" stroke="#003044" strokeWidth="1" fill="none" />
                      <circle cx="50" cy="50" r="30" stroke="#003044" strokeWidth="1" fill="none" />
                      <line x1="10" y1="50" x2="90" y2="50" stroke="#003044" strokeWidth="1" />
                      <line x1="50" y1="10" x2="50" y2="90" stroke="#003044" strokeWidth="1" />
                    </svg>
                  </div>
                </>
              ) : isPatisserie ? (
                <>
                  {/* Patisserie/Confectionary decorations */}
                  <div style={{
                    position: 'absolute',
                    top: '10%',
                    right: '10%',
                    width: '45px',
                    height: '45px',
                    opacity: 0.15,
                    animation: 'bounce 7s ease-in-out infinite'
                  }}>
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20,70 C20,40 40,20 50,20 C60,20 80,40 80,70 L20,70 Z" stroke="#F1592D" strokeWidth="2" fill="none" />
                      <path d="M30,40 C30,40 50,50 70,40" stroke="#F1592D" strokeWidth="1" fill="none" />
                      <circle cx="50" cy="25" r="5" stroke="#F1592D" strokeWidth="1" fill="none" />
                    </svg>
                  </div>
                  
                  <div style={{
                    position: 'absolute',
                    bottom: '15%',
                    left: '8%',
                    width: '40px',
                    height: '40px',
                    opacity: 0.2,
                    animation: 'float 9s ease-in-out infinite'
                  }}>
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="50" cy="50" r="40" stroke="#F1592D" strokeWidth="2" fill="none" />
                      <path d="M30,40 C40,20 60,20 70,40" stroke="#F1592D" strokeWidth="2" fill="none" />
                      <path d="M30,60 C40,80 60,80 70,60" stroke="#F1592D" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                  
                  {/* Add new unique patisserie decoration */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    right: '20%',
                    width: '60px',
                    height: '60px',
                    opacity: 0.15,
                    animation: 'pulse 8s ease-in-out infinite'
                  }}>
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20,80 L80,80 L80,60 Q80,40 50,40 Q20,40 20,60 Z" stroke="#F1592D" strokeWidth="2" fill="none" />
                      <path d="M30,80 L30,60" stroke="#F1592D" strokeWidth="1" />
                      <path d="M50,80 L50,60" stroke="#F1592D" strokeWidth="1" />
                      <path d="M70,80 L70,60" stroke="#F1592D" strokeWidth="1" />
                      <path d="M40,30 Q50,20 60,30" stroke="#F1592D" strokeWidth="2" fill="none" />
                      <line x1="50" y1="20" x2="50" y2="40" stroke="#F1592D" strokeWidth="1" />
                    </svg>
                  </div>
                </>
              ) : isBarista ? (
                <>
                  {/* Barista Skills decorations */}
                  <div style={{
                    position: 'absolute',
                    top: '15%',
                    right: '7%',
                    width: '40px',
                    height: '40px',
                    opacity: 0.2,
                    animation: 'rise 8s ease-in-out infinite'
                  }}>
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M30,90 C60,90 70,80 70,70 C70,60 60,55 50,55 C40,55 30,60 30,70 C30,80 40,90 70,90" stroke="#603913" strokeWidth="2" fill="none" />
                      <path d="M40,55 C40,55 45,40 50,40 C55,40 60,55 60,55" stroke="#603913" strokeWidth="2" fill="none" />
                      <path d="M45,40 C45,40 50,30 55,30" stroke="#603913" strokeWidth="2" fill="none" strokeDasharray="2,2" />
                    </svg>
                  </div>
                  
                  <div style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '5%',
                    width: '35px',
                    height: '35px',
                    opacity: 0.2,
                    animation: 'spin 10s linear infinite'
                  }}>
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <ellipse cx="50" cy="50" rx="25" ry="35" transform="rotate(45 50 50)" stroke="#603913" strokeWidth="2" fill="none" />
                      <ellipse cx="50" cy="50" rx="15" ry="25" transform="rotate(-45 50 50)" stroke="#603913" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                  
                  {/* Add new unique barista decoration */}
                  <div style={{
                    position: 'absolute',
                    top: '60%',
                    left: '20%',
                    width: '50px',
                    height: '50px',
                    opacity: 0.15,
                    animation: 'float 7s ease-in-out infinite'
                  }}>
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="30" y="50" width="40" height="30" rx="5" stroke="#603913" strokeWidth="2" fill="none" />
                      <path d="M35,50 L35,40 C35,30 65,30 65,40 L65,50" stroke="#603913" strokeWidth="2" fill="none" />
                      <path d="M45,30 L45,20" stroke="#603913" strokeWidth="2" />
                      <path d="M55,30 L55,20" stroke="#603913" strokeWidth="2" />
                      <line x1="30" y1="60" x2="70" y2="60" stroke="#603913" strokeWidth="1" />
                      <path d="M35,70 L65,70" stroke="#603913" strokeWidth="1" stroke-dasharray="2,2" />
                    </svg>
                  </div>
                </>
              ) : null}
            </div>
            
            <h3 className="text-2xl font-bold mb-8 text-center text-black relative z-10">Related Courses</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {courseData.relatedCourses.map((course, index) => (
                <a
                  key={index}
                  href={`/Diploma/${index}`}
                  className="block overflow-hidden rounded-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                >
                  <div className="w-full h-48 sm:h-56 lg:h-64 bg-gray-200 flex items-center justify-center rounded-lg relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h4 className="text-lg font-semibold text-center text-[#0f4c5c] mt-4 hover:underline">
                    {course.title}
                  </h4>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Card className={`w-[400px]`}/>
    </div>
  );
};

export default DiplomaPage;