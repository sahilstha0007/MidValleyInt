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
import {
    FaLaptopCode,
    FaExchangeAlt,
    FaBriefcase,
    FaCogs,
    FaGraduationCap,
    FaBookOpen,
    FaFlask,
    FaChalkboardTeacher,
    FaLightbulb,
} from "react-icons/fa";




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
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' },
    }),
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
                        backgroundImage: `
                            radial-gradient(circle at center,rgb(240, 151, 99) 30%, #F1592D 70%),
                            radial-gradient(circle at bottom right, #F1592D 0%,rgb(229, 137, 52) 80%)
                            `,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
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

            {/* This is the first section */}
            <motion.section
                className="py-12 px-4 sm:px-8 lg:px-24 text-[#003044] max-w-7xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
            >
                {/* Header */}
                <motion.h1
                    className="text-3xl sm:text-4xl lg:text-5xl px-35 font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#F1592D] to-orange-600"
                    variants={fadeInUp}
                    custom={1}
                >
                    Program Overview
                </motion.h1>

                {/* Creative Grid for Details and Image */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch mb-12">
                    {/* Left: Details & Affiliation */}
                    <div className="col-span-2 flex flex-col gap-8">
                        {/* Program Details */}
                        <motion.div
                            className="shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-4xl rounded-3xl p-8 max-w-full"
                            variants={fadeInUp}
                            custom={2}
                        >
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
                        </motion.div>
                        {/* Affiliation Card */}
                        <motion.div
                            className="bg-gradient-to-br from-[#DA2128] to-[#a31318] rounded-3xl shadow-2xl p-8 text-white"
                            variants={fadeInUp}
                            custom={3}
                        >
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
                        </motion.div>
                    </div>
                    {/* Right: Creative Image Card */}
                    <motion.div
                        className="flex justify-center items-center"
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <Link to="/">
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: 1 }}
                                whileTap={{ scale: 0.97 }}
                                className="relative w-[290px] h-[340px] rounded-3xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.3)] transition-all duration-500 group cursor-pointer bg-gradient-to-br from-[#f1592d] via-[#ff784b] to-[#ff9b4e] flex items-center justify-center"
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
                </div>

                {/* Career Scope */}
                <motion.div
                    className="relative bg-gradient-to-r from-[#003044] to-[#006c8e] text-white rounded-3xl shadow-2xl p-12 max-w-6xl mx-auto space-y-8 overflow-hidden mb-16"
                    variants={fadeInUp}
                    custom={4}
                >
                    {/* Decorative vertical accent bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-[#66c0e5] to-[#004a7c] rounded-l-3xl"></div>

                    {/* Soft blurred background shape */}
                    <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#66c0e5]/30 rounded-full filter blur-3xl pointer-events-none"></div>

                    {/* Overlay gradient with opacity */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#002033] to-[#004a5b] opacity-40 rounded-3xl"></div>

                    {/* Content */}
                    <div className="relative z-10">
                        <p className="text-lg sm:text-2xl lg:text-3xl leading-relaxed font-semibold">
                            Pursuing a bachelor’s in Information Technology (BIT) equips you with the skills and knowledge necessary to thrive in a rapidly evolving tech landscape. The degree emphasizes the practical application of technology to address real-world challenges, manage systems, and enhance business operations. Here are some of the career paths you can consider after earning your degree:
                        </p>
                        <ul className="list-disc list-inside space-y-4 text-lg sm:text-xl lg:text-2xl py-10">
                            {[
                                'Technology and Software Development',
                                'Finance and Banking',
                                'Healthcare',
                                'Retail and E-commerce',
                                'Government and Public Sector',
                                'Education',
                                'Consulting',
                            ].map((item, idx) => (
                                <li
                                    key={idx}
                                    className="transition-transform duration-300 hover:scale-110 hover:text-[#a3d8f4] hover:cursor-pointer"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

            </motion.section>

            {/* This is the second section */}
            <motion.div
                className="min-h-screen flex flex-col items-center justify-center py-12 px-6 md:px-20 bg-gradient-to-br from-white via-gray-50 to-gray-100"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Header */}
                <div className="text-center mb-12 max-w-3xl px-4">
                    <h1 className="text-4xl font-extrabold text-orange-500 mb-4 drop-shadow-md">
                        Further Education Purpose
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Advance your career with specialized education in Information Technology.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full px-4">
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
                <div className="mt-16 max-w-3xl mx-auto text-center text-gray-700 text-lg leading-relaxed px-4">
                    A <span className="font-semibold text-blue-700">Bachelor’s in Information Technology</span> provides a strong foundation for a versatile and rewarding career in today's tech-driven world. The demand for IT professionals is rapidly growing, making it a smart and strategic field to build a successful future.
                </div>
            </motion.div>

            {/* This is the third section */}
            <motion.section
                className="relative py-6 sm:py-10 md:py-14 px-6 lg:px-24 max-w-7xl mx-auto bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden" // Reduced py-12 to py-6
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                {/* Organic blurred background shapes */}
                <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-tr from-[#ff7e5f] to-[#fb8c00] rounded-full opacity-20 filter blur-3xl pointer-events-none"></div>
                <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-tr from-[#003044] to-[#006c8e] rounded-full opacity-10 filter blur-3xl pointer-events-none"></div>

                <div className="relative z-10 max-w-5xl mx-auto space-y-16">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-[#003044] tracking-tight max-w-4xl leading-tight drop-shadow-md text-center">
                        HELP University's Information Technology Program
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Card 1 */}
                        <motion.div
                            className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col space-y-6 cursor-pointer group"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#ff7e5f] to-[#fb8c00] flex items-center justify-center text-white text-2xl shadow-lg drop-shadow-lg">
                                <FaLaptopCode />
                            </div>
                            <h3 className="text-2xl font-semibold text-[#003044] group-hover:text-[#fb8c00] transition-colors duration-300">
                                OIST Internship Program
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                The OIST (Okinawa Institute of Science and Technology) offers a fully funded internship program that allows students to engage in cutting-edge research across multiple scientific disciplines.
                            </p>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col space-y-6 cursor-pointer group"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#006c8e] to-[#003044] flex items-center justify-center text-white text-2xl shadow-lg drop-shadow-lg">
                                <FaExchangeAlt />
                            </div>
                            <h3 className="text-2xl font-semibold text-[#003044] group-hover:text-[#006c8e] transition-colors duration-300">
                                Credit Transfer to Prestigious Institutions
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Students can benefit from credit transfer arrangements to prestigious institutions in Australia, the UK, UAE, and other Middle Eastern countries, facilitating a seamless transition and broadening their academic horizons.
                            </p>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col space-y-6 cursor-pointer group"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#ff7e5f] to-[#fb8c00] flex items-center justify-center text-white text-2xl shadow-lg drop-shadow-lg">
                                <FaBriefcase />
                            </div>
                            <h3 className="text-2xl font-semibold text-[#003044] group-hover:text-[#fb8c00] transition-colors duration-300">
                                Preparing for the Global Workforce
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Graduates from these programs are well-prepared to enter the global workforce, equipped with the skills and knowledge necessary to excel in various tech-driven industries.
                            </p>
                        </motion.div>

                        {/* Card 4 */}
                        <motion.div
                            className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col space-y-6 cursor-pointer group"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#006c8e] to-[#003044] flex items-center justify-center text-white text-2xl shadow-lg drop-shadow-lg">
                                <FaCogs />
                            </div>
                            <h3 className="text-2xl font-semibold text-[#003044] group-hover:text-[#006c8e] transition-colors duration-300">
                                Dedicated IoT Labs for Practical Learning
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Mid-Valley International College features dedicated IoT Labs, where students can engage in hands-on exploration and practical learning, bridging the gap between theory and real-world applications.
                            </p>
                        </motion.div>

                        {/* Additional icon-rich cards for variety and education emphasis */}

                        <motion.div
                            className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col space-y-6 cursor-pointer group"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#fb8c00] to-[#ff7e5f] flex items-center justify-center text-white text-2xl shadow-lg drop-shadow-lg">
                                <FaGraduationCap />
                            </div>
                            <h3 className="text-2xl font-semibold text-[#003044] group-hover:text-[#fb8c00] transition-colors duration-300">
                                Advanced Degree Opportunities
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Explore pathways to Master's and PhD programs that deepen your expertise and open doors to research and leadership roles.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col space-y-6 cursor-pointer group"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#006c8e] to-[#003044] flex items-center justify-center text-white text-2xl shadow-lg drop-shadow-lg">
                                <FaBookOpen />
                            </div>
                            <h3 className="text-2xl font-semibold text-[#003044] group-hover:text-[#006c8e] transition-colors duration-300">
                                Extensive Learning Resources
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Access a broad range of digital libraries, research papers, and e-learning materials to support your academic journey.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col space-y-6 cursor-pointer group"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#fb8c00] to-[#ff7e5f] flex items-center justify-center text-white text-2xl shadow-lg drop-shadow-lg">
                                <FaFlask />
                            </div>
                            <h3 className="text-2xl font-semibold text-[#003044] group-hover:text-[#fb8c00] transition-colors duration-300">
                                Cutting-Edge Research Labs
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Engage in innovative research projects with access to state-of-the-art laboratories and expert faculty guidance.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col space-y-6 cursor-pointer group"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#006c8e] to-[#003044] flex items-center justify-center text-white text-2xl shadow-lg drop-shadow-lg">
                                <FaChalkboardTeacher />
                            </div>
                            <h3 className="text-2xl font-semibold text-[#003044] group-hover:text-[#006c8e] transition-colors duration-300">
                                Expert Faculty & Mentorship
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Learn from industry leaders and experienced educators dedicated to your academic and professional growth.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* This is the fourth section */}
            <motion.section
                className="relative py-6 sm:py-10 md:py-14 lg:py-20 px-6 max-w-6xl mx-auto bg-gradient-to-tr from-[#004a6e] to-[#006a8e] rounded-3xl shadow-xl overflow-hidden" // Reduced py-8 to py-6
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                {/* Decorative blurred shapes */}
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#ff7e5f] rounded-full opacity-20 filter blur-3xl pointer-events-none"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#003044] rounded-full opacity-10 filter blur-3xl pointer-events-none"></div>

                <div className="relative z-10 flex flex-col space-y-16">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg">
                            Career Opportunities & Academic Pathways
                        </h2>
                        <p className="text-lg sm:text-xl text-white/90 max-w-xl mx-auto">
                            Explore a world of possibilities with our Bachelor of Business Information Technology program.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Job Opportunities & Internship */}
                        <motion.div
                            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform cursor-pointer flex flex-col space-y-6"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                        >
                            <div className="flex items-center space-x-5">
                                <div className="bg-gradient-to-br from-[#004a6e] to-[#006a8e] p-4 rounded-full text-white text-3xl shadow-lg flex items-center justify-center">
                                    <FaBriefcase />
                                </div>
                                <h3 className="text-2xl font-semibold text-[#003044]">
                                    Job Opportunities & Paid Internship in Japan
                                </h3>
                            </div>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                The BIT program offers a 6-month paid internship in Japan, covering airfare, accommodation, meals, and a monthly wage of Rs. 50,000. Graduates can also receive job offers with a monthly salary of Rs. 200,000, opening doors for opportunities in Japan and globally.
                            </p>
                        </motion.div>

                        {/* Career Paths */}
                        <motion.div
                            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform cursor-pointer flex flex-col space-y-6"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                        >
                            <div className="flex items-center space-x-5">
                                <div className="bg-gradient-to-br from-[#004a6e] to-[#006a8e] p-4 rounded-full text-white text-3xl shadow-lg flex items-center justify-center">
                                    <FaCogs />
                                </div>
                                <h3 className="text-2xl font-semibold text-[#003044]">
                                    Career Paths in Information Technology
                                </h3>
                            </div>
                            <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
                                <li>Cybersecurity</li>
                                <li>Networks and Systems</li>
                                <li>Software Development</li>
                                <li>Computer Support</li>
                                <li>Data Analysis</li>
                                <li>Cloud Computing</li>
                            </ul>
                        </motion.div>

                        {/* Academic Opportunities */}
                        <motion.div
                            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform cursor-pointer flex flex-col space-y-6"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                        >
                            <div className="flex items-center space-x-5">
                                <div className="bg-gradient-to-br from-[#004a6e] to-[#006a8e] p-4 rounded-full text-white text-3xl shadow-lg flex items-center justify-center">
                                    <FaGraduationCap />
                                </div>
                                <h3 className="text-2xl font-semibold text-[#003044]">
                                    Academic Opportunities for BIT Graduates
                                </h3>
                            </div>
                            <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
                                <li>Master’s Degree in IT</li>
                                <li>Postgraduate Diploma in IT Management</li>
                                <li>Professional Certifications</li>
                                <li>Research and PhD Programs</li>
                                <li>Continuing Education and Short Courses</li>
                            </ul>
                        </motion.div>

                        {/* Entrepreneurship */}
                        <motion.div
                            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform cursor-pointer flex flex-col space-y-6"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                        >
                            <div className="flex items-center space-x-5">
                                <div className="bg-gradient-to-br from-[#004a6e] to-[#006a8e] p-4 rounded-full text-white text-3xl shadow-lg flex items-center justify-center">
                                    <FaLightbulb />
                                </div>
                                <h3 className="text-2xl font-semibold text-[#003044]">
                                    Entrepreneurship Opportunities
                                </h3>
                            </div>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Our program fosters an entrepreneurial mindset. Students are encouraged to identify market gaps and create sustainable business models. They participate in global competitions like the EOGSEA (Global Student Entrepreneur Awards) and receive guidance and resources to succeed in the business world.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* This is the fifth section */}
            <motion.section
                className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* IoT Lab Info - spans 2 columns on large screens */}
                <motion.div
                    className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-10 cursor-pointer"
                    whileHover={{ scale: 1.03, boxShadow: "0 25px 40px rgba(0,0,0,0.15)" }}
                    transition={{ type: "spring", stiffness: 120, damping: 20 }}
                >
                    <div className="flex gap-8 items-start">
                        <div className="bg-blue-50 p-5 rounded-xl flex items-center justify-center">
                            <svg
                                className="w-12 h-12 text-blue-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                                />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-orange-600 mb-5">IoT Lab</h2>
                            <div className="space-y-4 text-gray-900 text-lg leading-relaxed">
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
                </motion.div>

                {/* Inquiry Box */}
                <motion.aside
                    className="bg-gradient-to-br from-[#ff7e5f] to-[#fb8c00] rounded-3xl p-8 flex flex-col items-center text-center shadow-xl cursor-pointer"
                    whileHover={{ scale: 1.05, boxShadow: "0 25px 40px rgba(251,142,0,0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 120, damping: 20 }}
                >
                    <h2 className="text-3xl font-bold text-white mb-6">For Inquiry</h2>
                    <ul className="flex flex-col items-start space-y-4 text-white text-lg w-full px-2">
                        <li className="flex items-center gap-3">
                            <img src={i4} alt="Email" className="w-6 h-6" />
                            <span>info@midvalley.edu.np</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <img src={i5} alt="Tel" className="w-6 h-6" />
                            <span>1-4535188,</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <img src={i5} alt="Tel" className="w-6 h-6" />
                            <span>4537188+</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <img src={i6} alt="Mobile" className="w-6 h-6" />
                            <span>977-9841232529</span>
                        </li>
                    </ul>
                    <Link to="/EnquiryForm" className="mt-8 w-full">
                        <button className="w-full bg-[#003044] text-white py-3 rounded-full font-semibold hover:bg-white hover:text-[#003044] transition-colors duration-300">
                            Contact Us
                        </button>
                    </Link>
                </motion.aside>
            </motion.section>

            {/* This is the sixth section */}
            <motion.div
                className="px-6 sm:px-12 mt-16 mb-28 max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Title */}
                <h1 className="text-center text-[#F1592D] text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-12">
                    Course Structure
                </h1>

                {/* Course Container */}
                <div className="relative bg-white text-[#002B5B] py-16 px-8 sm:px-14 rounded-3xl shadow-xl overflow-hidden">
                    {/* Decorative Glowing Circles */}
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#F1592D]/30 rounded-full blur-3xl z-0 pointer-events-none"></div>
                    <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#006a8e]/30 rounded-full blur-3xl z-0 pointer-events-none"></div>

                    {/* Year Selector Buttons */}
                    <div className="relative z-10 flex flex-wrap justify-center gap-5 mb-16">
                        {Object.keys(semesterData).map((year) => (
                            <motion.button
                                key={year}
                                onClick={() => setActiveYear(year)}
                                whileTap={{ scale: 0.92 }}
                                whileHover={{ scale: 1.08 }}
                                className={`select-none px-8 py-3 rounded-full font-semibold text-lg tracking-wide shadow-md transition-all duration-300 ${activeYear === year
                                    ? "bg-[#F1592D] text-white border-2 border-[#F1592D] scale-105"
                                    : "bg-white text-[#F1592D] border-2 border-[#F1592D] hover:bg-[#F1592D]/20"
                                    }`}
                            >
                                {year}
                            </motion.button>
                        ))}
                    </div>

                    {/* Semesters Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-stretch relative z-10">
                        {/* Semester 1 Card */}
                        <motion.div
                            whileHover={{ rotate: -1, scale: 1.03 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="relative bg-gradient-to-br from-[#F1592D] to-[#ff7f50] text-white rounded-3xl shadow-2xl p-10 overflow-hidden"
                        >
                            <div className="absolute top-6 left-[-24px] bg-white text-[#006a8e] font-bold text-lg sm:text-xl px-10 py-3 transform -rotate-6 rounded-r-full shadow-lg select-none">
                                {getOrdinal((parseInt(activeYear.replace("Year", "")) - 1) * 2 + 1)} Semester
                            </div>
                            <ul className="mt-16 space-y-4 list-disc list-inside font-medium text-white/90 text-lg sm:text-xl">
                                {renderSubjects("sem1")}
                            </ul>
                        </motion.div>

                        {/* Semester 2 Card */}
                        <motion.div
                            whileHover={{ rotate: 1, scale: 1.03 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="relative bg-gradient-to-br from-[#006a8e] to-[#3399cc] text-white rounded-3xl shadow-2xl p-10 overflow-hidden"
                        >
                            <div className="absolute top-6 left-[-24px] bg-white text-[#F1592D] font-bold text-lg sm:text-xl px-10 py-3 transform rotate-6 rounded-r-full shadow-lg select-none">
                                {getOrdinal((parseInt(activeYear.replace("Year", "")) - 1) * 2 + 2)} Semester
                            </div>
                            <ul className="mt-16 space-y-4 list-disc list-inside font-medium text-white/90 text-lg sm:text-xl">
                                {renderSubjects("sem2")}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Credit Hours */}
                    <div className="mt-20 text-center relative z-10">
                        <p className="text-2xl sm:text-3xl font-bold text-[#002B5B]">
                            Total Credit Hours: <span className="text-[#F1592D]">124</span>
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* This is the seventh section */}
            <motion.div
                className="relative bg-gradient-to-tr from-orange-50 to-white py-20 px-6 sm:px-10 md:px-16 lg:px-32 overflow-hidden max-w-6xl mx-auto rounded-3xl shadow-lg flex flex-col gap-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
            >
                {/* Decorative SVG Background */}
                <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
                    <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden="true">
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
                    <div className="w-20 h-1 bg-orange-500 mx-auto mt-3 rounded-full" />
                </h2>

                <p className="text-lg sm:text-xl lg:text-2xl text-center text-orange-900 mb-12 relative z-10 leading-relaxed">
                    A well-designed IT course empowers students to drive innovation and success in the tech industry through practical skills, collaboration, and industry engagement.
                </p>

                {/* Cards Section - Vertical Stack */}
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
                    <motion.div
                        key={i}
                        className="backdrop-blur-md bg-white/70 border border-orange-300 p-8 rounded-3xl shadow-lg flex items-start gap-6 cursor-pointer hover:scale-105 hover:shadow-orange-300 transition-transform duration-400 relative z-10"
                        whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(251, 146, 60, 0.4)" }}
                        transition={{ type: "spring", stiffness: 150, damping: 20 }}
                    >
                        <div className="text-5xl flex-shrink-0">{item.icon}</div>
                        <p className="text-lg sm:text-xl text-orange-800 leading-relaxed">{item.text}</p>
                    </motion.div>
                ))}

                {/* Final Statement */}
                <p className="text-lg sm:text-xl lg:text-2xl text-center text-orange-900 mt-16 max-w-3xl mx-auto relative z-10 leading-relaxed">
                    Our IT program combines cutting-edge technical training with real-world applications to prepare graduates for tomorrow's technology challenges.
                </p>
            </motion.div>

            {/* This is the eighth section */}
            <motion.div
                className="max-w-6xl mx-auto px-6 py-20 flex flex-col items-center gap-16"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
            >
                <h1 className="text-center text-[#F1592D] text-4xl sm:text-5xl font-extrabold">
                    Related Courses
                </h1>

                <div className="flex justify-center gap-16 flex-wrap">
                    {[{
                        src: i8,
                        alt: "Bachelor of Hotel Management",
                        title: "Bachelor of Hotel Management (Hons)",
                        link: "/BHM"
                    }, {
                        src: i7,
                        alt: "Bachelor of Business",
                        title: "Bachelor of Business (Hons)",
                        link: "/BBA"
                    }].map(({ src, alt, title, link }, idx) => (
                        <div
                            key={idx}
                            className="relative w-96 h-96 bg-gradient-to-br from-orange-500 to-[#F1592D] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
                        >
                            <img
                                src={src}
                                alt={alt}
                                className="w-full h-full object-cover rounded-3xl transition-transform duration-700 group-hover:scale-110 group-hover:blur-sm"
                            />

                            {/* Glass hover effect */}
                            <div className="absolute inset-0 bg-white/15 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl flex flex-col justify-center items-center text-center px-8 gap-6">
                                <h2 className="text-white text-2xl md:text-3xl font-extrabold drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]">
                                    {title}
                                </h2>

                                <motion.div
                                    whileHover={{ scale: 1.15 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="z-10"
                                >
                                    <Link to={link}>
                                        <button className="bg-white text-[#F1592D] font-bold px-7 py-3 rounded-full shadow-lg hover:bg-[#003044] hover:text-white transition-colors duration-400">
                                            View Details
                                        </button>
                                    </Link>
                                </motion.div>
                            </div>

                            {/* Glow effect on hover border */}
                            <div className="absolute inset-0 rounded-3xl pointer-events-none border-4 border-transparent group-hover:border-white group-hover:shadow-[0_0_30px_6px_rgba(255,255,255,0.7)] transition-all duration-700"></div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

export default BIT;



