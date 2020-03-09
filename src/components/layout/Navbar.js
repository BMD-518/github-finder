import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <Fragment>
      <header className='flex-col px-6 bg-gray-900 flex items-center lg:py-2 py-4 shadow-lg'>
        <div className='items-center text-3xl text-green-500 font-semibold pb-1 tracking-widest'>
          {title}
        </div>
        <div className='flex'>
          <p className='px-10 text-green-200 hover:text-green-500 tracking-wider'>
            <Link to='/'>Home</Link>
          </p>
          <p className='px-10 text-green-200 hover:text-green-500 tracking-wider'>
            <Link to='/about'>About</Link>
          </p>
        </div>
      </header>
      <div className='bg-green-500 pt-1 w-full'></div>
    </Fragment>
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
