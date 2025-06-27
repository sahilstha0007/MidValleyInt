import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  faBars,
  faDesktop,
  faUserTie,
  faCouch,
  faShieldAlt,
  faTools,
  faMicrophone,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};

const features = [
  {
    icon: faDesktop,
    title: "Cutting-Edge Facilities",
    description:
      "Experience testing in rooms equipped with modern computers, premium audio gear, and standard PTE software.",
  },
  {
    icon: faUserTie,
    title: "Expert Test Administrators",
    description:
      "Our skilled staff provides clear instructions and comprehensive support for a stress-free exam.",
  },
  {
    icon: faCouch,
    title: "Comfortable Environment",
    description:
      "Relax in our inviting waiting areas designed to help you maintain focus and calm.",
  },
  {
    icon: faShieldAlt,
    title: "Robust Security",
    description:
      "We utilize strict identity verification and electronic surveillance to ensure test integrity.",
  },
  {
    icon: faTools,
    title: "Dedicated Technical Support",
    description:
      "Our technical team is on standby to swiftly resolve any issues, ensuring a smooth test flow.",
  },
  {
    icon: faMicrophone,
    title: "Superior Audio Recording",
    description:
      "High-fidelity microphones capture your speaking responses accurately for reliable scoring.",
  },
];

const galleryItems = [
  { src: "https://picsum.photos/id/1011/800/600", alt: "PTE Test Center Image 1" },
  { src: "https://picsum.photos/id/1015/800/600", alt: "PTE Test Center Image 2" },
  { src: "https://picsum.photos/id/1025/800/600", alt: "PTE Test Center Image 3" },
  { src: "https://picsum.photos/id/1035/800/600", alt: "PTE Test Center Image 4" },
  { src: "https://picsum.photos/id/1045/800/600", alt: "PTE Test Center Image 5" },
  { src: "https://picsum.photos/id/1055/800/600", alt: "PTE Test Center Image 6" },
];

const heroImageSrc = "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80";

export default function PTE() {
  const featuresRef = useRef(null);
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-100px" });

  const galleryRef = useRef(null);
  const isGalleryInView = useInView(galleryRef, { once: true, margin: "-100px" });

  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-orange-50 min-h-screen px-4 py-12 md:px-8 lg:px-16">
      {/* Header */}
      <header className="flex items-center justify-between mb-16 max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-blue-900 relative"
        >
          MVIC <span className="text-orange-500">PTE</span>
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute bottom-0 left-0 h-1 bg-orange-500 rounded-full"
          />
        </motion.div>

        <Link to="/" className="group">
          <motion.button
            className="text-blue-600 text-3xl transition-transform duration-300 group-hover:text-orange-500 group-hover:rotate-90"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon icon={faBars} />
          </motion.button>
        </Link>
      </header>

      {/* Hero Section */}
      <section className="mb-24 max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 50 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-blue-900">
              Unlock Your Potential with <span className="text-orange-500 block md:inline">MVIC PTE</span>
            </h1>
            <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto md:mx-0">
              As a premier Pearson Test of English (PTE) center in Gyaneshwor, Kathmandu, MVIC offers state-of-the-art facilities and expert support for your English language proficiency journey.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center md:justify-start"
            >
              <a
                href="LINK_TO_DETAIL_PAGE"
                className="inline-flex items-center bg-orange-500 text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:bg-orange-600 hover:shadow-xl transition duration-300 ease-in-out text-lg group"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book an Appointment
                <FontAwesomeIcon icon={faArrowRight} className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, type: "spring", stiffness: 50 }}
            className="flex-1 relative w-full max-w-md md:max-w-none"
          >
            <div className="absolute inset-0 bg-blue-200 rounded-3xl transform rotate-3 translate-x-4 translate-y-4 opacity-50" />
            <img
              src={heroImageSrc}
              alt="PTE Exam Preparation"
              className="relative z-10 w-full h-auto rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <motion.section
        ref={featuresRef}
        className="mb-24 max-w-screen-xl mx-auto"
        initial="hidden"
        animate={isFeaturesInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold mb-12 text-center text-blue-900"
        >
          Why Choose MVIC for PTE?
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 cursor-pointer"
            >
              <div className="text-orange-500 text-5xl mb-6">
                <FontAwesomeIcon icon={feature.icon} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-blue-800">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        ref={galleryRef}
        className="mb-16 max-w-screen-xl mx-auto"
        initial="hidden"
        animate={isGalleryInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold mb-12 text-center text-blue-900"
        >
          Explore Our Test Venue
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`relative rounded-xl overflow-hidden shadow-lg cursor-pointer ${
                index === 0 || index === 5 ? "md:col-span-2 lg:col-span-1" : ""
              } ${index === 2 ? "lg:col-span-2" : ""}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-64 md:h-72 lg:h-80 object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}
