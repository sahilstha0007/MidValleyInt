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
        sem1: ["Financial Accounting 1", "Principles of Microeconomics", "Principles of Management", "Principle of Marketing.", "Business Statistics"],
        sem2: ["Financial Accounting 1", "Principles of Microeconomics", "Principles of Management", "Principle of Marketing.", "Business Statistics"]
    },
    Year2: {
        sem1: ["Financial Accounting 1", "Principles of ahsbdisa", "Principles of Management", "Principle of Marketing.", "Business Statistics"],
        sem2: ["Financial Accounting 1", "Principles of Microeconomics", "Principles of Management", "Principle of Marketing.", "Business Statistics"]
    },
    Year3: {
        sem1: ["Financial sdfdsf 1", "Principles of Microeconomics", "Principles of Management", "Principle of Marketing.", "Business Statistics"],
        sem2: ["Financial Accounting 1", "Principles of Microeconomics", "Principles of Management", "Principle of Marketing.", "Business Statistics"]
    },
    Year4: {
        sem1: ["Financial Accounting 1", "dsfdsf of Microeconomics", "Principles of Management", "Principle of Marketing.", "Business Statistics"],
        sem2: ["Financial Accounting 1", "Principles of Microeconomics", "Principles of Management", "Principle of Marketing.", "Business Statistics"]
    }
};


const getOrdinal = (n) => {
    const s = ["th", "st", "nd", "rd"], v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

function BBA() {
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
                    {/* <Suspense fallback={<LoadingPage />}> */}
                        <Canvas
                            shadows
                            camera={{
                                position: [-0.5, 1, window.innerWidth > 500 ? 2.5 : 50],
                                fov: 45,
                            }}
                        >

                            <Experience />
                        </Canvas>
                    {/* </Suspense> */}

                    {/* Text Overlay */}
                    <motion.div
                        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl z-10"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                    >
                        Bachelor of Business (Finance) (Hons)
                    </motion.div>
                </div>

            </div>



            {/* 70-30 Horizontal Split */}
            <div className="flex flex-col lg:flex-row mt-10">
                {/* Left Side (70%) */}
                <div className="w-full lg:w-[70%]">
                    <section className="py-12 px-4 sm:px-8 lg:px-24  text-[#003044]">

                        {/* Header */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#F1592D] to-orange-600 px-30">
                            Program Overview
                        </h1>

                        {/* Program Details */}
                        <div className="shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-4xl rounded-3xl p-8 mb-10 max-w-4xl mx-auto bg-white">
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

                                {/* Entrance Requirement */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-orange-100 p-3 rounded-full">
                                        <FontAwesomeIcon icon={faVial} className="text-orange-600 text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Entrance Requirement:</h3>
                                        <p className="text-base">Tests: Not Required</p>
                                    </div>
                                </div>

                                {/* Total Credit */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-orange-100 p-3 rounded-full">
                                        <FontAwesomeIcon icon={faListOl} className="text-orange-600 text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Total Credit:</h3>
                                        <p className="text-base">127</p>
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
                                    Bachelor of Business Administration (Hons) in Finance
                                </h2>

                                <p className="text-base sm:text-lg leading-relaxed text-white/90">
                                    The <strong className="text-orange-300">BBA-Finance</strong> program offers a dynamic blend of theoretical knowledge and
                                    practical financial expertise. Students gain essential skills in financial instruments,
                                    markets, and strategic decision-making under uncertainty — preparing them for thriving careers
                                    in <span className="text-orange-300">banking</span>, <span className="text-orange-300">consulting</span>, <span className="text-orange-300">funds management</span>, and <span className="text-orange-300">corporate finance</span>.
                                </p>

                                <p className="text-base sm:text-lg leading-relaxed text-white/90">
                                    A key advantage is the opportunity for <span className="text-orange-300">internships</span> that often lead to full-time job placements, bridging
                                    the gap between academia and industry.
                                </p>

                                <p className="text-base sm:text-lg leading-relaxed text-white/90">
                                    Endorsed by the <strong className="text-orange-300">CFA Institute</strong>, the curriculum covers 70% of the CFA Candidate’s Body of Knowledge (CBOK),
                                    providing students with a robust foundation for the <span className="text-orange-300">Chartered Financial Analyst (CFA)</span> certification.
                                </p>

                                <p className="text-base sm:text-lg leading-relaxed text-white/90">
                                    Elevate your finance career with a degree that delivers <em className="italic text-orange-200">industry-relevant expertise</em> and opens
                                    doors to <strong className="text-orange-300">high-paying global finance opportunities</strong>.
                                </p>
                            </div>
                        </div>


                    </section>




                    {/* Career Opportunity (Scope) */}
                    <div className="bg-gradient-to-r from-[#003044] to-[#006a8e] lg:w-4xl md:w-2xl sm:w-xl w-md rounded-4xl py-12 mx-auto flex justify-center items-center mt-35 min-h-screen">
                        <div className="max-w-5xl px-6 space-y-12">

                            {/* Title Section */}
                            <div className="text-center space-y-4">
                                <h2 className="text-4xl sm:text-5xl font-bold text-white">
                                    Career Opportunities & Academic Pathways
                                </h2>
                                <p className="text-lg sm:text-xl text-white opacity-80">
                                    Explore the diverse possibilities unlocked by our BBA-Finance program.
                                </p>
                            </div>

                            {/* Job Opportunities Section */}
                            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="bg-[#003044] text-white p-4 rounded-full shadow-lg">
                                        <i className="fas fa-briefcase text-3xl"></i>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-[#003044]">Job Opportunities</h3>
                                </div>
                                <p className="text-lg text-gray-700 mb-4">
                                    Upon completing this program, graduates gain access to diverse sectors and roles, such as:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                                    <li>Banking</li>
                                    <li>Investment Banking</li>
                                    <li>Stock Trading</li>
                                    <li>Insurance</li>
                                    <li>Finance & Accounts</li>
                                </ul>
                                <p className="text-lg text-gray-700 mt-4">
                                    Our program also provides valuable internship experiences and job placement support, helping students kick-start their careers in the finance industry.
                                </p>
                            </div>

                            {/* Academic Opportunities Section */}
                            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="bg-[#003044] text-white p-4 rounded-full shadow-lg">
                                        <i className="fas fa-graduation-cap text-3xl"></i>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-[#003044]">Academic Opportunities</h3>
                                </div>
                                <p className="text-lg text-gray-700 mb-4">
                                    This finance program, recognized by the Chartered Financial Analyst (CFA) Institute, provides a solid foundation in finance and unlocks numerous academic and professional pathways:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                                    <li>Master’s Degree in Finance</li>
                                    <li>Professional Certifications in Finance</li>
                                    <li>Specialized Finance Workshops and Courses</li>
                                    <li>Entrepreneurship and Finance Startups</li>
                                    <li>Doctoral Studies in Finance</li>
                                </ul>
                                <p className="text-lg text-gray-700 mt-4">
                                    The best options for your growth depend on your career goals, interests, and institutions you engage with. We recommend thorough research and consulting academic advisors, career counselors, and finance professionals.
                                </p>
                            </div>

                            {/* Entrepreneurship Section */}
                            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="bg-[#003044] text-white p-4 rounded-full shadow-lg">
                                        <i className="fas fa-lightbulb text-3xl"></i>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-[#003044]">Entrepreneurship</h3>
                                </div>
                                <p className="text-lg text-gray-700 mb-4">
                                    The Bachelor of Finance (Hons) (BBA-Finance) program at Mid-Valley International College (MVIC) equips students with financial expertise while fostering an entrepreneurial mindset.
                                </p>
                                <p className="text-lg text-gray-700 mb-4">
                                    With a strong foundation in finance and entrepreneurship, this program empowers students to identify market gaps, develop sustainable business models, and emerge as visionary leaders.
                                </p>
                                <p className="text-lg text-gray-700 mb-4">
                                    At MVIC, we actively encourage students to embrace entrepreneurship and transform their ideas into successful businesses. Our students participate in prestigious global competitions like the <strong>EOGSEA (Global Student Entrepreneur Awards)</strong>, where they showcase groundbreaking ventures.
                                </p>
                                <p className="text-lg text-gray-700">
                                    Through expert mentorship, strategic resources, and global exposure, we empower students to lead change and shape the future of the business world.
                                </p>
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
                    <div className=" py-12 px-6 sm:px-10 md:px-16 lg:px-32">
                        <h2 className="text-3xl text-orange-600 sm:text-4xl lg:text-5xl font-bold text-center mb-6">
                            Course Structure
                        </h2>
                        <p className="text-lg  text-blue-1000 sm:text-xl lg:text-2xl text-center mb-8">
                            Empower students to become catalysts for innovation and success in the Finance industry through a thoughtfully designed course.
                        </p>

                        <div className="flex flex-col items-center gap-8">

                            <div className="backdrop-blur-md bg-white/70 border border-orange-200 p-6 w-full sm:w-[80%] lg:w-[100%] rounded-3xl shadow-xl flex items-start gap-4 transition-transform transform hover:scale-105 duration-300 ease-in-out">
                                <div className="text-3xl">💼</div>
                                <p className="text-lg sm:text-xl text-left text-orange-700">
                                    <b>Internship Programs:</b> Gain valuable work experience, specialized skills, and industry-specific knowledge to build your professional career.
                                </p>
                            </div>

                            <div className="backdrop-blur-md bg-white/70 border border-orange-200 p-6 w-full sm:w-[80%] lg:w-[100%] rounded-3xl shadow-xl flex items-start gap-4 transition-transform transform hover:scale-105 duration-300 ease-in-out">
                                <div className="text-3xl">🌍</div>
                                <p className="text-lg sm:text-xl text-left text-orange-700">
                                    <b>Global Market Preparedness:</b> Prepare for the global marketplace and ever-changing society by enhancing soft skills and incorporating non-credit courses into the curriculum.
                                </p>
                            </div>

                            <div className="backdrop-blur-md bg-white/70 border border-orange-200 p-6 w-full sm:w-[80%] lg:w-[100%] rounded-3xl shadow-xl flex items-start gap-4 transition-transform transform hover:scale-105 duration-300 ease-in-out">
                                <div className="text-3xl">📊</div>
                                <p className="text-lg sm:text-xl text-left text-orange-700">
                                    <b>Academic Rigor & Industry Exposure:</b> Experience a well-structured semester system that ensures academic rigor and provides comprehensive exposure to the finance industry.
                                </p>
                            </div>

                        </div>

                        <p className="text-lg sm:text-xl lg:text-2xl text-center mt-8 text-blue-1000">
                            Our Finance program integrates academic depth with real-world relevance to prepare graduates for leadership in the global finance landscape.
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

                    <h1 className="text-left text-[#F1592D] text-2xl sm:text-3xl lg:text-4xl font-bold lg:mt-590">Related Courses</h1>


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
                                <Link to="/BIT">
                                    <button className="bg-white text-[#F1592D] font-semibold px-5 py-2 rounded-full shadow-md hover:bg-[#003044] hover:text-white transition-all duration-300">
                                        View Details
                                    </button>
                                </Link>
                            </motion.div>
                        </div>
                        <div className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-transparent group-hover:border-white group-hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.5)] transition-all duration-500"></div>
                    </div>

                    {/* Bachelor of Hotel Management (Hons) */}
                    <div className="relative w-72 h-72 bg-gradient-to-br from-orange-500 to-[#F1592D] rounded-3xl overflow-hidden shadow-2xl group">
                        <img
                            src={i7}
                            alt="Bachelor of Hotel Management"
                            className="w-full h-full object-cover rounded-3xl transition-all duration-500 group-hover:scale-110 group-hover:blur-sm"
                        />
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl flex flex-col justify-center items-center text-center px-6 gap-4">
                            <h2 className="text-white text-xl md:text-2xl font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                                Bachelor of Hotel Management (Hons)
                            </h2>
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="z-10">
                                <Link to="/BHM">
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

export default BBA;