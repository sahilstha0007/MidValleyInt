import React, { useState } from 'react';

const ProgramOverviewTabs = ({ programOverview, isCulinary, isPatisserie, isBarista }) => {
  const [activeTab, setActiveTab] = useState("program");
  
  return (
    <div className="bg-[rgba(241,89,45,0.10)] mx-4 sm:mx-20 my-4 p-4 sm:p-5 md:p-20 rounded-xl sm mb-8 relative overflow-hidden">
      {/* Course-specific decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {isCulinary && (
          <>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 opacity-5" style={{animation: 'spin 30s linear infinite'}}>
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="80" stroke="#003044" strokeWidth="1" fill="none" />
                <circle cx="100" cy="100" r="60" stroke="#003044" strokeWidth="1" fill="none" />
                <circle cx="100" cy="100" r="40" stroke="#003044" strokeWidth="1" fill="none" />
                <path d="M100,20 L100,180" stroke="#003044" strokeWidth="0.5" />
                <path d="M20,100 L180,100" stroke="#003044" strokeWidth="0.5" />
                <path d="M34,34 L166,166" stroke="#003044" strokeWidth="0.5" />
                <path d="M34,166 L166,34" stroke="#003044" strokeWidth="0.5" />
              </svg>
            </div>
          </>
        )}
        
        {isPatisserie && (
          <>
            <div className="absolute -top-5 -right-5 w-32 h-32 opacity-5" style={{animation: 'float 20s ease-in-out infinite alternate'}}>
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40,100 C40,60 60,40 100,40 C140,40 160,60 160,100 C160,140 140,160 100,160 C60,160 40,140 40,100 Z" stroke="#F1592D" strokeWidth="1" fill="none" />
                <path d="M70,70 C70,50 80,40 100,40 C120,40 130,50 130,70 C130,90 120,100 100,100 C80,100 70,90 70,70 Z" stroke="#F1592D" strokeWidth="1" fill="none" />
                <path d="M70,130 C70,110 80,100 100,100 C120,100 130,110 130,130 C130,150 120,160 100,160 C80,160 70,150 70,130 Z" stroke="#F1592D" strokeWidth="1" fill="none" />
              </svg>
            </div>
          </>
        )}
        
        {isBarista && (
          <>
            <div className="absolute -bottom-5 -right-5 w-36 h-36 opacity-5" style={{animation: 'pulse 15s ease-in-out infinite'}}>
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="150" r="40" stroke="#603913" strokeWidth="1" fill="none" />
                <path d="M60,150 C60,150 70,70 100,70 C130,70 140,150 140,150" stroke="#603913" strokeWidth="1" fill="none" />
                <path d="M70,70 C70,50 130,50 130,70" stroke="#603913" strokeWidth="1" fill="none" />
                <path d="M85,70 L85,50" stroke="#603913" strokeWidth="1" />
                <path d="M115,70 L115,50" stroke="#603913" strokeWidth="1" />
              </svg>
            </div>
          </>
        )}
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
        <button
          onClick={() => setActiveTab("program")}
          className={`px-6 py-2 rounded-full flex items-center text-center transition duration-300 ${
            activeTab === "program"
              ? "bg-[#F1592D] text-white shadow-md"
              : "bg-white text-[#F1592D] border border-[#F1592D] hover:bg-[#F1592D] hover:text-white hover:shadow-lg"
          }`}
        >
          Course Detail
        </button>
        <button
          onClick={() => setActiveTab("details")}
          className={`px-6 py-2 rounded-full flex items-center text-center transition duration-300 ${
            activeTab === "details"
              ? "bg-[#F1592D] text-white shadow-md"
              : "bg-white text-[#F1592D] border border-[#F1592D] hover:bg-[#F1592D] hover:text-white hover:shadow-lg"
          }`}
        >
          Program Overview
        </button>
        <button
          onClick={() => setActiveTab("certification")}
          className={`px-6 py-2 rounded-full flex items-center text-center transition duration-300 ${
            activeTab === "certification"
              ? "bg-[#F1592D] text-white shadow-md"
              : "bg-white text-[#F1592D] border border-[#F1592D] hover:bg-[#F1592D] hover:text-white hover:shadow-lg"
          }`}
        >
          Certification
        </button>
      </div>

      {/* Content */}
      {activeTab === "program" && (
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 flex flex-col justify-center">
            <img
              src={programOverview.logo}
              alt="City & Guilds logo"
              className="w-32 h-32 sm:h-40 md:48 lg:h-56 object-contain mx-auto mb-6"
            />
            <p className="text-black leading-relaxed text-justify px-4">
              {programOverview.description}
            </p>
          </div>
          <div className="flex-1 bg-white p-6 rounded-xl">
            <p className="text-gray-700 mb-6 text-justify">
              Students will have the following criteria to fulfill before becoming a part of this course.
            </p>
            <div className="space-y-4">
              {programOverview.requirements.map((req, index) => (
                <div key={index} className="flex justify-between border-b pb-2">
                  <span className="font-bold">{req.label}</span>
                  <span>{req.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "details" && (
        <div className="p-6 rounded-xl text-gray-800">
          <p className="text-center mb-6 text-gray-700">
            Some description on all the course materials and their sub-details explaining what you'll learn in this course.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {programOverview.topics.map((topic, index) => (
              <div key={index} className="bg-[#fcded5] p-4 rounded-lg">
                {topic}
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "certification" && (
        <div className="flex justify-center">
          <img
            src={programOverview.certificationImage}
            alt="Certification"
            className="rounded-xl shadow-lg w-full max-w-md object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default ProgramOverviewTabs;
