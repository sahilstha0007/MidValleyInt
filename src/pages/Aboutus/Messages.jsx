import React, { useEffect, useRef } from 'react';
import messagesData from '../../datas/Messages/messages';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Messages = () => {
  const parallaxRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Animated decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 w-40 h-40 bg-[#F1592D] opacity-10 rounded-full blur-xl"
        animate={{ 
          x: [0, 20, 0], 
          y: [0, 15, 0],
          scale: [1, 1.2, 1] 
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute top-40 right-20 w-60 h-60 bg-[#003044] opacity-10 rounded-full blur-xl"
        animate={{ 
          x: [0, -30, 0], 
          y: [0, 20, 0],
          scale: [1, 1.1, 1] 
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      {/* Stylish hero section */}
      <div className="relative h-[70vh] overflow-hidden">
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
        <div className="absolute inset-0 bg-[#003044]/30 z-20"
          style={{
            clipPath: "polygon(0 85%, 100% 70%, 100% 100%, 0% 100%)"
          }}
        ></div>
        
        {/* Title content with animation */}
        <motion.div 
          className="absolute z-30 bottom-0 left-0 right-0 p-12 text-white"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 tracking-tight">
              <span className="inline-block pb-2 border-b-4 border-[#F1592D]">
                {messagesData.title}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl">
              Insights and vision from the leadership guiding our journey
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Breadcrumb Section - Original Style */}
      <div className="bg-[#003044] text-white py-4 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-sm">
            Home &gt;
            <span className="text-[#F1592D] font-bold">{messagesData.title}</span>
          </p>
        </div>
      </div>
      
      <div className="m-10 md:m-20"></div>

      {/* Messages Section */}
      <div className="bg-white mx-4 sm:mx-20 my-4 mt-10 p-8 rounded-lg shadow-lg relative border border-gray-200">
        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#003044] rounded-tl-lg"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#003044] rounded-tr-lg"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-[#003044] rounded-bl-lg"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#003044] rounded-br-lg"></div>
        
        <div className="flex flex-col lg:flex-row items-center gap-8 relative">
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
          <div className="flex-shrink-0 w-full lg:w-1/3 transition-all duration-300 hover:shadow-xl rounded-lg overflow-hidden">
            <img
              src={messagesData.entries[0].image}
              alt="Chairperson"
              className="w-full h-auto rounded-lg transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Decorative divider */}
        <div className="my-16 flex items-center justify-center">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-1/3"></div>
          <div className="mx-4 text-[#003044] text-xl">●</div>
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-1/3"></div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 mt-10">
          <div className="flex-shrink-0 w-full lg:w-1/3 transition-all duration-300 hover:shadow-xl rounded-lg overflow-hidden">
            <img
              src={messagesData.entries[1].image}
              alt="Managing Director"
              className="w-full h-auto rounded-lg transition-transform duration-700 hover:scale-105"
            />
          </div>
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
        </div>
        
        {/* Decorative divider */}
        <div className="my-16 flex items-center justify-center">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-1/3"></div>
          <div className="mx-4 text-[#003044] text-xl">●</div>
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-1/3"></div>
        </div>
        
        {/* CEO Message    */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
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
          <div className="flex-shrink-0 w-full lg:w-1/3 transition-all duration-300 hover:shadow-xl rounded-lg overflow-hidden">
            <img
              src={messagesData.entries[2].image}
              alt="CEO"
              className="w-full h-auto rounded-lg transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative bottom wave */}
      <div className="w-full h-16 bg-[#003044] opacity-10 mt-20" style={{
        maskImage: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 1200 120\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z\"></path></svg>')",
        maskSize: "cover"
      }}></div>
    </div>
  );
};

export default Messages;
