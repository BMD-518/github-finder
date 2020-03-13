import React, { useEffect, Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const githubContext = useContext(GithubContext);

  const { getUser, user, loading, repos, getUserRepos } = githubContext;

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
    company
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link
        to='/'
        className='flex justify-center rounded-sm my-5 py-2 px-4 font-semibold border-b-2 border-green-500 focus:outline-none hover:bg-green-500 hover:text-green-800 hover:border-t- bg-gray-900 text-green-500 uppercase'
      >
        Back to Search
      </Link>
      <p className='my-3 flex justify-center font-thin text-xl text-gray-400 leading-10'>
        Hireable:{' '}
        {hireable ? (
          <svg
            viewBox='0 0 578 429'
            xmlns='http://www.w3.org/2000/svg'
            fillRule='evenodd'
            clipRule='evenodd'
            strokeLinejoin='round'
            strokeMiterlimit={2}
            className='w-12'
          >
            <path
              fill='#38a169'
              d='M61.283 188.476l56.838-50.828 166.335 186.006-56.838 50.827z'
            />
            <path
              fill='#69d391'
              d='M471.793 53.517l50.923 56.915-295.073 264.006-50.924-56.916z'
            />
          </svg>
        ) : (
          <svg
            viewBox='0 0 578 429'
            xmlns='http://www.w3.org/2000/svg'
            fillRule='evenodd'
            clipRule='evenodd'
            strokeLinejoin='round'
            strokeMiterlimit={2}
            className='w-12'
          >
            <path
              d='M151.883 127.886a37.999 37.999 0 010-53.74l25.435-25.436a2.401 2.401 0 013.394 0l251.404 251.403a37.999 37.999 0 010 53.74l-25.436 25.435a2.4 2.4 0 01-3.395 0L151.883 127.886z'
              fill='#f6ad56'
            />
            <path
              d='M432.118 127.886a37.999 37.999 0 000-53.74l-25.435-25.436a2.401 2.401 0 00-3.395 0L151.884 300.113a37.999 37.999 0 000 53.74l25.437 25.435a2.4 2.4 0 003.394 0l251.403-251.402z'
              fill='#c53030'
            />
          </svg>
        )}
      </p>
      <div className='bg-gray-800 p-3 py-5 rounded-lg'>
        <div className='flex flex-col sm:flex-row sm:justify-around'>
          <div className='flex flex-wrap justify-center'>
            <img
              src={avatar_url}
              className='w-40 h-40 mb-3 rounded-full border-green-400 border-4 shadow-xl'
              alt='{name}'
            />
          </div>
          <div className='flex flex-col justify-center'>
            <p className='text-center text-base text-gray-600 font-semibold'>
              Location:{' '}
              <span className='text-green-500 text-lg font-medium'>
                {location}
              </span>
            </p>
            <h1 className='text-center mb-3 text-3xl font-extrabold tracking-wide text-green-600'>
              {name}
            </h1>
          </div>
        </div>
        <div>
          <div className='bg-gray-600 rounded-md p-2 my-1'>
            {bio && (
              <Fragment>
                <h3 className='text-base text-green-500 tracking-wide font-light'>
                  Bio:{' '}
                  <span className='text-lg text-gray-900 tracking-normal font-medium'>
                    {bio}
                  </span>
                </h3>
              </Fragment>
            )}
          </div>
          <a
            href={html_url}
            target='_blank'
            rel='noopener noreferrer'
            className='flex justify-center rounded-sm my-5 py-2 px-4 font-semibold border-b-2 border-green-500 focus:outline-none hover:bg-green-500 hover:text-green-800 bg-gray-700 text-green-500 uppercase'
          >
            View On Github
          </a>
          <ul className='flex flex-col flex-wrap text-center'>
            <li>
              {login && (
                <Fragment>
                  <p className='text-base text-green-400 font-light'>
                    Username: <span className='text-gray-500'>{login}</span>
                  </p>
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <p className='text-base text-green-400 font-light'>
                    Company: <span className='text-gray-500'>{company}</span>
                  </p>
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <p className='text-base text-green-400 font-light'>
                    Blog: <span className='text-gray-500'>{blog}</span>
                  </p>
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col bg-gray-900 p-3 rounded-md text-center my-3'>
        <h2 className='mb-3 text-green-300 font-thin text-2xl uppercase'>
          {login}'s Stats
        </h2>
        <div className='flex flex-col'>
          <div className='p-1 flex flex-row justify-center'>
            <div className='font-thin text-green-300 text-lg rounded-md m-1 px-1'>
              Followers:{' '}
              <span className='font-semibold text-green-200'>{followers}</span>
            </div>
            <div className='font-thin text-green-300 text-lg rounded-md m-1 px-1'>
              Following:{' '}
              <span className='font-semibold text-green-200'>{following}</span>
            </div>
          </div>
          <div className='p-1 flex flex-row justify-center'>
            <div className='font-thin text-green-300 text-lg rounded-md m-1 px-1'>
              Public Repos:{' '}
              <span className='font-semibold text-green-200'>
                {public_repos}
              </span>
            </div>
            <div className='font-thin text-green-300 text-lg rounded-md m-1 px-1'>
              Public Gists:{' '}
              <span className='font-semibold text-green-200'>
                {public_gists}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-900 rounded-md mb-5 py-2 px-3'>
        <h1 className='uppercase text-2xl font-thin text-center text-green-300 mb-2'>
          {login}'s Repos
        </h1>
        <Repos repos={repos} />
      </div>
    </Fragment>
  );
};

export default User;
