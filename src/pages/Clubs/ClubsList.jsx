import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllClubs } from '../../datas/Clubs/Clubs';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      type: "spring", 
      stiffness: 100 
    }
  }
};

// FAQ specific animations
const faqContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const faqItemVariant = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 80,
      delay: 0.1, 
      duration: 0.6
    }
  }
};

// Add a new animation variant for the scroll-to-top button
const scrollTopButtonVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 25 }
  },
  tap: { scale: 0.9 }
};

const ClubsList = () => {
    const navigate = useNavigate();
    const [clubs, setClubs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    
    // References for scroll animations
    const heroRef = useRef(null);
    const searchRef = useRef(null);
    const clubsRef = useRef(null);
    const communityRef = useRef(null);
    const faqRef = useRef(null);
    
    // InView states
    const heroInView = useInView(heroRef, { margin: "-100px" });
    const searchInView = useInView(searchRef, { margin: "-100px" });
    const clubsInView = useInView(clubsRef);
    const communityInView = useInView(communityRef, { margin: "-100px" });
    const faqInView = useInView(faqRef, { margin: "-100px" });

    // Add state to track scroll position
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        // Get all clubs and set them to state
        const allClubs = getAllClubs();
        setClubs(allClubs);
        setIsLoading(false);
    }, []);

    // Filter clubs based on search term
    const filteredClubs = clubs.filter(club =>
        club.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (club.description && club.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    // Navigate to specific club page and scroll to top
    const handleClubClick = (clubId) => {
        navigate(`/clubs/${clubId}`);
        scrollTo(0, 0);
    };

    // For FAQ accordion functionality
    const [activeFAQ, setActiveFAQ] = useState(null);
    
    const toggleFAQ = (index) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };

    // Add scroll event listener to detect when to show the scroll-to-top button
    useEffect(() => {
        const handleScroll = () => {
            // Show button when scrolled down 300px
            setShowScrollButton(window.scrollY > 300);
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Smooth scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <motion.div 
            className="bg-gray-100 min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Scroll to top button */}
            <motion.button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 z-50 bg-[#003044] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                initial="hidden"
                animate={showScrollButton ? "visible" : "hidden"}
                variants={scrollTopButtonVariant}
                whileHover={{ scale: 1.1 }}
                whileTap="tap"
                aria-label="Scroll to top"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
            </motion.button>
            
            {/* Hero Section */}
            <motion.div 
                ref={heroRef}
                className="relative bg-[#003044] text-white"
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                variants={fadeIn}
            >
                <div className="absolute inset-0 overflow-hidden">
                    {/* Decorative Elements with subtle animations */}
                    <motion.div 
                        className="absolute top-10 left-10 w-24 h-24 bg-blue-400 rounded-full opacity-20"
                        animate={{ 
                            y: [0, -8, 0],
                            scale: [1, 1.05, 1]
                        }}
                        transition={{ 
                            duration: 5, 
                            ease: "easeInOut", 
                            repeat: Infinity 
                        }}
                    ></motion.div>
                    <motion.div 
                        className="absolute bottom-10 right-10 w-32 h-32 bg-[#F1592D] rounded-full opacity-10"
                        animate={{ 
                            y: [0, 8, 0],
                            scale: [1, 1.03, 1]
                        }}
                        transition={{ 
                            duration: 4, 
                            ease: "easeInOut", 
                            repeat: Infinity,
                            delay: 0.5
                        }}
                    ></motion.div>
                    <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-yellow-300 opacity-20 transform rotate-45"></div>
                    <svg className="absolute bottom-0 left-0 w-full text-white opacity-10" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                    </svg>
                </div>
                <motion.div 
                    className="container mx-auto px-4 py-20 relative z-10"
                    initial="hidden"
                    animate={heroInView ? "visible" : "hidden"}
                    variants={staggerContainer}
                >
                    <motion.h1 
                        className="text-4xl md:text-5xl font-bold mb-4 text-center"
                        variants={slideUp}
                    >Our Clubs</motion.h1>
                    <motion.p 
                        className="text-xl text-center max-w-3xl mx-auto"
                        variants={slideUp}
                    >
                        Discover our diverse range of clubs and find the perfect community to join.
                        Get involved, make new friends, and pursue your passions.
                    </motion.p>
                </motion.div>
            </motion.div>

            {/* Search Section */}
            <motion.div 
                ref={searchRef}
                initial="hidden"
                animate={searchInView ? "visible" : "hidden"}
                variants={fadeIn}
                className="container mx-auto px-4 py-8"
            >
                <div className="max-w-md mx-auto">
                    <motion.div 
                        className="relative"
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ 
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                            delay: 0.2
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Search clubs..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full py-3 px-4 pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003044]"
                        />
                        <svg className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </motion.div>
                </div>
            </motion.div>

            {/* Clubs Grid Section */}
            <div className="container mx-auto px-4 py-8" ref={clubsRef}>
                {isLoading ? (
                    <div className="flex justify-center items-center h-64">
                        <motion.div 
                            className="rounded-full h-12 w-12 border-t-2 border-b-2 border-[#003044]"
                            animate={{ rotate: 360 }}
                            transition={{ 
                                duration: 1,
                                ease: "linear",
                                repeat: Infinity
                            }}
                        ></motion.div>
                    </div>
                ) : filteredClubs.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center py-16"
                    >
                        <h2 className="text-2xl font-bold text-gray-700">No clubs found</h2>
                        <p className="text-gray-600 mt-2">Try a different search term</p>
                    </motion.div>
                ) : (
                    <motion.div
                        initial="hidden"
                        animate={clubsInView ? "visible" : "hidden"}
                        variants={staggerContainer}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredClubs.map((club) => (
                            <motion.div
                                key={club.id}
                                variants={itemVariant}
                                whileHover={{ 
                                    y: -8,
                                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                                    transition: { type: "spring", stiffness: 300 }
                                }}
                                className="bg-white rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 cursor-pointer"
                                onClick={() => handleClubClick(club.id)}
                            >
                                <div className="relative">
                                    <img
                                        src={club.frontImage || club.logo}
                                        alt={club.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    {club.logo && (
                                        <div className="absolute -bottom-8 left-4 w-16 h-16 bg-white rounded-full p-1 shadow-md">
                                            <img
                                                src={club.logo}
                                                alt={`${club.title} logo`}
                                                className="w-full h-full object-contain rounded-full"
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className={`p-6 ${club.logo ? 'pt-10' : ''}`}>
                                    <h3 className="text-xl font-bold text-[#003044] mb-2">{club.title}</h3>
                                    <p className="text-gray-600 line-clamp-3">
                                        {club.description ? club.description.substring(0, 150) + '...' : 'Join this exciting club!'}
                                    </p>
                                    <div className="mt-4 flex justify-end">
                                        <span className="inline-flex items-center text-[#F1592D] hover:text-[#d84a20] font-semibold">
                                            Learn more
                                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>

            {/* Join the Community Section */}
            <motion.div
                ref={communityRef}
                initial="hidden"
                animate={communityInView ? "visible" : "hidden"}
                variants={fadeIn}
                className="bg-[#0f4c5c] text-white py-16 mt-16"
            >
                <div className="container mx-auto px-4 relative">
                    {/* Decorative elements with animations */}
                    <motion.div 
                        className="absolute top-0 left-10 w-20 h-20 bg-white rounded-full opacity-10"
                        animate={{ 
                            scale: [1, 1.1, 1],
                            rotate: [0, 10, 0]
                        }}
                        transition={{ 
                            duration: 8, 
                            ease: "easeInOut", 
                            repeat: Infinity 
                        }}
                    ></motion.div>
                    <motion.div 
                        className="absolute bottom-0 right-10 w-32 h-32 bg-[#F1592D] rounded-full opacity-20"
                        animate={{ 
                            scale: [1, 1.15, 1],
                            rotate: [0, -10, 0]
                        }}
                        transition={{ 
                            duration: 10, 
                            ease: "easeInOut", 
                            repeat: Infinity 
                        }}
                    ></motion.div>

                    <div className="max-w-3xl mx-auto text-center relative z-10">
                        <motion.h2 
                            className="text-3xl font-bold mb-6"
                            variants={slideUp}
                        >Join Our Community</motion.h2>
                        <motion.p 
                            className="text-xl mb-8"
                            variants={slideUp}
                        >
                            Can't find what you're looking for? Start your own club and build a community around your interests!
                        </motion.p>
                        <Link to="/Contact">
                            <motion.button
                                className="bg-[#F1592D] hover:bg-[#d84a20] text-white font-bold py-3 px-8 rounded-full shadow-lg"
                                onClick={() => { navigate("/Contact"), scrollTo(0, 0) }}
                                variants={slideUp}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Start a Club
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </motion.div>

            {/* FAQ Section - with entry animations in both directions */}
            <motion.div
                ref={faqRef}
                initial="hidden"
                animate={faqInView ? "visible" : "hidden"}
                variants={staggerContainer}
                className="container mx-auto px-4 py-16"
            >
                <motion.h2 
                    className="text-3xl font-bold text-center mb-10"
                    variants={slideUp}
                >Frequently Asked Questions</motion.h2>
                <motion.div
                    variants={faqContainerVariant}
                    className="max-w-3xl mx-auto space-y-4"
                >
                    {[
                        {
                            question: "How can I join a club?",
                            answer: "Visit the club's page and follow the 'Join Us' instructions. Most clubs welcome new members throughout the year."
                        },
                        {
                            question: "Can I be part of multiple clubs?",
                            answer: "Absolutely! You're welcome to join as many clubs as you're interested in."
                        },
                        {
                            question: "How do I start my own club?",
                            answer: "Contact our community coordinator with your club proposal. We're always excited to help new initiatives get started."
                        }
                    ].map((faq, index) => (
                        <motion.div
                            key={index}
                            variants={faqItemVariant}
                            onClick={() => toggleFAQ(index)}
                            whileHover={{ 
                                scale: 1.02, 
                                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" 
                            }}
                            whileTap={{ scale: 0.98 }}
                            className={`bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all duration-300 ${activeFAQ === index ? 'border-l-4 border-[#003044]' : ''}`}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-semibold text-[#003044]">{faq.question}</h3>
                                <motion.div
                                    animate={{ rotate: activeFAQ === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-[#F1592D] w-6 h-6"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </motion.div>
                            </div>
                            <motion.div
                                initial={false}
                                animate={{ 
                                    height: activeFAQ === index ? "auto" : 0,
                                    opacity: activeFAQ === index ? 1 : 0,
                                    marginTop: activeFAQ === index ? 12 : 0
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <p className="text-gray-700">{faq.answer}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default ClubsList;