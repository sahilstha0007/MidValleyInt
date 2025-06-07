import { useState, useEffect, useRef } from "react"
import { ChevronUp, ChevronDown, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const Alumni = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef(null)

  const testimonials = [
    {
      name: "Sarah M",
      role: "E-Commerce Owner",
      text: "SEOX Transformed Our Online Presence. We Saw A 300% Increase In Website Months!",
      bg: "bg-gray-50",
      textColor: "text-gray-800",
      image: "/img/holi.jpg",
    },
    {
      name: "John Doe",
      role: "Marketing Manager",
      text: "Team Is Proactive, Professional, Results-Driven. Highly Recommend Their Services!",
      bg: "bg-gray-50",
      textColor: "text-gray-800",
      image: "/img/girl.png",
    },
    {
      name: "Alex Hales",
      role: "E-Commerce Owner",
      text: "Thanks To SEOX, Our Revenue Doubled Last Year. They're Truly The Best In The Industry.",
      bg: "bg-gray-50",
      textColor: "text-gray-800",
      image: "/img/bachelor-1.webp",
    },
    {
      name: "Emily Chen",
      role: "Tech Startup Founder",
      text: "Incredible SEO Strategy That Took Our Startup From Zero To Trending!",
      bg: "bg-gray-50",
      textColor: "text-gray-800",
      image: "/img/bachelor-2.webp",
    },
    {
      name: "Michael Rodriguez",
      role: "Digital Marketing Lead",
      text: "Most Innovative SEO Approach I've Seen. Truly Transformative!",
      bg: "bg-gray-50",
      textColor: "text-gray-800",
      image: "/img/bachelor-3.webp",
    },
    {
      name: "Lisa Wong",
      role: "E-Commerce Marketing Director",
      text: "Unbelievable Results. Our Organic Traffic Increased By 500%!",
      bg: "bg-gray-50",
      textColor: "text-gray-800",
      image: "/img/holi.jpg",
    },
  ]

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex >= testimonials.length - 3 ? 0 : prevIndex + 1))
    setTimeout(() => setIsAnimating(false), 600)
  }

  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1))
    setTimeout(() => setIsAnimating(false), 600)
  }

  useEffect(() => {
    const autoAdvanceTimer = setInterval(() => {
      if (!isAnimating) {
        handleNext()
      }
    }, 8000)
    return () => clearInterval(autoAdvanceTimer)
  }, [isAnimating])

  const allTestimonials = [...testimonials, ...testimonials]

  const TestimonialCard = ({ testimonial }) => (
    <div
      className={`rounded-xl p-6 flex items-start gap-5 ${testimonial.bg} ${testimonial.textColor} 
        shadow-md hover:shadow-lg transition-all duration-300 ease-in-out`}
    >
      <img
        src={testimonial.image || "/placeholder.svg"}
        alt={testimonial.name}
        className="w-20 h-20 rounded-full object-cover object-top border-2 border-white shadow-md"
      />
      <div className="flex-1">
        <p className="font-bold text-lg">{testimonial.name}</p>
        <p className="text-sm text-indigo-700 font-medium">{testimonial.role}</p>
        <p className="mt-3 text-base leading-relaxed">{testimonial.text}</p>
      </div>
      <div className="text-5xl font-bold text-indigo-500 ml-auto">
        <Quote size={40} />
      </div>
    </div>
  )

  return (
    <section className="px-6 md:px-12 lg:px-32 py-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
      {/* Left content */}
      <div className="w-full lg:w-1/2 relative">
        {/* Navigation arrows */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="absolute -left-10 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 z-10"
        >
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#e5e7eb" }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrev}
            disabled={isAnimating}
            className="bg-white shadow-md hover:shadow-lg p-3 rounded-full transition-all duration-300 disabled:opacity-50"
          >
            <ChevronUp className="w-6 h-6 text-indigo-700" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#e5e7eb" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            disabled={isAnimating}
            className="bg-white shadow-md hover:shadow-lg p-3 rounded-full transition-all duration-300 disabled:opacity-50"
          >
            <ChevronDown className="w-6 h-6 text-indigo-700" />
          </motion.button>
        </motion.div>

        {/* Testimonials */}
        <div className="space-y-8" ref={containerRef}>
          <AnimatePresence initial={false} mode="wait">
            {[0, 1, 2].map((offset) => {
              const testimonial = allTestimonials[(currentIndex + offset) % testimonials.length]
              return (
                <motion.div
                  key={`${currentIndex}-${offset}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.slice(0, testimonials.length - 2).map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true)
                  setCurrentIndex(index)
                  setTimeout(() => setIsAnimating(false), 600)
                }
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-indigo-700 scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right image & button */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full lg:w-1/2 flex flex-col items-center"
      >
        <div className="relative">
          <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
            <motion.img
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 2, 0, -2, 0] }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
              src="/img/girl.png"
              alt="Client"
              className="cursor-pointer w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full object-contain bg-indigo-400 z-10 relative shadow-xl"
            />
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="w-24 h-24 absolute -z-20 -bottom-6 -left-6 rounded-full border-none shadow-lg border-4 bg-sky-100"
          />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden sm:block absolute sm:-right-64 md:-right-72 -z-50 top-1/2 transform -translate-y-1/2 rotate-90 text-[105px] font-extrabold leading-none tracking-wider outlined-text"
          >
            Alumni
          </motion.h2>
        </div>

        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#ea580c" }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 bg-indigo-500 hover:bg-indigo-600 cursor-pointer text-white px-8 py-3 rounded-full font-semibold text-base shadow-md hover:shadow-lg transition-all duration-300"
        >
          View All Reviews
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Alumni
