import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getClubById, getAllClubs } from '../../datas/Clubs/Clubs';

const Clubs = () => {
    // Get club parameter from URL parameters
    const { clubId } = useParams();
    const navigate = useNavigate();
    
    // Try to find club by title or ID
    let clubData = null;
    
    // First try direct ID lookup
    clubData = getClubById(clubId);
    
    // If that fails, try to find by title (case insensitive)
    if (!clubData) {
        const allClubs = getAllClubs();
        const clubByTitle = allClubs.find(club => 
            club.title.toLowerCase() === clubId.toLowerCase());
        
        if (clubByTitle) {
            clubData = getClubById(clubByTitle.id);
        }
    }

    // Handle case when club doesn't exist
    if (!clubData) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-100 p-4">
                <h2 className="text-3xl font-bold text-[#003044] mb-4">Club Not Found</h2>
                <p className="text-lg text-gray-700 mb-8">The club you're looking for doesn't exist or might have been moved.</p>
                <button 
                    onClick={() => navigate('/clubs')} 
                    className="bg-[#F1592D] hover:bg-[#d84a20] text-white font-bold py-3 px-8 rounded-full shadow-lg"
                >
                    View All Clubs
                </button>
            </div>
        );
    }

    // Using data from the selected club
    const { 
        frontImage, 
        title, 
        description, 
        logo, // Added logo to destructuring
        mission, 
        charterPresident, 
        joinUs, 
        callToAction 
    } = clubData;

    return (
        <div className="bg-gray-100">
            {/* Front Image */}
            <div className="relative">
                <img
                    src={frontImage}
                    alt={title}
                    className="w-full max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-[70vh] xl:max-h-[80vh] object-cover object-center"
                    loading="lazy"
                />
            </div>

            {/* Breadcrumb Section */}
            <div className="bg-[#003044] text-white py-4 text-center">
                <div className="container mx-auto px-4">
                    <p className="text-sm">
                        Home &gt; <span className="cursor-pointer hover:text-[#F1592D]" onClick={() => navigate('/clubs')}>Our Clubs</span> &gt;{" "}
                        <span className="text-[#F1592D] font-bold">{title}</span>
                    </p>
                </div>
            </div>
            <div className='m-20'></div>

            {/* Title and Description with Logo */}
            <div className="bg-white mx-4 sm:mx-20 my-4 p-4 sm:p-5 md:p-30 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row items-center justify-center mb-6">
                    {logo && (
                        <div className="w-24 h-24 md:w-32 md:h-32 mr-0 md:mr-6 mb-4 md:mb-0">
                            <img 
                                src={logo} 
                                alt={`${title} logo`} 
                                className="w-full h-full object-contain"
                            />
                        </div>
                    )}
                    <h1 className="text-4xl font-bold text-black text-center">{title}</h1>
                </div>
                <p className="text-gray-700 text-lg whitespace-pre-line text-justify">{description}</p>
            </div>

            {/* Our Mission Section */}
            <div className="mx-4 sm:mx-30 my-4 p-4 sm:p-5 md:p-20 rounded-lg">
                <h2 className="text-3xl font-bold text-black text-center mb-8">{mission.title}</h2>

                <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-4">
                    <div className="flex-1 bg-[#0f4c5c] text-white p-6 sm:p-8 lg:p-10 rounded-lg">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">{mission.subheading}</h2>
                        <p className="text-md text-justify leading-relaxed mb-6">
                            {mission.description}
                        </p>
                        <div className="space-y-4">
                            {mission.goals.map((goal, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="bg-white rounded-full p-1 flex items-center justify-center">
                                            <svg className="w-4 h-4 text-[#0f4c5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="ml-3 text-white">{goal}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative w-full lg:w-1/2 mb-10 lg:mb-0">
                        {/* Decorative elements that scale with container */}
                        <div className="absolute top-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-blue-100 rounded-full opacity-70"></div>
                        <div className="absolute bottom-1/4 left-5 w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-full"></div>
                        <div className="absolute top-8 right-5 w-12 h-12 sm:w-16 sm:h-16 bg-pink-200 transform rotate-45"></div>
                        <div className="absolute right-1/4 top-1/3 w-0 h-0 
                            border-l-[20px] sm:border-l-[35px] border-l-transparent 
                            border-b-[35px] sm:border-b-[60px] border-b-yellow-400 
                            border-r-[20px] sm:border-r-[35px] border-r-transparent"></div>
                            
                        <div className="relative mx-auto w-full max-w-md lg:max-w-lg pt-10 px-4 sm:px-8 lg:px-6">
                            <img
                                src={mission.image}
                                alt={mission.title}
                                className="w-full h-auto rounded-lg relative z-10"
                            />
                        </div>
                        
                        <svg className="hidden sm:block absolute top-10 right-10 sm:right-24 w-20 sm:w-32 h-20 sm:h-32 text-blue-400" viewBox="0 0 100 100" fill="none">
                            <path d="M20 40C40 10 60 50 80 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                        
                        <div className="absolute -bottom-5 -left-2 sm:-left-8 w-3/4 max-w-[220px] sm:max-w-xs bg-white p-3 sm:p-4 rounded-lg shadow-md z-10">
                            <p className="text-black text-xs sm:text-sm font-semibold text-left">
                                {mission.caption.split('\n').map((line, i) => (
                                    <React.Fragment key={i}>
                                        {line}
                                        {i !== mission.caption.split('\n').length - 1 && <br />}
                                    </React.Fragment>
                                ))}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Meet Our Charter President Section */}
            <div className="bg-white mx-4 sm:mx-20 my-4 mt-10 p-4 sm:p-5 md:p-30 rounded-lg shadow-md overflow-hidden">
                <h2 className="text-3xl font-bold text-black text-center mb-8">{charterPresident.title}</h2>
                <div className="relative flex flex-col lg:flex-row items-center gap-8">
                    <div className="absolute top-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-blue-100 rounded-full opacity-70"></div>
                    <div className="absolute bottom-1/4 left-5 w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-full"></div>
                    <div className="absolute top-8 right-5 w-12 h-12 sm:w-16 sm:h-16 bg-pink-200 transform rotate-45"></div>
                    
                    <div className="absolute right-1/4 top-1/3 w-0 h-0 
                        border-l-[15px] sm:border-l-[25px] border-l-transparent 
                        border-b-[25px] sm:border-b-[40px] border-b-blue-300 
                        border-r-[15px] sm:border-r-[25px] border-r-transparent"></div>
                    
                    <svg className="hidden sm:block absolute bottom-10 right-1/4 w-24 sm:w-32 h-12 sm:h-16 text-indigo-300" viewBox="0 0 100 30" fill="none">
                        <path d="M0 15 L20 5 L40 25 L60 5 L80 25 L100 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                    
                    <div className="flex-1 lg:pr-20 relative z-10">
                        <h3 className="text-2xl font-bold text-black mb-4">{charterPresident.name}</h3>
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line text-justify">
                            {charterPresident.description}
                        </p>
                        <p className="mt-4 font-bold">{charterPresident.name}</p>
                        <p className="text-sm text-gray-600">{charterPresident.position}</p>
                    </div>
                    <div className="flex-shrink-0 w-full lg:w-1/3 relative z-10">
                        <img
                            src={charterPresident.image}
                            alt={charterPresident.name}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                </div>
            </div>

            {/* Join Us Section */}
            <div className="mx-4 sm:mx-30 my-4 p-4 sm:p-5 md:p-20 rounded-lg">
                <h2 className="text-3xl font-bold text-black text-center mb-8">{joinUs.title}</h2>

                <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-4">
                    <div className="flex-1 bg-[#0f4c5c] text-white p-6 sm:p-8 lg:p-10 rounded-lg">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">{joinUs.subheading}</h2>
                        <p className="text-md text-justify leading-relaxed">
                            {joinUs.description}
                        </p>
                        <div className="mt-8 flex justify-center">
                            <button className="bg-white text-[#0f4c5c] hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transform transition-transform hover:scale-105">
                                Join us today!
                            </button>
                        </div>
                    </div>

                    <div className="relative w-full lg:w-1/2 mb-10 lg:mb-0">
                        {/* Decorative elements that scale with container */}
                        <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 bg-yellow-100 rounded-full opacity-70"></div>
                        <div className="absolute bottom-1/4 right-5 w-6 h-6 sm:w-8 sm:h-8 bg-orange-600 rounded-full"></div>
                        <div className="absolute top-8 left-5 w-12 h-12 sm:w-16 sm:h-16 bg-green-200 transform rotate-12"></div>
                        <div className="absolute left-1/4 top-1/3 w-0 h-0 
                            border-l-[20px] sm:border-l-[35px] border-l-transparent 
                            border-b-[35px] sm:border-b-[60px] border-b-teal-400 
                            border-r-[20px] sm:border-r-[35px] border-r-transparent"></div>
                        
                        <div className="relative mx-auto w-full max-w-md lg:max-w-lg pt-10 px-4 sm:px-8 lg:px-6">
                            <img
                                src={joinUs.image}
                                alt="Join Our Community"
                                className="w-full h-auto rounded-lg relative z-10"
                            />
                        </div>
                        
                        <svg className="hidden sm:block absolute bottom-20 left-10 sm:left-16 w-20 sm:w-32 h-20 sm:h-32 text-teal-400" viewBox="0 0 100 100" fill="none">
                            <path d="M80 60C60 90 40 50 20 80" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                        
                        <div className="absolute -bottom-5 -left-2 sm:-left-8 w-3/4 max-w-[220px] sm:max-w-xs bg-white p-3 sm:p-4 rounded-lg shadow-md z-10">
                            <p className="text-black text-xs sm:text-sm font-semibold text-left">
                                {joinUs.caption.split('\n').map((line, i) => (
                                    <React.Fragment key={i}>
                                        {line}
                                        {i !== joinUs.caption.split('\n').length - 1 && <br />}
                                    </React.Fragment>
                                ))}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Final Call to Action */}
            <div className="bg-white mx-4 sm:mx-20 my-4 p-4 sm:p-5 md:p-30 rounded-lg shadow-md text-center">
                <h2 className="text-3xl font-bold text-black mb-6">{callToAction.title}</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                    {callToAction.description}
                </p>
                <button className="bg-[#003044] hover:bg-[#00465f] text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105 mb-4">
                    {callToAction.buttonText}
                </button>
            </div>
        </div>
    );
};

export default Clubs;
