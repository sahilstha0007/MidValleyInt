import React, { Suspense, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

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
            "Introduction to Information Technology",
            "Front-End Web Development",
            "Introduction to Database Systems",
            "Introduction to Programming"
        ],
        sem2: [
            "Programming Fundamentals",
            "Discrete Mathematics",
            "Introduction to Operating Systems",
            "Data Communications and Networking"
        ]
    },
    Year2: {
        sem1: [
            "Analytics for Decision Making",
            "Internet of Things",
            "System Architecture and Design",
            "Advanced OO Programming"
        ],
        sem2: [
            "User Experience Design"
        ]
    },
    Year3: {
        sem1: [
            "IT Project Management",
            "Computer Ethics and Cyber Security",
            "Web Programming",
            "Communication and Leadership Skills",
            "A* Gen Careers in Malaysia & Beyond",
            "Software Engineering Principles",
            "Technopreurship & Innovation",
            "Object Oriented Programming in C++"
        ],
        sem2: [
            "Final Year Project I",
            "Web Technologies",
            "Multimedia Systems",
            "Introduction to Mobile Apps"
        ]
    },
    Year4: {
        sem1: [
            "Final Year Project II",
            "Business Development Project",
            "Wireless Networking",
            "Co-Curriculum Event Management"
        ],
        sem2: [
            "Industrial Internship"
        ]
    }
};


const getOrdinal = (n) => {
    const s = ["th", "st", "nd", "rd"], v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

function BIT() {
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
                        Bachelor’s in Information Technology (BIT)
                    </motion.div>
                </div>

            </div>



            {/* 70-30 Horizontal Split */}
            <div className="flex flex-col lg:flex-row mt-10">
                {/* Left Side (70%) */}
                <div className="w-full lg:w-[70%]">
                    <section className="py-12 px-4 sm:px-8 lg:px-24  text-[#003044]">

                        {/* Header */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl px-30 font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#F1592D] to-orange-600">
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
                        <div className="bg-gradient-to-r from-[#003044] to-[#006c8e] text-white rounded-3xl shadow-xl p-8 max-w-3xl mx-auto space-y-6 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#002033] to-[#004a5b] opacity-30"></div>
                            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed z-10 relative">
                                Pursuing a bachelor’s in Information Technology (BIT) equips you with the skills and knowledge necessary to thrive in a rapidly evolving tech landscape. The degree emphasizes the practical application of technology to address real-world challenges, manage systems, and enhance business operations. Here are some of the career paths you can consider after earning your degree:
                            </p>

                            <ul className="list-disc list-inside space-y-2 text-lg sm:text-xl lg:text-2xl z-10 relative">
                                <li className="transition-all hover:scale-105 hover:text-[#66c0e5] hover:cursor-pointer">Technology and Software Development</li>
                                <li className="transition-all hover:scale-105 hover:text-[#66c0e5] hover:cursor-pointer">Finance and Banking</li>
                                <li className="transition-all hover:scale-105 hover:text-[#66c0e5] hover:cursor-pointer">Healthcare</li>
                                <li className="transition-all hover:scale-105 hover:text-[#66c0e5] hover:cursor-pointer">Retail and E-commerce</li>
                                <li className="transition-all hover:scale-105 hover:text-[#66c0e5] hover:cursor-pointer">Government and Public Sector</li>
                                <li className="transition-all hover:scale-105 hover:text-[#66c0e5] hover:cursor-pointer">Education</li>
                                <li className="transition-all hover:scale-105 hover:text-[#66c0e5] hover:cursor-pointer">Consulting</li>
                            </ul>
                        </div>


                    </section>

                    <div className="min-h-screen py-12 px-6 md:px-20">

                        {/* Header */}
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-extrabold text-orange-500 mb-4">Further Education Purpose</h1>
                            <p className="text-gray-600 text-lg">
                                Advance your career with specialized education in Information Technology.
                            </p>
                        </div>

                        {/* Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Master’s in IT */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl border-t-4 border-orange-500">
                                <div className="flex items-center mb-4">
                                    <FontAwesomeIcon icon={faGraduationCap} className="text-orange-600 text-2xl mr-3" />
                                    <h2 className="text-xl font-semibold text-gray-800">Master’s in Information Technology</h2>
                                </div>
                                <p className="text-gray-600">
                                    Specialize further in areas like <span className="font-medium text-blue-900">Data Science</span>, <span className="font-medium text-blue-900">Cybersecurity</span>, or <span className="font-medium text-blue-900">Business Analytics</span>.
                                </p>
                            </div>

                            {/* MBA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl border-t-4 border-orange-500">
                                <div className="flex items-center mb-4">
                                    <FontAwesomeIcon icon={faBriefcase} className="text-orange-600 text-2xl mr-3" />
                                    <h2 className="text-xl font-semibold text-gray-800">MBA</h2>
                                </div>
                                <p className="text-gray-600">
                                    Combine your technical background with <span className="font-medium text-blue-900">business management skills</span> to lead IT-driven organizations.
                                </p>
                            </div>

                            {/* Certifications */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl border-t-4 border-orange-500">
                                <div className="flex items-center mb-4">
                                    <FontAwesomeIcon icon={faCertificate} className="text-orange-600 text-2xl mr-3" />
                                    <h2 className="text-xl font-semibold text-gray-800">Certifications</h2>
                                </div>
                                <p className="text-gray-600">
                                    Boost your profile with certifications like <span className="font-medium text-blue-900">PMP</span>, <span className="font-medium text-blue-900">CISSP</span>, <span className="font-medium text-blue-900">AWS Architect</span>, or <span className="font-medium text-blue-900">CompTIA Security+</span>.
                                </p>
                            </div>
                        </div>

                        {/* Closing Paragraph */}
                        <div className="mt-16 max-w-3xl mx-auto text-center text-gray-700 text-lg leading-relaxed">
                            A <span className="font-semibold text-blue-700">Bachelor’s in Information Technology</span> provides a strong foundation for a versatile and rewarding career in today's tech-driven world. The demand for IT professionals is rapidly growing, making it a smart and strategic field to build a successful future.
                        </div>
                    </div>


                    {/* HELP University IT Program Highlights */}
                    <div className=" py-12">
                        <div className="max-w-6xl mx-auto px-6 space-y-10">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center text-red-700">
                                HELP University's Information Technology Program
                            </h2>

                            {/* Internship Opportunity Card */}
                            <div className="bg-white shadow-xl rounded-3xl p-8 space-y-6 hover:shadow-2xl transition-all transform hover:scale-105">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-[#003044] p-4 rounded-full text-white">
                                        <i className="fas fa-laptop-code text-2xl"></i>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-orange-600">OIST Internship Program</h3>
                                </div>
                                <p className="text-lg text-gray-700">
                                    The OIST (Okinawa Institute of Science and Technology) offers a fully funded internship program that allows students to engage in cutting-edge research across multiple scientific disciplines.
                                </p>
                            </div>

                            {/* Credit Transfer Arrangement Card */}
                            <div className="bg-white shadow-xl rounded-3xl p-8 space-y-6 hover:shadow-2xl transition-all transform hover:scale-105">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-[#003044] p-4 rounded-full text-white">
                                        <i className="fas fa-exchange-alt text-2xl"></i>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-orange-600">Credit Transfer to Prestigious Institutions</h3>
                                </div>
                                <p className="text-lg text-gray-700">
                                    Students can benefit from credit transfer arrangements to prestigious institutions in Australia, the UK, UAE, and other Middle Eastern countries, facilitating a seamless transition and broadening their academic horizons.
                                </p>
                            </div>

                            {/* Global Workforce Ready Card */}
                            <div className="bg-white shadow-xl rounded-3xl p-8 space-y-6 hover:shadow-2xl transition-all transform hover:scale-105">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-[#003044] p-4 rounded-full text-white">
                                        <i className="fas fa-briefcase text-2xl"></i>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-orange-600">Preparing for the Global Workforce</h3>
                                </div>
                                <p className="text-lg text-gray-700">
                                    Graduates from these programs are well-prepared to enter the global workforce, equipped with the skills and knowledge necessary to excel in various tech-driven industries.
                                </p>
                            </div>

                            {/* IoT Labs Hands-on Learning Card */}
                            <div className="bg-white shadow-xl rounded-3xl p-8 space-y-6 hover:shadow-2xl transition-all transform hover:scale-105">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-[#003044] p-4 rounded-full text-white">
                                        <i className="fas fa-cogs text-2xl"></i>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-orange-600">Dedicated IoT Labs for Practical Learning</h3>
                                </div>
                                <p className="text-lg text-gray-700">
                                    Mid-Valley International College features dedicated IoT Labs, where students can engage in hands-on exploration and practical learning, bridging the gap between theory and real-world applications.
                                </p>
                            </div>
                        </div>
                    </div>


                    {/* Career Opportunity (Scope) */}
                    <div className="bg-gradient-to-r from-[#003044] to-[#006a8e] lg:w-4xl md:w-2xl sm:xl w-md rounded-4xl py-12 mx-auto flex justify-center items-center min-h-screen">

                        <div className="max-w-5xl  px-6 space-y-12">

                            {/* Title Section */}
                            <div className="text-center space-y-4">
                                <h2 className="text-4xl sm:text-5xl font-bold text-white">
                                    Career Opportunities & Academic Pathways
                                </h2>
                                <p className="text-lg sm:text-xl text-white opacity-80">
                                    Explore a world of possibilities with our Bachelor of Business Information Technology program.
                                </p>
                            </div>

                            {/* Job Opportunities Section */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                                    <div className="flex items-center space-x-4 mb-6">
                                        <div className="bg-[#003044] text-white p-4 rounded-full shadow-lg">
                                            <i className="fas fa-briefcase text-3xl"></i>
                                        </div>
                                        <h3 className="text-2xl font-semibold text-[#003044]">Job Opportunities & Paid Internship in Japan</h3>
                                    </div>
                                    <p className="text-lg text-gray-700">
                                        The BIT program offers a 6-month paid internship in Japan, covering airfare, accommodation, meals, and a monthly wage of Rs. 50,000. Graduates can also receive job offers with a monthly salary of Rs. 200,000, opening doors for opportunities in Japan and globally.
                                    </p>
                                </div>

                                {/* Career Paths Section */}
                                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                                    <div className="flex items-center space-x-4 mb-6">
                                        <div className="bg-[#003044] text-white p-4 rounded-full shadow-lg">
                                            <i className="fas fa-cogs text-3xl"></i>
                                        </div>
                                        <h3 className="text-2xl font-semibold text-[#003044]">Career Paths in Information Technology</h3>
                                    </div>
                                    <ul className="space-y-3 text-lg text-gray-700">
                                        <li>Cybersecurity</li>
                                        <li>Networks and Systems</li>
                                        <li>Software Development</li>
                                        <li>Computer Support</li>
                                        <li>Data Analysis</li>
                                        <li>Cloud Computing</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Academic Opportunities Section */}
                            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="bg-[#003044] text-white p-4 rounded-full shadow-lg">
                                        <i className="fas fa-graduation-cap text-3xl"></i>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-[#003044]">Academic Opportunities for BIT Graduates</h3>
                                </div>
                                <ul className="space-y-3 text-lg text-gray-700">
                                    <li>Master’s Degree in IT</li>
                                    <li>Postgraduate Diploma in IT Management</li>
                                    <li>Professional Certifications</li>
                                    <li>Research and PhD Programs</li>
                                    <li>Continuing Education and Short Courses</li>
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
                                    Our program fosters an entrepreneurial mindset. Students are encouraged to identify market gaps and create sustainable business models. They participate in global competitions like the EOGSEA (Global Student Entrepreneur Awards) and receive guidance and resources to succeed in the business world.
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="max-w-3xl mt-50 mx-auto p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                        <div className="flex items-start gap-4">
                            <div className="bg-blue-50 p-3 rounded-lg">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-orange-600 mb-3">IoT Lab</h2>
                                <div className="space-y-3 text-black">
                                    <p>
                                        Discover MVIC's IoT Lab, where students explore the exciting world of the Internet of Things.
                                    </p>
                                    <p>
                                        This state-of-the-art, collaborative space is equipped with advanced technology, enabling hands-on exploration, practical learning, and real-world project development.
                                    </p>
                                    <p>
                                        With experienced faculty guiding your journey, you can unleash your potential in this dynamic environment and help shape the future of IoT.
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

                    <div className="relative  from-orange-50 to-white py-16 px-6 sm:px-10 md:px-16 lg:px-32 overflow-hidden">
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
                            Course Structure
                            <div className="w-16 h-1 bg-orange-500 mx-auto mt-2 rounded-full" />
                        </h2>
                        <p className="text-lg sm:text-xl lg:text-2xl text-center text-blue-1000 mb-12 max-w-4xl mx-auto">
                            A well-designed IT course empowers students to drive innovation and success in the tech industry through practical skills, collaboration, and industry engagement.
                        </p>

                        {/* Cards Section */}
                        <div className="flex flex-col gap-10 items-center">
                            {[
                                {
                                    icon: "💻",
                                    text: "This program offers students a unique opportunity to engage in innovative final-year projects and internships, bridging academia and industry while acquiring essential specialized skills for their careers.",
                                },
                                {
                                    icon: "🌐",
                                    text: "A comprehensive curriculum that integrates essential soft skills and non-credit courses alongside technical expertise, preparing students for success in a global and dynamic marketplace.",
                                },
                                {
                                    icon: "📚",
                                    text: "Ensuring academic rigor and industry exposure through a semester system, this program provides students with a well-rounded education and practical insights into the IT industry.",
                                },
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
                        <p className="text-lg sm:text-xl lg:text-2xl text-center text-blue-1000  mt-12 max-w-3xl mx-auto">
                            Our IT program combines cutting-edge technical training with real-world applications to prepare graduates for tomorrow's technology challenges.
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
                    <div className="bg-[#F1592D] text-center p-4 rounded-3xl overflow-hidden lg:mt-255 w-[290px]">
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



                    <div className="relative w-72 h-72 bg-gradient-to-br from-orange-500 to-[#F1592D] rounded-3xl overflow-hidden shadow-2xl group">
                        <img
                            src={i8}
                            alt="Bachelor of Hotel Management"
                            className="w-full h-full object-cover rounded-3xl transition-all duration-500 group-hover:scale-110 group-hover:blur-sm"
                        />

                        {/* Glass hover effect */}
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl flex flex-col justify-center items-center text-center px-6 gap-4">
                            <h2 className="text-white text-xl md:text-2xl font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                                Bachelor of Hotel Management (Hons)
                            </h2>

                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="z-10"
                            >
                                <Link to="/BHM">
                                    <button className="bg-white text-[#F1592D] font-semibold px-5 py-2 rounded-full shadow-md hover:bg-[#003044] hover:text-white transition-all duration-300">
                                        View Details
                                    </button>
                                </Link>
                            </motion.div>
                        </div>

                        {/* Glow effect on hover border */}
                        <div className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-transparent group-hover:border-white group-hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.5)] transition-all duration-500"></div>
                    </div>


                    <div className="relative w-72 h-72 bg-gradient-to-br from-orange-500 to-[#F1592D] rounded-3xl overflow-hidden shadow-2xl group">
                        <img
                            src={i7}
                            alt="Bachelor of Business"
                            className="w-full h-full object-cover rounded-3xl transition-all duration-500 group-hover:scale-110 group-hover:blur-sm"
                        />

                        {/* Glass hover effect */}
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl flex flex-col justify-center items-center text-center px-6 gap-4">
                            <h2 className="text-white text-xl md:text-2xl font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                                Bachelor of Business (Hons)
                            </h2>

                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="z-10"
                            >
                                <Link to="/BBA">
                                    <button className="bg-white text-[#F1592D] font-semibold px-5 py-2 rounded-full shadow-md hover:bg-[#003044] hover:text-white transition-all duration-300">
                                        View Details
                                    </button>
                                </Link>
                            </motion.div>
                        </div>

                        {/* Glow effect on hover border */}
                        <div className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-transparent group-hover:border-white group-hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.5)] transition-all duration-500"></div>
                    </div>


                </div>
            </div>
        </div>



    );
}

export default BIT;