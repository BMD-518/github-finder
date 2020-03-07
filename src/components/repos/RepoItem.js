import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return (
    <div className='flex flex-col p-3 mb-2 rounded-md bg-gray-600'>
      <button
        className='
      flex justify-center 
      focus:outline-none 
      rounded-sm 
      my-5 py-2 px-4 
      bg-gray-700 
      border-b-2 border-green-500 
      font-semibold 
      text-green-500 uppercase
      hover:bg-green-500 hover:text-green-900
      '
      >
        <a href={repo.html_url}>{repo.name}</a>
      </button>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoItem;
