import React from 'react';

const AboutUsLink = () => {
  const handleClick = () => {
    window.open('https://your-domain.com/about-us', '_blank');
  };

  return (
    <div className="mt-4 p-4 bg-white rounded-xl shadow-md border border-gray-200 max-w-md">
      <p className="text-gray-700 text-base mb-4 leading-relaxed">
        <strong className="text-orange-600">MVIC</strong> offers internationally recognized programs and hands-on learning.
        We're committed to shaping your future in <span className="font-semibold text-orange-400">hospitality, business, and IT</span>.
      </p>
      <button
        
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300 shadow"
      >
        Learn More
      </button>
    </div>
  );
};

export default AboutUsLink;
