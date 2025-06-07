




import { useRef, useState, useEffect } from "react";
import { ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";



export default function Gallery() {
   const images = [
    { src: "/img/holi.jpg", alt: "Colorful Holi Festival Celebration", className: "col-span-2 row-span-2" },
    { src: "/img/group.jpg", alt: "Student Group Activities", className: "col-span-1" },
    { src: "/img/gagan.webp", alt: "Speaker Series", className: "col-span-1 row-span-2" },
    { src: "/img/hackaton.png", alt: "Innovation Hackathon", className: "col-span-1" },
    { src: "/img/holi.jpg", alt: "Colorful Holi Festival Celebration", className: "col-span-2 row-span-2" },
  ];
  const topRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 2 >= images.length ? 0 : prev + 2));
    }, 4000);
    return () => clearInterval(interval);
  }, [isMobile]);

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 2 >= images.length ? 0 : prev + 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 2 < 0 ? Math.max(0, images.length - 2) : prev - 2));
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8" ref={topRef}>


          <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold text-indigo-700 md:w-1/2"
            >
              Gallery
            </motion.h1>
          
          </div>      <motion.div ref={sectionRef} initial="hidden" animate={controls} variants={containerVariants} className="w-full">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          <motion.div className="grid grid-cols-3 gap-4 mb-4" variants={containerVariants}>
            {images.slice(0, 3).map((image, index) => (
              <motion.div
                key={`top-${index}`}
                className="relative overflow-hidden rounded-lg group"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[220px] object-cover"
                />
                <div className="absolute inset-0 bg-black/20 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-lg font-semibold text-center px-2">{image.alt}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="grid grid-cols-2 gap-4" variants={containerVariants}>
            {images.slice(3, 5).map((image, index) => (
              <motion.div
                key={`bottom-${index}`}
                className="relative overflow-hidden rounded-lg group"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-black/20 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-lg font-semibold text-center px-2">{image.alt}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden relative mt-6">
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 50}%)` }}
            >
              {images.map((image, index) => (
                <div key={`mobile-${index}`} className="min-w-[50%] px-1 relative group">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-[200px] object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm font-semibold text-center px-2">{image.alt}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: Math.ceil(images.length / 2) }).map((_, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => setCurrentIndex(index * 2)}
                className={`w-2 h-2 rounded-full ${
                  Math.floor(currentIndex / 2) === index ? "bg-neutral-800" : "bg-neutral-300"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <div className="  fixed bottom-12 right-8 z-10">
        <motion.button
          onClick={scrollToTop}
          className="cursor-pointer group flex flex-col items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronUp className="w-6 h-6 text-neutral-500 group-hover:text-neutral-800 transition-colors" />
          <span className=" text-xs font-medium text-neutral-500 group-hover:text-neutral-800 transition-colors rotate-90 origin-center mt-6">
            BACK TO TOP
          </span>
        </motion.button>
      </div>
    </div>
  );
}
