import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Add carouselVariants for smooth fade-in
const carouselVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: "easeInOut" } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, willChange: "opacity, transform" },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    willChange: "opacity, transform",
    transition: { type: "spring", stiffness: 50, damping: 20, delay: i * 0.12 }
  }),
  exit: { opacity: 0, y: 40, willChange: "opacity, transform", transition: { duration: 0.4, ease: "easeInOut" } }
};

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 400 : -400,
    opacity: 0,
    willChange: "opacity, transform"
  }),
  center: {
    x: 0,
    opacity: 1,
    willChange: "opacity, transform",
    transition: { type: "spring", stiffness: 40, damping: 18 }
  },
  exit: (direction) => ({
    x: direction < 0 ? 400 : -400,
    opacity: 0,
    position: "absolute",
    willChange: "opacity, transform",
    transition: { duration: 0.5, ease: "easeInOut" }
  })
};

// Add page-level animation variants
const pageVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.97, rotate: -3 },
  visible: { opacity: 1, y: 0, scale: 1, rotate: 0, transition: { duration: 0.8, ease: "backOut" } },
  exit: { opacity: 0, y: -60, scale: 0.97, rotate: 3, transition: { duration: 0.6, ease: "backIn" } }
};

const RelatedCoursesCarousel = ({ courseData, courses, isCulinary, isPatisserie, isBarista }) => {
  // Only use the first 6 courses
  const courseKeys = Object.keys(courses).slice(0, 6);
  const totalSlides = Math.ceil(courseKeys.length / 3);

  const [carouselIndex, setCarouselIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const navigate = useNavigate();

  const nextCarousel = () => {
    setDirection(1);
    setCarouselIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevCarousel = () => {
    setDirection(-1);
    setCarouselIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
  };
  
  return (
    <motion.div
      className="p-8 sm:px-20 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.2 }}
      variants={pageVariants}
    >
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
        <div className="relative overflow-hidden min-h-[400px]">
          <div className="flex">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={carouselIndex}
                className="w-full flex-shrink-0 px-2 sm:px-4 block"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 40, damping: 18 }}
                style={{ width: '100%' }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                  {[0, 1, 2].map((itemIndex) => {
                    const actualIndex = carouselIndex * 3 + itemIndex;
                    if (actualIndex >= courseKeys.length) return null;
                    const currentCourseKey = courseKeys[actualIndex];
                    const displayCourse = {
                      title: courses[currentCourseKey].title,
                      image: courses[currentCourseKey].frontImage
                    };

                    return (
                      <motion.div
                        key={itemIndex}
                        className="block overflow-hidden rounded-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        custom={itemIndex}
                        onClick={() => {
                          navigate(`/Diploma/${currentCourseKey}`);
                          window.scrollTo(0, 0);
                        }}
                        whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <div className="w-full h-48 sm:h-56 lg:h-64 bg-gray-200 flex items-center justify-center rounded-lg relative">
                          <motion.img
                            src={displayCourse.image}
                            alt={displayCourse.title}
                            className="w-full h-full object-cover rounded-lg"
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 + itemIndex * 0.1, ease: "easeOut" }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <h4 className="text-lg font-semibold text-center text-[#0f4c5c] mt-4 hover:underline line-clamp-2">
                          {displayCourse.title}
                        </h4>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Carousel controls */}
          <motion.button
            className="absolute top-1/2 left-0 sm:left-2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#0f4c5c] p-3 sm:p-2 rounded-full shadow-md z-20"
            onClick={prevCarousel}
            aria-label="Previous courses"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          <motion.button
            className="absolute top-1/2 right-0 sm:right-2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#0f4c5c] p-3 sm:p-2 rounded-full shadow-md z-20"
            onClick={nextCarousel}
            aria-label="Next courses"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
          
          {/* Carousel indicators */}
          <div
            className="flex justify-center mt-4 gap-2"
            style={{
              opacity: 1,
              transition: 'opacity 0.3s',
              pointerEvents: direction !== 0 ? 'none' : 'auto',
              visibility: direction !== 0 ? 'hidden' : 'visible'
            }}
          >
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full ${i === carouselIndex ? 'bg-[#0f4c5c]' : 'bg-gray-300'}`}
                onClick={() => {
                  setDirection(i > carouselIndex ? 1 : -1);
                  setCarouselIndex(i);
                }}
                disabled={direction !== 0}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RelatedCoursesCarousel;