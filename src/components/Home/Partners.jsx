import { useState, useEffect } from 'react';

export default function Partners() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const partners = [
    {
      id: 1,
      name: "ALEMA",
      logo: "/img/partner-1.png",
      description: "Education & Migration"
    },
    {
      id: 2,
      name: "Brewed Cafe",
      logo: "/img/partner-2.png",
      description: "Coffee Partner"
    },
    {
      id: 3,
      name: "City & Guilds",
      logo: "/img/partner-3.png",
      description: "Certification Partner"
    },
    {
      id: 4,
      name: "TechHub",
      logo: "/img/partner-4.png",
      description: "Technology Partner"
    },
    {
      id: 5,
      name: "Global Ed",
      logo: "/img/partner-5.png",
      description: "Educational Partner"
    },
    {
      id: 6,
      name: "InnoTrain",
      logo: "/img/partner-6.png",
      description: "Training Partner"
    },
    {
      id: 7,
      name: "InnoTrain",
      logo: "/img/partner-7.png",
      description: "Training Partner"
    },
    {
      id: 8,
      name: "InnoTrain",
      logo: "/img/partner-8.png",
      description: "Training Partner"
    },
    {
      id: 9,
      name: "InnoTrain",
      logo: "/img/partner-9.png",
      description: "Training Partner"
    }
  ];

  const visiblePartners = 3;
  const totalSlides = partners.length - visiblePartners + 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    
    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToPrevious = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className=" w-full py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold text-blue-900">Our Partners and Associates</h2>
          </div>
          
          <div className="w-full md:w-2/3 relative">
            <div className="flex items-center">
              <button 
                onClick={goToPrevious}
                className="absolute left-0 z-10 bg-white rounded-full p-2 shadow-md"
                aria-label="Previous partners"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </button>
              
              <div className="w-full overflow-hidden px-10">
                <div 
                  className="flex transition-transform duration-500" 
                  style={{ transform: `translateX(-${activeIndex * (100 / visiblePartners)}%)` }}
                >
                  {partners.map((partner) => (
                    <div 
                      key={partner.id} 
                      className={`w-1/${visiblePartners} flex-shrink-0 px-4 flex flex-col items-center justify-center`}
                    >
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`} 
                        className="h-48 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={goToNext}
                className="absolute right-0 z-10 bg-white rounded-full p-2 shadow-md"
                aria-label="Next partners"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </button>
            </div>
            
            {/* Indicators */}
            <div className="flex justify-center mt-8">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 w-2 mx-1 rounded-full ${
                    index === activeIndex ? 'bg-slate-600' : 'bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}