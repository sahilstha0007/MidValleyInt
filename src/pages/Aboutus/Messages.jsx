import React, { useEffect, useRef, useState } from 'react';
import messagesData from '../../datas/Messages/messages';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Animation variants for scroll direction
const fadeInUp = {
  hidden: { opacity: 0, y: 60, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, type: 'spring', stiffness: 60, damping: 18 } }
};
const fadeInDown = {
  hidden: { opacity: 0, y: -60, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, type: 'spring', stiffness: 60, damping: 18 } }
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.92, rotate: -2 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.7, type: 'spring', stiffness: 80, damping: 14 } }
};

const Messages = () => {
  const parallaxRef = useRef(null);
  const [scrollDir, setScrollDir] = useState('down');
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
      const currentY = window.scrollY;
      if (currentY > lastY.current) setScrollDir('down');
      else if (currentY < lastY.current) setScrollDir('up');
      lastY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to pick animation variant based on scroll direction
  const getFadeVariant = () => (scrollDir === 'down' ? fadeInUp : fadeInDown);

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e0e7ff] to-[#f0fdfa] relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={getFadeVariant()}
      transition={{ duration: 0.7 }}
    >
      {/* Animated decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 bg-[#F1592D] opacity-20 rounded-full blur-2xl z-0"
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
          scale: [1, 1.18, 1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-60 h-60 bg-[#003044] opacity-20 rounded-full blur-2xl z-0"
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 w-80 h-32 bg-[#F1592D] opacity-10 rounded-full blur-3xl z-0"
        animate={{
          x: [0, 30, 0],
          scale: [1, 1.12, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Stylish hero section */}
      <motion.div
        className="relative h-[70vh] overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={getFadeVariant()}
        transition={{ duration: 1, type: "spring" }}
      >
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        {/* Parallax background image */}
        <div ref={parallaxRef} className="absolute inset-0 scale-110">
          <img
            src={messagesData.frontImage}
            alt={messagesData.title}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>
        {/* Animated clip path overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-[#003044]/60 to-transparent z-20"
          initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
          animate={{ clipPath: "polygon(0 85%, 100% 70%, 100% 100%, 0% 100%)" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        ></motion.div>
        {/* Title content with animation */}
        <motion.div
          className="absolute z-30 bottom-0 left-0 right-0 p-12 text-white"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="container mx-auto">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight drop-shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="inline-block pb-2 border-b-4 border-[#F1592D] bg-gradient-to-r from-[#F1592D]/30 to-[#003044]/30 px-2 rounded">
                {messagesData.title}
              </span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-100 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Insights and vision from the leadership guiding our journey
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      {/* Breadcrumb Section - Modern Style */}
      <motion.div
        className="bg-gradient-to-r from-[#003044] to-[#0f4c5c] text-white py-4 text-center relative overflow-hidden shadow"
        initial="hidden"
        animate="visible"
        variants={getFadeVariant()}
        transition={{ delay: 0.2, duration: 0.7, type: 'spring' }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-sm tracking-wide font-medium">
            Home &gt; <span className="text-[#F1592D] font-bold">{messagesData.title}</span>
          </p>
        </div>
      </motion.div>

      <div className="m-10 md:m-20"></div>

      {/* Messages Section */}
      <motion.div
        className="backdrop-blur-md bg-white/80 mx-4 sm:mx-20 my-4 mt-10 p-8 rounded-3xl shadow-2xl relative border border-[#e0e7ff]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={getFadeVariant()}
        transition={{ duration: 0.8, type: 'spring', stiffness: 60, damping: 18 }}
      >
        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#003044] rounded-tl-3xl"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#003044] rounded-tr-3xl"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-[#003044] rounded-bl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#003044] rounded-br-3xl"></div>

        {/* Chairperson Message */}
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-8 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={scaleIn}
        >
          <div className="flex-1 lg:pr-20">
            <h3 className="text-2xl font-bold text-black mb-4 relative">
              <span className="inline-block w-10 h-1 bg-[#F1592D] absolute -left-4 top-1/2 transform -translate-y-1/2"></span>
              {messagesData.entries[0].title}
            </h3>
            <div className="relative">
              <FaQuoteLeft className="text-[#003044] opacity-20 text-4xl absolute -top-6 -left-6" />
              <p className="text-gray-700 leading-relaxed whitespace-pre-line text-justify pl-4">
                {messagesData.entries[0].text}
              </p>
              <FaQuoteRight className="text-[#003044] opacity-20 text-4xl absolute -bottom-6 -right-6" />
            </div>
            <div className="mt-8 pl-4 border-l-4 border-[#F1592D]">
              <p className="font-bold">{messagesData.entries[0].name}</p>
              <p className="text-sm text-gray-600">{messagesData.entries[0].position}</p>
            </div>
          </div>
          <motion.div
            className="flex-shrink-0 w-full lg:w-1/3 transition-all duration-300 hover:shadow-2xl rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.92, rotate: 4 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
          >
            <img
              src={messagesData.entries[0].image}
              alt="Chairperson"
              className="w-full h-auto rounded-2xl transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        </motion.div>

        {/* Decorative divider */}
        <div className="my-16 flex items-center justify-center">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-1/3"></div>
          <div className="mx-4 text-[#003044] text-xl animate-pulse">●</div>
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-1/3"></div>
        </div>

        {/* Managing Director Message */}
        <motion.div
          className="flex flex-col-reverse lg:flex-row items-center gap-8 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={scaleIn}
        >
          <motion.div
            className="flex-shrink-0 w-full lg:w-1/3 transition-all duration-300 hover:shadow-2xl rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.92, rotate: -4 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
          >
            <img
              src={messagesData.entries[1].image}
              alt="Managing Director"
              className="w-full h-auto rounded-2xl transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
          <div className="flex-1 lg:pl-20">
            <h3 className="text-2xl font-bold text-black mb-4 relative">
              <span className="inline-block w-10 h-1 bg-[#F1592D] absolute -left-4 top-1/2 transform -translate-y-1/2"></span>
              {messagesData.entries[1].title}
            </h3>
            <div className="relative">
              <FaQuoteLeft className="text-[#003044] opacity-20 text-4xl absolute -top-6 -left-6" />
              <p className="text-gray-700 leading-relaxed whitespace-pre-line text-justify pl-4">{messagesData.entries[1].text}</p>
              <FaQuoteRight className="text-[#003044] opacity-20 text-4xl absolute -bottom-6 -right-6" />
            </div>
            <div className="mt-8 pl-4 border-l-4 border-[#F1592D]">
              <p className="font-bold">{messagesData.entries[1].name}</p>
              <p className="text-sm text-gray-600">{messagesData.entries[1].position}</p>
            </div>
          </div>
        </motion.div>

        {/* Decorative divider */}
        <div className="my-16 flex items-center justify-center">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-1/3"></div>
          <div className="mx-4 text-[#003044] text-xl animate-pulse">●</div>
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-1/3"></div>
        </div>

        {/* CEO Message */}
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={scaleIn}
        >
          <div className="flex-1 lg:pr-20">
            <h3 className="text-2xl font-bold text-black mb-4 relative">
              <span className="inline-block w-10 h-1 bg-[#F1592D] absolute -left-4 top-1/2 transform -translate-y-1/2"></span>
              {messagesData.entries[2].title}
            </h3>
            <div className="relative">
              <FaQuoteLeft className="text-[#003044] opacity-20 text-4xl absolute -top-6 -left-6" />
              <div className="text-gray-700 leading-relaxed pl-4">
                {messagesData.entries[2].text.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-justify">
                    {paragraph}
                  </p>
                ))}
              </div>
              <FaQuoteRight className="text-[#003044] opacity-20 text-4xl absolute -bottom-6 -right-6" />
            </div>
            <div className="mt-8 pl-4 border-l-4 border-[#F1592D]">
              <p className="font-bold">{messagesData.entries[2].name}</p>
              <p className="text-sm text-gray-600">{messagesData.entries[2].position}</p>
            </div>
          </div>
          <motion.div
            className="flex-shrink-0 w-full lg:w-1/3 transition-all duration-300 hover:shadow-2xl rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
          >
            <img
              src={messagesData.entries[2].image}
              alt="CEO"
              className="w-full h-auto rounded-2xl transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative bottom wave */}
      <motion.div
        className="w-full h-16 bg-[#003044] opacity-10 mt-20"
        initial="hidden"
        animate="visible"
        variants={getFadeVariant()}
        transition={{ duration: 1 }}
        style={{
          maskImage: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 1200 120\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z\"></path></svg>')",
          maskSize: "cover"
        }}
      ></motion.div>
    </motion.div>
  );
};

export default Messages;
