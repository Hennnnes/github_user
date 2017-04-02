import React from 'react';

const List = (props) => {
  return (
    <ul>
      {props.repos.map((repo, index) =>
        <li key={repo}><a href={repo}>{repo}</a></li>
      )}

    </ul>
  )
}


export default List;
