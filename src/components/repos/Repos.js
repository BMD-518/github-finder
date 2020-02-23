import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

const Repos = ({ repos }) => {
  return repos.map(repos => <RepoItem repo={repo} key={repo.id} />);
};

repos.propTypes = {
  repos: PropTypes.array.isRequired
};

export default Repos;
