import React, { Component } from 'react';

import './Header.css'

class Header extends Component {
    render() {
      return (
        <header>
            <form onSubmit={this.props.handleSubmit}>

              <label htmlFor="user">Search for Github User</label>
              <input type="text"
                      id="user"
                      value={this.props.value}
                      onChange={this.props.handleInputChange}
              />

              <input type="submit" value="Submit" />
            </form>
        </header>
      )
    }
}

export default Header;
