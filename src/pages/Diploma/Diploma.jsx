import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import diplomaData from '../../datas/Diploma/diploma';

const Diploma = () => {
    // For FAQ accordion functionality
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // For Benefits "Read More" functionality
    const [expandedBenefits, setExpandedBenefits] = useState([]);
    
    const toggleBenefit = (id) => {
        if (expandedBenefits.includes(id)) {
            setExpandedBenefits(expandedBenefits.filter(benefitId => benefitId !== id));
        } else {
            setExpandedBenefits([...expandedBenefits, id]);
        }
    };

    // Add state for active category
    const [activeCategory, setActiveCategory] = useState('culinary');

    // Check if a benefit is expanded
    const isBenefitExpanded = (id) => expandedBenefits.includes(id);

    // Filter programs based on active category
    const filteredPrograms = diplomaData.programs.filter(program => {
        if (activeCategory === 'culinary') {
            return program.type === 'culinary';
        } else if (activeCategory === 'patisserie') {
            return program.type === 'patisserie';
        } else if (activeCategory === 'certified') {
            return program.type === 'certified';
        }
        return true; // Default: show all
    });

    return (
        <div className="bg-gray-100">
            {/* Hero Section with Background Image */}
            <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/image/Diploma/front.webp" 
                        alt="Culinary education" 
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-[#003044] opacity-70"></div>
                </div>
                <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
                        {diplomaData.title}
                    </h1>
                    <p className="text-xl text-white mb-10">{diplomaData.introduction}</p>
                    <div className="flex flex-wrap justify-center gap-5">
                        <Link to="/EnquiryForm" className="px-8 py-4 bg-[#F1592D] text-white rounded-full hover:bg-[#d84a20] transition duration-300 transform hover:scale-105 shadow-lg">
                            Apply Now
                        </Link>
                        <Link to="/Contact" className="px-8 py-4 bg-white text-[#003044] rounded-full hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-lg">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="bg-[#003044] text-white py-4 text-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-sm">
                        Home &gt; City & Guilds &gt; <span className="text-[#F1592D] font-bold">Diploma Programs</span>
                    </p>
                </div>
            </div>

            {/* Programs Navigation Tabs */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
                <div className="flex flex-wrap justify-center items-center gap-5 mb-10">
                    <button 
                        onClick={() => setActiveCategory('culinary')}
                        className={`px-8 py-3 rounded-full flex items-center text-center transition duration-300 ${activeCategory === 'culinary' ? 'bg-[#F1592D] text-white shadow-md' : 'bg-white text-[#F1592D] border border-[#F1592D] hover:bg-[#F1592D] hover:text-white hover:shadow-lg'}`}
                    >
                        Culinary Art
                    </button>
                    <button 
                        onClick={() => setActiveCategory('patisserie')}
                        className={`px-8 py-3 rounded-full flex items-center text-center transition duration-300 ${activeCategory === 'patisserie' ? 'bg-[#F1592D] text-white shadow-md' : 'bg-white text-[#F1592D] border border-[#F1592D] hover:bg-[#F1592D] hover:text-white hover:shadow-lg'}`}
                    >
                        Patisserie
                    </button>
                    <button 
                        onClick={() => setActiveCategory('certified')}
                        className={`px-8 py-3 rounded-full flex items-center text-just transition duration-300 ${activeCategory === 'certified' ? 'bg-[#F1592D] text-white shadow-md' : 'bg-white text-[#F1592D] border border-[#F1592D] hover:bg-[#F1592D] hover:text-white hover:shadow-lg'}`}
                    >
                        Certified Courses
                    </button>
                </div>
            </div>

            {/* Diploma Programs Section */}
            <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    {activeCategory === 'culinary' && (
                        <>
                            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="h-48 overflow-hidden">
                                    <img 
                                        src="/image/Diploma/image6.webp"
                                        alt="Diploma in food preparation & Culinary arts" 
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-[#003044] mb-4">
                                        Diploma in food preparation & Culinary arts - Level 2
                                    </h3>
                                    <ul className="space-y-3 mb-6">
                                        <li className="flex items-start">
                                            <span className="text-[#F1592D] mr-2">•</span>
                                            <span>Comprehensive program covering culinary fundamentals</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#F1592D] mr-2">•</span>
                                            <span>Professional kitchen techniques and practices</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#F1592D] mr-2">•</span>
                                            <span>Food safety and hygiene principles</span>
                                        </li>
                                    </ul>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-500">City & Guilds Certified</span>
                                        <Link 
                                            to="/diploma-programs/culinary-level-2" 
                                            className="px-6 py-2 bg-[#F1592D] text-white rounded-full hover:bg-[#d84a20] transition duration-300 inline-flex items-center"
                                        >
                                            Learn More
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="h-48 overflow-hidden">
                                    <img 
                                        src="/image/Diploma/image6.webp" 
                                        alt="Advance diploma in Culinary Arts and supervision" 
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-[#003044] mb-4">
                                        Advance diploma in Culinary Arts and supervision - Level 3
                                    </h3>
                                    <ul className="space-y-3 mb-6">
                                        <li className="flex items-start">
                                            <span className="text-[#F1592D] mr-2">•</span>
                                            <span>Advanced culinary techniques and specialized cuisine</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#F1592D] mr-2">•</span>
                                            <span>Kitchen management and team supervision skills</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#F1592D] mr-2">•</span>
                                            <span>Menu planning and cost control</span>
                                        </li>
                                    </ul>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-500">City & Guilds Certified</span>
                                        <Link 
                                            to="/diploma-programs/culinary-level-3" 
                                            className="px-6 py-2 bg-[#F1592D] text-white rounded-full hover:bg-[#d84a20] transition duration-300 inline-flex items-center"
                                        >
                                            Learn More
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    {activeCategory === 'patisserie' && (
                        <>
                            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="h-48 overflow-hidden">
                                    <img 
                                        src="/image/Diploma/cakes-_-mvic.webp" 
                                        alt="Diploma in Food Preparation & Culinary Arts (Patisserie)" 
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-[#003044] mb-4">
                                        Diploma in Food Preparation & Culinary Arts (Patisserie) – Level 2
                                    </h3>
                                    <ul className="space-y-3 mb-6">
                                        <li className="flex items-start">
                                            <span className="text-[#F1592D] mr-2">•</span>
                                            <span>Foundation of pastry arts and techniques</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#F1592D] mr-2">•</span>
                                            <span>Baking fundamentals and theory</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#F1592D] mr-2">•</span>
                                            <span>Introduction to cake decoration</span>
                                        </li>
                                    </ul>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-500">City & Guilds Certified</span>
                                        <Link 
                                            to="/diploma-programs/patisserie-level-2" 
                                            className="px-6 py-2 bg-[#F1592D] text-white rounded-full hover:bg-[#d84a20] transition duration-300 inline-flex items-center"
                                        >
                                            Learn More
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="h-48 overflow-hidden">
                                    <img 
                                        src="/image/Diploma/cakes-_-mvic.webp" 
                                        alt="Diploma in Professional Patisserie and Confectionary" 
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-[#003044] mb-4">
                                        Diploma in Professional Patisserie and Confectionary - Level 3
                                    </h3>
                                    <ul className="space-y-3 mb-6">
                                        <li className="flex items-start">
                                            <span className="text-[#F1592D] mr-2">•</span>
                                            <span>Advanced pastry techniques and artistic presentations</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#F1592D] mr-2">•</span>
                                            <span>Chocolate work and sugar confections</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#F1592D] mr-2">•</span>
                                            <span>Contemporary dessert production</span>
                                        </li>
                                    </ul>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-500">City & Guilds Certified</span>
                                        <Link 
                                            to="/diploma-programs/patisserie-level-3" 
                                            className="px-6 py-2 bg-[#F1592D] text-white rounded-full hover:bg-[#d84a20] transition duration-300 inline-flex items-center"
                                        >
                                            Learn More
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    {activeCategory === 'certified' && (
                        <>
                            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="h-48 overflow-hidden">
                                    <img 
                                        src="/image/Diploma/coffee-beans.webp" 
                                        alt="Certificate in Professional Barista Skills" 
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-[#003044] mb-4">
                                        Certificate in Professional Barista Skills
                                    </h3>
                                    <ul className="space-y-3 mb-6">
                                        <li className="flex items-start">
                                            <span className="text-[#F1592D] mr-2">•</span>
                                            <span>Coffee preparation techniques and latte art</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#F1592D] mr-2">•</span>
                                            <span>Espresso machine operation and maintenance</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#F1592D] mr-2">•</span>
                                            <span>Coffee origins and flavor profiles</span>
                                        </li>
                                    </ul>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-500">City & Guilds Certified</span>
                                        <Link 
                                            to="/diploma-programs/barista" 
                                            className="px-6 py-2 bg-[#F1592D] text-white rounded-full hover:bg-[#d84a20] transition duration-300 inline-flex items-center"
                                        >
                                            Learn More
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="h-48 overflow-hidden">
                                    <img 
                                        src="/image/Diploma/coffee-beans.webp" 
                                        alt="Certificate in Food & Beverage Service" 
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-[#003044] mb-4">
                                        Certificate in Food & Beverage Service
                                    </h3>
                                    <ul className="space-y-3 mb-6">
                                        <li className="flex items-start">
                                            <span className="text-[#F1592D] mr-2">•</span>
                                            <span>Professional service techniques</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#F1592D] mr-2">•</span>
                                            <span>Beverage knowledge and wine service</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#F1592D] mr-2">•</span>
                                            <span>Customer service excellence</span>
                                        </li>
                                    </ul>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-500">City & Guilds Certified</span>
                                        <Link 
                                            to="/diploma-programs/food-beverage" 
                                            className="px-6 py-2 bg-[#F1592D] text-white rounded-full hover:bg-[#d84a20] transition duration-300 inline-flex items-center"
                                        >
                                            Learn More
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Why MVIC Section - Beautified with Better Alignment */}
            <div className="relative py-24 bg-gradient-to-r from-[rgba(241,89,45,0.08)] to-[rgba(0,48,68,0.08)] overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-[#F1592D] opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#003044] opacity-5 rounded-full translate-x-1/3 translate-y-1/3"></div>
                <div className="absolute top-1/4 right-10 w-4 h-4 bg-[#F1592D] opacity-20 rounded-full"></div>
                <div className="absolute bottom-1/4 left-20 w-6 h-6 bg-[#003044] opacity-20 rounded-full"></div>
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-justify md:text-left">
                    <div className="flex flex-col md:flex-row gap-16 items-center justify-center">
                        <div className="md:w-1/2 relative p-5">
                            {/* Decorative quote mark */}
                            <div className="absolute -top-8 -left-8 text-8xl text-[#F1592D] opacity-10 font-serif">❝</div>
                            
                            <h2 className="text-3xl sm:text-4xl font-bold text-[#003044] mb-8 relative text-center md:text-left">
                                {diplomaData.whyMVIC.title}
                                <span className="absolute -bottom-4 left-0 right-0 md:right-auto md:left-0 w-16 h-1 bg-[#F1592D] mx-auto md:mx-0"></span>
                            </h2>
                            
                            <p className="text-lg text-gray-700 mb-10 leading-relaxed text-center md:text-left">
                                {diplomaData.whyMVIC.description}
                            </p>
                            
                            <div className="flex items-center space-x-2 justify-center md:justify-start">
                                <div className="w-8 h-8 rounded-full bg-[#F1592D] flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-xl font-bold text-[#F1592D]">{diplomaData.whyMVIC.callToAction}</p>
                            </div>
                        </div>
                        
                        <div className="md:w-1/2 relative group p-5 flex justify-center">
                            {/* Image with enhanced styling */}
                            <div className="absolute inset-0 bg-[#003044] rounded-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
                            <div className="absolute inset-0 bg-[#F1592D] rounded-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
                            <img 
                                src="/image/Diploma/certification.webp" 
                                alt="City & Guilds Certification" 
                                className="relative rounded-lg shadow-xl mx-auto w-full md:max-w-md transform hover:scale-105 transition-all duration-300 z-10"
                            />
                            {/* Decorative elements around the image */}
                            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-4 border-r-4 border-[#F1592D] opacity-70"></div>
                            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-4 border-l-4 border-[#003044] opacity-70"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Programs Section */}
            <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-black mb-14">Additional Training Programs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {diplomaData.additionalPrograms.map((program, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#F1592D]">
                            <h3 className="text-2xl font-bold text-[#003044] mb-2">{program.title}</h3>
                            <p className="text-lg font-semibold text-[#F1592D] mb-4">{program.subtitle}</p>
                            <p className="text-gray-700 mb-6">{program.description}</p>
                            <button className="inline-flex items-center text-[#003044] font-bold hover:text-[#F1592D] transition-colors duration-300">
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Benefits Section - Redesigned */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-black mb-6">Key Benefits</h2>
                    <p className="text-center text-gray-600 mb-14 max-w-3xl mx-auto">
                        Discover the advantages of pursuing a diploma program at Mid-Valley International College in partnership with City & Guilds
                    </p>
                    <div className="max-w-4xl mx-auto space-y-12">
                        {diplomaData.benefits.map((benefit) => (
                            <div 
                                key={benefit.id}
                                className="relative pl-12 border-l-4 border-[#F1592D] pb-6"
                            >
                                <div className="absolute top-0 left-[-24px] w-12 h-12 rounded-full bg-[#F1592D] flex items-center justify-center text-white text-xl font-bold shadow-lg">
                                    {benefit.id}
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                                    <h3 className="text-2xl font-bold text-[#003044] mb-4 border-b border-gray-200 pb-2">
                                        {benefit.title}
                                    </h3>
                                    <div className="relative">
                                        <div className="absolute top-0 left-0 text-6xl text-[#F1592D] opacity-10 font-serif">❝</div>
                                        <p className={`text-gray-700 pt-4 pl-6 pr-6 ${isBenefitExpanded(benefit.id) ? '' : 'line-clamp-4'} transition-all duration-300`}>
                                            {benefit.description}
                                        </p>
                                        <div className="absolute bottom-0 right-0 text-6xl text-[#F1592D] opacity-10 font-serif">❞</div>
                                    </div>
                                    <button 
                                        onClick={() => toggleBenefit(benefit.id)} 
                                        className="mt-4 text-[#F1592D] hover:text-[#003044] transition-colors duration-300 font-bold flex items-center"
                                    >
                                        {isBenefitExpanded(benefit.id) ? 'Read Less' : 'Read More'}
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            className={`h-4 w-4 ml-1 transition-transform duration-300 ${isBenefitExpanded(benefit.id) ? 'rotate-180' : ''}`}
                                            fill="none" 
                                            viewBox="0 24 24" 
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="absolute bottom-0 left-[-8px] w-4 h-4 rounded-full bg-white border-2 border-[#F1592D]"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-black mb-14">What People Say About City and Guilds</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 px-4 sm:px-10 lg:px-20">
                        <div className="bg-[#F1592D] text-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                            <img
                                src="/image/Diploma/gordon-ramsay.webp"
                                alt="Gordon Ramsay"
                                className="w-16 h-16 rounded-full mb-4 object-cover"
                            />
                            <h4 className="text-lg font-bold mb-2">Gordon Ramsay</h4>
                            <p className="text-sm font-semibold mb-2">City and Guilds Graduate</p>
                            <p className="text-sm">Gordon Ramsay is a renowned British chef, restaurateur, and television personality. He graduated from City & Guilds and went on to become one of the most successful culinary professionals in the world.</p>
                        </div>
                        <div className="bg-[#F1592D] text-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                            <img
                                src="/image/Diploma/jamie-oliver.webp"
                                alt="Jamie Oliver"
                                className="w-16 h-16 rounded-full mb-4 object-cover"
                            />
                            <h4 className="text-lg font-bold mb-2">Jamie Oliver</h4>
                            <p className="text-sm font-semibold mb-2">City & Guilds Graduate</p>
                            <p className="text-sm">Jamie Oliver, the famous British chef, restaurant owner, and TV personality, has won the hearts of millions with his passion for food and education. His journey began with City & Guilds training.</p>
                        </div>
                        <div className="bg-[#F1592D] text-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                            <img
                                src="/image/Diploma/marcus-wareing.webp"
                                alt="Marcus Wareing"
                                className="w-16 h-16 rounded-full mb-4 object-cover"
                            />
                            <h4 className="text-lg font-bold mb-2">Marcus Wareing</h4>
                            <p className="text-sm font-semibold mb-2">City and Guilds Graduate</p>
                            <p className="text-sm">Marcus Wareing, a renowned British chef, has earned international recognition with a career spanning over three decades. His foundation of culinary excellence began at City & Guilds.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-50 py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-black mb-14">Frequently Asked Questions</h2>
                    <div className="max-w-3xl mx-auto space-y-5">
                        {[
                            {
                                question: "Is City & Guilds certification internationally recognized?",
                                answer: "Absolutely! City & Guilds qualifications are globally recognized and accepted. These credentials are highly valued by employers around the world. With this qualification, you can confidently pursue career opportunities both domestically and internationally."
                            },
                            {
                                question: "What career opportunities are available after completing these courses?",
                                answer: "Graduates have a wide range of career opportunities including professional chef, pastry chef, kitchen manager, food consultant, restaurant owner, culinary instructor, and more. Many of our graduates work in prestigious hotels and restaurants worldwide."
                            },
                            {
                                question: "Do the programs include internship opportunities?",
                                answer: "Yes, our programs include valuable internship placements in Nepal and internationally. We provide 407 Training Visa for Australia and opportunities in the UAE, UK, and other Middle Eastern countries."
                            },
                            {
                                question: "What are the eligibility requirements for enrollment?",
                                answer: "Most programs require students to be at least 16 years of age with a minimum educational qualification. Specific requirements vary by program level. Please contact our admissions office for detailed information about each course."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <button 
                                    className="flex justify-between items-center w-full px-4 py-3 text-left font-semibold bg-[#0f4c5c] text-white"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <span>{faq.question}</span>
                                    <span>
                                        {activeIndex === index ? 
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                            </svg>
                                            : 
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        }
                                    </span>
                                </button>
                                {activeIndex === index && (
                                    <div className="px-4 py-3 text-gray-700 bg-white">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* City & Guilds Certification */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-[#003044] mb-6">City & Guilds Certification</h2>
                    <div className="flex justify-center mb-8">
                        <img 
                            src="/image/Diploma/city_Guilds.webp" 
                            alt="City & Guilds Logo" 
                            className="h-20 object-contain" // Reduced from h-32 to h-20
                        />
                    </div>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                        Our partnership with City & Guilds ensures you receive globally recognized qualifications that open doors to international career opportunities in the culinary industry.
                    </p>
                </div>
            </div>

            {/* CTA Section */}
            <div className="relative py-20 bg-[#003044] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img 
                        src="/image/Diploma/doughnutss.webp" 
                        alt="Background pattern" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Start Your Culinary Journey?</h2>
                    <p className="text-lg text-gray-100 max-w-3xl mx-auto mb-8">
                        Take the first step toward a successful culinary career with internationally recognized qualifications from City & Guilds at Mid-Valley International College.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/EnquiryForm" className="px-8 py-4 bg-[#F1592D] text-white rounded-full hover:bg-[#d84a20] transition duration-300 transform hover:scale-105 shadow-lg text-lg font-bold">
                            Apply Now
                        </Link>
                        <Link to="/Contact" className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-[#003044] transition duration-300 transform hover:scale-105 shadow-lg text-lg font-bold">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Diploma;
