import React from 'react';

// The data object has been removed from this file.
// The links are now hardcoded into the buttons below.

// This component no longer needs props like createChatBotMessage or setState
const BachelorOptions = () => {

  // Removed the updateState and handleButtonClick functions

  return (
    <div className="flex justify-center gap-4 mt-4">
      {/* Button for BIT */}
      <button
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-2xl shadow-md transition duration-300"
        onClick={() => {
          // Directly navigate to the BIT page link
          window.open("https://www.mvicedu.com/programs/bit", "_blank");
        }}
      >
        BIT
      </button>

      {/* Button for BHM */}
      <button
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-2xl shadow-md transition duration-300"
        onClick={() => {
          // Directly navigate to the BHM page link
          window.open("https://www.mvicedu.com/programs/bhm", "_blank");
        }}
      >
        BHM
      </button>

      {/* Button for BBA */}
      <button
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-2xl border border-gray-300 shadow-md transition duration-300"
        onClick={() => {
          // Directly navigate to the BBA page link
          window.open("https://www.mvicedu.com/programs/bba", "_blank");
        }}
      >
        BBA
      </button>
    </div>
  );
};

export default BachelorOptions;
