import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import defaultTestimonials from '../../../datas/Diploma/testimonials';

const TestimonialsSection = ({ isCulinary, isPatisserie, isBarista }) => {
  const testimonials = defaultTestimonials;
  
  if (!testimonials || testimonials.length === 0) return null;

  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <>
      <div className="bg-white mt-10 sm:mt-24 py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        {/* Course-specific background patterns */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {isCulinary && (
            <div className="absolute inset-0 opacity-5"
              style={{
                background: 'linear-gradient(90deg, #003044 1px, transparent 1px), linear-gradient(#003044 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}>
            </div>
          )}

          {isPatisserie && (
            <div className="absolute inset-0 opacity-5"
              style={{
                background: 'radial-gradient(#F1592D 1px, transparent 1px)',
                backgroundSize: '15px 15px'
              }}>
            </div>
          )}

          {isBarista && (
            <div className="absolute inset-0 opacity-5"
              style={{
                background: 'repeating-linear-gradient(-45deg, #603913, #603913 1px, transparent 1px, transparent 10px)'
              }}>
            </div>
          )}

          {/* Floating icons with improved animations */}
          {isCulinary && (
            <>
              <div className="absolute top-10 sm:top-16 left-[5%] sm:left-[8%] w-12 h-12 sm:w-16 sm:h-16 opacity-10 transform transition-transform duration-8000 hover:scale-110"
                style={{ animation: 'float 8s ease-in-out infinite' }}>
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M30,20 L70,20 L70,80 L30,80 Z" stroke="#003044" strokeWidth="2" fill="none" />
                  <line x1="30" y1="50" x2="70" y2="50" stroke="#003044" strokeWidth="2" />
                  <line x1="50" y1="20" x2="50" y2="80" stroke="#003044" strokeWidth="2" />
                </svg>
              </div>
            </>
          )}

          {isPatisserie && (
            <>
              <div className="absolute top-10 sm:top-16 right-[5%] sm:right-[8%] w-12 h-12 sm:w-14 sm:h-14 opacity-10 transform transition-transform duration-9000"
                style={{ animation: 'bounce 9s ease-in-out infinite' }}>
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
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
              <div className="absolute bottom-10 sm:bottom-16 left-[8%] sm:left-[10%] w-10 h-10 sm:w-12 sm:h-12 opacity-10 transform transition-opacity duration-6000"
                style={{ animation: 'pulse 6s ease-in-out infinite' }}>
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="50" cy="30" r="10" stroke="#603913" strokeWidth="2" fill="none" />
                  <path d="M45,40 L35,90" stroke="#603913" strokeWidth="2" />
                  <path d="M55,40 L65,90" stroke="#603913" strokeWidth="2" />
                  <path d="M35,60 L65,60" stroke="#603913" strokeWidth="2" />
                </svg>
              </div>
            </>
          )}
        </div>

        <h3 className="text-2xl font-bold text-center text-[#003044] mb-8 relative z-10">
          What People Say About City and Guilds
        </h3>

        {/* Animated Testimonials */}
        <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2 px-4 sm:px-10 lg:px-20 relative z-10">
          <div>
            <div className="relative h-80 w-full">
              <AnimatePresence>
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.src}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: randomRotateY(),
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : randomRotateY(),
                      zIndex: isActive(index)
                        ? 40
                        : testimonials.length + 2 - index,
                      y: isActive(index) ? [0, -80, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: randomRotateY(),
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={500}
                      height={500}
                      draggable={false}
                      className="h-full w-full rounded-3xl object-cover object-center shadow-lg"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          <div className="flex flex-col justify-between py-4">
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              <h3 className="text-2xl font-bold text-[#003044]">
                {testimonials[active].name}
              </h3>
              <p className="text-sm text-[#F1592D] font-medium">
                {testimonials[active].title}
              </p>
              <motion.p className="mt-8 text-lg text-gray-700">
                {testimonials[active].description.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
            <div className="flex gap-4 pt-12 md:pt-0">
              <button
                onClick={handlePrev}
                className="group/button flex h-9 w-9 items-center justify-center rounded-full bg-[#003044] hover:bg-[#00435e] transition-all duration-300 shadow-md"
              >
                <IconArrowLeft className="h-5 w-5 text-white transition-transform duration-300 group-hover/button:translate-x-[-2px]" />
              </button>
              <button
                onClick={handleNext}
                className="group/button flex h-9 w-9 items-center justify-center rounded-full bg-[#F1592D] hover:bg-[#f36a42] transition-all duration-300 shadow-md"
              >
                <IconArrowRight className="h-5 w-5 text-white transition-transform duration-300 group-hover/button:translate-x-[2px]" />
              </button>
            </div>
          </div>
        </div>

        {/* Add global animations to the document */}
        <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
      `}</style>

      </div>
      <div className='m-20'>
      </div>

    </>


  );
};

export default TestimonialsSection;