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
    <div className='text-center bg-gray-900 m-5 py-3 rounded-lg shadow-lg'>
      <div className='p-1 text-green-200 pb-5  text-lg tracking-wide'>
        Search for{' '}
        <span className='text-2xl mx-1 text-orange-400 underline tracking-widest'>
          any
        </span>{' '}
        github user!
      </div>
      <form onSubmit={onSubmit} action='' className='flex-col'>
        <input
          className='rounded-md text-green-500
         bg-black placeholder-green-500 text-center text-xl'
          type='text'
          name='text'
          autoComplete='off'
          placeholder='Search User'
          value={text}
          onChange={onChange}
        />
        <div className='py-2 my-3 flex flex-row justify-center'>
          <input
            className='rounded-sm border-b-2 border-green-500 focus:outline-none hover:bg-green-500 hover:text-gray-700 mx-1 w-20 py-1 bg-gray-700 text-green-500 uppercase font-bold'
            type='submit'
            value='search'
          />
          {githubContext.users.length > 0 && (
            <button
              className='rounded-sm focus:outline-none hover:bg-orange-400 hover:text-red-800 mx-1 w-20 py-1 bg-red-700 text-orange-400 border-b-2 border-orange-400 uppercase font-bold'
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
