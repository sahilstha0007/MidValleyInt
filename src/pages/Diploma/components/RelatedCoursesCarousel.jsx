import React, { useState } from 'react';

const RelatedCoursesCarousel = ({ courseData, courses, isCulinary, isPatisserie, isBarista }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  
  // Simplified navigation functions - just change index without scrolling
  const nextCarousel = () => {
    setCarouselIndex((prevIndex) => 
      (prevIndex + 1) % Math.ceil(Object.keys(courses).length)
    );
  };

  const prevCarousel = () => {
    setCarouselIndex((prevIndex) => 
      prevIndex === 0 ? Math.ceil(Object.keys(courses).length) - 1 : prevIndex - 1
    );
  };
  
  return (
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
                <path d="M35,70 L65,70" stroke="#603913" strokeWidth="1" strokeDasharray="2,2" />
              </svg>
            </div>
          </>
        ) : null}
      </div>
      
      <h3 className="text-2xl font-bold mb-8 text-center text-black relative z-10">Related Courses</h3>
      
      {/* Carousel for Related Courses */}
      <div className="relative z-10">
        {/* Visual indicator for mobile users - removed swipe instructions */}
        
        {/* Carousel container with no scrolling */}
        <div className="relative overflow-hidden">
          <div className="flex">
            {Object.entries(courses).map(([courseKey, courseValue], index) => (
              <div 
                key={index}
                className={`w-full flex-shrink-0 px-2 sm:px-4 ${index === carouselIndex ? 'block' : 'hidden'}`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                  {[0, 1, 2].map((itemIndex) => {
                    // Calculate the actual index in a circular manner
                    const actualIndex = (index * 3 + itemIndex) % Object.keys(courses).length;
                    const courseKeys = Object.keys(courses);
                    const currentCourseKey = courseKeys[actualIndex];
                    const displayCourse = { 
                      title: courses[currentCourseKey].title,
                      image: courses[currentCourseKey].frontImage
                    };
                    
                    return (
                      <a
                        key={itemIndex}
                        href={`/Diploma/${currentCourseKey}`}
                        className="block overflow-hidden rounded-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                      >
                        <div className="w-full h-48 sm:h-56 lg:h-64 bg-gray-200 flex items-center justify-center rounded-lg relative">
                          <img
                            src={displayCourse.image}
                            alt={displayCourse.title}
                            className="w-full h-full object-cover rounded-lg"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <h4 className="text-lg font-semibold text-center text-[#0f4c5c] mt-4 hover:underline line-clamp-2">
                          {displayCourse.title}
                        </h4>
                      </a>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Carousel controls - larger touch targets on mobile */}
          <button 
            className="absolute top-1/2 left-0 sm:left-2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#0f4c5c] p-3 sm:p-2 rounded-full shadow-md z-20"
            onClick={prevCarousel}
            aria-label="Previous courses"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            className="absolute top-1/2 right-0 sm:right-2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#0f4c5c] p-3 sm:p-2 rounded-full shadow-md z-20"
            onClick={nextCarousel}
            aria-label="Next courses"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Carousel indicators */}
          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: Math.ceil(Object.keys(courses).length) }).map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full ${i === carouselIndex ? 'bg-[#0f4c5c]' : 'bg-gray-300'}`}
                onClick={() => setCarouselIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedCoursesCarousel;