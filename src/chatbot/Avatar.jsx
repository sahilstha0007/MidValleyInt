import React from 'react';

const Avatar = () => {
  return (
    <div className="w-14 h-16 overflow-hidden ">
      <img
        src="/logoicon.png"  
        alt="MVIC Logo"
        className="w-full h-full object-cover p-1.5"  
      />
    </div>
  );
};

export default Avatar;
