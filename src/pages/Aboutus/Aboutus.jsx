import React from 'react';
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, GraduationCap, Lightbulb, Handshake, Target, Sparkles, Brain, BriefcaseBusiness, Users, Gem, HeartHandshake, Award, Globe, Quote, MessageSquareText } from 'lucide-react'; // Added Quote, MessageSquareText for founders section
import CorePrinciplesSection from './Core-principles-section';
import PartnersSection from './Partners-section';



const partners = [
  { name: "City & Guilds", img: "https://via.placeholder.com/180x80/F1592D/FFFFFF?text=City%26Guilds" },
  { name: "HELP University", img: "https://via.placeholder.com/180x80/003044/FFFFFF?text=HELP+Uni" },
  { name: "Galaxy Public School", img: "https://via.placeholder.com/180x80/F1592D/FFFFFF?text=Galaxy+School" },
  { name: "PTE", img: "https://via.placeholder.com/180x80/003044/FFFFFF?text=PTE" },
  { name: "PATA", img: "https://via.placeholder.com/180x80/F1592D/FFFFFF?text=PATA" },
  { name: "Skill Lab", img: "https://via.placeholder.com/180x80/003044/FFFFFF?text=Skill+Lab" },
  { name: "Danphe Link", img: "https://via.placeholder.com/180x80/F1592D/FFFFFF?text=Danphe+Link" },
  { name: "CTEVT", img: "https://via.placeholder.com/180x80/003044/FFFFFF?text=CTEVT" },
  { name: "Hotel Himalaya", img: "https://via.placeholder.com/180x80/F1592D/FFFFFF?text=Hotel+Himalaya" },
  { name: "Le Sherpa", img: "https://via.placeholder.com/180x80/003044/FFFFFF?text=Le+Sherpa" },
  { name: "Oskar Bar & Grill", img: "https://via.placeholder.com/180x80/F1592D/FFFFFF?text=Oskar" },
  { name: "Zen", img: "https://via.placeholder.com/180x80/003044/FFFFFF?text=Zen" },
  { name: "Lead Nepal", img: "https://via.placeholder.com/180x80/F1592D/FFFFFF?text=Lead+Nepal" },
  { name: "Brewed Coffee", img: "https://via.placeholder.com/180x80/003044/FFFFFF?text=Brewed+Coffee" },
  { name: "ALEMA Education", img: "https://via.placeholder.com/180x80/F1592D/FFFFFF?text=ALEMA" },
  { name: "Global Nepalese Chef Federation", img: "https://via.placeholder.com/180x80/003044/FFFFFF?text=GNCF" },
  { name: "EMBASSY", img: "https://via.placeholder.com/180x80/F1592D/FFFFFF?text=EMBASSY" },
  { name: "Somewhere in Tamarind", img: "https://via.placeholder.com/180x80/003044/FFFFFF?text=Tamarind" },
  { name: "Tamarind Khajaghar", img: "https://via.placeholder.com/180x80/F1592D/FFFFFF?text=Tamarind+Khajaghar" },
  { name: "World Association of Chefs Societies", img: "https://via.placeholder.com/180x80/003044/FFFFFF?text=WACS" },
  { name: "Tamarind Restro & Bar", img: "https://via.placeholder.com/180x80/F1592D/FFFFFF?text=Tamarind+Restro" },
  { name: "The Court House", img: "https://via.placeholder.com/180x80/003044/FFFFFF?text=Court+House" },
  { name: "Fourth Valley Concierge", img: "https://via.placeholder.com/180x80/F1592D/FFFFFF?text=Fourth+Valley" },
];


const teamMembers = [
  { id: 1, name: "Reetal Rana", position: "Managing Director", img: "https://randomuser.me/api/portraits/women/65.jpg" },
  { id: 2, name: "Pawan Pokhrel", position: "C.E.O", img: "https://randomuser.me/api/portraits/men/45.jpg" },
  { id: 3, name: "Sudarshan Adhikari", position: "Administration & Operation Manager", img: "https://randomuser.me/api/portraits/men/55.jpg" },
  { id: 4, name: "Devendra Timilsina", position: "Head of Marketing & Business Development", img: "https://randomuser.me/api/portraits/men/33.jpg" },
  { id: 5, name: "Utkrishta Kharel", position: "Head of Admission & Student Services", img: "https://randomuser.me/api/portraits/women/72.jpg" },
  { id: 6, name: "Sangeeta Kashichhwa", position: "HR Officer", img: "https://randomuser.me/api/portraits/women/80.jpg" },
  { id: 7, name: "Gajendra Prasad Shah", position: "Academic Director / Program Leader - BBA", img: "https://randomuser.me/api/portraits/men/77.jpg" },
  { id: 8, name: "Rohit Mahato", position: "Program Leader (BIT)", img: "https://randomuser.me/api/portraits/men/61.jpg" },
  { id: 9, name: "Prajwal Ratna RajBhandari", position: "Program Leader (BHM)", img: "https://randomuser.me/api/portraits/men/62.jpg" },
  { id: 10, name: "Lokesh Rohila", position: "DCA", img: "https://randomuser.me/api/portraits/men/64.jpg" },
  { id: 11, name: "Ronak Bastola", position: "IT Head", img: "https://randomuser.me/api/portraits/men/70.jpg" },
  { id: 12, name: "Sapana Neupane", position: "Examinations Officer", img: "https://randomuser.me/api/portraits/women/81.jpg" },
  { id: 13, name: "Bima Shrestha", position: "Finance Officer", img: "https://randomuser.me/api/portraits/women/83.jpg" },
  { id: 14, name: "Jyoti KC", position: "Accounts Officer", img: "https://randomuser.me/api/portraits/women/66.jpg" },
  { id: 15, name: "Niharika Poudyal", position: "Senior Officer - Admissions and Student Services", img: "https://randomuser.me/api/portraits/women/61.jpg" },
  { id: 16, name: "Ayush Pudasaini", position: "Digital Marketing Strategist", img: "https://randomuser.me/api/portraits/men/38.jpg" },
  { id: 17, name: "Bishal Thakuri", position: "Student Support Officer", img: "https://randomuser.me/api/portraits/men/37.jpg" },
  { id: 18, name: "Anita Bhandari", position: "Front Office Executive", img: "https://randomuser.me/api/portraits/women/67.jpg" },
  { id: 19, name: "Himal Basnet", position: "PTE Test Administrator", img: "https://randomuser.me/api/portraits/men/58.jpg" },
  { id: 20, name: "Srijana Paudel", position: "Librarian / PTE Test Administrator", img: "https://randomuser.me/api/portraits/women/55.jpg" },
];


const founders = [
  {
    id: 1,
    name: "Dr. John Doe",
    title: "Co-Founder & CEO",
    img: "https://randomuser.me/api/portraits/men/90.jpg",
    message: "Our journey began with a singular vision: to create an educational ecosystem that nurtures innovation and fosters global citizens. We believe in empowering every student to unlock their fullest potential.",
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    title: "Co-Founder & Academic Head",
    img: "https://randomuser.me/api/portraits/women/90.jpg",
    message: "Education is the cornerstone of progress. We are committed to delivering a curriculum that is not only academically rigorous but also deeply relevant to the evolving demands of the global workforce.",
  },
  {
    id: 3,
    name: "Mr. Alex Johnson",
    title: "Co-Founder & Operations Lead",
    img: "https://randomuser.me/api/portraits/men/91.jpg",
    message: "Building a world-class institution requires relentless dedication and a supportive community. We strive to provide an environment where learning thrives, and every individual feels valued.",
  },
];


const AboutPage = () => {
  
  const [hoveredCredential, setHoveredCredential] = useState(null); 
  const teamSectionRef = useRef(null);
  const [isTeamSectionVisible, setIsTeamSectionVisible] = useState(false);

  const [currentTeamPage, setCurrentTeamPage] = useState(0);
  const teamMembersPerPage = 8;
  const totalTeamPages = Math.ceil(teamMembers.length / teamMembersPerPage);
 const partnersContainerRef = useRef(null);
  const scrollSpeed = 0.5; // Pixels per frame for smooth continuous scroll
  const animationFrameRef = useRef(null);
  const partnersObserverRef = useRef(null); // Ref for IntersectionObserver

  // Effect to observe the Team section for scroll-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTeamSectionVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (teamSectionRef.current) {
      observer.observe(teamSectionRef.current);
    }

    return () => {
      if (teamSectionRef.current) {
        observer.unobserve(teamSectionRef.current);
      }
    };
  }, []);

  // Effect for Team Carousel auto-advance
  useEffect(() => {
    if (!isTeamSectionVisible) return; // Only start carousel if section is visible

    const interval = setInterval(() => {
      setCurrentTeamPage((prevPage) => (prevPage + 1) % totalTeamPages);
    }, 3000); // Changed to 3 seconds for faster swipe

    return () => clearInterval(interval);
  }, [isTeamSectionVisible, totalTeamPages]); 
  const scrollPartnersManual = (direction) => {
    if (partnersContainerRef.current) {
      const scrollAmount = 300; 
      partnersContainerRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const container = partnersContainerRef.current;
    if (!container) return;

    container.scrollLeft = 0;

    // Clear previous clones if any, before re-cloning
    while (container.children.length > partners.length) {
      container.removeChild(container.lastChild);
    }

    // Duplicate partners to create a seamless loop
    const originalPartners = Array.from(container.children);
    // Add more clones to ensure continuous scroll beyond single set of partners
    for (let i = 0; i < 3; i++) { // Clone 3 times to ensure ample width
      originalPartners.forEach(node => {
        const clone = node.cloneNode(true);
        container.appendChild(clone);
      });
    }

    let isPaused = false;

    const animateScroll = () => {
      if (!isPaused) {
        container.scrollLeft += scrollSpeed;

        // Reset scroll position if it reaches half the total width (original + cloned)
        // Adjust condition to be half of the *original* content width to ensure seamless loop
        // We've cloned enough to cover more than double, so resetting after *one* full loop of original content
        if (container.scrollLeft >= originalPartners.reduce((acc, node) => acc + node.offsetWidth + 48, 0)) { // 48 is space-x-12 (12*4)
          container.scrollLeft = 0;
        }
      }
      animationFrameRef.current = requestAnimationFrame(animateScroll);
    };

    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Use Intersection Observer to start/stop animation only when visible
    partnersObserverRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animationFrameRef.current = requestAnimationFrame(animateScroll);
        } else {
          if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
          }
        }
      },
      { threshold: 0.1 } // Start animation when 10% of element is visible
    );

    if (container) {
      partnersObserverRef.current.observe(container);
    }


    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (partnersObserverRef.current && container) {
        partnersObserverRef.current.unobserve(container);
      }
    };
  }, [partners.length]); 
  const startIndex = currentTeamPage * teamMembersPerPage;
  const currentTeamMembers = teamMembers.slice(startIndex, startIndex + teamMembersPerPage);


  return (
    <div className="w-full overflow-hidden font-sans text-gray-800 antialiased">

      {/* Section 1: Hero with Video */}
      <section className="relative h-screen w-full flex items-center justify-center bg-[#003044] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/bgvedio.mp4" type="video/mp4" />
          </video>
          {/* Subtle gradient overlay to enhance text readability and overall mood */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/80 z-0" />
        </div>

        <div className="relative z-10 w-full px-6 lg:px-20 py-24 md:py-0">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-white/10 backdrop-blur-md p-8 md:p-14 rounded-3xl shadow-3xl max-w-4xl text-left text-white border border-white/20 transform hover:scale-[1.01] transition-transform duration-500 will-change-transform mx-auto md:mx-0"
            style={{
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.1)'
            }}
          >
            <p className="text-sm md:text-base tracking-widest uppercase text-orange-200 mb-3 font-semibold">
              Mid-Valley International College (MVIC)
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
              <span className="block text-[#F1592D]">Innovating</span>
              <span className="block text-white">Global Education</span>
            </h1>
            <div className="flex flex-wrap gap-4 mb-8">
              {['Mission', 'Vision', 'Values', 'Objectives'].map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-orange-500/20 border border-orange-400 text-xs md:text-sm uppercase tracking-wide px-4 py-2 rounded-full text-orange-100 font-medium cursor-pointer
                             hover:bg-orange-600/30 hover:scale-105 transition-all duration-300 transform"
                >
                  <Sparkles className="inline-block w-4 h-4 mr-2 text-orange-300" /> {item}
                </motion.span>
              ))}
            </div>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl">
              MVIC, a premier educational institution in Nepal, offers diverse undergraduate and diploma programs
              across technical, management, hospitality, and finance disciplines. Accredited by the Nepalese Ministry
              of Education and partnered with esteemed international bodies like City & Guilds (UK) and HELP University
              (Malaysia), MVIC is committed to delivering world-class education designed for global impact and student success.
            </p>
          </motion.div>
        </div>
      </section>

      <CorePrinciplesSection />

      {/* Section 3: Message from Our Founders */}
      <section className="relative w-full z-10 bg-gradient-to-br from-white via-orange-80 to-blue-100 py-24 px-6 md:px-12 text-center overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight drop-shadow-sm relative z-10"
        >
          Message from Our <span className="text-orange-600">Founders</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto mb-16 font-medium relative z-10"
        >
          Hear directly from the visionaries who laid the foundation for Mid-Valley International College and continue to guide its path towards educational excellence.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-screen-xl mx-auto relative z-10">
          {founders.map((founder, idx) => (
            <motion.div
              key={founder.id}
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white rounded-3xl shadow-xl p-8 transform transition-all duration-500 ease-in-out
                         hover:scale-[1.03] hover:shadow-2xl hover:border-orange-500 border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-blue-200 shadow-md">
                <img src={founder.img} alt={founder.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-2">{founder.name}</h3>
              <p className="text-orange-600 font-semibold mb-4 text-lg">{founder.title}</p>
              <div className="text-gray-700 text-base leading-relaxed italic mb-6 flex-grow flex items-center">
                <Quote className="inline-block w-6 h-6 text-gray-400 mr-2 flex-shrink-0" />
                "{founder.message}"
                <Quote className="inline-block w-6 h-6 text-gray-400 ml-2 flex-shrink-0 transform rotate-180" />
              </div>
              <Link to={"/Message"} className="mt-auto"> {/* Use mt-auto to push button to bottom */}
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full shadow-md transition-all duration-300 flex items-center gap-2"
                >
                  
                  <MessageSquareText className="w-5 h-5" /> Details
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>


      {/* Section 4: Our Team (Carousel Design) */}
      <section
        ref={teamSectionRef}
        className="relative py-24 md:py-32 px-4 bg-white text-gray-800 overflow-hidden"
      >
        {/* Dynamic Background Shapes */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-orange-50 transform -skew-y-6 origin-top-left opacity-60 z-0"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-blue-50 transform skew-y-6 origin-bottom-right opacity-60 z-0"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 transform -translate-x-1/2 -translate-y-1/2 z-0 animate-pulse-slow"></div>

        <div className="relative z-10 max-w-screen-xl mx-auto">
          {/* Heading with Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 drop-shadow-lg">
              Meet Our <span className="text-orange-600">Exceptional</span> Team
            </h2>
            <p className="mt-4 text-xl md:text-2xl text-gray-600 font-medium max-w-2xl mx-auto">
              Dedicated minds and passionate hearts driving our collective success, shaping the future of education.
            </p>
          </motion.div>

          {/* Team Carousel Wrapper */}
          <div className="relative">
            {/* Navigation Buttons (Optional, but good for UX) */}
            <button
              onClick={() => setCurrentTeamPage((prev) => (prev - 1 + totalTeamPages) % totalTeamPages)}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg text-blue-600 hover:bg-white hover:text-blue-800 z-20 transition-all duration-300 transform hover:scale-110 hidden md:block"
              aria-label="Previous Team Members"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={() => setCurrentTeamPage((prev) => (prev + 1) % totalTeamPages)}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg text-blue-600 hover:bg-white hover:text-blue-800 z-20 transition-all duration-300 transform hover:scale-110 hidden md:block"
              aria-label="Next Team Members"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Team Grid with Carousel Animation */}
            <AnimatePresence mode="wait"> {/* Use AnimatePresence for exit animations */}
              <motion.div
                key={currentTeamPage} // Key change triggers re-render and animation
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              >
                {currentTeamMembers.map((member, index) => (
                  <motion.div
                    key={member.id} // Use unique member ID for key
                    initial={{ opacity: 0, y: 80, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
                    className={`
                            group bg-white border border-gray-100 rounded-3xl overflow-hidden
                            shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out
                            transform hover:-translate-y-3 hover:border-orange-500 cursor-pointer
                            relative isolate
                        `}
                  >
                    {/* Image Section */}
                    <div className="relative overflow-hidden h-72 w-full">
                      <img
                        src={member.img}
                        alt={member.name}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 group-hover:brightness-90"
                      />
                      {/* Gradient Overlay for text on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div className="text-white">
                          <h3 className="text-2xl font-bold">{member.name}</h3>
                          <p className="text-base text-gray-200">{member.position}</p>
                        </div>
                      </div>
                    </div>
                    {/* Text Section (visible normally, hidden on hover) */}
                    <div className="p-6 text-center group-hover:opacity-0 transition-opacity duration-300 absolute bottom-0 left-0 right-0 bg-white">
                      <h3 className="text-xl font-semibold text-orange-600 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-base text-blue-700 font-medium">
                        {member.position}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-12 space-x-3">
            {Array.from({ length: totalTeamPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTeamPage(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300
                            ${currentTeamPage === idx ? 'bg-orange-600 w-5' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to team page ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex justify-center mt-16">
            <Link to="/team"> {/* Assuming a dedicated team page */}
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-12 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-lg tracking-wide"
              >
                View All Team
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      <PartnersSection />

      {/* Section 6: Recognition And Equivalency */}
      <section
        className="w-full py-24 px-4 bg-gradient-to-br from-[#e2edf3] to-[#d6e4f0] relative overflow-hidden"
      >
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#003044]/10 via-transparent to-transparent opacity-50 blur-lg z-0"></div>
        <div className="absolute top-0 right-0 w-1/4 h-full bg-orange-100 transform skew-y-12 origin-top-right opacity-30 z-0"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-full bg-blue-100 transform -skew-y-12 origin-bottom-left opacity-30 z-0"></div>


        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl md:text-6xl font-extrabold text-center text-gray-900 py-5 mb-16 relative z-10 drop-shadow-sm"
        >
          Our <span className="text-orange-600">Credentials</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 transition-all duration-700 relative z-10 max-w-7xl mx-auto">
          {/* Recognition Card */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className={`group flex-1 relative overflow-hidden rounded-3xl shadow-xl border-t-8 border-l-4 border-gray-100 cursor-pointer
              h-[350px] sm:h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center p-6 bg-white
              ${hoveredCredential === "recognition" ? "md:w-[55%] scale-[1.02] shadow-2xl border-orange-500" : hoveredCredential === "equivalency" ? "md:w-[45%] grayscale" : "md:w-1/2"}
              transition-all duration-700 ease-out will-change-transform
            `}
            onMouseEnter={() => setHoveredCredential("recognition")}
            onMouseLeave={() => setHoveredCredential(null)}
          >
            <img
              src="/recognition.png"
              alt="Recognition"
              className={`w-full h-full object-contain rounded-lg transition-all duration-700 ease-out
                ${hoveredCredential === "equivalency" ? "grayscale" : ""}
                group-hover:scale-105
              `}
            />
            {/* Overlay content */}
            <div className={`absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent text-white rounded-b-3xl transition-all duration-500
                            ${hoveredCredential === "recognition" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} `}>
              <Award className="w-12 h-12 text-orange-400 mb-3 mx-auto" />
              <h3 className="text-3xl font-bold mb-2 text-center">Government Recognition</h3>
              <p className="text-lg text-center text-gray-200">Officially recognized and approved by the Nepalese Ministry of Education, ensuring valid and accredited qualifications.</p>
            </div>
          </motion.div>

          {/* Equivalency Card */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className={`group flex-1 relative overflow-hidden rounded-3xl shadow-xl border-t-8 border-r-4 border-gray-100 cursor-pointer
              h-[350px] sm:h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center p-6 bg-white
              ${hoveredCredential === "equivalency" ? "md:w-[55%] scale-[1.02] shadow-2xl border-orange-500" : hoveredCredential === "recognition" ? "md:w-[45%] grayscale" : "md:w-1/2"}
              transition-all duration-700 ease-out will-change-transform
            `}
            onMouseEnter={() => setHoveredCredential("equivalency")}
            onMouseLeave={() => setHoveredCredential(null)}
          >
            <img
              src="/equivalency.png"
              alt="Equivalency"
              className={`w-full h-full object-contain rounded-lg transition-all duration-700 ease-out
                ${hoveredCredential === "recognition" ? "grayscale" : ""}
                group-hover:scale-105
              `}
            />
            {/* Overlay content */}
            <div className={`absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent text-white rounded-b-3xl transition-all duration-500
                            ${hoveredCredential === "equivalency" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} `}>
              <Globe className="w-12 h-12 text-orange-400 mb-3 mx-auto" />
              <h3 className="text-3xl font-bold mb-2 text-center">Global Equivalency</h3>
              <p className="text-lg text-center text-gray-200">Our qualifications are globally recognized and accepted, paving the way for international academic and career pathways.</p>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;