import React from 'react';

const CourseSelector = ({ actionProvider }) => {
  return (
    <div className="flex justify-center gap-4 mt-4">
      <button
        className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-xl transition"
        onClick={() => actionProvider.handleCourseSelection("BIT")}
      >
        Bachelor
      </button>
      <button
        className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-xl transition"
        onClick={() => actionProvider.handleCourseSelection("Diploma")}
      >
        Diploma
      </button>
      <button
        className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-xl transition"
        onClick={() => actionProvider.handleCourseSelection("About Us")}
      >
        About Us
      </button>
    </div>
  );
};

export default CourseSelector;
