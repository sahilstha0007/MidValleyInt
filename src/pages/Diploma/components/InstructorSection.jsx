import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 60 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "backOut" } }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.85, rotate: 8, x: -40 },
  visible: { opacity: 1, scale: 1, rotate: 0, x: 0, transition: { duration: 0.9, ease: "backOut" } }
};

const textVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.18 + i * 0.09, ease: "backOut" }
  })
};

const InstructorSection = ({ instructorData, isCulinary, isPatisserie, isBarista }) => {
  if (!instructorData) return null;

  return (
    <motion.div
      className="bg-white p-4 mt-15 sm:mt-24 sm:p-8 lg:p-12 rounded-lg shadow-md lg-mb-8 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
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
      
      <motion.h3
        className="text-2xl font-bold mb-6 text-center text-black relative z-10"
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "backOut" }}
      >
        Meet The Instructor
      </motion.h3>
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <motion.div
          className="flex-shrink-0 w-full lg:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={imageVariants}
        >
          <motion.img
            src={instructorData.image}
            alt={instructorData.name}
            className="w-full h-auto sm:h-[50vh] lg:h-[60vh] object-cover rounded-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={imageVariants}
            whileHover={{ scale: 1.06, rotate: -2, boxShadow: "0 8px 32px rgba(0,0,0,0.13)" }}
          />
        </motion.div>
        <motion.div
          className="flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.h4
            className="text-xl font-bold text-black mb-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "backOut" }}
          >
            {instructorData.name}
          </motion.h4>
          <motion.p
            className="text-sm font-semibold text-gray-600 mb-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "backOut" }}
          >
            {instructorData.title}
          </motion.p>
          {instructorData.description.map((paragraph, index) => (
            <motion.p
              key={index}
              className="text-gray-700 text-justify leading-relaxed mt-4 px-4 sm:px-0"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              custom={index}
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InstructorSection;
