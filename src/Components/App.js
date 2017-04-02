import React, { Component } from 'react';

import './App.css';

import Header from './Header/Header';
import Error from './Error/Error';
import List from './List/List';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      error: '',
      repos: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getReposForUser = this.getReposForUser.bind(this);
  }

  handleInputChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getReposForUser(this.state.value);
  }

  getReposForUser(user) {
    let userURL = `http://api.github.com/users/${user}/repos`;

    fetch(userURL)
    .then(response => {
      if (!response.ok) {
        throw Error(response.error);
      }

      this.setState({ error: '' });
      return response.json();
    })
    .then(result => {
      const repos = [];

      for (var i = 0; i < result.length; i++) {
          repos.push(result[i].svn_url);
      }

      this.setState({ repos });
    })
    .catch(error => {
      this.setState({
        error: 'No Repositories found.',
        repos: []
      });
    })
  }

  render() {
    return (
      <div className="App">

        <Header handleInputChange={ this.handleInputChange } handleSubmit={ this.handleSubmit }  value={ this.state.value }/>

        <main>
          <h2>{this.state.value} Repositories:</h2>

          <Error error={this.state.error} />

          <List repos={this.state.repos} />

        </main>

      </div>
    );
  }
}

export default App;
