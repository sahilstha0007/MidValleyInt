import React from 'react';

// The data import is removed as data is no longer fetched here.
// import Data from './Data';

// This component no longer needs props like createChatBotMessage or setState
const DiplomaOptions = () => {

  // Removed the updateState and handleButtonClick functions

  // Define the options with text, key, and the direct link for each course
  const options = [
    { text: "Culinary Arts", key: 'culinary', link: "https://www.mvicedu.com/programs/diploma-culinary" },
    { text: "Pastry & Bakery", key: 'pastry', link: "https://www.mvicedu.com/programs/diploma-pastry" },
    { text: "Hospitality Management", key: 'hospitality', link: "https://www.mvicedu.com/programs/diploma-hospitality" },
    { text: "Barista Training", key: 'barista', link: "https://www.mvicedu.com/programs/diploma-barista" },
    { text: "Travel & Tourism", key: 'tourism', link: "https://www.mvicedu.com/programs/diploma-tourism" },
    { text: "Food & Beverage Service", key: 'fnb', link: "https://www.mvicedu.com/programs/diploma-fnb" },
  ];

  return (
    <div className="flex flex-wrap gap-2 p-2">
      {options.map((option) => (
        <button
          key={option.key}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm"
          onClick={() => {
            // Directly navigate to the link associated with this option
            window.open(option.link, "_blank");
          }}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default DiplomaOptions;
