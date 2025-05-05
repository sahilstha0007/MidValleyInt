import React from 'react';
import { Rocket, Users, Gift, Mail, MessageCircle } from 'lucide-react';

export default function Collection() {
  return (
    <section className="bg-white w-full px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20 justify-center">
        <div className="mb-8 md:mb-0">
          {/* Make image container relative so icons position based on it */}
          <div className="relative w-64 h-64 mx-auto">
            <div className="w-64 h-64 bg-blue-600 rounded-full flex items-center justify-center">
              <img
                src="/img/bachelor-1.webp"
                alt="Team Member"
                className="w-56 h-56 object-cover rounded-full"
              />
            </div>

            {/* Icons relative to the container */}
            <div className="absolute top-4 left-4">
              <Mail size={40} color="#FFD700" className="bg-white p-2 rounded-xl shadow-lg" />
            </div>

            <div className="absolute bottom-4 left-4">
              <Gift size={40} color="#4169E1" className="bg-white p-2 rounded-xl shadow-lg" />
            </div>

            <div className="absolute bottom-10 right-4">
              <MessageCircle size={40} color="#1E90FF" className="bg-white p-2 rounded-xl shadow-lg" />
            </div>
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full mb-4">
            Join Us
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-6">
            Let's Learn And<br />
            Grow Together
            
          </h2>

          <p className="text-gray-600">
            Every pleasure is to be welcomed and every pain avoided. Certain circumstances
            and owing to the claims of duty or the obligations.
          </p>
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-3 px-8 mt-3 rounded-full transition duration-300">
                Contact Us
              </button>        </div>
      </div>
    </section>
  );
}