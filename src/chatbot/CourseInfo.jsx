import React from 'react';

const CourseInfo = (props) => {
  const { name, imageUrl, link } = props.payload || {};

  return (
    <div className="p-2 text-sm">
      <p className="font-semibold mb-2">{name}</p>
      {imageUrl && (
        <img src={imageUrl} alt={name} className="w-full rounded mb-2" />
      )}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-3 py-1 rounded"
        >
          View More
        </a>
      )}
    </div>
  );
};

export default CourseInfo;
