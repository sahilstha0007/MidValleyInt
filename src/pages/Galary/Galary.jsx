import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaImages } from 'react-icons/fa'; // Changed to gallery-appropriate icon
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import galleryItems from '../../datas/Galary/galary';

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { 
    scale: 1.05, 
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
    transition: { duration: 0.3 }
  },
};

const headerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
};

export default function Gallery() {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [startDate, setStartDate] = useState(null);

  const galleryHeader = {
    frontImage: '/gallery/front.webp',
    title: 'Gallery Showcase',
  };

  // Updated filter options
  const filterOptions = ['All', 'Most Recent', 'Last 30 Days', 'Last 6 Months', 'Last Year', 'Custom Date'];

  // Sort items by date descending
  const sortedItems = [...galleryItems].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Filter items based on selected filter
  const filteredItems = sortedItems.filter(item => {
    if (selectedFilter === 'all') return true;

    const itemDate = new Date(item.date);
    const currentDate = new Date();

    if (selectedFilter === 'Custom Date' && startDate) {
      return itemDate >= startDate;
    }

    const timeDiff = currentDate.getTime() - itemDate.getTime();

    switch (selectedFilter) {
      case 'Most Recent':
        return true; // Already sorted
      case 'Last 30 Days':
        return timeDiff <= 30 * 24 * 60 * 60 * 1000;
      case 'Last 6 Months':
        return timeDiff <= 6 * 30 * 24 * 60 * 60 * 1000;
      case 'Last Year':
        return timeDiff <= 365 * 24 * 60 * 60 * 1000;
      default:
        return true;
    }
  });

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header Image with overlay */}
      <motion.div 
        className="relative"
        variants={headerVariants}
        initial="initial"
        animate="animate"
      >
        <img
          src={galleryHeader.frontImage}
          alt="Gallery main image"
          className="w-full max-h-[30vh] sm:max-h-[40vh] md:max-h-[50vh] lg:max-h-[60vh] xl:max-h-[70vh] object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
      </motion.div>

      {/* Breadcrumb Section with updated styling */}
      <div className="bg-gradient-to-r from-[#00253a] to-[#003044] text-white py-3 sm:py-5 text-center shadow-md">
        <div className="container mx-auto px-2 sm:px-4">
          <p className="text-xs sm:text-sm">
            Home &gt; Clubs &gt;{' '}
            <span className="text-[#F1592D] font-bold">{galleryHeader.title}</span>
          </p>
        </div>
      </div>

      <div className="px-4 sm:px-8 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={cardVariants}
            initial="initial"
            animate="animate"
            className="text-3xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 text-[#F1592D] drop-shadow-sm"
          >
            {galleryHeader.title}
          </motion.h2>

          {/* Enhanced Filter buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 sm:gap-5 mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {filterOptions.map((filter, index) => (
              <motion.button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedFilter === filter
                    ? 'bg-gradient-to-r from-[#F1592D] to-[#F17A2D] text-white shadow-lg'
                    : 'bg-white text-gray-700 shadow hover:shadow-md hover:bg-gray-50'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>

          {/* Custom Date Picker with improved styling */}
          {selectedFilter === 'Custom Date' && (
            <motion.div 
              className="flex justify-center mb-8 sm:mb-12"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <DatePicker
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                  setSelectedFilter('Custom Date');
                }}
                className="border border-gray-300 rounded-lg p-2 sm:p-3 shadow-md focus:outline-none focus:ring-2 focus:ring-[#F1592D] focus:border-transparent"
                placeholderText="Select Start Date"
                maxDate={new Date()}
                dateFormat="MMMM d, yyyy"
              />
            </motion.div>
          )}

          {/* Gallery Grid with staggered animation */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                transition={{ delay: 0.1 * (index % 8) }} // Staggered animation
                onClick={() => navigate(`/gallery/${item.id}`)}
                className="relative rounded-xl overflow-hidden shadow-xl cursor-pointer group"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full h-72 object-cover transition-all duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute bottom-5 sm:bottom-7 left-5 sm:left-7 z-10 transform group-hover:translate-y-[-5px] transition-transform duration-300">
                  <h3 className="text-sm sm:text-xl font-bold text-white drop-shadow-lg">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-white/80">{item.date}</p>
                </div>
                <div className="absolute top-3 sm:top-5 right-3 sm:right-5 bg-gradient-to-br from-[#F1592D] to-[#F17A2D] rounded-full p-2 sm:p-3 transform group-hover:scale-110 transition-transform duration-300">
                  <FaImages className="text-lg sm:text-xl text-white" />
                </div>
                
                {/* Photo count indicator */}
                <div className="absolute bottom-3 right-3 bg-black/70 rounded-full px-2 py-1 text-xs text-white">
                  {item.images.length} photos
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {filteredItems.length === 0 && (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-lg text-gray-500">No galleries found for the selected filter.</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
