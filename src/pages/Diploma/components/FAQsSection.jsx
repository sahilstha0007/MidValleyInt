import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const faqContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const faqItemVariant = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 80,
      delay: 0.1, 
      duration: 0.6
    }
  }
};

const FAQsSection = ({ faqs, isCulinary, isPatisserie, isBarista }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqRef = useRef(null);
  const faqInView = useInView(faqRef, { margin: "-100px" });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  if (!faqs || faqs.length === 0) return null;
  
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-200 py-16 relative overflow-hidden" ref={faqRef}>
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM36 6V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        backgroundSize: "60px 60px"
      }}></div>
      
      {/* Course-specific side decorations */}
      <div className="absolute h-full w-16 left-0 top-0 overflow-hidden pointer-events-none">
        {isCulinary && (
          <div className="absolute inset-y-0 left-0 w-16 opacity-15">
            <div className="h-full" style={{background: 'repeating-linear-gradient(-45deg, #003044, #003044 8px, transparent 8px, transparent 24px)'}}>
            </div>
          </div>
        )}
        
        {isPatisserie && (
          <div className="absolute inset-y-0 left-0 w-16 opacity-15">
            <div className="h-full" style={{background: 'repeating-radial-gradient(circle at 12px 36px, #F1592D, #F1592D 4px, transparent 4px, transparent 18px)'}}>
            </div>
          </div>
        )}
        
        {isBarista && (
          <div className="absolute inset-y-0 left-0 w-16 opacity-15">
            <div className="h-full" style={{background: 'repeating-linear-gradient(45deg, #603913, #603913 3px, transparent 3px, transparent 12px)'}}>
            </div>
          </div>
        )}
      </div>
      
      <div className="absolute h-full w-16 right-0 top-0 overflow-hidden pointer-events-none">
        {isCulinary && (
          <div className="absolute inset-y-0 right-0 w-16 opacity-15">
            <div className="h-full" style={{background: 'repeating-linear-gradient(-45deg, #003044, #003044 8px, transparent 8px, transparent 24px)'}}>
            </div>
          </div>
        )}
        
        {isPatisserie && (
          <div className="absolute inset-y-0 right-0 w-16 opacity-15">
            <div className="h-full" style={{background: 'repeating-radial-gradient(circle at 12px 36px, #F1592D, #F1592D 4px, transparent 4px, transparent 18px)'}}>
            </div>
          </div>
        )}
        
        {isBarista && (
          <div className="absolute inset-y-0 right-0 w-16 opacity-15">
            <div className="h-full" style={{background: 'repeating-linear-gradient(45deg, #603913, #603913 3px, transparent 3px, transparent 12px)'}}>
            </div>
          </div>
        )}
      </div>
      
      <motion.h3 
        className="text-3xl font-bold text-center mb-10 text-[#003044] relative z-10"
        initial="hidden"
        animate={faqInView ? "visible" : "hidden"}
        variants={slideUp}
      >
        Frequently Asked Questions
      </motion.h3>
      
      <motion.div 
        className="container mx-auto px-4 max-w-3xl relative z-10"
        initial="hidden"
        animate={faqInView ? "visible" : "hidden"}
        variants={faqContainerVariant}
      >
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all duration-300 ${
                openIndex === index ? 'border-l-4 border-[#003044]' : ''
              }`}
              variants={faqItemVariant}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" 
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-[#003044]">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`w-6 h-6 ${openIndex === index ? 'text-[#F1592D]' : 'text-[#003044]'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </div>
              <motion.div
                initial={false}
                animate={{ 
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                  marginTop: openIndex === index ? 12 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FAQsSection;
