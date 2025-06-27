import React from 'react';

const MessageParser = ({ children, actions }) => {
  const { checker } = children.props.state;

  const parse = (message) => {
    const trimmed = message.trim().toLowerCase();
    if (!trimmed) return;

    // ✅ Trigger keyword-based responses
    const keywordMatch = [
      'fee', 'fees', 'tuition', 'cost',
      'scholarship', 'financial aid', 'discount',
      'hostel', 'accommodation', 'stay', 'living',
      'contact', 'phone', 'call', 'email', 'address',
      'open', 'time', 'working hours', 'hours'
    ].some((keyword) => trimmed.includes(keyword));

    if (keywordMatch) {
      actions.respondToKeyword(trimmed);
      return;
    }

    // ✅ Continue normal flow based on checker
    if (checker === 'enterName') {
      actions.afterNameMessage(trimmed);
    } else if (checker === 'selectCourse') {
      actions.handleCourseSelection(trimmed);
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          parse,
          actions,
        })
      )}
    </div>
  );
};

export default MessageParser;
