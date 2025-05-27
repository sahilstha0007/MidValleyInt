import React from 'react';
import { teamMembers } from '../../datas/ourTeam';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: 'spring', stiffness: 60, damping: 18 } }
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, type: 'spring', stiffness: 90, damping: 14 } }
};
const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const OurTeam = () => {
  return (
    <div className="bg-gray-100">
      {/* Page Header */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: 'spring', stiffness: 60, damping: 18 }}
      >
        <motion.img
          src="/image/team/team-banner.webp"
          alt="Our Team"
          className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] object-cover object-center"
          loading="lazy"
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.h1
            className="text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, type: 'spring' }}
          >
            Our Team
          </motion.h1>
        </div>
      </motion.div>

      {/* Breadcrumb Section */}
      <motion.div
        className="bg-[#003044] text-white py-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7, type: 'spring' }}
      >
        <div className="container mx-auto px-4">
          <p className="text-sm">
            Home &gt; About Us &gt;{" "}
            <span className="text-[#F1592D] font-bold">Our Team</span>
          </p>
        </div>
      </motion.div>

      {/* Team Members Section */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-20 py-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7, type: 'spring' }}
      >
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Meet Our Team
        </motion.h2>

        {Object.entries(teamMembers).map(([category, members]) => (
          <motion.div
            key={category}
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeInUp}
          >
            <motion.h3
              className="text-2xl font-semibold text-gray-800 mb-6 capitalize text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {category}
            </motion.h3>

            {/* Simple divider */}
            <motion.div
              className="w-24 h-0.5 bg-indigo-500 mx-auto mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ transformOrigin: 'left' }}
            ></motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {/* Custom layouts for 2, 4, 6 members */}
              {members.length === 2 ? (
                members.map((member, index) => (
                  <TeamCard key={index} member={member} />
                ))
              ) : members.length === 6 ? (
                <>
                  {members.slice(0, 4).map((member, index) => (
                    <TeamCard key={index} member={member} />
                  ))}
                  {members.slice(4).map((member, index) => (
                    <TeamCard key={index + 4} member={member} />
                  ))}
                </>
              ) : (
                members.map((member, index) => (
                  <TeamCard key={index} member={member} />
                ))
              )}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const TeamCard = ({ member }) => (
  <motion.div
    className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col items-center justify-between h-[350px] w-full max-w-[250px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[250px] border border-transparent hover:border-blue-400 transform hover:-translate-y-2 relative"
    variants={scaleIn}
    whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)' }}
  >
    {/* Decorative corner shapes */}
    <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
      <div className="absolute w-16 h-16 bg-blue-500/10 rotate-45 transform -translate-x-8 -translate-y-8"></div>
    </div>
    <div className="absolute top-0 right-0 w-3 h-12 bg-gradient-to-b from-blue-500/30 to-transparent"></div>
    <div className="relative w-full h-2/3 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
      {/* Decorative geometric accents */}
      <div className="absolute bottom-2 right-2 w-8 h-8 border-2 border-white/30 rounded-full z-10"></div>
      <div className="absolute bottom-4 right-4 w-4 h-4 bg-blue-500/30 rounded-full z-10"></div>
      <motion.img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: 'spring', stiffness: 80 }}
      />
      {/* Hover overlay with name and position at the top */}
      <div className="absolute inset-0 bg-indigo-900/80 flex items-start justify-center pt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        <div className="text-white text-center p-4">
          <h4 className="text-lg font-bold mb-2">{member.name}</h4>
          <div className="w-10 h-0.5 bg-white mx-auto mb-2"></div>
          <p className="text-sm">{member.post}</p>
        </div>
      </div>
      {/* Wavy divider between image and text */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-white" style={{
        clipPath: "polygon(0% 100%, 5% 60%, 10% 100%, 15% 60%, 20% 100%, 25% 60%, 30% 100%, 35% 60%, 40% 100%, 45% 60%, 50% 100%, 55% 60%, 60% 100%, 65% 60%, 70% 100%, 75% 60%, 80% 100%, 85% 60%, 90% 100%, 95% 60%, 100% 100%)"
      }}></div>
    </div>
    {/* Normal text area for name and position */}
    <div className="p-4 text-center flex flex-col justify-center h-1/3 w-full bg-white">
      <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
      <p className="text-sm text-gray-600 font-medium">{member.post}</p>
    </div>
  </motion.div>
);

export default OurTeam;
