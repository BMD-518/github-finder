import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <header className='flex-col px-6 bg-gray-900 flex items-center lg:py-0 py-2'>
      <div className='items-center text-3xl text-green-500 font-semibold pb-1'>
        {title}
      </div>
      <div className='flex'>
        <p className='px-10 text-green-200 hover:text-green-500'>
          <Link to='/'>Home</Link>
        </p>
        <p className='px-10 text-green-200 hover:text-green-500'>
          <Link to='/about'>About</Link>
        </p>
      </div>
    </header>
  );
};

Navbar.defaultProps = {
  title: 'Github.find(dev)',
  icon: 'fab fa-github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
