import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 60, scale: 0.92 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "backOut" } }
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.18
    }
  }
};

const imagePop = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10, y: 40 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0, 
    y: 0, 
    transition: { duration: 0.8, ease: "backOut" }
  }
};

const companyImgAnim = {
  hidden: { opacity: 0, scale: 0.7, rotate: -10, y: 30 },
  visible: i => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    y: 0,
    transition: { duration: 0.7, delay: 0.2 + i * 0.09, ease: "backOut" }
  })
};

const CareerPathwaysSection = ({ careerPathways, isCulinary, isPatisserie, isBarista }) => {
  return (
    <motion.div
      className="p-2 sm:p-4 md:p-8 lg:p-12 rounded-lg mb-8 mt-10 sm:mt-16 bg-white shadow-md relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={fadeInUp}
    >
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
      
      <motion.h3
        className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center text-black relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        Career Pathways
      </motion.h3>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {careerPathways.description.map((paragraph, index) => (
          <motion.p
            key={index}
            className="text-gray-700 mb-4 text-justify px-2 sm:px-6 md:px-10 lg:px-20 text-base sm:text-lg"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {paragraph}
          </motion.p>
        ))}
      </motion.div>
      <motion.div
        className="px-2 sm:px-6 md:px-10 lg:px-20 flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={imagePop}
      >
        <motion.img
          src={careerPathways.image}
          alt="Career Pathways"
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-lg mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={imagePop}
          whileHover={{ scale: 1.04, rotate: 2, boxShadow: "0 4px 24px rgba(0,0,0,0.10)" }}
        />
      </motion.div>
      <motion.div
        className="flex flex-wrap justify-center gap-2 sm:gap-4 px-2 sm:px-6 md:px-10 lg:px-20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {careerPathways.companyImages.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`Company ${index + 1}`}
            className="h-8 sm:h-12 md:h-16 lg:h-20 object-contain max-w-[120px] sm:max-w-[160px] lg:max-w-[200px] flex-1"
            loading="lazy"
            custom={index}
            variants={companyImgAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ scale: 1.12, rotate: 2, boxShadow: "0 4px 24px rgba(0,0,0,0.10)" }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CareerPathwaysSection;
