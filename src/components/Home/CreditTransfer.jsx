import React from "react";
import { FaTrophy, FaArrowRight, FaPlaneDeparture } from "react-icons/fa";

export default function CreditTransfer() {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 max-w-7xl mx-auto">
        {/* Left Section - Images */}
        <div className="w-full lg:w-1/2 relative flex flex-col md:flex-row gap-6 items-center md:items-start md:justify-center mb-10 lg:mb-0">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-16 h-16 md:w-24 md:h-24 bg-blue-100 rounded-full opacity-70"></div>
          <div className="absolute bottom-32 md:bottom-56 right-0 w-16 h-16 md:w-24 md:h-24 bg-blue-100 rounded-full opacity-70"></div>
          
      

          {/* First image */}
          <div className="z-10 rounded-[50%/15%] overflow-hidden border-2 border-white shadow-lg">
            <img
              src="https://eduko-react.wpolive.com/static/media/img-1.16c687f0c8ad7aab0b2a.jpg"
              alt="Graduates"
              className=" hidden md:block w-[200px] md:w-[250px] lg:w-[300px] h-[350px] md:h-[450px] lg:h-[530px] object-cover"
            />
          </div>

          {/* Second image + Badge */}
          <div className="z-10 flex flex-col items-center gap-4">
            {/* Student image */}
            <div className="w-[250px]  md:w-[220px] h-[320px]  md:h-[300px] relative mb-6">
              <div className="w-full h-full overflow-hidden rounded-[50%/40%] bg-indigo-400 relative">
                <img 
                  src="/img/girl.png" 
                  alt="Student"
                  className="w-full h-full object-contain object-top"
                />
                {/* Inner white border */}
                <div className="absolute inset-2 rounded-[50%/40%] border-2 border-white pointer-events-none"></div>
              </div>
            </div>

            {/* Badge */}
            <div className="bg-sky-50 border-2 border-indigo-300 text-center px-4 md:px-6 py-3 md:py-4 rounded-xl">
              <div className="flex items-center justify-center gap-2 text-indigo-600 text-lg md:text-xl font-bold">
                <FaPlaneDeparture />
                100+
              </div>
              <p className="text-xs md:text-sm font-semibold text-indigo-800">Students Transfered</p>
            </div>
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 relative">
            Credit<span className="text-indigo-800"> Transfer</span> &<br /> 
            <span className="text-indigo-800">Pathway</span> Programs 
            <span className="absolute left-0 bottom-1 w-full h-3 border-b-4 border-yellow-300 -z-10 rounded-full"></span>
          </h2>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 items-center mb-5">
            <div className="bg-orange-600 text-white p-3 md:p-4 font-bold rounded-[8px] text-sm md:text-base">1 YEAR IN NEPAL</div>
            <p className="text-3xl md:text-4xl font-bold">+</p>
            <div className="bg-blue-900 text-white p-3 md:p-4 font-bold rounded-[8px] text-sm md:text-base">2 YEAR IN AUSTRALIA/UK</div>
          </div>
          
          <p className="font-sans max-w-[400px] text-gray-600 text-sm mb-6 leading-relaxed">
            Mid-Valley International College offers a Credit Transfer Pathway Program to select Australian and UK universities. Students must meet specific academic and English requirements. We plan to add more university partners soon.
          </p>
          
          {/* University logos */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
            <img src="/img/scu.webp" alt="Southern Cross University" className="w-32 md:w-40" />
            <img src="/img/ths.webp" alt="THS University" className="w-32 md:w-40" />
            <img src="/img/bangor.webp" alt="Bangor University" className="w-32 md:w-40" />
          </div>

          {/* CTA Button */}
          <button className="font-sans cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-5 md:px-6 py-2 md:py-3 rounded-full font-medium flex items-center gap-2 transition duration-200">
            Learn More About Us <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}