import React from 'react';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: 0.2 + i * 0.12, ease: "easeOut" }
  })
};

const AboutSection = ({ aboutContent, aboutImages, isCulinary, isPatisserie, isBarista }) => {
  return (
    <motion.div
      className="mx-2 sm:mx-4 md:mx-10 lg:mx-20 my-4 p-2 sm:p-4 md:p-10 lg:p-20 rounded-lg lg-mb-8 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={textVariants}
    >
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

      <motion.h2
        className="text-black text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        {aboutContent.heading}
      </motion.h2>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        <motion.div
          className="bg-[#003044] text-white p-3 sm:p-4 md:p-6 rounded-xl flex-1 min-w-0"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-base sm:text-lg leading-relaxed text-justify">{aboutContent.text}</p>
        </motion.div>
        <div className="grid grid-cols-2 gap-2 sm:gap-4 flex-1 min-w-0">
          {aboutImages.map((img, index) => (
            <motion.img
              src={img}
              alt={`About course ${index + 1}`}
              key={index}
              className="rounded-lg object-cover w-full h-28 sm:h-36 md:h-40 lg:h-48 xl:h-56 transition-all"
              loading="lazy"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              custom={index}
              style={{ aspectRatio: "4/3", minWidth: 0 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
