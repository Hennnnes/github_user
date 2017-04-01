import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <ul>
        {this.props.repos.map(function(repo){
           return <li key={repo}><a href={repo}>{repo}</a></li>;
        })}
      </ul>
    );
  }
}

export default List;
