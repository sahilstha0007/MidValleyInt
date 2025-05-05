import React, { useState } from "react";
import { ArrowRight, ArrowUp } from "lucide-react";

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

  return (
    
    <section className="py-20 px-24 max-w-7xl mx-auto relative mb-14">
      
      {/* Top Heading */}
      <div className="text-center mb-6">
        
      <h2 className="text-4xl font-bold mt-2">
          <span className="text-indigo-900">Diploma Courses</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {cards.map((card, index) => (
          <div key={index} className="relative group">
            {/* Image */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-[430px] object-cover rounded-md"
            />

            {/* Floating Info Box */}
            <div className="absolute -bottom-14 left-0 right-0 flex justify-end">
              <div className="bg-white rounded-bl-sm rounded-br-sm rounded-tl-sm shadow-md px-6 py-4 w-[88%] flex justify-between items-center">
                <div>
                  <h3 className="text-[22px] font-semibold text-orange-600">{card.title}</h3>
                  <p className="text-sm font-medium text-gray-600">{card.location}</p>
                </div>
                <button className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                  <ArrowRight size={20} />
                </button>
                
              </div>
            </div>
          </div>
        ))}
      </div>
      

    
    </section>
  );
}
