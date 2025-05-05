import React from 'react';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';




const partners = [
  { img: './public/logo.png', name: 'City & Guilds' },
  { img: '/images/partner2.png', name: 'HELP University' },
  { img: '/images/partner3.png', name: 'Galaxy Public School' },
  { img: '/images/partner4.png', name: 'PTE' },
  { img: '/images/partner5.png', name: 'PATA (Pacific Asia Travel Association)' },
  { img: '/images/partner6.png', name: 'SKILL LAB' },
  { img: '/images/partner7.png', name: 'Danphe link' },
  { img: '/images/partner8.png', name: 'CTEVT' },
  { img: '/images/partner9.png', name: 'Hotel Himalaya' },
  { img: '/images/partner10.png', name: 'Le Sherpa' },
  { img: '/images/partner11.png', name: 'Oskar Bar & Grill' },
  { img: '/images/partner12.png', name: 'Zen' },
  { img: '/images/partner13.png', name: 'Lead Nepal' },
  { img: '/images/partner14.png', name: 'Brewed Coffee' },
  { img: '/images/partner15.png', name: 'ALEMA Education & Migration' },
  { img: '/images/partner16.png', name: 'Global Nepalese Chef Federation' },
  { img: '/images/partner17.png', name: 'EMBASSY' },
  { img: '/images/partner18.png', name: 'Somewhere in Tamarind' },
  { img: '/images/partner19.png', name: 'Tamarind Khajaghar' },
  { img: '/images/partner20.png', name: 'World Association of Chefs Societies' },
  { img: '/images/partner21.png', name: 'Tamarind Restro & Bar' },
  { img: '/images/partner22.png', name: 'The Court House (Tamarind)' },
  { img: '/images/partner23.png', name: 'Fourth Valley Concierge' },
];

const teamMembers = [
  { name: "Reetal Rana", position: "Managing Director", img: "/public/founder2.png" },
  { name: "Pawan Pokhrel", position: "C.E.O", img: "/team/pawan.png" },
  { name: "Sudarshan Adhikari", position: "Administration & Operation Manager", img: "/team/sudarshan.png" },
  { name: "Devendra Timilsina", position: "Head of Marketing & Business Development", img: "/team/devendra.png" },
  { name: "Utkrishta Kharel", position: "Head of Admission & Student Services", img: "/team/utkrishta.png" },
  { name: "Sangeeta Kashichhwa", position: "HR Officer", img: "/team/sangeeta.png" },
  { name: "Gajendra Prasad Shah", position: "Academic Director / Program Leader - BBA", img: "/team/gajendra.png" },
  { name: "Rohit Mahato", position: "Program Leader (BIT)", img: "/team/rohit.png" },
  { name: "Prajwal Ratna RajBhandari", position: "Program Leader (BHM)", img: "/team/prajwal.png" },
  { name: "Lokesh Rohila", position: "DCA", img: "/team/lokesh.png" },
  { name: "Ronak Bastola", position: "IT Head", img: "/team/ronak.png" },
  { name: "Sapana Neupane", position: "Examinations Officer", img: "/team/sapana.png" },
  { name: "Bima Shrestha", position: "Finance Officer", img: "/team/bima.png" },
  { name: "Jyoti KC", position: "Accounts Officer", img: "/team/jyoti.png" },
  { name: "Niharika Poudyal", position: "Senior Officer - Admissions and Student Services", img: "/team/niharika.png" },
  { name: "Ayush Pudasaini", position: "Digital Marketing Strategist", img: "/team/ayush.png" },
  { name: "Bishal Thakuri", position: "Student Support Officer", img: "/team/bishal.png" },
  { name: "Anita Bhandari", position: "Front Office Executive", img: "/team/anita.png" },
  { name: "Himal Basnet", position: "PTE Test Administrator", img: "/team/himal.png" },
  { name: "Srijana Paudel", position: "Librarian / PTE Test Administrator", img: "/team/srijana.png" },
];


const cards = [
  {
    src: "/public/founder1.png",
    title: "Ms. Geeta Rana ",
  },
  {
    src: "/public/founder2.png",
    title: "Ms. Reetal Rana",
  },
  {
    src: "/public/founder1.png",
    title: "Mr. Pawan Pokhrel",
  },
];

const AboutPage = () => {
  const [hovered, setHovered] = useState(null); // 'left' or 'right'
  return (
    <div className="w-full">

      {/* Section 1: Hero with Video */}
      <section className="relative h-screen w-full flex items-end justify-center bg-[#003044] overflow-hidden">



        {/* Video Container with border radius */}
        <div className="relative w-full h-screen overflow-hidden">
          {/* Video Background */}
          <div className="absolute top-0 left-0 w-full h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="./public/bgvedio.mp4" type="video/mp4" />
            </video>
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/70 to-black/90 z-0" />
          </div>

          {/* Text Content Panel */}
          <div className="relative z-10 h-full flex items-center px-6 lg:px-20">
            <div className="bg-white/10 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl max-w-3xl text-left text-white">

              {/* Label */}
              <p className="text-xs md:text-sm tracking-wider uppercase text-orange-400 mb-2">
                Mid-Valley International College (MVIC)
              </p>

              {/* Animated Heading */}
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                <span className="block text-[#F1592D]">About</span>
                <span className="block text-white">Our Institution</span>
              </h1>

              {/* Icons or tabs */}
              <div className="flex gap-3 flex-wrap mb-5">
                {['Mission', 'Vision', 'Values', 'Objectives'].map((item, index) => (
                  <span
                    key={index}
                    className="bg-orange-500/20 border border-orange-400 text-xs md:text-sm uppercase tracking-wide px-3 py-1 rounded-full"
                  >
                    ➔ {item}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                MVIC, the best college in Nepal, offers diverse undergraduate and diploma programs in
                technical, management, hospitality, and finance. Accredited by the Nepalese Ministry of
                Education and partnered with City & Guilds (UK) and HELP University (Malaysia), MVIC
                provides world-class education designed for global impact.
              </p>
            </div>
          </div>
        </div>



      </section>


      {/* Section 2: Scrollable Content */}

      <section className="w-full bg-gradient-to-br from-[#f5f7fa] to-[#e2edf3] py-24 px-6 md:px-12 text-center">
        {/* Section Title */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-orange-600 mb-6">
          Our Inspiration
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-16">
          What drives us to educate, innovate, and inspire excellence every day.
        </p>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              title: "Mission",
              content:
                "Our Mission is to inspire minds and transform lives. MVIC is dedicated to leading the way in education, ensuring unparalleled excellence that is recognized worldwide.",
            },
            {
              title: "Vision",
              content:
                "Our vision is to uplift lives and drive economic growth. We equip students with exceptional skills, ready to meet real-world challenges.",
            },
            {
              title: "Values",
              content: (
                <>
                  <p className="mb-2 font-medium">Our guiding principles:</p>
                  <ul className="list-disc list-inside text-left space-y-1">
                    <li>Compassion</li>
                    <li>Continuous Learning</li>
                    <li>Accountability</li>
                    <li>Funtastic</li>
                    <li>Collaboration</li>
                    <li>Making a Difference</li>
                  </ul>
                </>
              ),
            },
            {
              title: "Objectives",
              content: (
                <ul className="list-disc list-inside text-left space-y-1">
                  <li>Deliver real-world education globally</li>
                  <li>Enable global employment opportunities</li>
                  <li>Foster entrepreneurship</li>
                  <li>Promote self-confidence and talent discovery</li>
                  <li>Instill workplace ethics</li>
                </ul>
              ),
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl shadow-md p-6 text-left border-t-4 border-[#F1592D] transform transition-transform duration-300 hover:scale-[1.05] hover:shadow-2xl hover:border-orange-500 hover:border-[3px]"
            >
              <h3 className="text-2xl font-bold text-[#003044] mb-4 text-center group-hover:text-orange-500 transition-colors duration-300">
                {item.title}
              </h3>
              <div className="text-gray-700 text-sm leading-relaxed">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="relative w-full z-10 bg-gradient-to-br from-[#E5ECE4] to-[#C7DDEB] py-24 px-6 flex flex-col items-center">
        {/* Floating Container */}
        <div className="relative z-10 max-w-5xl mx-auto text-center backdrop-blur-xl bg-white/30 rounded-3xl shadow-xl px-8 md:px-16 py-12 border border-white/50">
          <h2 className="text-3xl md:text-5xl font-bold text-orange-600 mb-6">
            Message from Our Founders
          </h2>
          <p className="text-lg md:text-2xl text-[#003044] leading-relaxed tracking-wide mb-10">
            “At MVIC, we are committed to shaping the future of education. Our vision is to equip every student with the
            knowledge, skills, and confidence to succeed in a rapidly changing world. We believe in fostering a learning
            environment that inspires creativity, integrity, and lifelong growth.”
          </p>

          {/* Learn More Button */}
          <Link to="/">
            <button className="bg-[#F4A261] hover:bg-[#e76f51] text-white font-bold py-3 px-8 rounded-full shadow-md transition-transform duration-300 hover:scale-105">
              Learn More
            </button>
          </Link>
        </div>

        {/* Cards Below the Quote */}
        <div className="mt-24 flex flex-wrap justify-center gap-10 z-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-72 flex flex-col items-center transform hover:scale-[1.05] transition duration-300 group"
            >
              {/* Image Container */}
              <div className="relative h-72 w-full overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl">
                <img
                  src={card.src}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white text-xl font-semibold z-10 drop-shadow-lg">
                  {card.title}
                </div>
              </div>

              {/* Details Button */}
              <div className="pt-6">
                <Link to="/">
                  <button className="bg-[#003044] text-white px-5 py-2 rounded-full hover:bg-[#1c556a] transition">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>




      <section className="relative py-24 px-4 text-white z-10 overflow-hidden">
        {/* Whitish background with soft overlay */}
        <div className="absolute inset-0  bg-gradient-to-br from-[#f5f7fa] to-[#e2edf3] z-0 opacity-90 blur-md"></div>

        <h2 className="text-center text-4xl md:text-6xl font-extrabold mb-16 text-orange-600 drop-shadow-lg relative z-10">
          Our Team
        </h2>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 2500 }}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="w-full max-w-7xl mx-auto relative z-10"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="group bg-white/10 backdrop-blur-md border-2 border-white/20 hover:border-orange-400 rounded-3xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-500 relative">
                <div className="relative overflow-hidden h-72 w-full">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold text-orange-400 mb-1 drop-shadow">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600">{member.position}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Button */}
        <div className="flex justify-center mt-16 relative z-10">
          <Link to="/">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-10 rounded-full shadow-lg transition-all duration-300">
              Learn More
            </button>
          </Link>
        </div>
      </section>





      <section className="relative py-24 px-6 bg-[#E5E7EB] text-gray-800">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#E5E7EB] via-transparent to-transparent opacity-60 blur-md"></div>

        {/* Section Title */}
        <h2 className="text-center text-4xl md:text-6xl font-bold text-orange-600 mb-16 relative z-10">
          Our Partners
        </h2>

        {/* Swiper Carousel for Partners */}
        <Swiper
          spaceBetween={30} // Increased space between slides for a less compact look
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3000 }} // Slower swipe speed (3 seconds delay)
          loop={true}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="w-full max-w-7xl mx-auto relative z-10"
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index}>
              {/* Partner Card with a Clean, Soft Shadow and Hover Effect */}
              <div className="group bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
                <div className="relative overflow-hidden w-full h-72">
                  <img
                    src={partner.img}
                    alt={partner.name}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110 group-hover:transform group-hover:origin-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-50" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-blue-500 mb-2">{partner.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Button to Learn More */}
        <div className="flex justify-center mt-16 relative z-10">
          <Link to="/">
            <button className="bg-orange-700 hover:bg-orange-600 text-white font-semibold py-3 px-10 rounded-full shadow-xl transition-all duration-300">
              Learn More
            </button>
          </Link>
        </div>
      </section>



      <section
        className="w-full py-12 px-4 bg-gradient-to-br from-[#f5f7fa] to-[#e2edf3]  relative"
        style={{
          fontFamily: "sans-serif",
        }}
      >
        {/* Background Blur Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#003044] via-transparent to-transparent opacity-50 blur-lg z-0"></div>

        <h2 className="text-4xl md:text-6xl font-bold text-center text-orange-600 py-5 mb-16 relative z-10">
          Recognition And Equivalency
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 transition-all duration-500 relative z-10">
          {/* Left Image */}
          <div
            className={`transition-all duration-500 overflow-hidden rounded-md shadow-lg
        h-[300px] sm:h-[400px] md:h-[800px]
        ${hovered === "left" ? "md:w-[42%]" : hovered === "right" ? "md:w-[28%]" : "md:w-[35%] w-full"}
      `}
            onMouseEnter={() => setHovered("left")}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src="./public/recognition.png"
              alt="Left"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          {/* Right Image */}
          <div
            className={`transition-all duration-500 overflow-hidden rounded-md shadow-lg
        h-[300px] sm:h-[400px] md:h-[800px]
        ${hovered === "right" ? "md:w-[42%]" : hovered === "left" ? "md:w-[28%]" : "md:w-[35%] w-full"}
      `}
            onMouseEnter={() => setHovered("right")}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src="./public/equivalency.png"
              alt="Right"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;