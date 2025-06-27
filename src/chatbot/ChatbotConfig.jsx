import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from './Avatar.jsx';
import React from 'react';
import StartBtn from './StartBtn.jsx';
import CourseSelector from './CourseSelector.jsx';
import BachelorOptions from './BachelorOptions.jsx';
import DiplomaOptions from './DiplomaOptions.jsx';
import AboutUsLink from './AboutUsLink.jsx';
import CourseInfo from './CourseInfo.jsx'; // Ensure this path is correct


const config = {
  botName: 'MVIC Bot',

  initialMessages: [
    createChatBotMessage('Welcome to Mid-valley International College!', {
      widget: 'startBtn',
    }),
  ],

  customComponents: {
    botAvatar: (props) => <Avatar {...props} />,
  },

  state: {
    checker: null,
  
    userData: {
      name: '',
      age: 0,
      category: '',
      product: {
        name: '',
        link: '',
        imageUrl: '',
      },
    },
  },

  widgets: [
    {
      widgetName: 'startBtn',
      widgetFunc: (props) => <StartBtn {...props} />,
    },
    {
      widgetName: 'courseSelector',
      widgetFunc: (props) => <CourseSelector {...props} />,
    },
    {
      widgetName: 'bachelorOptions',
      widgetFunc: (props) => <BachelorOptions {...props} />,
    },
    {
      widgetName: 'diplomaOptions',
      widgetFunc: (props) => <DiplomaOptions {...props} />,
    },
    {
      widgetName: 'aboutUsLink',
      widgetFunc: (props) => <AboutUsLink {...props} />,
    },
    {
      widgetName: 'courseInfo',
      // widgetName: "courseInfo", // The name used for displaying course info
      widgetFunc: (props) => <CourseInfo {...props} />,
    },
  ],

  customStyles: {
    botMessageBox: {
      backgroundColor: '#ef6b00', // Custom color for bot messages
      borderRadius: '0.5rem',
      padding: '0.5rem 1rem',
    },
    chatButton: {
      backgroundColor: '#3b82f6', // Custom color for chat button
      borderRadius: '9999px',
      padding: '0.5rem 1rem',
    },
  },
};

export default config;
