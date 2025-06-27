"use client"

import { Suspense, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Canvas } from "@react-three/fiber"
import { UI } from "./book/UI"
import { Experience } from "./book/Experience"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGraduationCap,
  faBriefcase,
  faCertificate,
  faUniversity,
  faClock,
  faMoneyCheckAlt,
  faVial,
  faListOl,
  faArrowRight,
  faUtensils,
  faGlobe,
  faExchangeAlt,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons"

// Import images (you'll need to add these to your project)
import logo from "/logoicon.png"
import helpLogo from "./imgs/HELPLogo.png"
import adImage from "./imgs/AD.png"
import emailIcon from "./imgs/emailicon.png"
import telIcon from "./imgs/Telicon.png"
import phoneIcon from "./imgs/phoneicon.png"
import bbaImage from "./imgs/BBAF.png"
import bitImage from "./imgs/BITF.png"

const LoadingPage = () => {
  const [dots, setDots] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""))
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <motion.img
        src={logo}
        alt="Logo"
        className="w-48 h-48 transform-origin-center"
        animate={{ rotateY: [0, 360] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8, ease: "linear" }}
      />
      <h2 className="mt-5 text-4xl font-bold">Loading{dots}</h2>
    </div>
  )
}

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
    ],
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
    ],
    sem2: [
      "MGT212: Business Analytics for Decision Making",
      "TRM204: Human Resource Management for the Hospitality and Tourism Industry",
      "TRM213: Hospitality Small Business Operations",
      "TRM304: Research Methodology for Hospitality Industry",
      "TRM316: Dining Etiquettes",
      "Non Credit Course | Case Study: Labour Law in Nepal 101, Business Model Canvas 101, SPSS 102",
      "Experiential Learning Programme: Data Analytics 102, Research Survey in Different Hotels, Banquet Management in a Hotel or Independent Banquet",
    ],
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
    ],
    sem2: [
      "TRM301: Food and Beverage Management",
      "TRM305: Leadership and Management in Hospitality Industry",
      "TRM306: Training & Development in Hospitality Industry",
      "TRM323: Contemporary Issues in the Hospitality and Tourism Industry",
      "TRM400: Graduation Project (II)",
      "Non Credit Course | Case Study: Business Model & Disruption in Hospitality Industry",
      "Experiential Learning Programme: Shadow A CEO | Senior Management in a Hotel, Training & Development Module for a Hotel",
    ],
  },
  Year4: {
    sem1: ["TRM330: Industry Placement Practicum (2 semesters)"],
    sem2: [],
  },
}

const getOrdinal = (n) => {
  const s = ["th", "st", "nd", "rd"],
    v = n % 100
  return n + (s[(v - 20) % 10] || s[v] || s[0])
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
}

function BHM() {
  const [activeYear, setActiveYear] = useState("Year1")

  const renderSubjects = (semester) => {
    return semesterData[activeYear][semester].map((subject, idx) => (
      <li key={idx} className="text-white text-lg mb-1">
        {subject}
      </li>
    ))
  }

  return (
    <div className="w-full font-sans">
      {/* Hero Section with 3D Canvas */}
      <div className="relative text-center overflow-hidden">
        <div
          className="relative lg:h-[650px] md:h-[350px] sm:h-[250px] overflow-hidden"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, rgb(172, 166, 166) 30%, rgb(232, 79, 13) 70%),
              radial-gradient(circle at bottom right, rgb(232, 79, 13) 0%, rgb(229, 137, 52) 80%)
            `,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
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

      {/* Program Overview Section */}
      <motion.section
        className="py-12 px-4 sm:px-8 lg:px-24 text-[#003044] max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#F1592D] to-orange-600"
          variants={fadeInUp}
          custom={1}
        >
          Program Overview
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch mb-12">
          <div className="col-span-2 flex flex-col gap-8">
            {/* Program Details */}
            <motion.div
              className="shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-4xl rounded-3xl p-8 max-w-full"
              variants={fadeInUp}
              custom={2}
            >
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <FontAwesomeIcon icon={faUniversity} className="text-orange-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Affiliated to:</h3>
                    <p className="text-base">HELP University, Malaysia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <FontAwesomeIcon icon={faClock} className="text-orange-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Course Duration:</h3>
                    <p className="text-base">4 years (8 semesters)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <FontAwesomeIcon icon={faMoneyCheckAlt} className="text-orange-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Paid Internships:</h3>
                    <p className="text-base">Available</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <FontAwesomeIcon icon={faVial} className="text-orange-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Pre-Requisite Tests:</h3>
                    <p className="text-base">Not Required</p>
                  </div>
                </div>

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
                <div className="flex items-center gap-4">
                  <div className="text-left">
                    <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Affiliated With</h2>
                    <p className="text-sm sm:text-base text-gray-100 mt-1">HELP University, Malaysia</p>
                  </div>
                  <img
                    src={helpLogo || "/placeholder.svg"}
                    alt="HELP University"
                    className="w-24 sm:w-32 md:w-40 h-auto rounded-md shadow-md"
                  />
                </div>
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
                  src={adImage || "/placeholder.svg"}
                  alt="BHM Program"
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
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-[#66c0e5] to-[#004a7c] rounded-l-3xl"></div>
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#66c0e5]/30 rounded-full filter blur-3xl pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#002033] to-[#004a5b] opacity-40 rounded-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-600 mb-6">
              Bachelor of Business in Hospitality Management (Hons)
            </h2>
            <p className="text-lg sm:text-2xl lg:text-3xl leading-relaxed font-semibold mb-6">
              At Mid-Valley International College, we go beyond shaping professionals — we cultivate well-rounded
              individuals who lead with purpose. Our Bachelor of Business in Hospitality Management (BBHM) Hons program
              instills core values of accountability, compassion, fantastic spirit, collaboration, continuous learning,
              and a commitment to making a difference.
            </p>
            <ul className="list-disc list-inside space-y-4 text-lg sm:text-xl lg:text-2xl">
              {[
                "Hotels and Resorts Management",
                "Event Planning and Management",
                "Restaurant and Culinary Services",
                "Guest Services and Relations",
                "Cruise Ship Operations",
                "Tourism and Travel Services",
                "Entertainment and Gaming Industry",
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

      {/* Further Education Section */}
      <motion.div
        className="min-h-screen flex flex-col items-center justify-center py-12 px-6 md:px-20 bg-gradient-to-br from-white via-gray-50 to-gray-100"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center mb-12 max-w-3xl px-4">
          <h1 className="text-4xl font-extrabold text-orange-500 mb-4 drop-shadow-md">Further Education Purpose</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Advance your career with specialized education in Hospitality Management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full px-4">
          <div className="bg-white p-6 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl border-t-4 border-orange-500">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faGraduationCap} className="text-orange-600 text-2xl mr-3" />
              <h2 className="text-xl font-semibold text-gray-800">Master's in Hospitality Management</h2>
            </div>
            <p className="text-gray-600">
              Specialize further in areas like <span className="font-medium text-blue-900">Hotel Operations</span>,{" "}
              <span className="font-medium text-blue-900">Event Management</span>, or{" "}
              <span className="font-medium text-blue-900">Tourism Marketing</span>.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl border-t-4 border-orange-500">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faBriefcase} className="text-orange-600 text-2xl mr-3" />
              <h2 className="text-xl font-semibold text-gray-800">MBA</h2>
            </div>
            <p className="text-gray-600">
              Combine your hospitality background with{" "}
              <span className="font-medium text-blue-900">business management skills</span> to lead hospitality
              organizations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl border-t-4 border-orange-500">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faCertificate} className="text-orange-600 text-2xl mr-3" />
              <h2 className="text-xl font-semibold text-gray-800">Certifications</h2>
            </div>
            <p className="text-gray-600">
              Boost your profile with certifications like <span className="font-medium text-blue-900">CHA</span>,{" "}
              <span className="font-medium text-blue-900">CHE</span>,{" "}
              <span className="font-medium text-blue-900">CHTP</span>, or{" "}
              <span className="font-medium text-blue-900">CMP</span>.
            </p>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center text-gray-700 text-lg leading-relaxed px-4">
          A <span className="font-semibold text-blue-700">Bachelor's in Hotel Management</span> provides a strong
          foundation for a versatile and rewarding career in today's thriving hospitality industry. The demand for
          hospitality professionals is rapidly growing, making it a smart and strategic field to build a successful
          future.
        </div>
      </motion.div>

      {/* HELP University Program Highlights */}
      <motion.section
        className="relative py-6 sm:py-10 md:py-14 px-6 lg:px-24 max-w-7xl mx-auto bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-tr from-[#ff7e5f] to-[#fb8c00] rounded-full opacity-20 filter blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-tr from-[#003044] to-[#006c8e] rounded-full opacity-10 filter blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#003044] tracking-tight max-w-4xl leading-tight drop-shadow-md text-center">
            HELP University's Hospitality Management Program
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col space-y-6 cursor-pointer group"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#ff7e5f] to-[#fb8c00] flex items-center justify-center text-white text-2xl shadow-lg drop-shadow-lg">
                <FontAwesomeIcon icon={faGlobe} />
              </div>
              <h3 className="text-2xl font-semibold text-[#003044] group-hover:text-[#fb8c00] transition-colors duration-300">
                International Recognition
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Highly regarded internationally for its global recognition in Hospitality-related programs, ensuring
                graduates are competitive worldwide.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col space-y-6 cursor-pointer group"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#006c8e] to-[#003044] flex items-center justify-center text-white text-2xl shadow-lg drop-shadow-lg">
                <FontAwesomeIcon icon={faUtensils} />
              </div>
              <h3 className="text-2xl font-semibold text-[#003044] group-hover:text-[#006c8e] transition-colors duration-300">
                On-Campus Hospitality Lab
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Own Hospitality Lab for empowering students with culinary mastery and practical hotel operations
                insights through hands-on learning.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col space-y-6 cursor-pointer group"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#ff7e5f] to-[#fb8c00] flex items-center justify-center text-white text-2xl shadow-lg drop-shadow-lg">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <h3 className="text-2xl font-semibold text-[#003044] group-hover:text-[#fb8c00] transition-colors duration-300">
                Prestigious Japan Internship
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Offers students the chance to experience Japan's prestigious hospitality internship opportunity with
                full support and competitive compensation.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col space-y-6 cursor-pointer group"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#006c8e] to-[#003044] flex items-center justify-center text-white text-2xl shadow-lg drop-shadow-lg">
                <FontAwesomeIcon icon={faExchangeAlt} />
              </div>
              <h3 className="text-2xl font-semibold text-[#003044] group-hover:text-[#006c8e] transition-colors duration-300">
                Global Credit Transfer Options
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Credit Transfer availability in esteemed destinations like Australia, UK, UAE, and other Middle Eastern
                countries for seamless academic progression.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Career Opportunities Section */}
      <motion.section
        className="relative py-6 sm:py-10 md:py-14 lg:py-20 px-6 max-w-6xl mx-auto bg-gradient-to-tr from-[#004a6e] to-[#006a8e] rounded-3xl shadow-xl overflow-hidden"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#ff7e5f] rounded-full opacity-20 filter blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#003044] rounded-full opacity-10 filter blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg">
              Career Opportunities & Academic Pathways
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-xl mx-auto">
              Explore a world of possibilities with our Bachelor of Business in Hospitality Management program.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform cursor-pointer flex flex-col space-y-6"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
            >
              <div className="flex items-center space-x-5">
                <div className="bg-gradient-to-br from-[#004a6e] to-[#006a8e] p-4 rounded-full text-white text-3xl shadow-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <h3 className="text-2xl font-semibold text-[#003044]">Job Opportunities & Paid Internship in Japan</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                The BHM program offers a 6-month paid internship in Japan, covering airfare, accommodation, meals, and a
                monthly wage of Rs. 50,000. Graduates can also receive job offers with a monthly salary of Rs. 200,000,
                opening doors for opportunities in Japan and globally.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform cursor-pointer flex flex-col space-y-6"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
            >
              <div className="flex items-center space-x-5">
                <div className="bg-gradient-to-br from-[#004a6e] to-[#006a8e] p-4 rounded-full text-white text-3xl shadow-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faUtensils} />
                </div>
                <h3 className="text-2xl font-semibold text-[#003044]">Career Paths in Hospitality Management</h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
                <li>Hotels and Resorts</li>
                <li>Event Planning and Management</li>
                <li>Restaurant and Culinary Services</li>
                <li>Guest Services and Relations</li>
                <li>Cruise Ships</li>
                <li>Tourism and Travel Services</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform cursor-pointer flex flex-col space-y-6"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
            >
              <div className="flex items-center space-x-5">
                <div className="bg-gradient-to-br from-[#004a6e] to-[#006a8e] p-4 rounded-full text-white text-3xl shadow-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </div>
                <h3 className="text-2xl font-semibold text-[#003044]">Academic Opportunities for BHM Graduates</h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
                <li>Master's Degree in Hospitality</li>
                <li>Specialized Certifications</li>
                <li>Postgraduate Diplomas</li>
                <li>Research and Academia</li>
                <li>Professional Development Courses</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform cursor-pointer flex flex-col space-y-6"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
            >
              <div className="flex items-center space-x-5">
                <div className="bg-gradient-to-br from-[#004a6e] to-[#006a8e] p-4 rounded-full text-white text-3xl shadow-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faLightbulb} />
                </div>
                <h3 className="text-2xl font-semibold text-[#003044]">Entrepreneurship Opportunities</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our program fosters an entrepreneurial mindset. Students are encouraged to identify market gaps and
                create sustainable business models. They participate in global competitions like the EOGSEA (Global
                Student Entrepreneur Awards) and receive guidance and resources to succeed in the business world.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Hospitality Hub & Inquiry Section */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-10 cursor-pointer"
          whileHover={{ scale: 1.03, boxShadow: "0 25px 40px rgba(0,0,0,0.15)" }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          <div className="flex gap-8 items-start">
            <div className="bg-orange-50 p-5 rounded-xl flex items-center justify-center">
              <FontAwesomeIcon icon={faUtensils} className="w-12 h-12 text-orange-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-orange-600 mb-5">Our Very Own Hospitality Hub</h2>
              <div className="space-y-4 text-gray-900 text-lg leading-relaxed">
                <p>
                  Experience hands-on learning in our Culinary Hub at MVIC, featuring modern facilities for a
                  comprehensive education in culinary arts and hospitality management.
                </p>
                <p>
                  Master essential culinary techniques in practical kitchens, bars, and a bakery kitchen, while also
                  developing skills in hospitality management, housekeeping, and restaurant operations.
                </p>
                <p>
                  Explore various facets of hotel management through dedicated labs and simulated environments,
                  including front desk management, housekeeping procedures, event planning, and guest services.
                </p>
                <p>This holistic approach equips you for success in the dynamic hospitality industry.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.aside
          className="bg-gradient-to-br from-[#ff7e5f] to-[#fb8c00] rounded-3xl p-8 flex flex-col items-center text-center shadow-xl cursor-pointer"
          whileHover={{ scale: 1.05, boxShadow: "0 25px 40px rgba(251,142,0,0.5)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">For Inquiry</h2>
          <ul className="flex flex-col items-start space-y-4 text-white text-lg w-full px-2">
            <li className="flex items-center gap-3">
              <img src={emailIcon || "/placeholder.svg"} alt="Email" className="w-6 h-6" />
              <span>info@midvalley.edu.np</span>
            </li>
            <li className="flex items-center gap-3">
              <img src={telIcon || "/placeholder.svg"} alt="Tel" className="w-6 h-6" />
              <span>1-4535188,</span>
            </li>
            <li className="flex items-center gap-3">
              <img src={telIcon || "/placeholder.svg"} alt="Tel" className="w-6 h-6" />
              <span>4537188+</span>
            </li>
            <li className="flex items-center gap-3">
              <img src={phoneIcon || "/placeholder.svg"} alt="Mobile" className="w-6 h-6" />
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

      {/* Course Structure Section */}
      <motion.div
        className="px-6 sm:px-12 mt-16 mb-28 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-center text-[#F1592D] text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-12">
          Course Structure
        </h1>

        <div className="relative bg-white text-[#002B5B] py-16 px-8 sm:px-14 rounded-3xl shadow-xl overflow-hidden">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#F1592D]/30 rounded-full blur-3xl z-0 pointer-events-none"></div>
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#006a8e]/30 rounded-full blur-3xl z-0 pointer-events-none"></div>

          <div className="relative z-10 flex flex-wrap justify-center gap-5 mb-16">
            {Object.keys(semesterData).map((year) => (
              <motion.button
                key={year}
                onClick={() => setActiveYear(year)}
                whileTap={{ scale: 0.92 }}
                whileHover={{ scale: 1.08 }}
                className={`select-none px-8 py-3 rounded-full font-semibold text-lg tracking-wide shadow-md transition-all duration-300 ${
                  activeYear === year
                    ? "bg-[#F1592D] text-white border-2 border-[#F1592D] scale-105"
                    : "bg-white text-[#F1592D] border-2 border-[#F1592D] hover:bg-[#F1592D]/20"
                }`}
              >
                {year}
              </motion.button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-stretch relative z-10">
            <motion.div
              whileHover={{ rotate: -1, scale: 1.03 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative bg-gradient-to-br from-[#F1592D] to-[#ff7f50] text-white rounded-3xl shadow-2xl p-10 overflow-hidden"
            >
              <div className="absolute top-6 left-[-24px] bg-white text-[#006a8e] font-bold text-lg sm:text-xl px-10 py-3 transform -rotate-6 rounded-r-full shadow-lg select-none">
                {getOrdinal((Number.parseInt(activeYear.replace("Year", "")) - 1) * 2 + 1)} Semester
              </div>
              <ul className="mt-16 space-y-4 list-disc list-inside font-medium text-white/90 text-lg sm:text-xl">
                {renderSubjects("sem1")}
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ rotate: 1, scale: 1.03 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative bg-gradient-to-br from-[#006a8e] to-[#3399cc] text-white rounded-3xl shadow-2xl p-10 overflow-hidden"
            >
              <div className="absolute top-6 left-[-24px] bg-white text-[#F1592D] font-bold text-lg sm:text-xl px-10 py-3 transform rotate-6 rounded-r-full shadow-lg select-none">
                {getOrdinal((Number.parseInt(activeYear.replace("Year", "")) - 1) * 2 + 2)} Semester
              </div>
              <ul className="mt-16 space-y-4 list-disc list-inside font-medium text-white/90 text-lg sm:text-xl">
                {renderSubjects("sem2")}
              </ul>
            </motion.div>
          </div>

          <div className="mt-20 text-center relative z-10">
            <p className="text-2xl sm:text-3xl font-bold text-[#002B5B]">
              Total Credit Hours: <span className="text-[#F1592D]">124</span>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Course Benefits Section */}
      <motion.div
        className="relative bg-gradient-to-tr from-orange-50 to-white py-20 px-6 sm:px-10 md:px-16 lg:px-32 overflow-hidden max-w-6xl mx-auto rounded-3xl shadow-lg flex flex-col gap-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
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

        <h2 className="text-4xl sm:text-5xl font-extrabold text-orange-600 text-center mb-6 relative z-10">
          Advance Your Career in the Booming Hospitality Industry
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-3 rounded-full" />
        </h2>

        <p className="text-lg sm:text-xl lg:text-2xl text-center text-orange-900 mb-12 relative z-10 leading-relaxed">
          With our innovative program designed to enhance your skills, drive operational excellence, and achieve new
          levels of success.
        </p>

        {[
          {
            icon: "🏨",
            text: "Master Global Hotel Operations: Learn how to manage complex hotel operations, integrating global best practices in technology and operations for effective service delivery.",
          },
          {
            icon: "💻",
            text: "Technology Integration and Effective Management: Gain hands-on experience with modern hotel technology solutions while improving your management skills to lead diverse teams effectively.",
          },
          {
            icon: "🎓",
            text: "Dynamic Final-Year Projects and Internships: Participate in dynamic final-year projects and internships that offer hands-on experience and develop essential industry-specific skills.",
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

        <p className="text-lg sm:text-xl lg:text-2xl text-center text-orange-900 mt-16 max-w-3xl mx-auto relative z-10 leading-relaxed">
          Our curriculum enhances technical knowledge with essential soft skills and non-credit courses for success in
          the global marketplace.
        </p>
      </motion.div>

      {/* Related Courses Section */}
      <motion.div
        className="max-w-6xl mx-auto px-6 py-20 flex flex-col items-center gap-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <h1 className="text-center text-[#F1592D] text-4xl sm:text-5xl font-extrabold">Related Courses</h1>

        <div className="flex justify-center gap-16 flex-wrap">
          {[
            {
              src: bitImage,
              alt: "Bachelor of Information Technology",
              title: "Bachelor of Information Technology (Hons)",
              link: "/BIT",
            },
            {
              src: bbaImage,
              alt: "Bachelor of Business",
              title: "Bachelor of Business (Hons)",
              link: "/BBA",
            },
          ].map(({ src, alt, title, link }, idx) => (
            <div
              key={idx}
              className="relative w-96 h-96 bg-gradient-to-br from-orange-500 to-[#F1592D] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
            >
              <img
                src={src || "/placeholder.svg"}
                alt={alt}
                className="w-full h-full object-cover rounded-3xl transition-transform duration-700 group-hover:scale-110 group-hover:blur-sm"
              />

              <div className="absolute inset-0 bg-white/15 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl flex flex-col justify-center items-center text-center px-8 gap-6">
                <h2 className="text-white text-2xl md:text-3xl font-extrabold drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]">
                  {title}
                </h2>

                <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} className="z-10">
                  <Link to={link}>
                    <button className="bg-white text-[#F1592D] font-bold px-7 py-3 rounded-full shadow-lg hover:bg-[#003044] hover:text-white transition-colors duration-400">
                      View Details
                    </button>
                  </Link>
                </motion.div>
              </div>

              <div className="absolute inset-0 rounded-3xl pointer-events-none border-4 border-transparent group-hover:border-white group-hover:shadow-[0_0_30px_6px_rgba(255,255,255,0.7)] transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default BHM