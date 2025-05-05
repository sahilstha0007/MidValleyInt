import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import axios from 'axios';

const Hero = () => {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const res = await axios.get('http://localhost:9000/hero');
        console.log(res,"response")
        setHeroData(res.data);
      } catch (err) {
        console.error('Failed to fetch hero content:', err);
      }
    };

    fetchHeroData();
  }, []);

  if (!heroData) {
    return <div className="text-center py-20 text-xl">Loading...</div>;
  }

  return (
    <div className="flex flex-col md:flex-row px-4 md:px-8 lg:px-20 gap-8 md:gap-16 lg:gap-36 py-7 pt-10 items-center justify-center">
      <div className="flex flex-col justify-center w-full md:w-2/5 lg:w-1/3 md:shrink">
        <div className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide space-y-1 md:space-y-2">
          <h1 className="text-[#003044] mb-1 md:mb-2">{heroData.heading1}</h1>
          <h1 className="text-[#f1662a] leading-tight">{heroData.heading2}</h1>
          <TypeAnimation
            sequence={heroData.animatedWords.flatMap(word => [word, 2000])}
            wrapper="h1"
            speed={20}
            cursor={true}
            repeat={Infinity}
            className="text-[#f1662a] leading-tight"
          />
        </div>

        <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-[#003044]">
          {heroData.description}
        </p>

        <button className="cursor-pointer mt-4 sm:mt-6 md:mt-8 bg-[#f1662a] hover:bg-[#E05A00] text-white font-semibold text-sm sm:text-base py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-colors w-fit">
          {heroData.buttonText}
        </button>
      </div>

      <div className="w-full md:w-3/5 lg:w-2/3 md:shrink-0 lg:shrink mt-8 md:mt-0">
        <img 
          className="h-auto w-full md:max-h-[560px] lg:max-h-[700px] lg:min-h-[520px] lg:min-w-[570px] rounded-lg shadow-lg object-cover" 
          src={heroData.imageUrl}
          alt="Valley of Champions building"
        />
      </div>
    </div>
  );
};

export default Hero;
