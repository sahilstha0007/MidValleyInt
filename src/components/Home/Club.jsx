import React from 'react';

const features = [
  {
    title: 'Tech Titans',
    description: 'Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor',
    icon: '/img/holi.jpg', // Replace with icon component or image
  },
  {
    title: 'Hands Of Hope',
    description: 'Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor',
    icon: '/img/holi.jpg',
  },
  {
    title: 'Valley Of Champions',
    description: 'Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor',
    icon: '/img/holi.jpg',
  },
  {
    title: 'Easy to Embed',
    description: 'Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor',
    icon: '/img/holi.jpg',
  },
];

const Club = () => {
  return (
    <div className=" py-16 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row gap-12">
      {/* Left Content */}
      <div className="md:w-1/2">
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
           Clubs
        </h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas placeat laborum adipisci animi ullam delectus. Accusantium, modi consequatur placeat odio corporis odit quas non voluptate magni vitae in quia libero.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas placeat laborum adipisci animi ullam delectus. Accusantium, modi consequatur placeat odio corporis odit quas non voluptate magni vitae in quia libero.
        </p>
        
        <a href="#" className="text-orange-600 font-semibold hover:underline">Learn More →</a>
      </div>

      {/* Right Feature Cards */}
      <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="  rounded-xl p-6 flex flex-col justify-center items-center gap-4">
            <img src={feature.icon}/>
            <div>
              {/* <h3 className="text-lg font-semibold text-indigo-800">{feature.title}</h3> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Club;
