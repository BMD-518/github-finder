import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='bg-gray-800 sm:hover:bg-gray-600 p-5 mb-3 shadow-2xl flex rounded-md'>
      <div className='flex-row'>
        <img
          src={avatar_url}
          alt=''
          className='rounded-full w-24 rounded-md border-2 shadow-xl border-green-200'
        />
      </div>
      <div className='flex-1 flex-col text-center'>
        <h3 className='text-2xl mb-4 text-green-300 font-bold tracking-wide'>
          {login}
        </h3>
        <Link
          to={`/user/${login}`}
          className='rounded-sm py-2 px-4 font-semibold border-b-2 border-green-500 focus:outline-none hover:bg-green-500 hover:text-green-800 bg-gray-700 text-green-500 uppercase'
        >
          More info
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
