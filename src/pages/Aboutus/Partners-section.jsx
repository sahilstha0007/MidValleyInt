"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowRight, Star, Award, Globe } from "lucide-react"
import { Link } from "react-router-dom"

// Sample partners data - replace with your actual data
const partners = [
  {
    id: 1,
    name: "City & Guilds",
    img: "https://via.placeholder.com/180x80/F1592D/FFFFFF?text=City%26Guilds",
    category: "Certification",
  },
  {
    id: 2,
    name: "HELP University",
    img: "https://via.placeholder.com/180x80/003044/FFFFFF?text=HELP+Uni",
    category: "Education",
  },
  {
    id: 3,
    name: "Galaxy Public School",
    img: "https://via.placeholder.com/180x80/F1592D/FFFFFF?text=Galaxy+School",
    category: "Education",
  },
  { id: 4, name: "PTE", img: "https://via.placeholder.com/180x80/003044/FFFFFF?text=PTE", category: "Testing" },
  { id: 5, name: "PATA", img: "https://via.placeholder.com/180x80/F1592D/FFFFFF?text=PATA", category: "Tourism" },
  {
    id: 6,
    name: "Skill Lab",
    img: "https://via.placeholder.com/180x80/003044/FFFFFF?text=Skill+Lab",
    category: "Training",
  },
  {
    id: 7,
    name: "Danphe Link",
    img: "https://via.placeholder.com/180x80/F1592D/FFFFFF?text=Danphe+Link",
    category: "Technology",
  },
  { id: 8, name: "CTEVT", img: "https://via.placeholder.com/180x80/003044/FFFFFF?text=CTEVT", category: "Education" },
  {
    id: 9,
    name: "Hotel Himalaya",
    img: "https://via.placeholder.com/180x80/F1592D/FFFFFF?text=Hotel+Himalaya",
    category: "Hospitality",
  },
  {
    id: 10,
    name: "Le Sherpa",
    img: "https://via.placeholder.com/180x80/003044/FFFFFF?text=Le+Sherpa",
    category: "Hospitality",
  },
  {
    id: 11,
    name: "Oskar Bar & Grill",
    img: "https://via.placeholder.com/180x80/F1592D/FFFFFF?text=Oskar",
    category: "Restaurant",
  },
  { id: 12, name: "Zen", img: "https://via.placeholder.com/180x80/003044/FFFFFF?text=Zen", category: "Restaurant" },
  {
    id: 13,
    name: "Lead Nepal",
    img: "https://via.placeholder.com/180x80/F1592D/FFFFFF?text=Lead+Nepal",
    category: "Organization",
  },
  {
    id: 14,
    name: "Brewed Coffee",
    img: "https://via.placeholder.com/180x80/003044/FFFFFF?text=Brewed+Coffee",
    category: "Restaurant",
  },
  {
    id: 15,
    name: "ALEMA Education",
    img: "https://via.placeholder.com/180x80/F1592D/FFFFFF?text=ALEMA",
    category: "Education",
  },
  {
    id: 16,
    name: "Global Nepalese Chef Federation",
    img: "https://via.placeholder.com/180x80/003044/FFFFFF?text=GNCF",
    category: "Association",
  },
  {
    id: 17,
    name: "EMBASSY",
    img: "https://via.placeholder.com/180x80/F1592D/FFFFFF?text=EMBASSY",
    category: "Government",
  },
  {
    id: 18,
    name: "Somewhere in Tamarind",
    img: "https://via.placeholder.com/180x80/003044/FFFFFF?text=Tamarind",
    category: "Restaurant",
  },
  {
    id: 19,
    name: "Tamarind Khajaghar",
    img: "https://via.placeholder.com/180x80/F1592D/FFFFFF?text=Tamarind+Khajaghar",
    category: "Restaurant",
  },
  {
    id: 20,
    name: "World Association of Chefs Societies",
    img: "https://via.placeholder.com/180x80/003044/FFFFFF?text=WACS",
    category: "Association",
  },
  {
    id: 21,
    name: "Tamarind Restro & Bar",
    img: "https://via.placeholder.com/180x80/F1592D/FFFFFF?text=Tamarind+Restro",
    category: "Restaurant",
  },
  {
    id: 22,
    name: "The Court House",
    img: "https://via.placeholder.com/180x80/003044/FFFFFF?text=Court+House",
    category: "Restaurant",
  },
  {
    id: 23,
    name: "Fourth Valley Concierge",
    img: "https://via.placeholder.com/180x80/F1592D/FFFFFF?text=Fourth+Valley",
    category: "Services",
  },
]

export default function PartnersSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const partnersContainerRef = useRef(null)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoScrolling])

  const scrollToPartner = (index) => {
    setCurrentIndex(index)
    setIsAutoScrolling(false)
    setTimeout(() => setIsAutoScrolling(true), 5000) // Resume auto-scroll after 5 seconds
  }

  const scrollPartnersManual = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prev) => (prev - 1 + partners.length) % partners.length)
    } else {
      setCurrentIndex((prev) => (prev + 1) % partners.length)
    }
    setIsAutoScrolling(false)
    setTimeout(() => setIsAutoScrolling(true), 5000)
  }

  return (
    <section className="relative py-24 md:py-32 px-4 bg-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle geometric patterns */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-blue-100 rounded-full opacity-30" />
        <div className="absolute top-40 right-20 w-24 h-24 border border-orange-100 rounded-full opacity-40" />
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-blue-50 rounded-full opacity-50" />
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-orange-50 rounded-full opacity-50" />

        {/* Floating dots */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/2 w-2 h-2 bg-blue-300 rounded-full opacity-60"
        />
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 right-1/2 w-3 h-3 bg-orange-300 rounded-full opacity-60"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="p-2 bg-blue-50 rounded-full">
              <Globe className="w-5 h-5 text-blue-600" />
            </div>
            <span className="px-4 py-2 bg-orange-50 rounded-full text-sm font-semibold text-orange-600 border border-orange-100">
              Trusted Partnerships
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Esteemed
            <span className="block text-orange-500">Partners</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We proudly collaborate with leading institutions and organizations worldwide, ensuring our students receive
            world-class education and unparalleled opportunities for growth and success.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Stats and Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-blue-50 p-6 rounded-2xl border border-blue-100"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-6 h-6 text-blue-600" />
                  <span className="text-2xl font-bold text-blue-600">23+</span>
                </div>
                <p className="text-sm text-gray-600 font-medium">Trusted Partners</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-orange-50 p-6 rounded-2xl border border-orange-100"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Star className="w-6 h-6 text-orange-600" />
                  <span className="text-2xl font-bold text-orange-600">15+</span>
                </div>
                <p className="text-sm text-gray-600 font-medium">Industries</p>
              </motion.div>
            </div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Academic Excellence</h3>
                  <p className="text-gray-600 text-sm">
                    Partnerships with top-tier universities and research institutions
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Industry Connections</h3>
                  <p className="text-gray-600 text-sm">
                    Direct pathways to leading technology and business organizations
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Global Opportunities</h3>
                  <p className="text-gray-600 text-sm">International exchange programs and collaborative projects</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link to="/Partners">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
                >
                <span>Explore Partnerships</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
                </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Partners Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between z-20 px-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => scrollPartnersManual("left")}
                className="bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg border border-gray-100 text-gray-600 hover:text-blue-600 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => scrollPartnersManual("right")}
                className="bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg border border-gray-100 text-gray-600 hover:text-blue-600 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Partners Display */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <div className="grid grid-cols-2 gap-6">
                {partners
                  .slice(currentIndex, currentIndex + 4)
                  .concat(partners.slice(0, Math.max(0, currentIndex + 4 - partners.length)))
                  .slice(0, 4)
                  .map((partner, index) => (
                    <motion.div
                      key={`${partner.id}-${currentIndex}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-orange-200 group cursor-pointer"
                    >
                      <div className="flex items-center justify-center h-16 mb-3">
                        <img
                          src={partner.img || "/placeholder.svg"}
                          alt={partner.name}
                          className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="font-semibold text-gray-800 text-sm mb-1">{partner.name}</h3>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          {partner.category}
                        </span>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {partners.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToPartner(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? "bg-blue-600 w-6" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section: Partnership Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-24 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-3xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Our Partnership Network?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Discover how our strategic partnerships can unlock new opportunities for your organization and students.
            </p>
            <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
              Become a Partner
            </motion.button>
              </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
