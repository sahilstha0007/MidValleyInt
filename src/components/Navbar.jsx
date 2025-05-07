import React, { useState, useRef, useEffect } from 'react'
import clsx from 'clsx'
import { NavLink, useNavigate } from 'react-router-dom'
import navbar from '../datas/navbar.js'
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";

const Navbar = () => {
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const dropdownRefs = useRef({});
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isHovering, setIsHovering] = useState(false);

    // Check if screen size is mobile
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) {
                setShowMenu(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (activeDropdown !== null &&
                dropdownRefs.current[activeDropdown] &&
                !dropdownRefs.current[activeDropdown].contains(event.target) &&
                !isHovering) {
                setActiveDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [activeDropdown, isHovering]);

    const handleMouseEnter = (index) => {
        if (!isMobile) {
            setIsHovering(true);
            setActiveDropdown(index);
        }
    };

    const handleMouseLeave = () => {
        if (!isMobile) {
            setIsHovering(false);
            // Only close if it was opened by hover, not by click
            setTimeout(() => {
                if (!isHovering) {
                    setActiveDropdown(null);
                }
            }, 100);
        }
    };

    const handleDropdownClick = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    return (
        <div className="relative">
            <div className='bg-gray-100 flex justify-between py-2 px-4 md:px-9 items-center border-b border-b-gray-200 text-sm rounded-b-[12px]'>
                <div className='flex items-center'>
                    <img className='w-32 md:w-48 cursor-pointer' src="/img/logo.svg" alt="logo" onClick={() => { scrollTo({ top: 0, behavior: 'smooth' }), navigate("/") }} />
                </div>

                {/* Desktop Navigation */}
                <ul className='hidden md:flex lg:gap-14 gap-7 items-start font-medium pr-9'>
                    {navbar.map((item, index) => (
                        <li
                            key={index}
                            className="relative group"
                            ref={(el) => dropdownRefs.current[index] = el}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {item.hasDropdown ? (
                                <>
                                    <div
                                        className="font-semibold text-gray-700 text-[16px] relative cursor-pointer flex items-center"
                                        onClick={() => handleDropdownClick(index)}
                                    >
                                        {item.name}
                                        <svg
                                            className={`ml-1 h-5 w-5 transform ${activeDropdown === index ? 'rotate-180' : ''} transition-transform duration-200`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                        <div className='group-hover:bg-black absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 w-4/5'></div>
                                    </div>

                                    {/* Desktop mega-dropdown menu */}
                                    <div
                                        className={`absolute left-1/2 transform -translate-x-1/2 z-[60] ${
                                            !isMobile && activeDropdown === index ? 'block' : 'hidden'
                                        } bg-white shadow-lg rounded-md py-6 px-8 w-[90vw] md:w-[700px] lg:w-[800px]`}
                                        style={{
                                            maxHeight: '80vh',
                                            overflowY: 'auto',
                                            top: '100%', // Position relative to the second navbar
                                            marginTop: '0.5rem', // Add some spacing below the navbar
                                        }}
                                    >
                                        {item.name === 'About' ? (
                                            <div>
                                                <h2 className="text-xl font-bold text-[#003044] mb-4 text-center">Mid-Valley International College</h2>
                                                <p className="text-sm text-gray-600 mb-6 text-center">
                                                    Unleash Your Potential at Mid-Valley International College (MVIC) - Nepal’s Best College for Excellence in Education. 
                                                    Led by a collective of dedicated academicians, visionary entrepreneurs, and seasoned experts, MVIC is committed to 
                                                    providing exceptional educational opportunities across diverse disciplines.
                                                </p>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {item.dropdown.map((dropItem, dropIndex) => (
                                                        <NavLink
                                                            key={dropIndex}
                                                            to={dropItem.href}
                                                            onClick={() => {
                                                                scrollTo(0, 0);
                                                                setActiveDropdown(null);
                                                            }}
                                                            className="block py-2 px-4 bg-gray-100 hover:bg-[#F1592D] hover:text-white rounded-md text-gray-700"
                                                        >
                                                            {dropItem.name}
                                                        </NavLink>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : item.name === 'Programs' ? (
                                            <div>
                                                <h2 className="text-xl font-bold text-[#003044] mb-4 text-center">Explore Our Programs</h2>
                                                <p className="text-sm text-gray-600 mb-6 text-center">
                                                    Discover a wide range of academic programs designed to prepare you for success. From Bachelors to Diploma programs, 
                                                    we offer opportunities to excel in your chosen field.
                                                </p>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    {item.dropdown.map((category, catIndex) => (
                                                        <div key={catIndex}>
                                                            <h3 className="font-bold text-[#003044] mb-3">{category.category}</h3>
                                                            <ul className="space-y-3">
                                                                {category.items.map((program, progIndex) => (
                                                                    <li key={progIndex}>
                                                                        <NavLink
                                                                            to={program.href}
                                                                            onClick={() => {
                                                                                scrollTo(0, 0);
                                                                                setActiveDropdown(null);
                                                                            }}
                                                                            className="block text-sm text-gray-700 hover:text-[#F1592D]"
                                                                        >
                                                                            {program.name}
                                                                            {program.affiliation && (
                                                                                <div className="text-xs text-gray-500 mt-1">
                                                                                    {program.affiliation}
                                                                                </div>
                                                                            )}
                                                                        </NavLink>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            // Regular dropdown for other menu items
                                            <div className="px-4 py-2">
                                                {item.dropdown.map((dropItem, dropIndex) => (
                                                    <NavLink
                                                        key={dropIndex}
                                                        to={dropItem.href}
                                                        onClick={() => {
                                                            scrollTo(0, 0);
                                                            setActiveDropdown(null);
                                                        }}
                                                        className="block py-2 text-gray-600 hover:text-[#F1592D]"
                                                    >
                                                        {dropItem.name}
                                                    </NavLink>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </>
                            ) : (
                                <NavLink
                                    onClick={() => { scrollTo(0, 0) }}
                                    to={item.href}
                                    className={({ isActive }) => isActive ? "text-[#F1592D]" : ""}
                                >
                                    <div className='font-semibold text-gray-700 text-[16px] relative group cursor-pointer'>
                                        {item.name}
                                        <div className='group-hover:bg-black absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 w-4/5'></div>
                                    </div>
                                </NavLink>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Mobile menu button */}
                <div className='md:hidden flex'>
                    <HiOutlineBars3BottomLeft
                        onClick={() => { setShowMenu((prev) => !prev) }}
                        className='w-6 cursor-pointer text-3xl text-gray-700'
                    />
                </div>
            </div>

            {/* Mobile menu */}
            <div className={clsx(
                "md:hidden flex flex-col items-center bg-gray-100 transition-all duration-500",
                showMenu ? "max-h-[80vh] overflow-y-auto opacity-100" : "max-h-0 overflow-hidden opacity-0"
            )}>
                <ul className={clsx("cursor-pointer flex flex-col gap-4 items-center p-4 w-full")}>
                    {navbar.map((item, index) => (
                        <div key={index} className="w-full flex flex-col items-center border-b border-gray-200 pb-3 last:border-b-0">
                            {item.hasDropdown ? (
                                <div>
                                    <div
                                        className="flex items-center justify-center gap-1 font-medium py-2"
                                        onClick={() => handleDropdownClick(index)}
                                    >
                                        <span className="text-gray-700">{item.name}</span>
                                    </div>
                                    {/* Mobile dropdown items */}
                                    <div className={clsx(
                                        "flex flex-col w-full transition-all duration-300 overflow-hidden",
                                        activeDropdown === index ? "max-h-[2000px] opacity-100 mt-2" : "max-h-0 opacity-0"
                                    )}>
                                        {item.dropdown.map((dropItem, dropIndex) => (
                                            <NavLink
                                                key={dropIndex}
                                                to={dropItem.href}
                                                onClick={() => {
                                                    scrollTo(0, 0);
                                                    setShowMenu(false);
                                                    navigate(dropItem.href);
                                                }}
                                                className="block py-2 text-gray-600 hover:text-[#F1592D]"
                                            >
                                                {dropItem.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <li onClick={() => { scrollTo(0, 0); setShowMenu(false); navigate(item.href) }} key={index}>
                                    {item.name}
                                </li>
                            )}
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navbar