import React, { useState, useEffect } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import config from "./ChatbotConfig.jsx";
import MessageParser from "./MessageParser.jsx";
import ActionProvider from "./ActionProvider.jsx";

import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faTimes } from "@fortawesome/free-solid-svg-icons";

function MVICBot() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => setIsChatbotOpen(prev => !prev);

  useEffect(() => {
    document.body.style.overflow = isChatbotOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isChatbotOpen]);

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      <AnimatePresence>
        {!isChatbotOpen && (
          <motion.button
            key="chatbot-icon"
            onClick={toggleChatbot}
            className="w-14 h-14 md:w-16 md:h-16 bg-orange-500 text-white rounded-full shadow-lg flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Open Chatbot"
          >
            <FontAwesomeIcon icon={faCommentDots} size="xl" />
          </motion.button>
        )}

        {isChatbotOpen && (
          <motion.div
          key="chatbot-window"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          transition={{ duration: 0.3 }}
          className="chatbot-container bg-white rounded-xl shadow-xl border border-blue-200 flex flex-col overflow-hidden relative"
        >
        
            <button
              onClick={toggleChatbot}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 focus:outline-none z-10 p-2 rounded-full hover:bg-gray-100 transition duration-200"
              aria-label="Close Chatbot"
            >
              <FontAwesomeIcon icon={faTimes} size="xl" />
            </button>

            <div className="flex-grow h-full">
              <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MVICBot;
