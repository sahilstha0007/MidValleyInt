import React from 'react';
import { useNavigate } from 'react-router-dom';

const BreadcrumbSection = ({ title, isCulinary, isPatisserie, isBarista }) => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-[#003044] text-white py-4 text-center relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <p className="text-sm">
          <span className="cursor-pointer hover:text-[#F1592D] transition-colors duration-300" 
                onClick={() => navigate('/')}>Home</span> &gt; {" "}
          <span className="cursor-pointer hover:text-[#F1592D] transition-colors duration-300" 
                onClick={() => navigate('/clubs')}>City & Guilds</span> &gt;{" "}
          <span className="text-[#F1592D] font-bold">{title}</span>
        </p>
      </div>
      
      {/* Course-specific floating elements in breadcrumb */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {isCulinary && (
          <div className="absolute right-[5%] top-1/2 transform -translate-y-1/2 w-8 h-8 opacity-10">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10,30 L90,30 L90,90 L10,90 Z" stroke="#fff" strokeWidth="2" fill="none" />
              <path d="M30,10 L70,10 L70,30 L30,30 Z" stroke="#fff" strokeWidth="2" fill="none" />
              <path d="M45,30 L55,30 L55,50 L45,50 Z" stroke="#fff" strokeWidth="2" fill="none" />
            </svg>
          </div>
        )}
        
        {isPatisserie && (
          <div className="absolute right-[8%] top-1/2 transform -translate-y-1/2 w-10 h-10 opacity-10">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20,70 C20,40 40,20 50,20 C60,20 80,40 80,70 L20,70 Z" stroke="#fff" strokeWidth="2" fill="none" />
              <path d="M30,40 C30,40 50,50 70,40" stroke="#fff" strokeWidth="1" fill="none" />
            </svg>
          </div>
        )}
        
        {isBarista && (
          <div className="absolute right-[7%] top-1/2 transform -translate-y-1/2 w-8 h-8 opacity-10">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="65" r="25" stroke="#fff" strokeWidth="2" fill="none" />
              <path d="M30,65 C30,65 40,45 50,45 C60,45 70,65 70,65" stroke="#fff" strokeWidth="2" fill="none" />
              <path d="M35,25 C35,15 65,15 65,25" stroke="#fff" strokeWidth="2" fill="none" />
              <path d="M40,25 L40,40" stroke="#fff" strokeWidth="2" />
              <path d="M60,25 L60,40" stroke="#fff" strokeWidth="2" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default BreadcrumbSection;
