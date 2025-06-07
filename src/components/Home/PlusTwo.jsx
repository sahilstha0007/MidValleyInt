


import React from 'react';
import { PartyPopper, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function PlusTwo() {
  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
     

      {/* Main Content */}
      <div className="container mx-auto  py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-11">
          

          {/* left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 lg:pl-10"
          >
           

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-navy-900"
            >
              <span className="text-indigo-900">Galaxy (+2)</span><br/>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 mb-8"
            >
              The school is headed by the Principal who acts in accordance with the policies framed by a six-member apex body called the Governing Body.
            </motion.p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {[
                {
                  title: "Our Ambition",
                  desc: "To inspire minds and transform lives",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  ),
                },
                {
                  title: "Our Vision",
                  desc: "Providing innovative education for decades",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  ),
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.5 + idx * 0.2 }}
                  className="flex items-start"
                >
                  <div className="bg-orange-100 p-3 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6 text-orange-500"
                    >
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-indigo-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 1.1 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <Link to={"/Aboutus"}>
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-medium py-3 px-8 rounded-full transition duration-300">
                  Learn More
                </button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.4 }}
            className="relative w-full lg:w-1/2 mb-10 lg:mb-0"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-blue-100 rounded-full opacity-70"></div>
            <div className="absolute bottom-20 left-10 w-8 h-8 bg-blue-600 rounded-full"></div>
            <div className="absolute top-20 right-10 w-16 h-16 bg-pink-200 transform rotate-45"></div>
            <div className="absolute right-32 top-40 w-0 h-0 border-l-[35px] border-l-transparent border-b-[60px] border-b-yellow-400 border-r-[35px] border-r-transparent"></div>
            
           <div className="relative z-10 bg-blue-600 rounded-lg overflow-hidden h-[400px]">
          

              <img
                src="/img/bit.jpg"
                alt="IT Professional"
                width={400}
                height={400}
                className="object-cover h-full w-full"
              />
            </div>

            <svg className="absolute top-24 right-24 w-32 h-32 text-blue-400" viewBox="0 0 100 100" fill="none">
              <path d="M20 40C40 10 60 50 80 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
