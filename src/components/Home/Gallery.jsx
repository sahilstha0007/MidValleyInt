import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Import navigation styles
import { Navigation } from "swiper/modules"; // Import navigation module
import { useNavigate } from "react-router-dom";

const images = [
  "/img/holi.jpg",
  "/img/holi.jpg",
  "/img/holi.jpg",
  "/img/holi.jpg",
  "/img/holi.jpg",
];

const Gallery = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate()
  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 py-6 px-4 md:px-16 mb-7">
      <p className="text-sm text-orange-600 font-semibold mb-2">
        OUR GALLERY AND EVENTS
      </p>
      <h1 className="font-bold text-indigo-900 text-4xl mb-4">
        Where Ideas Take <br /> Flight Brand
      </h1>

      {isMobile ? (
        <Swiper
          slidesPerView={2}
          spaceBetween={16}
          navigation={true} // Enable navigation arrows
          modules={[Navigation]} // Use Navigation module
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index}`}
                className="rounded-xl w-full h-auto object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2 row-span-2">
            <img
              src="/img/holi.jpg"
              alt="Main"
              className="rounded-3xl w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1">
            <img
              src="/img/group.jpg"
              alt="Top Middle"
              className="rounded-3xl w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 row-span-2">
            <img
              src="/img/gagan.webp"
              alt="Right"
              className="rounded-3xl w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1">
            <img
              src="/img/hackaton.png"
              alt="Bottom Middle"
              className="rounded-3xl w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      <div className="flex justify-center mt-10">
        <button onClick={() =>{navigate(`/gallery&events`)}}  className="bg-white border border-gray-300 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition">
          VIEW MORE
        </button>
      </div>
    </div>
  );
};

export default Gallery;