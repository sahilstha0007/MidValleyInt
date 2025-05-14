import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllClubs } from '../../datas/Clubs/Clubs';

const ClubsList = () => {
    const navigate = useNavigate();
    const [clubs, setClubs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);

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

    // Navigate to club details page
    const handleClubClick = (clubId) => {
        navigate(`/clubs/${clubId}`);
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-[#003044] text-white">
                <div className="absolute inset-0 overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-10 left-10 w-24 h-24 bg-blue-400 rounded-full opacity-20"></div>
                    <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#F1592D] rounded-full opacity-10"></div>
                    <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-yellow-300 opacity-20 transform rotate-45"></div>
                    <svg className="absolute bottom-0 left-0 w-full text-white opacity-10" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                    </svg>
                </div>
                <div className="container mx-auto px-4 py-20 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Our Clubs</h1>
                    <p className="text-xl text-center max-w-3xl mx-auto">
                        Discover our diverse range of clubs and find the perfect community to join.
                        Get involved, make new friends, and pursue your passions.
                    </p>
                </div>
            </div>

            {/* Search Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-md mx-auto">
                    <div className="relative">
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
                    </div>
                </div>
            </div>

            {/* Clubs Grid Section */}
            <div className="container mx-auto px-4 py-8">
                {isLoading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#003044]"></div>
                    </div>
                ) : filteredClubs.length === 0 ? (
                    <div className="text-center py-16">
                        <h2 className="text-2xl font-bold text-gray-700">No clubs found</h2>
                        <p className="text-gray-600 mt-2">Try a different search term</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredClubs.map((club) => (
                            <div
                                key={club.id}
                                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1"
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
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Join the Community Section */}
            <div className="bg-[#0f4c5c] text-white py-16 mt-16">
                <div className="container mx-auto px-4 relative">
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-10 w-20 h-20 bg-white rounded-full opacity-10"></div>
                    <div className="absolute bottom-0 right-10 w-32 h-32 bg-[#F1592D] rounded-full opacity-20"></div>

                    <div className="max-w-3xl mx-auto text-center relative z-10">
                        <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
                        <p className="text-xl mb-8">
                            Can't find what you're looking for? Start your own club and build a community around your interests!
                        </p>
                        <Link to="/Contact">
                            <button
                                className="bg-[#F1592D] hover:bg-[#d84a20] text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-transform hover:scale-105"
                                onClick={() => { navigate("/Contact"), scrollTo(0, 0) }}
                            >

                                Start a Club

                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
                <div className="max-w-3xl mx-auto space-y-4">
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
                        <div key={index} className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold text-[#003044] mb-2">{faq.question}</h3>
                            <p className="text-gray-700">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClubsList;
