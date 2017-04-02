import React from 'react';

import './List.css';

const List = (props) => {
  return (
    <ul className="results">
      {props.repos.map((repo, index) =>
        <li key={repo}><a href={repo}>{repo}</a></li>
      )}

    </ul>
  )
}

List.propTypes = {
  repo: React.PropTypes.string
};

export default List;
