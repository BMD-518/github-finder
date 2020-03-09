import React from 'react';

export const About = () => {
  return (
    <div className='m-5 p-5 text-center rounded-md bg-gray-600 hover:bg-gray-500 hover:shadow-2xl'>
      <h1 className='text-green-300 font-thin text-3xl'>About This App</h1>
      <p className='text-lg'>App to search Github users</p>
      <p>Version 1.0.0</p>
    </div>
  );
};

export default About;
