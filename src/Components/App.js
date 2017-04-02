import React, { Component } from 'react';

import './App.css';

// import Header from './Header/Header';
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
    .then(json => {
      const repos = [];

      for (let i = 0; i < json.length; i++) {
        repos.push(json[i].svn_url);
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
        <header>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="user">Search for Github User</label>

              <input type="text"
                      id="user"
                      value={this.state.value}
                      onChange={this.handleInputChange}
              />

              <input type="submit" value="Submit" />
            </form>
        </header>


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
