import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import logo from '/logoicon.png';

const LoadingPage = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + '.' : ''));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#121212] text-white">
      <motion.img 
        src={logo} 
        alt="Logo" 
        className="w-48 h-48 transform-origin-center"
        animate={{ rotateY: [0, 360] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
      />
      <h2 className="mt-5 text-4xl font-bold">Loading{dots}</h2>
    </div>
  );
};

export default LoadingPage;
