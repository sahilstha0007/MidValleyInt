import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import {
  faBars,
  faDesktop,
  faUserTie,
  faCouch,
  faShieldAlt,
  faTools,
  faMicrophone
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const galleryItems = [
  { src: "./public/PTE1.png" },
  { src: "./public/PTE2.png" },
  { src: "./public/PTE3.png" },
  { src: "./public/PTE4.png" },
  { src: "./public/PTE5.png" },
  { src: "./public/PTE6.png" }
];

export default function PTE() {
  const [booked, setBooked] = useState(false);

  const handleBooking = () => {
    setBooked(true);
    setTimeout(() => setBooked(false), 3000); // hide after 3 seconds
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-orange-50 min-h-screen px-4 py-8 max-w-screen-xl mx-auto">
      <header className="flex items-center justify-between mb-12">
        <div className="flex-1 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold bg-orange-500 bg-clip-text text-transparent"
          >
            MVIC PTE
          </motion.div>
        </div>
        <Link to="/" >
        <button
          id="hamburger"
          className="text-blue-600 hover:text-orange-500 text-2xl transition-transform"
        >
        </button>
        </Link>
      </header>

      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-20 text-blue-900">
              Master the <span className="text-orange-500">PTE</span> Exam
            </h1>
            <p className="text-xl text-justify text-gray-600 mb-8 max-w-2xl">
              Mid-Valley International College proudly stands as a designated
              Pearson Test of English (PTE) center, dedicated to facilitating
              English language proficiency assessments. Situated in Gyaneshwor,
              Kathmandu, Nepal, our college offers top-notch facilities and
              unwavering commitment to providing a premier testing environment for
              individuals seeking to validate their English language skills.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex-1"
          >
            <img
              src="./public/PTE2.png"
              alt="PTE Exam"
              className="w-full h-auto lg:w-2xl md:w-xl sm:w-md rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      <section className="mb-16">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-3xl font-bold mb-8 text-center text-blue-800"
        >
          Why Choose Our PTE Preparation?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: faDesktop,
              title: "Advanced Test Center Facilities",
              description:
                "Purpose-built testing rooms with modern computers, premium headphones, microphones, and standard PTE software."
            },
            {
              icon: faUserTie,
              title: "Experienced Administrators",
              description:
                "Our professional test staff ensure a smooth exam experience with precise instructions and full support."
            },
            {
              icon: faCouch,
              title: "Comfortable Waiting Area",
              description:
                "Relaxing spaces available pre-test or during breaks to help you stay calm and focused."
            },
            {
              icon: faShieldAlt,
              title: "Strict Security Measures",
              description:
                "Identity verification and electronic monitoring ensure the highest standards of test integrity."
            },
            {
              icon: faTools,
              title: "Technical Support",
              description:
                "Our support team is always ready to solve any technical issues quickly and efficiently."
            },
            {
              icon: faMicrophone,
              title: "High-Quality Recording Equipment",
              description:
                "Top-tier microphones accurately capture your voice responses for scoring in the speaking section."
            }
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="text-blue-500 text-4xl mb-4">
                <FontAwesomeIcon icon={feature.icon} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-3xl font-bold mb-8 text-center text-blue-800"
        >
          Our Venue
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-xl overflow-hidden gallery-item"
            >
              <img
                src={item.src}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="text-white font-bold text-lg">{item.name}</h3>
                <p className={item.color}>{item.score}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-indigo-900 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Ace Your PTE Exam?
            </h2>
            <p className="text-xl mb-8">
              Join thousands of students who have achieved their dream scores
              with our proven methods.
            </p>
            <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
  <h2 className="text-2xl font-bold text-center mb-6 text-blue-900">Book an Appointment</h2>

  <form className="space-y-4">
    <div>
      <label htmlFor="full-name" className="block text-sm  font-semibold text-gray-700">Full Name</label>
      <input
        type="text"
        id="full-name"
        name="full-name"
        placeholder="Enter your full name"
        className="w-full px-4 py-2 mt-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        required
      />
    </div>

    <div>
      <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        className="w-full px-4 py-2 mt-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        required
      />
    </div>

    <div>
      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">Phone Number</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="Enter your phone number"
        className="w-full px-4 py-2 mt-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        required
      />
    </div>

    <div>
      <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Enter your message"
        className="w-full px-4 py-2 text-black mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        required
      />
    </div>

    <div className="flex space-x-4">
      <div className="w-1/2">
        <label htmlFor="appointment-date" className="block text-sm font-semibold text-gray-700">Appointment Date</label>
        <input
          type="date"
          id="appointment-date"
          name="appointment-date"
          className="w-full px-4 py-2 mt-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>

      <div className="w-1/2">
        <label htmlFor="appointment-time" className="block text-sm font-semibold text-gray-700">Appointment Time</label>
        <input
          type="time"
          id="appointment-time"
          name="appointment-time"
          className="w-full px-4 py-2 mt-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>
    </div>

    <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBooking}
                className="bg-indigo-900 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
              >
                Book an Appointment
              </motion.button>

              {booked && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute mt-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md"
                >
                  Appointment booked successfully!
                </motion.div>
              )}
            </div>
  </form>
</div>

           
          </div>
        </motion.div>
      </section>
    </div>
  );
}
