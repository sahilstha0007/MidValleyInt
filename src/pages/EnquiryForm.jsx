import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faArrowRight,
  faQuoteLeft,
  faQuoteRight,
  faStar,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";


// Using dummy images from Unsplash Source for variety
const images = [
    "/BR1.png",
    "/BR1.png",
    "/BR1.png",
    "/BR1.png",
  ];

// Framer Motion Variants for animations (not directly used in this snippet but good to keep)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 15 } }
};


const Form = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);


  return (
    // Use a flexible container with padding and background gradient
    <div className="bg-gradient-to-br from-blue-50 to-orange-50 min-h-screen px-4 py-12 md:px-8 lg:px-16 relative overflow-hidden">

      {/* Decorative Shape Background (Subtle) */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob z-0"></div>
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 z-0"></div>
      <div className="absolute -bottom-8 left-20 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 z-0"></div>


      {/* Header/Navigation Area */}
      <header className="flex items-center justify-between mb-16 max-w-screen-xl mx-auto relative z-10"> {/* Z-index to be above blobs */}
              </header>

      {/* Hero/Title Section */}
      <section className="text-center mb-20 max-w-4xl mx-auto relative z-10"> {/* Z-index to be above blobs */}
         <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-blue-900 leading-tight"
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.3 }}
         >
           Ready to <span className="text-orange-500">Enquire</span>?
         </motion.h1>
         <motion.p
            className="text-lg md:text-xl text-gray-700 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
         >
           Thinking about joining Mid-Valley International College for further studies? Just fill out the form below. Our friendly team will reach out to help you with any questions you have!
         </motion.p>
      </section>

      {/* Main Content Area - Carousel and Form Side-by-Side (or stacked) */}
      <section className="flex flex-col lg:flex-row justify-center items-start gap-10 md:gap-16 mb-20 max-w-screen-xl mx-auto relative z-10"> {/* Align items-start to keep tops aligned */}

          {/* Wrapper for Image Carousel AND Testimonial */}
          <div className="w-full lg:w-[45%] flex flex-col gap-10">
            {/* Image Carousel */}
            <motion.div
              className="w-full bg-orange-500 rounded-3xl p-4 shadow-xl border border-white/30 relative overflow-hidden flex-shrink-0"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.7, type: "spring", stiffness: 60 }}
              style={{ minHeight: '300px' }}
            >
               {/* Background Gradient Overlay */}
               <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 opacity-70 rounded-3xl z-0"></div>
               {/* Current Image */}
              <motion.img
                src={images[index]}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-2xl relative z-10"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }} // Slightly longer image transition
                key={index}
              />
              {/* Indicators */}
              <div className="absolute bottom-5 left-0 right-0 flex justify-center items-center gap-2 z-20">
                {images.map((_, i) => (
                  <motion.div
                    key={i}
                    className="rounded-full bg-white cursor-pointer"
                    animate={{
                      width: i === index ? 12 : 8,
                      height: i === index ? 12 : 8,
                      opacity: i === index ? 1 : 0.6
                    }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
            </motion.div>

            {/* Testimonial/Quote with Icons - now positioned naturally below the carousel */}
            <motion.div
                className="w-full bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-blue-100 text-blue-900 overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 1.0, type: "spring", stiffness: 60 }} // Slightly delayed to appear after form
            >
                <h3 className="text-2xl font-bold mb-4 text-center text-orange-600">What Our Graduates Say!</h3>
                <div className="text-md text-gray-700 italic text-center relative px-4">
                  <FontAwesomeIcon icon={faQuoteLeft} className="absolute left-0 top-0 text-orange-400 text-xl md:text-2xl opacity-70" />
                  "Mid-Valley International College transformed my career path. The faculty support and hands-on experience were invaluable! I'm now confidently pursuing my dreams."
                  <FontAwesomeIcon icon={faQuoteRight} className="absolute right-0 bottom-0 text-orange-400 text-xl md:text-2xl opacity-70" />
                </div>
                <p className="text-right mt-4 font-semibold text-blue-800 flex items-center justify-end">
                  <FontAwesomeIcon icon={faStar} className="text-orange-400 mr-1" />
                  <FontAwesomeIcon icon={faStar} className="text-orange-400 mr-1" />
                  <FontAwesomeIcon icon={faStar} className="text-orange-400 mr-1" />
                  <FontAwesomeIcon icon={faStar} className="text-orange-400 mr-1" />
                  <FontAwesomeIcon icon={faStar} className="text-orange-400 mr-2" />
                  - A Happy Graduate
                </p>
                {/* Optional: Add a small tagline or call to action */}
                <p className="text-center text-sm text-gray-600 mt-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-1" /> Join our success story!
                </p>
            </motion.div>
          </div>
          {/* --- END NEW ELEMENT --- */}

          {/* Form */}
          <motion.div
             className="w-full lg:w-[55%] bg-white rounded-3xl p-8 shadow-xl border border-blue-100 text-blue-900 flex flex-col relative z-10" // flex-col added for internal form stacking
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.7, type: "spring", stiffness: 60 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Your Details</h2>
            <form className="flex flex-col gap-4 flex-grow"> {/* flex-grow to push button down */}
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="flex-1 px-5 py-3 rounded-full outline-none border border-gray-300 focus:border-blue-500 transition-colors text-gray-800"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="flex-1 px-5 py-3 rounded-full outline-none border border-gray-300 focus:border-blue-500 transition-colors text-gray-800"
                />
              </div>

              <input type="text" placeholder="Contact No :" className="px-5 py-3 rounded-full outline-none border border-gray-300 focus:border-blue-500 transition-colors text-gray-800" />
              <input type="email" placeholder="Email :" className="px-5 py-3 rounded-full outline-none border border-gray-300 focus:border-blue-500 transition-colors text-gray-800" />
              <input type="text" placeholder="Parents Name :" className="px-5 py-3 rounded-full outline-none border border-gray-300 focus:border-blue-500 transition-colors text-gray-800" />
              <input type="text" placeholder="Parents Contact No :" className="px-5 py-3 rounded-full outline-none border border-gray-300 focus:border-blue-500 transition-colors text-gray-800" />

              <label className="block text-lg font-semibold mt-2">
                Address:
              </label>
              <input type="text" placeholder="Temporary" className="px-5 py-3 rounded-full outline-none border border-gray-300 focus:border-blue-500 transition-colors text-gray-800" />
              <input type="text" placeholder="Permanent" className="px-5 py-3 rounded-full outline-none border border-gray-300 focus:border-blue-500 transition-colors text-gray-800" />

              <p className="text-md font-semibold mt-4">Select your Education Level to get started <span className="text-red-500">*</span></p>

              <div className="flex flex-col gap-2 text-gray-700">
                <strong className="text-blue-900 text-lg mt-2">Bachelors Program:</strong>
                <label className="flex items-center"><input type="radio" name="program" value="BHM" className="mr-2 accent-orange-500" /> Bachelors of Business (Hospitality Management) (Hons) (BHM)</label>
                <label className="flex items-center"><input type="radio" name="program" value="Finance" className="mr-2 accent-orange-500" /> Bachelors of Business (Finance) (Hons)</label>
                <label className="flex items-center"><input type="radio" name="program" value="IT" className="mr-2 accent-orange-500" /> Bachelor of Information Technology (Hons)</label>

                <strong className="text-blue-900 text-lg mt-4">Diploma Program:</strong>
                <label className="flex items-center"><input type="radio" name="program" value="Culinary" className="mr-2 accent-orange-500" /> Diploma in Culinary Arts and Supervision</label>
                <label className="flex items-center"><input type="radio" name="program" value="Patisserie" className="mr-2 accent-orange-500" /> Diploma in Professional Patisserie and Confectionery</label>
                <label className="flex items-center"><input type="radio" name="program" value="Barista" className="mr-2 accent-orange-500" /> International Certificate in Barista</label>

                <motion.button
                  type="submit"
                  className="bg-blue-600 text-white font-semibold rounded-full px-8 py-3 text-lg cursor-pointer self-center mt-8 shadow-lg hover:bg-blue-700 hover:shadow-xl transition-colors duration-300 flex items-center group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply Now
                   <FontAwesomeIcon icon={faArrowRight} className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </div>
            </form>
          </motion.div>

      </section>


      {/* Map Section */}
      <motion.section
         className="max-w-screen-xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-blue-100 mb-12 relative z-10" // Z-index to be above blobs
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 60 }} // Adjusted delay
         style={{ height: '400px' }}
      >
        <iframe
          title="Mid-Valley International College Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5516766465324!2d85.31495911497914!3d27.7009477827926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199f30b92e7d%3A0x7d2b2c45167e4168!2sMid-Valley%20International%20College!5e0!3m2!1sen!2snp!4v1678901234567!5m2!1sen!2snp" // Replace with actual Google Maps embed URL for MVIC
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.section>

    </div>
  );
};

export default Form;