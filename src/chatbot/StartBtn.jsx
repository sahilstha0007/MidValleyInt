import React from 'react';

export default function StartBtn(props) {

    const startConversation = () => {
        props.actions.startConversation();  // Trigger startConversation from actions
    }

    return (
        <div className="px-10">
            <button
                onClick={startConversation}  // Handle click to start conversation
                className="bg-gradient-to-r from-orange-300 to-orange-400 text-white font-semibold text-lg px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
            >
                Let's Get Started
            </button>
        </div>
    )
}
