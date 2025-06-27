import React from 'react'
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// const navigate = useNavigate()
const Team = () => {
    const team = [
        {
          name: 'Daria Andaloro',
          role: 'Veterinary Technician',
          image: '/img/holi.jpg'
        },
        {
          name: 'Michael Brian',
          role: 'Medicine Specialist',
          image: '/img/holi.jpg'
        },
        {
          name: 'Kenroly Gajon',
          role: 'Food Technician',
          image: '/img/holi.jpg'
        },
        {
          name: 'Lizay Arianya',
          role: 'Veterinary Technician',
          image: '/img/holi.jpg'
        }
      ];
  return (
    <section className="bg-gradient-to-br from-white to-blue-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-indigo-900 mb-2">Meet Our Team</h2>
          <p className="text-2xl text--800 mb-12"></p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center relative">
                <div className="relative w-40 h-40 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full border-4 border-dotted border-purple-200"
                  />
                  <img
                    src="/img/paws.svg"
                    alt="decoration"
                    className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-10 z-[-1]"
                  />
                </div>
                <h3 className="text-orange-600 font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button 
            className="flex items-center gap-2  text-blue-500 font-bold px-5 py-2 rounded-full hover:bg-purple-200 transition">
              View All  <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </section>
  )
}

export default Team