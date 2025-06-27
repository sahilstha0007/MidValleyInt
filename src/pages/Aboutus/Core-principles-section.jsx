"use client"

import { motion } from "framer-motion"
import { FaGraduationCap, FaLightbulb, FaHeart, FaBullseye, FaArrowRight, FaCheckCircle } from "react-icons/fa"

export default function CorePrinciplesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      rotateX: -15,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay: 0.3,
      },
    },
  }

  const principles = [
    {
      title: "Mission",
      icon: FaGraduationCap,
      content: "Inspiring minds, transforming lives, and leading global education excellence.",
      color: "from-blue-600 to-blue-800",
      bgColor: "bg-white",
      shadowColor: "shadow-blue-200",
    },
    {
      title: "Vision",
      icon: FaLightbulb,
      content: "Uplifting lives and driving economic growth by equipping students with exceptional, real-world skills.",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-white",
      shadowColor: "shadow-orange-200",
    },
    {
      title: "Values",
      icon: FaHeart,
      content: [
        "Compassion",
        "Continuous Learning",
        "Accountability",
        "Funtastic Engagement",
        "Collaboration",
        "Making a Difference",
      ],
      color: "from-blue-500 to-blue-700",
      bgColor: "bg-white",
      shadowColor: "shadow-blue-200",
    },
    {
      title: "Objectives",
      icon: FaBullseye,
      content: [
        "Deliver global real-world education",
        "Enable global employment",
        "Foster entrepreneurship",
        "Promote self-confidence & talent discovery",
        "Instill strong workplace ethics",
      ],
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-white",
      shadowColor: "shadow-orange-200",
    },
  ]

  return (
    <section className="relative bg-gradient-to-br from-white via-orange-80 to-blue-100 py-16 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-orange-400/20 to-orange-600/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-orange-400/20 rounded-full blur-lg"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-5 shadow-lg"
          >
            <FaArrowRight className="w-3.5 h-3.5" />
            CORE PRINCIPLES
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-orange-400 mb-5 leading-tight"
          >
            What Drives{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-700 bg-clip-text text-transparent">
              Excellence
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-blue-900 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Discover the fundamental pillars that shape Mid-Valley International College's commitment to transforming
            education and empowering future leaders.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {principles.map((principle, index) => {
            const IconComponent = principle.icon

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.03,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                className={`group relative ${principle.bgColor} rounded-2xl p-6 shadow-xl ${principle.shadowColor} border border-white/10 backdrop-blur-sm overflow-hidden cursor-pointer`}
              >
                {/* Card background gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${principle.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
                />

                {/* Animated border */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${principle.color} p-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                >
                  <div className={`w-full h-full ${principle.bgColor} rounded-2xl`} />
                </motion.div>

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    variants={iconVariants}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${principle.color} text-white mb-5 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    <IconComponent className="w-8 h-8" />
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.6 }}
                    viewport={{ once: true }}
                    className={`text-2xl md:text-3xl font-bold ${index % 2 === 0 ? "text-blue-800" : "text-orange-600"} mb-4 group-hover:text-opacity-90 transition-colors duration-300`}
                  >
                    {principle.title}
                  </motion.h3>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.8 }}
                    viewport={{ once: true }}
                    className="text-slate-700"
                  >
                    {Array.isArray(principle.content) ? (
                      <ul className="space-y-2">
                        {principle.content.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + 0.9 + itemIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2.5 text-sm md:text-base"
                          >
                            <FaCheckCircle
                              className={`w-4 h-4 ${index % 2 === 0 ? "text-blue-600" : "text-orange-500"} flex-shrink-0`}
                            />
                            <span className="group-hover:text-slate-800 transition-colors duration-300">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm md:text-base leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                        {principle.content}
                      </p>
                    )}
                  </motion.div>

                  {/* Hover arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <div
                      className={`w-7 h-7 rounded-full bg-gradient-to-r ${principle.color} flex items-center justify-center shadow-lg`}
                    >
                      <FaArrowRight className="w-3.5 h-3.5 text-white" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full shadow-lg"></div>
        </motion.div>
      </div>
    </section>
  )
}
