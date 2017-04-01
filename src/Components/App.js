import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
            <form action="./" method="get">
              <label htmlFor="user">Search for Github User</label>

              <input type="text"
                      id="user"
                      ref="{(input) => this.textInput = input}"
                      />

                    <input type="submit" value="Search" />
            </form>
        </header>


      </div>
    );
  }
}

export default App;
