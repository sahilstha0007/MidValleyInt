import { useState, useEffect, useRef } from 'react';

export default function Alumni() {
  const testimonials = [
    {
      id: 1,
      name: "Courtney Henry",
      position: "Nursing Assistant",
      image: "/img/holi.jpg",
      rating: 5,
      text: "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean"
    },
    {
      id: 2,
      name: "Esther Howard",
      position: "Nursing Assistant",
      image: "/img/holi.jpg",
      rating: 5,
      text: "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean"
    },
    {
      id: 3,
      name: "Robert Johnson",
      position: "Web Developer",
      image: "/img/holi.jpg",
      rating: 5,
      text: "Exceptionally intuitive platform with outstanding customer support. The digital solutions provided have transformed our business operations completely."
    },
    {
      id: 4,
      name: "Amelia Garcia",
      position: "Marketing Director",
      image: "/img/holi.jpg",
      rating: 5,
      text: "Their attention to detail and prompt delivery exceeded all expectations. Our company has seen remarkable growth since implementing their solutions."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const autoplayRef = useRef(null);
  const totalTestimonials = testimonials.length;

  // Check screen size for responsive behavior
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    // On mobile, always move 1 slide
    // On desktop, continue with normal behavior based on visible slides
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= totalTestimonials ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    // On mobile, always move 1 slide
    // On desktop, continue with normal behavior based on visible slides
    setCurrentIndex((prevIndex) => {
      const prevSlideIndex = prevIndex - 1;
      return prevSlideIndex < 0 ? totalTestimonials - 1 : prevSlideIndex;
    });
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay, currentIndex, isMobile]);

  // Function to handle pause/resume of autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  // Render star rating
  const renderRating = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="bg-indigo-900 flex flex-col">
      

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 flex-grow">
        <div className="max-w-6xl mx-auto">
          {/* Testimonial Section */}
          <div className="mb-8">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-4">
              Alumni
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What Our Students Say</h2>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Left side stats */}
            <div className="md:w-1/4 mb-6 md:mb-0">
              <div className="bg-white rounded-full p-1 w-20 h-20 flex items-center justify-center mb-4">
                <img src="/img/holi.jpg" alt="Profile" className="rounded-full" />
              </div>
              <div className="flex mb-2">
                {renderRating(5)}
              </div>
              <p className="text-white font-semibold">15k+ (reviews)</p>
            </div>

            {/* Testimonial slider */}
            <div 
              className="md:w-3/4 relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ 
                    transform: `translateX(-${currentIndex * (isMobile ? 100 : 50)}%)` 
                  }}
                >
                  {testimonials.map((testimonial) => (
                    <div 
                      key={testimonial.id} 
                      className={`${isMobile ? 'w-full' : 'w-1/2'} flex-shrink-0 px-2`}
                    >
                      <div className="bg-blue-50 rounded-lg p-6 h-full relative">
                      
                        <h3 className="text-blue-900 text-xl font-bold mt-8">{testimonial.name}</h3>
                        <p className="text-blue-600 mb-4">{testimonial.position}</p>
                        <p className="text-gray-600">{testimonial.text}</p>
                        <div className="absolute -left-2 -top-2 w-16 h-16 rounded-full overflow-hidden border-4 border-white">
                          <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute right-6 top-6 text-orange-400">
                          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-start mt-6 space-x-2">
                <button 
                  onClick={prevSlide}
                  className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={nextSlide}
                  className="bg-blue-800 p-3 rounded-full hover:bg-blue-900 transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Slide indicators */}
              <div className="flex justify-center mt-6">
                {Array.from({ length: isMobile ? totalTestimonials : totalTestimonials - 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 mx-1 rounded-full transition-colors ${
                      currentIndex === index ? 'bg-white' : 'bg-blue-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}