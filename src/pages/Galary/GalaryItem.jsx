import { useParams, Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Flickity from 'flickity';
import galleryItems from '../../datas/Galary/galary';
import { FaArrowLeft, FaExpand, FaCompress, FaShare, FaCheck } from 'react-icons/fa';

import 'flickity/css/flickity.css';

export default function GalleryItem() {
  const { id } = useParams();
  const item = galleryItems.find((i) => i.id === parseInt(id));
  const carouselRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const [flickityInstance, setFlickityInstance] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    let flickity = null;
    
    if (carouselRef.current && item) {
      flickity = new Flickity(carouselRef.current, {
        cellAlign: 'center',
        contain: true,
        pageDots: true,
        wrapAround: true,
        prevNextButtons: true,
        adaptiveHeight: true,
      });
      
      setFlickityInstance(flickity);
      
      // Handle slide change
      flickity.on('change', (index) => {
        setSelectedImageIndex(index);
      });
    }
    
    // Set loading to false after a short delay
    const timer = setTimeout(() => setIsLoading(false), 800);
    
    return () => {
      clearTimeout(timer);
      if (flickity) {
        flickity.destroy();
      }
    };
  }, [item]);
  
  // Improve the selectImage function to ensure it properly updates the carousel
  const selectImage = (index) => {
    setSelectedImageIndex(index);
    if (flickityInstance) {
      // Use setTimeout to ensure the carousel has time to process
      setTimeout(() => {
        flickityInstance.select(index, false, true);
        flickityInstance.resize(); // Force a resize to ensure proper rendering
      }, 10);
    }
  };

  // Add this effect to sync the carousel whenever selectedImageIndex changes
  useEffect(() => {
    if (flickityInstance && selectedImageIndex !== null) {
      flickityInstance.select(selectedImageIndex, false, true);
    }
  }, [selectedImageIndex, flickityInstance]);

  // Toggle fullscreen view
  const toggleFullscreen = (imageUrl = null) => {
    if (imageUrl === null && selectedImageIndex !== null) {
      // If closing fullscreen, ensure we're showing the previously selected image
      setFullscreenImage(null);
      if (flickityInstance) {
        setTimeout(() => flickityInstance.select(selectedImageIndex), 100);
      }
    } else {
      // Opening fullscreen with specific image
      setFullscreenImage(imageUrl);
    }
    
    if (imageUrl) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  // Share functionality
  const shareGallery = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: item?.title || 'Gallery Item',
          text: `Check out this amazing gallery: ${item?.title}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Sharing failed', error);
      }
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }
  };

  if (!item) return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center text-red-500 text-xl"
      >
        Event not found
      </motion.div>
      <Link to="/gallery" className="mt-4 bg-[#F1592D] text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors">
        Back to Gallery
      </Link>
    </div>
  );

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      {/* Fullscreen Image Viewer */}
      <AnimatePresence>
        {fullscreenImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            onClick={() => toggleFullscreen(null)}
          >
            <div className="relative w-full h-full">
              <img 
                src={fullscreenImage} 
                alt={item.title} 
                className="w-full h-full object-contain"
              />
              <button 
                className="absolute top-4 right-4 bg-white/20 text-white p-3 rounded-full hover:bg-white/40 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFullscreen(null);
                }}
              >
                <FaCompress className="text-xl" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading State */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white flex items-center justify-center"
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 border-4 border-[#F1592D] border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-600">Loading gallery...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Copy notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg z-50 flex items-center space-x-2"
          >
            <FaCheck className="text-green-400" />
            <span>Link copied to clipboard</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Navigation Bar */}
        <div className="flex justify-between items-center mb-8">
          <Link 
            to="/gallery" 
            className="flex items-center text-gray-600 hover:text-[#F1592D] transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            <span>Back to Gallery</span>
          </Link>
          
          <button 
            onClick={shareGallery}
            className="flex items-center bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md transition-colors"
          >
            <FaShare className="mr-2 text-[#F1592D]" />
            <span>Share</span>
          </button>
        </div>

        {/* Title and Date */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-4 text-[#F1592D]"
        >
          {item.title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-gray-600 mb-12"
        >
          {item.date}
        </motion.p>

        {/* Main Carousel */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative"
        >
          <div 
            ref={carouselRef} 
            className="carousel w-full h-[50vh] md:h-[70vh] max-h-[600px] shadow-2xl rounded-xl overflow-hidden mb-8"
          >
            {item.images.map((img, i) => (
              <div
                key={i}
                className="carousel-cell w-full h-full overflow-hidden rounded-xl"
              >
                <div className="relative w-full h-full">
                  <img
                    src={img}
                    alt={`${item.title} image ${i + 1}`}
                    className="w-full h-full object-contain p-4"
                  />
                  <button 
                    onClick={() => toggleFullscreen(img)}
                    className="absolute bottom-4 right-4 bg-black/50 text-white p-2 rounded-md hover:bg-black/70 transition-colors"
                  >
                    <FaExpand />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {item.description && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="bg-gray-50 p-6 rounded-xl mb-12 shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">About this Event</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          )}
        </motion.div>

        {/* Thumbnail Grid */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-2xl font-bold mb-6 text-gray-800"
        >
          All Photos
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {item.images.map((image, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              key={index}
              className={`relative rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl ${
                selectedImageIndex === index ? 'ring-4 ring-[#F1592D]' : ''
              }`}
              onClick={() => selectImage(index)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image}
                  alt={`${item.title} ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-2 left-2 p-1.5 bg-[#F1592D] rounded-sm">
                <span className="text-xs font-semibold text-white">{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
