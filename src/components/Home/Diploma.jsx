import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    image: "/img/bachelor-3.webp",
    title: "BIT",
    location: "Bachelor of Information Technology (Hons)",
  },
  {
    image: "/img/bachelor-1.webp",
    title: "BBA",
    location: "Bachelor of Business (BBA-Finance) (Hons)",
  },
  {
    image: "/img/bachelor-2.webp",
    title: "BHM",
    location: "Bachelor of Business (Hospitality Management) (Hons)",
  },
];

export default function Diploma() {
  const [activeTab, setActiveTab] = useState(0);
  
  // Mocking useNavigate for artifact functionality
  const navigate = (path) => {
    console.log(`Navigating to: ${path}`);
  };

  return (
    <section className="py-12 px-4 md:px-8 lg:px-24 max-w-7xl mx-auto relative">
      
      {/* Top Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          <span className="text-indigo-900">Diploma Courses</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {cards.map((card, index) => (
          <div key={index} className="relative flex flex-col h-full">
            {/* Card container with margin to allow space for info box */}
            <div className="relative mb-16">
              {/* Image */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-[380px] object-cover object-top  rounded-md"
              />

              {/* Info Box - positioned absolutely but with enough space below */}
              <div className="absolute -bottom-14 left-0 right-0 flex justify-end">
                <div className="bg-white rounded-bl-sm rounded-br-sm rounded-tl-sm shadow-md px-6 py-4 w-[88%] flex justify-between items-center">
                  <div>
                    <h3 className="text-xl md:text-[22px] font-semibold text-orange-600">{card.title}</h3>
                    <p className="text-xs md:text-sm font-medium text-gray-600">{card.location}</p>
                  </div>
                  <button 
                    onClick={() => {
                      navigate(`/${card.title}`);
                      window.scrollTo(0,0);
                    }} 
                    className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center cursor-pointer"
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}