import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const images = [
  "./public/img1.png",
  "./public/img2.png",
  "./public/img3.png",
  "./public/img4.png",
];

const Form = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <div className="min-h-screen pt-[350px] flex flex-wrap justify-center items-start gap-20 bg-white ">

       

        <motion.div
          className="absolute top-[150px] left-[120px] right-[120px] px-5 text-blue-900 text-center text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.h1
            className="text-6xl font-bold mb-5"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
          >
            Enquire
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          >
            Thinking about joining Mid-Valley International College for further studies? <br />
            Just fill out the forms below to begin. Our friendly team will reach out to help you with any questions you have!
          </motion.p>
        </motion.div>

       

        <div className="flex flex-wrap justify-center items-start gap-10">
  {/* Image Carousel */}
  <motion.div
    className="bg-orange-500 rounded-[54px] p-5 lg:w-[550px] md:w-[450px] sm:w-[350px]  text-white shadow-xl border border-white/20 h-[660px]"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.5 }}
  >
    <motion.img
      src={images[index]}
      alt={`Slide ${index + 1}`}
      className="w-full h-[93%] object-cover rounded-[54px] transition-opacity duration-500"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0 }}
      key={index}
    />
    <div className="flex justify-center items-center mt-2 gap-2">
      {images.map((_, i) => (
        <motion.div
          key={i}
          className="rounded-full bg-white transition-all"
          animate={{
            width: i === index ? 16 : 8,
            height: i === index ? 16 : 8,
          }}
          transition={{ duration: 0.1 }}
        />
      ))}
    </div>
  </motion.div>

  {/* Form */}
  <motion.div
    className="bg-orange-500 h-[660px] rounded-[54px] p-10 lg:w-[600px] md:w-[500px] sm:w-[400px] text-white shadow-xl border border-white/20"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.5 }}
  >
    <form className="flex flex-col gap-2">
      <div className="flex gap-1">
        <input
          type="text"
          placeholder="First Name"
          className="flex-1 px-0 py-2 pl-[4px] text-sm rounded-full outline-none text-black bg-white placeholder:text-gray-500"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="flex-1 px-0 py-2 pl-[4px] text-sm rounded-full outline-none text-black bg-white placeholder:text-gray-500"
        />
      </div>

      <input type="text" placeholder="Contact No :" className="px-3 py-2 rounded-full outline-none text-black bg-white" />
      <input type="email" placeholder="Email :" className="px-3 py-2 rounded-full outline-none text-black bg-white" />
      <input type="text" placeholder="Parents Name :" className="px-3 py-2 rounded-full outline-none text-black bg-white" />
      <input type="text" placeholder="Parents Contact No :" className="px-3 py-2 rounded-full outline-none text-black bg-white " />

      <label className="block text-m">
        <h1>Address :</h1>
      </label>
      <input type="text" placeholder="Temporary" className="px-3 py-2 rounded-full outline-none text-black bg-white" />
      <input type="text" placeholder="Permanent" className="px-3 py-2 rounded-full outline-none text-black bg-white" />

      <p className="text-sm">Select your Education Level to get started *</p>

      <div className="flex flex-col gap-0 text-sm">
        <strong className="text-white mt-0"><h2>Bachelors Program:</h2></strong>
        <label><input type="radio" name="bachelors" /> Bachelors of Business (Hospitality Management) (Hons) (BHM)</label>
        <label><input type="radio" name="bachelors" /> Bachelors of Business (Finance) (Hons)</label>
        <label><input type="radio" name="bachelors" /> Bachelor of Information Technology (Hons)</label>

        <strong className="text-white mt-0"><h2>Diploma Program :</h2></strong>
        <label><input type="radio" name="diploma" /> Diploma in Culinary Arts and Supervision</label>
        <label><input type="radio" name="diploma" /> Diploma in Professional Patisserie and Confectionery</label>
        <label><input type="radio" name="diploma" /> International Certificate in Barista</label>
      

      <motion.button
        type="submit"
        className="bg-gradient-to-br from-[#1f8eb3] to-[#070259] text-white border-none rounded-full px-5 py-2 text-lg cursor-pointer w-[100px] self-center mt-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Apply
      </motion.button>
      </div>
    </form>
  </motion.div>
</div>

        <motion.div
          className="bg-orange-500 rounded-[54px] p-3 w-[85%] lg:h-[455px] md:h-[355px] sm:h-[255px]  text-white shadow-xl border border-white/20"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <iframe
            title="Pinned Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3409189674744!2d85.32809827363036!3d27.7067583761829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190a692fc1c5%3A0xb1c8685679ee4aff!2sMid-Valley%20International%20College!5e0!3m2!1sen!2snp!4v1744215320508!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "54px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

      </div>
    </>
  );
};

export default Form;
