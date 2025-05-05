import React from "react";
import { PhoneCall, Users, Map, BadgePercent, GraduationCap } from "lucide-react";

const CreditTransfer = () => {
  return (
    <section className=" relative flex flex-col lg:flex-row text-white mb-14">
      {/* Left: Image */}
      <div className="relative w-full lg:w-1/2 mb-10 lg:mb-0">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-blue-100 rounded-full opacity-70"></div>
            <div className="absolute top-20 right-10 w-16 h-16 bg-pink-200 transform rotate-45"></div>
            <div className="absolute right-32 top-40 w-0 h-0 border-l-[35px] border-l-transparent border-b-[60px] border-b-yellow-400 border-r-[35px] border-r-transparent"></div>
            
            {/* Person Image Container - This will contain the image and the overlapping elements */}
            <div className="relative ml-12 mr-12 lg:ml-20">
              {/* Main Image */}
              <img 
                src="/img/bachelor-1.webp" 
                alt="Business professional" 
                className="rounded-lg max-w-full h-auto relative z-0"
              />
              
              {/* Blue Play Button - Positioned over the image */}
              <div className="absolute left-0 bottom-1/3 transform -translate-x-1/2 z-10">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-8 h-8">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            
            </div>
            
            {/* Blue Squiggle */}
            <svg className="absolute top-24 right-24 w-32 h-32 text-blue-400" viewBox="0 0 100 100" fill="none">
              <path d="M20 40C40 10 60 50 80 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>

      {/* Right: Content */}
      <div className="w-full lg:w-1/2 p-8 lg:p-8">
        <h2 className="text-4xl font-extrabold leading-tight mb-4 text-blue-900 ">Credit Transfer &<br />Pathway Programs for Students
        </h2>
        <div className=" flex gap-4 items-center mb-5">
            <div className=" bg-orange-600 text-white p-6 font-bold rounded-[9px]">1 YEAR IN NEPAL</div>
            <p className=" text-4xl font-bold">+</p>
            <div className=" bg-blue-900 text-white p-6 font-bold rounded-[9px]">2 YEAR IN AUSTRALIA/UK</div>
        </div>
        <p className="text-[#525151] mb-6">
        Mid-Valley International College offers a Credit Transfer Pathway Program to select Australian and UK universities. Students must meet specific academic and English requirements. We plan to add more university partners soon.        </p>

        {/* Stats Grid */}
        <div className="flex gap-4 flex-col flex-wrap border-t border-white/40 pt-6">
  <div className="flex flex-wrap gap-12 ">
    <img src="/img/scu.webp" alt="Logo 1" className="w-40 " />
    <img src="/img/ths.webp" alt="Logo 2" className="w-40" />
    <img src="/img/bangor.webp" alt="Logo 1" className="w-40" />
  </div>

</div>
{/* <button className=" absolute right-[8%] bottom-[5%] bg-blue-700 w-28 h-60  flex justify-center items-center text-2xl">Learn<br/>  More {"->"}</button> */}


      
      </div>
    </section>
  );
};

export default CreditTransfer;
