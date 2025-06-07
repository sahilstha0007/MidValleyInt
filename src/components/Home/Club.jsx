"use client"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

// Destination Card Component
function DestinationCard({ country, name, rating, image }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg group">
      <img
        src={image || "/placeholder.svg"}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
    </div>
  )
}

// Main club Component
function Club() {
  // Destination data
  const destinations = [
    {
      id: 1,
      country: "Tech Titans",
      name: "Disney Land",
      rating: 5,
      image: "/img/techTitans.jpg"
    },
    {
      id: 2,
      country: "Valley Of Champions",
      name: "Besseggen Ridge",
      rating: 5,
      image: "/img/handsOfHope.jpg"
    },
    {
      id: 3,
      country: "Hands Of Hope",
      name: "Oxolotan City",
      rating: 5,
      image: "/img/handsOfHope.jpg"
    },
    {
      id: 4,
      country: "",
      name: "Marina Bay Sand City",
      rating: 5,
      image: "/img/techTitans.jpg"
    },
  ]

  return (
    <div className="bg-white min-h-screen font-sans">
      <main className="container mx-auto px-4 py-12 max-w-7xl">
        <section className="w-full">
          <div className="mb-3">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60px" }}
              transition={{ duration: 0.5 }}
              className="h-0.5 bg-red-500 mb-2"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold text-indigo-700 md:w-1/2"
            >
              Our Club
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="text-gray-700 md:w-1/2"
            >
From events to workshops, we turn ideas into action and help members grow together.            </motion.p>
          </div>

          {/* Layout Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="flex flex-col md:flex-row gap-6"
          >
            {/* First card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="md:w-1/3 h-[400px]"
            >
              <DestinationCard {...destinations[0]} />
            </motion.div>

            {/* Second card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="md:w-1/3 h-[400px]"
            >
              <DestinationCard {...destinations[1]} />
            </motion.div>

            {/* Third & Fourth stacked */}
            <div className="md:w-1/3 flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="h-[400px] md:h-[190px] w-full"
              >
                <DestinationCard {...destinations[2]} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="h-[400px] md:h-[190px] w-full"
              >
                <DestinationCard {...destinations[3]} />
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  )
}

export default Club
