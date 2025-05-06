import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import courses from '../../datas/Diploma/index';

const DiplomaPage = () => {
  const { course } = useParams(); // Get the course parameter from the route
  const courseData = courses[course]; // Dynamically fetch the course data

  if (!courseData) {
    return <div className="text-center text-red-500">Course not found!</div>;
  }

  // useState for FAQ toggle
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const { instructorData, testimonials = [], faqs = [] } = courseData; // Provide default values
  const [activeTab, setActiveTab] = useState("program");
  return (
    <div className="bg-gray-100">
      {/* Large Static Image */}
      <div className="relative">
        <img
          src={courseData.frontImage}
          alt="Course main image"
          className="w-full max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-[70vh] xl:max-h-[80vh] object-cover object-center"
          loading="lazy"
        />
      </div>

      {/* Breadcrumb Section */}
      <div className="bg-[#003044] text-white py-4 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm">
            Home &gt; City & Guilds &gt;{" "}
            <span className="text-[#F1592D] font-bold">{courseData.title}</span>
          </p>
        </div>
      </div>
      {/*for extra space*/}
      <div className='p-4'></div>
      {/* Overview */}
      {/* Diploma Overview Section  or description sab yesma*/}
      <div className="bg-white mx-4  sm:mx-20  my-4 p-4 sm:p-5 md:p-20
      rounded-lg shadow-md lg-mb-8">
        <h3 className="text-2xl font-bold mb-4 text-center text-black">{courseData.title}</h3>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
          <a
            href="/path/to/brochure.pdf" // Replace with the actual path to the brochure file
            download
            className="bg-[#0f4c5c] text-white px-6 py-2 rounded-full hover:bg-[#083a45] transition duration-300 text-center"
          >
            Download Brochure
          </a>
        </div>
        <p className="text-gray-700 mb-4 text-justify whitespace-pre-line px-0 sm:px-10">{courseData.overview}</p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 px-0 sm:px-10">
          {courseData.additionalDetails.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>

        {/* About Section */}
        <div className="mx-4 sm:mx-20 my-4 p-4 sm:p-5 md:p-20 rounded-lg lg-mb-8">
          <h2 className="text-black text-3xl font-bold text-center mb-6">
            {courseData.aboutContent.heading}
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="bg-[#003044] text-white p-4 rounded-xl flex-1">
              <p className="text-lg leading-relaxed text-justify">{courseData.aboutContent.text}</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 flex-1">
              {courseData.aboutImages.map((img, index) => (
                <img
                  src={img}
                  alt={`About course ${index + 1}`}
                  key={index}
                  className="rounded-lg object-cover w-full h-auto sm:h-40 md:h-45 lg:h-50"
                  loading="lazy"
                />
              ))}
          </div>
        </div>

        <div className="container mx-auto px-4  py-8">
          {/* Program Overview */}
          <div className="bg-[rgba(241,89,45,0.10)] mx-4 sm:mx-20 my-4 p-4 sm:p-5 md:p-20 rounded-xl sm mb-8">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab("program")}
            className={`px-6 py-2 rounded-full flex items-center text-center transition duration-300 ${
              activeTab === "program"
                ? "bg-[#F1592D] text-white shadow-md"
                : "bg-white text-[#F1592D] border border-[#F1592D] hover:bg-[#F1592D] hover:text-white hover:shadow-lg"
            }`}
          >
            Course Detail
          </button>
          <button
            onClick={() => setActiveTab("details")}
            className={`px-6 py-2 rounded-full flex items-center text-center transition duration-300 ${
              activeTab === "details"
                ? "bg-[#F1592D] text-white shadow-md"
                : "bg-white text-[#F1592D] border border-[#F1592D] hover:bg-[#F1592D] hover:text-white hover:shadow-lg"
            }`}
          >
            Program Overview
          </button>
          <button
            onClick={() => setActiveTab("certification")}
            className={`px-6 py-2 rounded-full flex items-center text-center transition duration-300 ${
              activeTab === "certification"
                ? "bg-[#F1592D] text-white shadow-md"
                : "bg-white text-[#F1592D] border border-[#F1592D] hover:bg-[#F1592D] hover:text-white hover:shadow-lg"
            }`}
          >
            Certification
          </button>
        </div>

        {/* Content */}
        {activeTab === "program" && (
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 flex flex-col justify-center">
              <img
                src={courseData.programOverview.logo}
                alt="City & Guilds logo"
                className="w-32 h-32 sm:h-40 md:48 lg:h-56 object-contain mx-auto mb-6"
              />
              <p className="text-black leading-relaxed text-justify px-4">
                {courseData.programOverview.description}
              </p>
            </div>
            <div className="flex-1 bg-white p-6 rounded-xl">
              <p className="text-gray-700 mb-6 text-justify">
                Students will have the following criteria to fulfill before becoming a part of this course.
              </p>
              <div className="space-y-4">
                {courseData.programOverview.requirements.map((req, index) => (
                  <div key={index} className="flex justify-between border-b pb-2">
                    <span className="font-bold">{req.label}</span>
                    <span>{req.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "details" && (
          <div className="p-6 rounded-xl text-gray-800">
            <p className="text-center mb-6 text-gray-700">
              Some description on all the course materials and their sub-details explaining what you'll learn in this course.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {courseData.programOverview.topics.map((topic, index) => (
                <div key={index} className="bg-[#fcded5] p-4 rounded-lg">
                  {topic}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "certification" && (
          <div className="flex justify-center">
            <img
              src={courseData.programOverview.certificationImage}
              alt="Certification"
              className="rounded-xl shadow-lg w-full max-w-md object-contain"
            />
          </div>
        )}
      </div>


          {/* Career Pathways */}
          <div className="p-6 rounded-lg mb-8  mt-15 sm:mt-24 bg-white shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-center text-black">Career Pathways</h3>
            {courseData.careerPathways.description.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-4 text-justify px-4 sm:px-10 lg:px-20">
                {paragraph}
              </p>
            ))}
            <div className="px-4 sm:px-10 lg:px-20">
              <img
                src={courseData.careerPathways.image}
                alt="Career Pathways"
                className="w-full h-auto rounded-lg mb-4"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-4 px-4 sm:px-10 lg:px-20">
              {courseData.careerPathways.companyImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Company ${index + 1}`}
                  className="h-12 sm:h-16 lg:h-20 object-contain"
                  loading="lazy"
                />
              ))}
            </div>
          </div>

          {/* Meet the Instructor Section */}
          {instructorData && (
            <div className="bg-white p-4 mt-15 sm:mt-24 sm:p-8 lg:p-12 rounded-lg shadow-md lg-mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-black">Meet The Instructor</h3>
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0 w-full lg:w-1/3">
                  <img
                    src={instructorData.image}
                    alt={instructorData.name}
                    className="w-full h-auto sm:h-[50vh] lg:h-[60vh] object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-black mb-2">{instructorData.name}</h4>
                  <p className="text-sm font-semibold text-gray-600 mb-4">{instructorData.title}</p>
                  {instructorData.description.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 text-justify leading-relaxed mt-4 px-4 sm:px-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Testimonials Section */}
          {testimonials.length > 0 && (
            <div className="bg-gray-100 mt-10 sm:mt-24 py-12">
              <h3 className="text-2xl font-bold text-center text-black mb-8">
                What People Say About City and Guilds
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-10 lg:px-20">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-[#F1592D] text-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mb-4 object-cover"
                    />
                    <h4 className="text-lg font-bold mb-2">{testimonial.name}</h4>
                    <p className="text-sm font-semibold mb-2">{testimonial.title}</p>
                    <p className="text-sm">{testimonial.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQs Section */}
          {faqs.length > 0 && (
            <div className="bg-gray-100 py-12">
              <h3 className="text-2xl font-bold text-center text-black mb-8">
                Frequently Asked Questions
              </h3>
              <div className="px-4 sm:px-10 lg:px-20">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="mb-4 rounded-lg border border-gray-300 bg-white overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className={`w-full flex justify-between items-center text-left px-4 py-3 font-semibold transition-colors duration-300 ${
                        openIndex === index ? "bg-[#0f4c5c] text-white" : "text-[#0f4c5c] hover:bg-gray-100"
                      }`}
                    >
                      <span>{faq.question}</span>
                      <span
                        className={`transform transition-transform duration-300 ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      >
                        {openIndex === index ? "▲" : "▼"}
                      </span>
                    </button>
                    {openIndex === index && (
                      <div className="px-4 pb-4 text-sm text-gray-100 bg-[#0f4c5c]">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Courses */}
          <div className="p-8 sm:px-20">
            <h3 className="text-2xl font-bold mb-8 text-center text-black">Related Courses</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {courseData.relatedCourses.map((course, index) => (
                <a
                  key={index}
                  href={`/courses/${index}`} // Replace with the actual link for each course
                  className="block overflow-hidden rounded-lg"
                >
                  <div className="w-full h-48 sm:h-56 lg:h-64 bg-gray-200 flex items-center justify-center rounded-lg">
                    <img
                      src={course.image} // Ensure the backend provides an image URL for each course
                      alt={course.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-center text-[#0f4c5c] mt-4 hover:underline">
                    {course.title}
                  </h4>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiplomaPage;
