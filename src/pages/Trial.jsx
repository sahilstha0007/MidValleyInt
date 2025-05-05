import React, { Suspense, useState } from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { UI } from "./book/UI";
import { Experience } from "./book/Experience";




import i1 from './imgs/BHMcover.png';
import i2 from './imgs/HELPLogo.png';
import i3 from './imgs/AD.png';
import i4 from './imgs/emailicon.png';
import i5 from './imgs/Telicon.png';
import i6 from './imgs/phoneicon.png';
import i7 from './imgs/BBAF.png';
import i8 from './imgs/BITF.png';


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

const semesterData = {
    Year1: {
        sem1: [
            "ACC102: Accounting for Hospitality & Tourism",
            "TRM101: Principles of Management for Hospitality & Tourism",
            "TRM103: Fundamental of Food & Beverage Service",
            "TRM200: Introduction to Tourism, Leisure and Hospitality Management",
            "TRM207: Room Division Management",
            "Non Credit Course | Case Study: MS Excel 101, Tally Software 101, Academic Writing 101",
            "Experiential Learning Programme: Visit to Different Hotels and Understanding Different Department Functions",
            "Soft Skills & Personal Development: Dressing Etiquettes, Communication Skill 101 – Goal Setting and Self Awareness",
            "Development Center Activities: Intra-College Sports Competition"
        ],
        sem2: [
            "ECO101: Principles of Micro-economics",
            "ITC101: Information Technology for Business",
            "MKT101: Principles of Marketing",
            "TRM205: Introduction to Kitchen Operations & Food and Beverage Services",
            "TRM214: Accommodation Operations Management",
            "Non Credit Course | Case Study: MS PowerPoint 101, Social Media Marketing 101",
            "Experiential Learning Programme: Introduction to ERP in Hotels, Introduction to PMS Software in Hotel, Community Home Stay",
            "Soft Skills & Personal Development: Com. Skill 102 – Effective Communication & Feedback, Body Language 101",
            "Development Center Activities: Inter-College Sports Competition"
        ]
    },
    Year2: {
        sem1: [
            "COM200: Managerial Communication",
            "QBM101: Business Statistics",
            "TRM202: Organizational Behaviour for Service Industry",
            "TRM231: Bar, Beverage and Barista Management",
            "TRM233: Hotel Operations Management",
            "Non Credit Course | Case Study: MS PowerPoint 102, SPSS 101",
            "Experiential Learning Programme: Content Writing 101, Data Analytics 101, Barista and Bar 101",
            "Soft Skills & Personal Development: Com. Skill 102 – Presentation Skills and Digital Literacy",
            "Development Center Activities: TedX (Simulation) @ Mid-Valley, Story Yeller College Edition, Student Mentorship Programme"
        ],
        sem2: [
            "MGT212: Business Analytics for Decision Making",
            "TRM204: Human Resource Management for the Hospitality and Tourism Industry",
            "TRM213: Hospitality Small Business Operations",
            "TRM304: Research Methodology for Hospitality Industry",
            "TRM316: Dining Etiquettes",
            "Non Credit Course | Case Study: Labour Law in Nepal 101, Business Model Canvas 101, SPSS 102",
            "Experiential Learning Programme: Data Analytics 102, Research Survey in Different Hotels, Banquet Management in a Hotel or Independent Banquet",
            "Soft Skills & Personal Development: Basic Financial Modeling 101, Business Model Canvas, Case Study – Booking Engine and Trivago, Case Study – Airbnb and Trip Advisor",
            "Development Center Activities: Speakers Forum (Simulation of Toast Masters), Mud and Music Mayhem"
        ]
    },
    Year3: {
        sem1: [
            "FIN201: Business Finance",
            "MGT204: Asian Entrepreneurship & Innovation",
            "MPU3243: Personal Branding and Career Management",
            "MPU3432: Co-curriculum – Event Management 2",
            "TRM317: Service Management & Customer Care in Hospitality Industry",
            "TRM400: Graduation Project (I)",
            "Non Credit Course | Case Study: Revenue Management and MIS Analysis 101",
            "Experiential Learning Programme: Shadow an Entrepreneur",
            "Soft Skills & Personal Development: Com. Skill 103 – Interview Skill, Com. Skill 104 – CV Preparation, Com. Skill 105 – Email Etiquettes",
            "Development Center Activities: Intra-College Business Idea Pitch Competition"
        ],
        sem2: [
            "TRM301: Food and Beverage Management",
            "TRM305: Leadership and Management in Hospitality Industry",
            "TRM306: Training & Development in Hospitality Industry",
            "TRM323: Contemporary Issues in the Hospitality and Tourism Industry",
            "TRM400: Graduation Project (II)",
            "Non Credit Course | Case Study: Business Model & Disruption in Hospitality Industry",
            "Experiential Learning Programme: Shadow A CEO | Senior Management in a Hotel, Training & Development Module for a Hotel",
            "Soft Skills & Personal Development: CV Preparation 2.0, Interview Skill 2.0, Elevator Pitching Workshop, Art of Negotiation",
            "Development Center Activities: Guidance Counselling"
        ]
    },
    Year4: {
        sem1: [
            "TRM330: Industry Placement Practicum (2 semesters)"
        ],
        sem2: []
    }
};



const getOrdinal = (n) => {
    const s = ["th", "st", "nd", "rd"], v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

function App() {
    const [activeYear, setActiveYear] = useState("Year1");

    const slideInLeft = {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 3.5,
                ease: "easeOut",
                delayChildren: 0.2, // This adds a slight delay before animations start
                staggerChildren: 0.1, // This will stagger child animations
            }
        }
    };

    const renderSubjects = (semester) => {
        return semesterData[activeYear][semester].map((subject, idx) => (
            <li key={idx} className="text-white text-lg mb-1">
                {subject}
            </li>
        ));
    };

    return (
        <div className="w-full font-sans">

            <div className="relative text-center overflow-hidden ">
                <div
                    className="relative lg:h-[650px] md:h-[350px] sm:h-[250px] overflow-hidden"
                    style={{
                        backgroundImage: "radial-gradient(circle, rgb(172, 166, 166),rgb(232, 79, 13))",
                    }}
                >



                    {/* Foreground UI */}
                    <UI />
                    <Suspense fallback={<LoadingPage />}>
                    <Canvas
                        shadows
                        camera={{
                            position: [-0.5, 1, window.innerWidth > 500 ? 2.5 : 50],
                            fov: 45,
                        }}
                    >
                        
                     <Experience />
                    </Canvas>
                    </Suspense>

                    {/* Text Overlay */}
                    <motion.div
                        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl z-10"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                    >
                        Bachelor of Hotel Management (Hons)
                    </motion.div>
                </div>

            </div>

         

            {/* 70-30 Horizontal Split */}
            <div className="flex flex-col lg:flex-row mt-10">
                {/* Left Side (70%) */}
                <div className="w-full lg:w-[70%]">
                    

                    </div>

                    {/* Course Structure Section */}
                    <h1 className="text-left text-[#F1592D] text-2xl sm:text-xl lg:text-4xl font-bold mt-50 sm:px-75  lg:pl-85 mb-6">
                        Course Structure
                    </h1>

                    {/* Top Buttons + Dynamic Semester Labels */}
                    <div className="bg-[#003044] text-white p-5 rounded-3xl text-left w-full lg:w-[1000px] sm:w-[500px] h-auto px-6  sm:px-10 mt-1 mx-auto mb-40">
                        <div className="flex flex-wrap gap-4 sm:gap-6 mb-10 justify-center">
                            {Object.keys(semesterData).map((year) => (
                                <motion.div
                                    className="text-white text-lg sm:text-sm md:text-xl select-none"
                                    whileTap={{ scale: 0.8 }}
                                    whileHover={{ scale: 1.1 }}
                                >


                                    <button
                                        key={year}
                                        onClick={() => setActiveYear(year)}
                                        className={`px-6 sm:px-10 py-2 sm:py-3 rounded-full text-white font-semibold text-lg sm:text-xl ${activeYear === year ? "bg-[#F1592D]" : "bg-[#F1592D]/80"}`}
                                    >
                                        {year}
                                    </button>
                                </motion.div>
                            ))}
                        </div>

                        {/* Semester Sections */}
                        <div className="flex flex-col md:flex-row justify-between gap-4">
                            <div className="w-full md:w-1/2">
                                <div className="text-center text-lg sm:text-xl font-semibold text-white mb-2">
                                    <span>{getOrdinal((parseInt(activeYear.replace("Year", "")) - 1) * 2 + 1)} Semester</span>
                                </div>
                                <div className="bg-[#F1592D] p-4 sm:p-6 rounded-3xl">
                                    <ul className="list-disc pl-5">{renderSubjects("sem1")}</ul>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2">
                                <div className="text-center text-lg sm:text-xl font-semibold text-white mb-2">
                                    <span>{getOrdinal((parseInt(activeYear.replace("Year", "")) - 1) * 2 + 2)} Semester</span>
                                </div>
                                <div className="bg-[#F1592D] p-4 sm:p-6 rounded-3xl">
                                    <ul className="list-disc pl-5">{renderSubjects("sem2")}</ul>
                                </div>
                            </div>
                        </div>
                        <p className="text-center text-lg sm:text-xl font-semibold text-white m-10">Credit hr : 125</p>
                    </div>
                </div>

               
                </div>
     



    );
}

export default App;



