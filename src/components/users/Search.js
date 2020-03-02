import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/AlertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <div className='text-center bg-gray-900 m-5 py-3 rounded-lg border-green-500 border-4 shadow-lg'>
      <div className='p-1 text-green-200 pb-5 text-lg tracking-wide'>
        Search for{' '}
        <span className='text-2xl text-orange-400 underline'>any</span> github
        user!
      </div>
      <form onSubmit={onSubmit} action='' className='flex-col'>
        <input
          className='rounded-md text-green-500
         bg-black placeholder-green-500 text-center text-xl'
          type='text'
          name='text'
          autoComplete='off'
          placeholder='Search Users'
          value={text}
          onChange={onChange}
        />
        <div className='py-2 my-3 flex flex-row justify-center'>
          <input
            className='rounded-sm focus:outline-none hover:bg-green-500 hover:text-green-800 mx-1 w-16 py-1 bg-gray-700 text-green-500'
            type='submit'
            value='Enter'
          />
          {githubContext.users.length > 0 && (
            <button
              className='rounded-sm focus:outline-none mx-1 w-16 py-1 bg-red-700 text-gray-400'
              onClick={githubContext.clearUsers}
            >
              Clear
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Search;
