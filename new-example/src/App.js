import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function getLabel() {
  return 'Learn React now';
}

const oneMore = { val: 1 };

class App extends Component {
  additionalText = 'hello';
  secondMore = { val: 2 };
  style = { backgroundColor: '#777', color: '#eee'};

  render() {
    return (
      <div className="App">
        <header
          className="App-header"
          style={ this.style }>
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            { getLabel() }
          </a>
          <p>{ this.additionalText }</p>
          <p>{ oneMore.val } { this.secondMore.val }</p>
        </header>
      </div>
    );
  }
}

export default App;
