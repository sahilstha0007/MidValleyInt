import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const updateState = (message) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const startConversation = () => {
    const message = createChatBotMessage("Let's get started! What's your name?");
    updateState(message);
    setState((prev) => ({
      ...prev,
      checker: 'enterName',
    }));
  };

  const afterNameMessage = (name) => {
    if (!name) return;

    setState((prev) => ({
      ...prev,
      userData: { ...prev.userData, name },
    }));

    const message = createChatBotMessage(`Nice to meet you, ${name}! What course are you interested in?`, {
      widget: 'courseSelector',
    });

    updateState(message);

    setState((prev) => ({
      ...prev,
      checker: 'selectCourse',
    }));
  };

  const handleCourseSelection = (course) => {
    let courseMessage;

    if (['BIT', 'BBA', 'BHM'].includes(course)) {
      courseMessage = createChatBotMessage(`You selected ${course}. Here are your options:`, {
        widget: 'bachelorOptions',
      });
    } else if (course === 'Diploma') {
      courseMessage = createChatBotMessage(`You selected Diploma. Here are your Diploma options:`, {
        widget: 'diplomaOptions',
      });
    } else if (course === 'About Us') {
      courseMessage = createChatBotMessage('Here is some information about us:', {
        widget: 'aboutUsLink',
      });
    } else {
      const errorMsg = createChatBotMessage("Sorry, I didn't understand that. Please select a valid course.");
      updateState(errorMsg);
      return;
    }

    updateState(courseMessage);
  };

  // ✅ Respond to predefined keywords
  const respondToKeyword = (message) => {
    const lower = message.toLowerCase();
  
    if (['fee', 'fees', 'tuition', 'cost'].some((k) => lower.includes(k))) {
      const msg = createChatBotMessage(
        "Our tuition fees vary depending on the course. For detailed information, please visit the official website or contact our admin office at +977-1-4479474."
      );
      updateState(msg);
      return;
    }
  
    if (['scholarship', 'financial aid', 'discount'].some((k) => lower.includes(k))) {
      const msg = createChatBotMessage(
        "We offer merit-based and need-based scholarships. Please contact our admin office for more details."
      );
      updateState(msg);
      return;
    }
  
    if (['hostel', 'accommodation', 'stay', 'living'].some((k) => lower.includes(k))) {
      const msg = createChatBotMessage(
        "Yes, we provide hostel and accommodation facilities for students. Reach out to us for room availability and fees."
      );
      updateState(msg);
      return;
    }
  
    if (['contact', 'phone', 'call', 'email', 'address'].some((k) => lower.includes(k))) {
      const msg = createChatBotMessage(
        "You can reach us at +977-1-4479474 or email us at info@mvic.edu.np. We're located in Gyaneshwor, Kathmandu."
      );
      updateState(msg);
      return;
    }
  
    if (['open', 'time', 'working hours', 'hours'].some((k) => lower.includes(k))) {
      const msg = createChatBotMessage(
        "Our college is open from Sunday to Friday, 9 AM to 5 PM. We are closed on Saturdays and public holidays."
      );
      updateState(msg);
      return;
    }
  };
  

  return (
    <div>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          actions: {
            startConversation,
            afterNameMessage,
            handleCourseSelection,
            respondToKeyword,
          },
        })
      )}
    </div>
  );
};

export default ActionProvider;
