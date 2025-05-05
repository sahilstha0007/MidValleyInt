import React, { Suspense, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { UI } from "./book/UI";
import { Experience } from "./book/Experience";
import logo from '/logoicon.png';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faCertificate } from '@fortawesome/free-solid-svg-icons';
import { faUniversity, faClock, faMoneyCheckAlt, faVial, faListOl, faArrowRight } from "@fortawesome/free-solid-svg-icons";
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
        <div className="flex flex-col items-center justify-center h-screen  text-white">
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

function BHM() {
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

                    {/* Header */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#F1592D] to-orange-600 px-60">
                        Program Overview
                    </h1>

                    {/* Program Details */}
                    <div className="shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-4xl rounded-3xl  p-8 mb-10 max-w-4xl mx-auto">
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">

                            {/* Affiliation */}
                            <div className="flex items-start gap-4">
                                <div className="bg-orange-100 p-3 rounded-full">
                                    <FontAwesomeIcon icon={faUniversity} className="text-orange-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Affiliated to:</h3>
                                    <p className="text-base">HELP University, Malaysia</p>
                                </div>
                            </div>

                            {/* Duration */}
                            <div className="flex items-start gap-4">
                                <div className="bg-orange-100 p-3 rounded-full">
                                    <FontAwesomeIcon icon={faClock} className="text-orange-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Course Duration:</h3>
                                    <p className="text-base">4 years (8 semesters)</p>
                                </div>
                            </div>

                            {/* Internships */}
                            <div className="flex items-start gap-4">
                                <div className="bg-orange-100 p-3 rounded-full">
                                    <FontAwesomeIcon icon={faMoneyCheckAlt} className="text-orange-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Paid Internships:</h3>
                                    <p className="text-base">Available</p>
                                </div>
                            </div>

                            {/* Pre-requisites */}
                            <div className="flex items-start gap-4">
                                <div className="bg-orange-100 p-3 rounded-full">
                                    <FontAwesomeIcon icon={faVial} className="text-orange-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Pre-Requisite Tests:</h3>
                                    <p className="text-base">Not Required</p>
                                </div>
                            </div>

                            {/* Total Credit */}
                            <div className="flex items-start gap-4">
                                <div className="bg-orange-100 p-3 rounded-full">
                                    <FontAwesomeIcon icon={faListOl} className="text-orange-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Total Credit:</h3>
                                    <p className="text-base">124</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Affiliation Card */}
                    <div className="bg-gradient-to-br from-[#DA2128] to-[#a31318] rounded-3xl shadow-2xl p-8 text-white max-w-4xl mx-auto mb-10">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                            {/* Left Section: Text + Logo */}
                            <div className="flex items-center gap-4">
                                <div className="text-left">
                                    <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Affiliated With</h2>
                                    <p className="text-sm sm:text-base text-gray-100 mt-1">HELP University, Malaysia</p>
                                </div>
                                <img src={i2} alt="HELP University" className="w-24 sm:w-32 md:w-40 h-auto rounded-md shadow-md" />
                            </div>

                            {/* Right Section: Button */}
                            <a
                                href="https://help.edu.my/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-white text-[#DA2128] px-6 py-3 rounded-full font-bold text-lg hover:scale-105 hover:bg-gray-100 transition-transform shadow-md"
                            >
                                Visit Site <FontAwesomeIcon icon={faArrowRight} />
                            </a>
                        </div>
                    </div>

                    {/* Career Scope */}
                    <div className="relative bg-gradient-to-r from-[#003044] to-[#006c8e] text-white rounded-3xl shadow-2xl p-10 max-w-4xl mx-auto overflow-hidden backdrop-blur-md border border-white/10">
                        {/* Background Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-20 pointer-events-none rounded-3xl"></div>

                        {/* Decorative Glow Ring */}
                        <div className="absolute -top-10 -right-10 w-48 h-48 bg-orange-500 rounded-full blur-3xl opacity-20 z-0"></div>

                        <div className="relative z-10 space-y-6">
                            <h2 className="text-2xl sm:text-3xl font-bold text-orange-600">
                                Bachelor of Business in Hospitality Management (Hons)
                            </h2>

                            <p className="text-base sm:text-lg leading-relaxed text-white/90">
                                At <strong className="text-orange-300">Mid-Valley International College</strong>, we go beyond shaping professionals — we cultivate well-rounded individuals who lead with purpose.
                                Our <strong className="text-orange-300">Bachelor of Business in Hospitality Management (BBHM) Hons</strong> program instills core values of
                                accountability, compassion, fantastic spirit, collaboration, continuous learning, and a commitment to making a difference.
                            </p>

                            <p className="text-base sm:text-lg leading-relaxed text-white/90">
                                We believe these values are essential to creating future leaders who not only excel in their careers but also contribute
                                positively to the world around them.
                            </p>

                            <p className="text-base sm:text-lg leading-relaxed text-white/90">
                                Our curriculum blends industry-specific skills with personal development, ensuring students are ready to thrive in dynamic
                                fields like <span className="text-orange-300">events</span>, <span className="text-orange-300">gaming</span>, <span className="text-orange-300">entertainment</span>,
                                <span className="text-orange-300">tourism</span>, and <span className="text-orange-300">guest relations</span>.
                            </p>

                            <p className="text-base sm:text-lg leading-relaxed text-white/90">
                                Graduates of our program are equipped to succeed in top hospitality organizations, advancing quickly into managerial roles
                                while staying true to their values.
                            </p>

                            <p className="text-base sm:text-lg leading-relaxed text-white/90">
                                Join us at <strong className="text-orange-300">Nepal’s leading BBHM college</strong> and embark on a transformative journey where you’ll gain
                                professional expertise and become a better, more impactful human being — ready to unlock endless opportunities in the
                                thriving hospitality industry.
                            </p>
                        </div>
                    </div>


                    {/* HELP University Hospitality Program Highlights */}
                    <div className="py-12">
                        <div className="max-w-6xl mx-auto px-6 space-y-10">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center text-red-700 mt-50">
                                HELP University's Hospitality Program
                            </h2>

                            {/* Global Recognition Card */}
                            <div className="bg-white shadow-xl rounded-3xl p-8 space-y-6 hover:shadow-2xl transition-all transform hover:scale-105">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-[#003044] p-4 rounded-full text-white">
                                        <i className="fas fa-globe text-2xl"></i>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-orange-600">International Recognition</h3>
                                </div>
                                <p className="text-lg text-gray-700">
                                    Highly regarded internationally for its global recognition in Hospitality-related programs.
                                </p>
                            </div>

                            {/* Hospitality Lab Card */}
                            <div className="bg-white shadow-xl rounded-3xl p-8 space-y-6 hover:shadow-2xl transition-all transform hover:scale-105">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-[#003044] p-4 rounded-full text-white">
                                        <i className="fas fa-utensils text-2xl"></i>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-orange-600">On-Campus Hospitality Lab</h3>
                                </div>
                                <p className="text-lg text-gray-700">
                                    Own Hospitality Lab for empowering students with culinary mastery and practical hotel operations insights.
                                </p>
                            </div>

                            {/* Japan Internship Card */}
                            <div className="bg-white shadow-xl rounded-3xl p-8 space-y-6 hover:shadow-2xl transition-all transform hover:scale-105">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-[#003044] p-4 rounded-full text-white">
                                        <i className="fas fa-briefcase text-2xl"></i>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-orange-600">Prestigious Japan Internship</h3>
                                </div>
                                <p className="text-lg text-gray-700">
                                    Offers students the chance to experience Japan’s prestigious hospitality internship opportunity.
                                </p>
                            </div>

                            {/* Credit Transfer Card */}
                            <div className="bg-white shadow-xl rounded-3xl p-8 space-y-6 hover:shadow-2xl transition-all transform hover:scale-105">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-[#003044] p-4 rounded-full text-white">
                                        <i className="fas fa-exchange-alt text-2xl"></i>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-orange-600">Global Credit Transfer Options</h3>
                                </div>
                                <p className="text-lg text-gray-700">
                                    Credit Transfer availability in esteemed destinations like Australia, UK, UAE, and other Middle Eastern countries.
                                </p>
                            </div>
                        </div>
                    </div>


                    {/* Career Opportunity (Scope) for BHM */}
                    <div className="bg-gradient-to-r from-[#003044] to-[#006a8e] lg:w-4xl md:w-2xl sm:xl w-md rounded-4xl py-12 mx-auto flex justify-center items-center min-h-screen mt-50">
                        <div className="max-w-5xl px-6 space-y-12">

                            {/* Title Section */}
                            <div className="text-center space-y-4">
                                <h2 className="text-4xl sm:text-5xl font-bold text-white">
                                    Career Opportunities & Academic Pathways
                                </h2>
                                <p className="text-lg sm:text-xl text-white opacity-80">
                                    Discover diverse career and academic growth opportunities with our Hospitality Management program.
                                </p>
                            </div>

                            {/* Job Opportunity Section */}
                            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="bg-[#003044] text-white p-4 rounded-full shadow-lg">
                                        <i className="fas fa-briefcase text-3xl"></i>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-[#003044]">Job Opportunities & Paid Internship in Japan</h3>
                                </div>
                                <p className="text-lg text-gray-700">
                                    Earning a Hospitality Management (BHM) degree from Mid-Valley International College opens the door to a variety of career paths. You can participate in a 6-month paid internship in Japan, which includes airfare, accommodation, meals, and a monthly salary of Rs. 50,000. Furthermore, you'll receive a job offer with a monthly salary of Rs. 200,000, creating additional opportunities in Japan and internationally.
                                </p>
                                <p className="mt-4 font-semibold text-gray-800">Graduates can explore a wide range of sectors and positions, including:</p>
                                <ul className="list-disc pl-6 mt-2 text-lg text-gray-700 space-y-1">
                                    <li>Hotels and resorts</li>
                                    <li>Event planning and management</li>
                                    <li>Restaurant and culinary services</li>
                                    <li>Guest services and relations</li>
                                    <li>Cruise ships</li>
                                </ul>
                            </div>

                            {/* Academic Opportunities Section */}
                            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="bg-[#003044] text-white p-4 rounded-full shadow-lg">
                                        <i className="fas fa-graduation-cap text-3xl"></i>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-[#003044]">Academic Opportunities for BHM Graduates</h3>
                                </div>
                                <p className="text-lg text-gray-700">
                                    Graduates of the Bachelor of Business (Hospitality Management) (Hons) program have outstanding opportunities to expand their knowledge and career prospects. Here are some academic paths they can pursue:
                                </p>
                                <ul className="list-disc pl-6 mt-3 text-lg text-gray-700 space-y-1">
                                    <li>Master’s Degree</li>
                                    <li>Specialized Certifications</li>
                                    <li>Postgraduate Diplomas</li>
                                    <li>Research and Academia</li>
                                    <li>Professional Development Courses</li>
                                    <li>Entrepreneurship</li>
                                </ul>
                            </div>

                            {/* Entrepreneurship Section */}
                            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="bg-[#003044] text-white p-4 rounded-full shadow-lg">
                                        <i className="fas fa-lightbulb text-3xl"></i>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-[#003044]">Entrepreneurship Opportunities</h3>
                                </div>
                                <p className="text-lg text-gray-700">
                                    The Bachelor of Hospitality Management (Hons) (BHM) program at MVIC cultivates industry expertise and an entrepreneurial mindset. Our curriculum provides students with a solid foundation in hospitality, entrepreneurship, and leadership, empowering them to identify market opportunities, create sustainable business models, and become visionary leaders.
                                </p>
                                <p className="mt-3 text-lg text-gray-700">
                                    We also encourage students to transform their creative ideas into successful ventures. They participate in global competitions like the EOGSEA (Global Student Entrepreneur Awards), showcasing their innovative projects. Mentorship and resources are provided to help them compete internationally and emerge as future leaders.
                                </p>
                                <p className="mt-3 font-semibold text-gray-800">
                                    Together, we inspire the next generation of entrepreneurs to make a meaningful difference in the world.
                                </p>
                            </div>

                        </div>
                    </div>


                    <div className="max-w-3xl mt-50 mx-auto p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                        <div className="flex items-start gap-4">
                            <div className="bg-blue-50 p-3 rounded-lg">
                                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3c-2.5 0-4.5 2-4.5 4.5 0 .35.04.7.1 1.03a3.495 3.495 0 00-2.6 3.37c0 1.93 1.57 3.5 3.5 3.5h7c1.93 0 3.5-1.57 3.5-3.5 0-1.56-1.02-2.9-2.45-3.34.06-.33.1-.68.1-1.03C16.5 5 14.5 3 12 3zM8 15v3a1 1 0 001 1h6a1 1 0 001-1v-3" />
                                </svg>

                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-orange-600 mb-3">Our Very Own Hospitality Hub</h2>
                                <div className="space-y-3 text-black">
                                    <p>
                                        Experience hands-on learning in our Culinary Hub at MVIC, featuring modern facilities for a comprehensive education in culinary arts and hospitality management.
                                    </p>
                                    <p>
                                        Master essential culinary techniques in practical kitchens, bars, and a bakery kitchen, while also developing skills in hospitality management, housekeeping, and restaurant operations.
                                    </p>
                                    <p>
                                        Explore various facets of hotel management through dedicated labs and simulated environments, including front desk management, housekeeping procedures, event planning, and guest services.
                                    </p>
                                    <p>
                                        This holistic approach equips you for success in the dynamic hospitality industry.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Course Structure Section */}
                    <div className="px-4 sm:px-10 mt-10 mb-40">
                        <h1 className="text-left text-[#F1592D] text-2xl sm:text-3xl lg:text-4xl font-bold mb-10 mt-50 px-[32%]">
                            Course Structure
                        </h1>

                        {/* Top Year Buttons */}
                        <div className="bg-gradient-to-r from-[#003044] to-[#006a8e]  text-white p-6 rounded-3xl w-full max-w-7xl mx-auto">
                            <div className="flex flex-wrap gap-4 sm:gap-6 mb-10 justify-center">
                                {Object.keys(semesterData).map((year) => (
                                    <motion.div
                                        key={year}
                                        whileTap={{ scale: 0.9 }}
                                        whileHover={{ scale: 1.05 }}
                                        className="select-none"
                                    >
                                        <button
                                            onClick={() => setActiveYear(year)}
                                            className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full text-white font-semibold text-base sm:text-lg transition-colors duration-300 ${activeYear === year ? "bg-[#F1592D]" : "bg-[#F1592D]/80 hover:bg-[#F1592D]"
                                                }`}
                                        >
                                            {year}
                                        </button>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Semester Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                {/* Semester 1 */}
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative bg-[#F1592D] backdrop-blur-md  shadow-2xl rounded-3xl p-6"
                                >
                                    <div className="absolute -top-4 left-4 bg-white text-blue-900 text-sxl font-bold px-4 py-1 rounded-full shadow">
                                        {getOrdinal((parseInt(activeYear.replace("Year", "")) - 1) * 2 + 1)} Semester
                                    </div>
                                    <ul className="list-disc mt-8 pl-6 space-y-2 text-[#002B5B] font-medium text-base sm:text-lg">
                                        {renderSubjects("sem1")}
                                    </ul>
                                </motion.div>

                                {/* Semester 2 */}
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative bg-[#F1592D] backdrop-blur-md shadow-2xl rounded-3xl p-6"
                                >
                                    <div className="absolute -top-4 left-4 bg-white text-blue-900 text-sxl font-bold  px-4 py-1 rounded-full shadow">
                                        {getOrdinal((parseInt(activeYear.replace("Year", "")) - 1) * 2 + 2)} Semester
                                    </div>
                                    <ul className="list-disc mt-8 pl-6 space-y-2 text-[#002B5B] font-medium text-base sm:text-lg">
                                        {renderSubjects("sem2")}
                                    </ul>
                                </motion.div>
                            </div>

                            {/* Credit Hours */}
                            <p className="text-center text-lg sm:text-xl font-semibold text-white mt-16">
                                Credit hr : 124
                            </p>
                        </div>
                    </div>


                    <div className="relative from-orange-50 to-white py-16 px-6 sm:px-10 md:px-16 lg:px-32 overflow-hidden">
                        {/* Decorative SVG Background */}
                        <div className="absolute inset-0 -z-10 opacity-10">
                            <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" fill="none">
                                <defs>
                                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                        <path d="M 40 0 L 0 0 0 40" stroke="#fb923c" strokeWidth="0.5" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#grid)" />
                            </svg>
                        </div>

                        {/* Section Header */}
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-orange-600 text-center mb-6 relative z-10">
                            Advance Your Career in the Booming Hospitality Industry
                            <div className="w-16 h-1 bg-orange-500 mx-auto mt-2 rounded-full" />
                        </h2>
                        <p className="text-lg sm:text-xl lg:text-2xl text-center text-blue-1000 mb-12 max-w-4xl mx-auto">
                            With our innovative program designed to enhance your skills, drive operational excellence, and achieve new levels of success.
                        </p>

                        {/* Cards Section */}
                        <div className="flex flex-col gap-10 items-center">
                            {[
                                {
                                    icon: "🏨", // Hotel icon
                                    text: "Master Global Hotel Operations: Learn how to manage complex hotel operations, integrating global best practices in technology and operations for effective service delivery."
                                },
                                {
                                    icon: "💻", // Laptop/technology icon
                                    text: "Technology Integration and Effective Management: Gain hands-on experience with modern hotel technology solutions while improving your management skills to lead diverse teams effectively."
                                },
                                {
                                    icon: "🎓", // Graduation cap icon (representing education and internships)
                                    text: "Dynamic Final-Year Projects and Internships: Participate in dynamic final-year projects and internships that offer hands-on experience and develop essential industry-specific skills."
                                }
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="backdrop-blur-md bg-white/60 border border-orange-200 p-6 rounded-3xl shadow-xl w-full sm:w-[80%] lg:w-[100%] transform transition-all hover:scale-105 hover:shadow-orange-100 duration-300 flex items-start gap-4"
                                >
                                    <div className="text-3xl">{item.icon}</div>
                                    <p className="text-lg sm:text-xl text-orange-700">{item.text}</p>
                                </div>
                            ))}
                        </div>

                        {/* Final Statement */}
                        <p className="text-lg sm:text-xl lg:text-2xl text-center text-blue-1000 mt-12 max-w-3xl mx-auto">
                            Our curriculum enhances technical knowledge with essential soft skills and non-credit courses for success in the global marketplace.
                        </p>
                    </div>


                </div>

                {/* Right Side (30%) */}
                <div className="w-full lg:w-[30%] flex flex-col items-center gap-10 mt-10 lg:mt-0">
                    <motion.div
                        className="w-full lg:w-[30%] flex flex-col items-center gap-10 mt-10 lg:mt-0"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <Link to="/">
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: 1 }}
                                whileTap={{ scale: 0.97 }}
                                className="relative w-[290px] h-[300px] rounded-3xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.3)] transition-all duration-500 group cursor-pointer bg-gradient-to-br from-[#f1592d] via-[#ff784b] to-[#ff9b4e]"
                            >
                                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm z-10 rounded-3xl group-hover:backdrop-blur-md transition-all duration-300"></div>
                                <img
                                    src={i3}
                                    alt="Sample"
                                    className="w-11/12 h-11/12 object-cover rounded-xl z-20 relative mx-auto my-auto mt-4 transition-transform duration-300 group-hover:scale-105"
                                />
                            </motion.div>
                        </Link>
                    </motion.div>

                    {/* Inquiry Section */}
                    <div className="bg-[#F1592D] text-center p-4 rounded-3xl overflow-hidden lg:mt-350 w-[290px]">
                        <h2 className="text-3xl font-bold text-[#fff7f7] mb-1">For Inquiry</h2>
                        <ul className="list-none p-0 m-5 flex flex-col items-start text-[#fff7f7]">
                            <li className="flex items-center gap-2 text-lg mb-1">
                                <img src={i4} alt="Email" className="w-6 h-6" />
                                <span>info@midvalley.edu.np</span>
                            </li>
                            <li className="flex items-center gap-2 text-lg mb-1">
                                <img src={i5} alt="Tel" className="w-6 h-6" />
                                <span>1-4535188,</span>
                            </li>
                            <li className="flex items-center gap-2 text-lg mb-1">
                                <img src={i5} alt="Tel" className="w-6 h-6" />
                                <span>4537188+</span>
                            </li>
                            <li className="flex items-center gap-2 text-lg mb-1">
                                <img src={i6} alt="Number" className="w-6 h-6" />
                                <span>977-9841232529</span>
                            </li>
                        </ul>
                        <motion.div
                            className="text-white text-lg sm:text-sm md:text-xl select-none"
                            whileTap={{ scale: 0.8 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <Link to="/EnquiryForm" >
                                <button className="bg-[#003044] text-white px-5 py-2 text-lg rounded-full cursor-pointer hover:bg-white hover:text-[#003044]">
                                    Contact Us
                                </button>
                            </Link>
                        </motion.div>
                    </div>

                    <h1 className="text-left text-[#F1592D] text-2xl sm:text-3xl lg:text-4xl font-bold lg:mt-1015">Related Courses</h1>


                    {/* Bachelor of Information Technology (Hons) */}
                    <div className="relative w-72 h-72 bg-gradient-to-br from-orange-500 to-[#F1592D] rounded-3xl overflow-hidden shadow-2xl group">
                        <img
                            src={i8}
                            alt="Bachelor of IT"
                            className="w-full h-full object-cover rounded-3xl transition-all duration-500 group-hover:scale-110 group-hover:blur-sm"
                        />
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl flex flex-col justify-center items-center text-center px-6 gap-4">
                            <h2 className="text-white text-xl md:text-2xl font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                                Bachelor of Information Technology (Hons)
                            </h2>
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="z-10">
                                <Link to="/">
                                    <button className="bg-white text-[#F1592D] font-semibold px-5 py-2 rounded-full shadow-md hover:bg-[#003044] hover:text-white transition-all duration-300">
                                        View Details
                                    </button>
                                </Link>
                            </motion.div>
                        </div>
                        <div className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-transparent group-hover:border-white group-hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.5)] transition-all duration-500"></div>
                    </div>

                    {/* Bachelor of Business (Hons) */}
                    <div className="relative w-72 h-72 bg-gradient-to-br from-orange-500 to-[#F1592D] rounded-3xl overflow-hidden shadow-2xl group">
                        <img
                            src={i7}
                            alt="Bachelor of Business"
                            className="w-full h-full object-cover rounded-3xl transition-all duration-500 group-hover:scale-110 group-hover:blur-sm"
                        />
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl flex flex-col justify-center items-center text-center px-6 gap-4">
                            <h2 className="text-white text-xl md:text-2xl font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                                Bachelor of Business (Hons)
                            </h2>
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="z-10">
                                <Link to="/">
                                    <button className="bg-white text-[#F1592D] font-semibold px-5 py-2 rounded-full shadow-md hover:bg-[#003044] hover:text-white transition-all duration-300">
                                        View Details
                                    </button>
                                </Link>
                            </motion.div>
                        </div>
                        <div className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-transparent group-hover:border-white group-hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.5)] transition-all duration-500"></div>
                    </div>


                </div>
            </div>
        </div>



    );
}

export default BHM;