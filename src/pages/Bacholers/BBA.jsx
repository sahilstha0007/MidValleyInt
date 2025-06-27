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
  faChartLine,
  faGlobe,
  faLightbulb,
  faCalculator,
  faPiggyBank,
} from "@fortawesome/free-solid-svg-icons"

// Import images (you'll need to add these to your project)
import logo from "/logoicon.png"
import helpLogo from "./imgs/HELPLogo.png"
import adImage from "./imgs/AD.png"
import emailIcon from "./imgs/emailicon.png"
import telIcon from "./imgs/Telicon.png"
import phoneIcon from "./imgs/phoneicon.png"
import bhmImage from "./imgs/BBAF.png"
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
      "Financial Accounting I",
      "Principles of Microeconomics",
      "Principles of Management",
      "Principles of Marketing",
      "Business Statistics",
      "Business Mathematics",
      "Introduction to Business",
      "Communication Skills I",
    ],
    sem2: [
      "Financial Accounting II",
      "Principles of Macroeconomics",
      "Organizational Behavior",
      "Business Law",
      "Quantitative Methods for Business",
      "Introduction to Finance",
      "Computer Applications in Business",
      "Communication Skills II",
    ],
  },
  Year2: {
    sem1: [
      "Intermediate Financial Accounting",
      "Corporate Finance",
      "Investment Analysis",
      "Financial Markets and Institutions",
      "Business Research Methods",
      "International Business",
      "Operations Management",
      "Business Ethics",
    ],
    sem2: [
      "Advanced Financial Accounting",
      "Portfolio Management",
      "Financial Risk Management",
      "Banking and Insurance",
      "Taxation",
      "Entrepreneurship Development",
      "Human Resource Management",
      "Strategic Management",
    ],
  },
  Year3: {
    sem1: [
      "Advanced Corporate Finance",
      "Financial Statement Analysis",
      "Derivatives and Risk Management",
      "International Finance",
      "Financial Planning and Control",
      "Project Finance",
      "Behavioral Finance",
      "Financial Modeling",
    ],
    sem2: [
      "Mergers and Acquisitions",
      "Real Estate Finance",
      "Islamic Finance",
      "Financial Technology (FinTech)",
      "Corporate Governance",
      "Financial Econometrics",
      "Case Studies in Finance",
      "Internship/Industrial Training",
    ],
  },
  Year4: {
    sem1: [
      "Advanced Investment Analysis",
      "Financial Consulting",
      "Capstone Project I",
      "Elective Course I",
      "Elective Course II",
      "Professional Development",
      "Leadership and Team Management",
    ],
    sem2: [
      "Capstone Project II",
      "Advanced Financial Markets",
      "Global Financial Management",
      "Elective Course III",
      "Elective Course IV",
      "Career Development Workshop",
      "Industry Placement/Final Project",
    ],
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

function BBA() {
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
            Bachelor of Business Administration (Finance) (Hons)
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
                    <p className="text-base">127</p>
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
                  alt="BBA Program"
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
              Bachelor of Business Administration (Finance) (Hons)
            </h2>
            <p className="text-lg sm:text-2xl lg:text-3xl leading-relaxed font-semibold mb-6">
              The BBA-Finance program offers a dynamic blend of theoretical knowledge and practical financial expertise.
              Students gain essential skills in financial instruments, markets, and strategic decision-making under
              uncertainty — preparing them for thriving careers in banking, consulting, funds management, and corporate
              finance.
            </p>
            <ul className="list-disc list-inside space-y-4 text-lg sm:text-xl lg:text-2xl">
              {[
                "Banking and Financial Services",
                "Investment Banking and Securities",
                "Corporate Finance and Treasury",
                "Insurance and Risk Management",
                "Financial Planning and Advisory",
                "Asset Management and Wealth Management",
                "Financial Technology (FinTech)",
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
            Advance your career with specialized education in Finance and Business Administration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full px-4">
          <div className="bg-white p-6 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl border-t-4 border-orange-500">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faGraduationCap} className="text-orange-600 text-2xl mr-3" />
              <h2 className="text-xl font-semibold text-gray-800">Master's in Finance</h2>
            </div>
            <p className="text-gray-600">
              Specialize further in areas like <span className="font-medium text-blue-900">Corporate Finance</span>,{" "}
              <span className="font-medium text-blue-900">Investment Management</span>, or{" "}
              <span className="font-medium text-blue-900">Financial Analytics</span>.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl border-t-4 border-orange-500">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faBriefcase} className="text-orange-600 text-2xl mr-3" />
              <h2 className="text-xl font-semibold text-gray-800">MBA</h2>
            </div>
            <p className="text-gray-600">
              Combine your finance background with{" "}
              <span className="font-medium text-blue-900">strategic management skills</span> to lead financial
              organizations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl border-t-4 border-orange-500">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faCertificate} className="text-orange-600 text-2xl mr-3" />
              <h2 className="text-xl font-semibold text-gray-800">Professional Certifications</h2>
            </div>
            <p className="text-gray-600">
              Boost your profile with certifications like <span className="font-medium text-blue-900">CFA</span>,{" "}
              <span className="font-medium text-blue-900">FRM</span>,{" "}
              <span className="font-medium text-blue-900">CPA</span>, or{" "}
              <span className="font-medium text-blue-900">ACCA</span>.
            </p>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center text-gray-700 text-lg leading-relaxed px-4">
          A <span className="font-semibold text-blue-700">Bachelor's in Business Administration (Finance)</span>{" "}
          provides a strong foundation for a versatile and rewarding career in today's dynamic financial industry. The
          demand for finance professionals is rapidly growing, making it a smart and strategic field to build a
          successful future.
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
            HELP University's Business Administration Program
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col space-y-6 cursor-pointer group"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#ff7e5f] to-[#fb8c00] flex items-center justify-center text-white text-2xl shadow-lg drop-shadow-lg">
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              <h3 className="text-2xl font-semibold text-[#003044] group-hover:text-[#fb8c00] transition-colors duration-300">
                CFA Institute Recognition
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Endorsed by the CFA Institute, our curriculum covers 70% of the CFA Candidate's Body of Knowledge
                (CBOK), providing students with a robust foundation for the Chartered Financial Analyst certification.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col space-y-6 cursor-pointer group"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#006c8e] to-[#003044] flex items-center justify-center text-white text-2xl shadow-lg drop-shadow-lg">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <h3 className="text-2xl font-semibold text-[#003044] group-hover:text-[#006c8e] transition-colors duration-300">
                Industry Internships
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Gain valuable work experience through internships that often lead to full-time job placements, bridging
                the gap between academia and the finance industry.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col space-y-6 cursor-pointer group"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#ff7e5f] to-[#fb8c00] flex items-center justify-center text-white text-2xl shadow-lg drop-shadow-lg">
                <FontAwesomeIcon icon={faCalculator} />
              </div>
              <h3 className="text-2xl font-semibold text-[#003044] group-hover:text-[#fb8c00] transition-colors duration-300">
                Advanced Financial Modeling
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Master sophisticated financial modeling techniques and analytical tools used in modern finance,
                including derivatives, risk management, and portfolio optimization.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col space-y-6 cursor-pointer group"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#006c8e] to-[#003044] flex items-center justify-center text-white text-2xl shadow-lg drop-shadow-lg">
                <FontAwesomeIcon icon={faGlobe} />
              </div>
              <h3 className="text-2xl font-semibold text-[#003044] group-hover:text-[#006c8e] transition-colors duration-300">
                Global Financial Markets
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Understand international financial markets, cross-border investments, and global economic trends that
                shape modern business decisions.
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
              Explore diverse possibilities unlocked by our BBA-Finance program.
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
                <h3 className="text-2xl font-semibold text-[#003044]">Job Opportunities</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Upon completing this program, graduates gain access to diverse sectors and roles in the finance
                industry, with excellent career growth prospects and competitive salaries.
              </p>
              <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
                <li>Banking and Financial Services</li>
                <li>Investment Banking</li>
                <li>Stock Trading and Securities</li>
                <li>Insurance and Risk Management</li>
                <li>Corporate Finance & Accounts</li>
                <li>Financial Planning and Advisory</li>
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
                <h3 className="text-2xl font-semibold text-[#003044]">Academic Opportunities</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                This finance program, recognized by the CFA Institute, provides a solid foundation and unlocks numerous
                academic and professional pathways for continued growth.
              </p>
              <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
                <li>Master's Degree in Finance</li>
                <li>Professional Certifications (CFA, FRM, CPA)</li>
                <li>Specialized Finance Workshops</li>
                <li>Doctoral Studies in Finance</li>
                <li>Executive Education Programs</li>
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
                The BBA-Finance program at MVIC equips students with financial expertise while fostering an
                entrepreneurial mindset. Students participate in global competitions like the EOGSEA (Global Student
                Entrepreneur Awards), showcasing groundbreaking ventures with expert mentorship and strategic resources.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform cursor-pointer flex flex-col space-y-6"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
            >
              <div className="flex items-center space-x-5">
                <div className="bg-gradient-to-br from-[#004a6e] to-[#006a8e] p-4 rounded-full text-white text-3xl shadow-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faPiggyBank} />
                </div>
                <h3 className="text-2xl font-semibold text-[#003044]">Financial Technology (FinTech)</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Stay ahead of the curve with exposure to emerging financial technologies, digital banking, blockchain,
                cryptocurrency, and innovative payment systems that are reshaping the financial landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Finance Lab & Inquiry Section */}
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
            <div className="bg-blue-50 p-5 rounded-xl flex items-center justify-center">
              <FontAwesomeIcon icon={faCalculator} className="w-12 h-12 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-orange-600 mb-5">Advanced Finance Lab</h2>
              <div className="space-y-4 text-gray-900 text-lg leading-relaxed">
                <p>
                  Experience hands-on learning in our state-of-the-art Finance Lab at MVIC, featuring modern technology
                  and software for comprehensive financial education.
                </p>
                <p>
                  Master essential financial analysis techniques using industry-standard software like Bloomberg
                  Terminal, Reuters Eikon, and advanced financial modeling tools.
                </p>
                <p>
                  Explore various aspects of financial markets through simulated trading environments, portfolio
                  management systems, and real-time market data analysis.
                </p>
                <p>This practical approach prepares you for success in the dynamic finance industry.</p>
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
              Total Credit Hours: <span className="text-[#F1592D]">127</span>
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
          Empower Your Finance Career
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-3 rounded-full" />
        </h2>

        <p className="text-lg sm:text-xl lg:text-2xl text-center text-orange-900 mb-12 relative z-10 leading-relaxed">
          Become a catalyst for innovation and success in the Finance industry through our thoughtfully designed course.
        </p>

        {[
          {
            icon: "💼",
            text: "Internship Programs: Gain valuable work experience, specialized skills, and industry-specific knowledge to build your professional career in finance and banking.",
          },
          {
            icon: "🌍",
            text: "Global Market Preparedness: Prepare for the global marketplace and ever-changing financial landscape by enhancing soft skills and incorporating non-credit courses into the curriculum.",
          },
          {
            icon: "📊",
            text: "Academic Rigor & Industry Exposure: Experience a well-structured semester system that ensures academic rigor and provides comprehensive exposure to the finance industry.",
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
          Our Finance program integrates academic depth with real-world relevance to prepare graduates for leadership in
          the global finance landscape.
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
              src: bhmImage,
              alt: "Bachelor of Hotel Management",
              title: "Bachelor of Hotel Management (Hons)",
              link: "/BHM",
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

export default BBA