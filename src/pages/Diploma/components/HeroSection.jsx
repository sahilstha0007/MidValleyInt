import React from 'react';
import { motion } from 'framer-motion';

const heroImgVariants = {
  hidden: { opacity: 0, scale: 1.08 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.1, ease: "easeOut" } }
};

const overlayVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3, ease: "backOut" } }
};

const titleVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, delay: 0.5, ease: "backOut" } }
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.9, ease: "backOut" } }
};

const svgAnim = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: { opacity: 0.4, scale: 1, rotate: 0, transition: { duration: 1, ease: "backOut" } }
};

const HeroSection = ({ frontImage, title, isCulinary, isPatisserie, isBarista }) => {
  return (
    <div className="relative">
      <motion.img
        src={frontImage}
        alt={title}
        className="w-full max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-[70vh] xl:max-h-[80vh] object-cover object-center"
        loading="lazy"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={heroImgVariants}
      />
      {/* Hero section floating elements based on course type */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {isCulinary && (
          <>
            <motion.div
              className="absolute top-[15%] right-[10%] w-16 h-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={svgAnim}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30,20 L70,20 Q90,20 90,40 L90,60 Q90,80 70,80 L30,80 Q10,80 10,60 L10,40 Q10,20 30,20 Z" stroke="#fff" strokeWidth="2" fill="none" />
                <rect x="45" y="20" width="10" height="60" fill="#fff" fillOpacity="0.6" />
                <path d="M35,30 H65" stroke="#fff" strokeWidth="2" />
                <path d="M30,40 H70" stroke="#fff" strokeWidth="2" />
                <path d="M25,50 H75" stroke="#fff" strokeWidth="2" />
                <path d="M35,60 H65" stroke="#fff" strokeWidth="2" />
                <path d="M45,70 H55" stroke="#fff" strokeWidth="2" />
              </svg>
            </motion.div>
            <motion.div
              className="absolute bottom-[20%] left-[7%] w-20 h-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={svgAnim}
              transition={{ duration: 1.2, delay: 0.4, repeat: Infinity, repeatType: "reverse" }}
              style={{ animationDuration: '5s' }}
            >
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25,80 L75,80 C85,80 95,70 95,55 C95,40 85,30 75,30 C75,15 65,5 50,5 C35,5 25,15 25,30 C15,30 5,40 5,55 C5,70 15,80 25,80 Z" 
                  stroke="#fff" strokeWidth="3" fill="none" />
              </svg>
            </motion.div>
          </>
        )}
        {isPatisserie && (
          <>
            <motion.div
              className="absolute top-[10%] right-[15%] w-16 h-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={svgAnim}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" stroke="#fff" strokeWidth="2" fill="none" />
                <path d="M30,40 C40,20 60,20 70,40 L70,70 L30,70 L30,40 Z" stroke="#fff" strokeWidth="2" fill="none" />
                <path d="M40,40 L40,25" stroke="#fff" strokeWidth="2" />
                <path d="M60,40 L60,25" stroke="#fff" strokeWidth="2" />
                <path d="M50,40 L50,20" stroke="#fff" strokeWidth="2" />
              </svg>
            </motion.div>
            <motion.div
              className="absolute bottom-[30%] left-[10%] w-14 h-14"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={svgAnim}
              transition={{ duration: 1.2, delay: 0.4, repeat: Infinity, repeatType: "reverse" }}
              style={{ animationDuration: '7s' }}
            >
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20,20 L80,20 L80,40 C80,62 65,80 50,80 C35,80 20,62 20,40 L20,20 Z" stroke="#fff" strokeWidth="2" fill="none" />
                <path d="M30,20 C30,10 70,10 70,20" stroke="#fff" strokeWidth="2" fill="none" />
              </svg>
            </motion.div>
          </>
        )}
        {isBarista && (
          <>
            <motion.div
              className="absolute top-[20%] right-[8%] w-16 h-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={svgAnim}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30,90 C60,90 70,80 70,70 C70,60 60,55 50,55 C40,55 30,60 30,70 C30,80 40,90 70,90" stroke="#fff" strokeWidth="3" fill="none" />
                <path d="M40,55 C40,55 45,40 50,40 C55,40 60,55 60,55" stroke="#fff" strokeWidth="2" fill="none" />
                <path d="M45,40 C45,40 50,25 55,25" stroke="#fff" strokeWidth="2" fill="none" strokeDasharray="2,2" />
              </svg>
            </motion.div>
            <motion.div
              className="absolute bottom-[25%] left-[12%] w-12 h-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={svgAnim}
              transition={{ duration: 1.2, delay: 0.4, repeat: Infinity, repeatType: "reverse" }}
              style={{ animationDuration: '15s' }}
            >
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="50" cy="50" rx="25" ry="35" transform="rotate(45 50 50)" stroke="#fff" strokeWidth="2" fill="none" />
                <ellipse cx="50" cy="50" rx="15" ry="25" transform="rotate(-45 50 50)" stroke="#fff" strokeWidth="2" fill="none" />
              </svg>
            </motion.div>
          </>
        )}
      </div>
      {/* Photo text overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={overlayVariants}
      >
        <div className="text-center px-4">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={titleVariants}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-white text-lg md:text-xl max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={subtitleVariants}
          >
            Explore and connect with our vibrant student community
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
