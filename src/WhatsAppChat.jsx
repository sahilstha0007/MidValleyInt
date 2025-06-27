import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

const WhatsAppChat = ({ whatsappNumber }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const { width } = useWindowDimensions();

  // Your provided default WhatsApp number for Nepal. Ensure it's digits only, no '+'.
  const phoneNumber = whatsappNumber || '9779749704504';

  const handleSendMessage = () => {
    if (message.trim() === '') {
      alert('Please enter a message!');
      return;
    }

    const encodedMessage = encodeURIComponent(message);

    // Always use the wa.me link for maximum compatibility across devices
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappLink, '_blank'); // Open in a new tab

    setMessage(''); // Clear message after sending
    setIsOpen(false); // Close the chat UI after sending
    setShowNotification(true); // Show notification
    setTimeout(() => setShowNotification(false), 3000); // Hide notification after 3 seconds
  };

  const chatVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, y: 50, scale: 0.8, transition: { duration: 0.2, ease: 'easeIn' } },
  };

  const notificationVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <div className="fixed bottom-4 left-4 z-50"> {/* Changed 'right-4' to 'left-4' */}
      {/* WhatsApp Icon */}
      <motion.button
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center cursor-pointer"
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </motion.button>

      {/* Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            className="absolute -top-16 left-0 bg-gray-800 text-white text-sm px-3 py-2 rounded-md shadow-lg" // Changed 'right-0' to 'left-0'
            variants={notificationVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            Message sent!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Message Input UI */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-16 left-0 w-80 bg-white rounded-lg shadow-xl overflow-hidden" // Changed 'right-0' to 'left-0'
            variants={chatVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="bg-green-600 text-white p-3 flex items-center">
              <FontAwesomeIcon icon={faWhatsapp} size="lg" className="mr-2" />
              <span className="font-semibold">WhatsApp Chat</span>
              <button
                className="ml-auto text-white focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                &times;
              </button>
            </div>

            {/* Chat Body (Placeholder for messages, can be expanded) */}
            <div className="relative z-50 p-4 bg-gray-100 h-32 flex items-end justify-center">
              <p className="text-gray-500 italic">
                Type your message below to send it on WhatsApp.
              </p>
            </div>


            {/* Message Input Area */}
            <div className="p-3 border-t border-gray-200 flex items-center">
              <input
                type="text"
                className="flex-grow border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSendMessage();
                  }
                }}
              />
              <button
                className="ml-2 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full"
                onClick={handleSendMessage}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transform rotate-90"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WhatsAppChat;