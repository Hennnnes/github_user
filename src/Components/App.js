import React, { Component } from 'react';

import './App.css';
//import header from './Header/Header';
// import main from './Main/Main';
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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.getJson('http://api.github.com/users/' + this.state.value + '/repos');

    event.preventDefault();
  }

  setError(error) {
    this.setState({error: error});
  }

  getJson(url) {
    fetch(url)
    .then(response => {
      if (response.status !== 200) {
        this.setError('Oops, an error occured.');
        return;
      }
      return response.json();
    })
    .then(json => {
      const repos = [];

      if (json) {
        for (let i = 0; i < json.length; i++) {
          repos.push(json[i].svn_url);
        }
      }

      this.setState({
        value: this.state.value,
        repos: repos
      });
    })
  }

  render() {
    return (
      <div className="App">
        <header>
            <form action="./" onSubmit={this.handleSubmit}>
              <label htmlFor="user">Search for Github User</label>

              <input type="text"
                      id="user"
                      value={this.state.value}
                      onChange={this.handleChange}
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
