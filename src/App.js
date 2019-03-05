import React, { Component } from 'react';
import logo from './logo.svg';
import Button from './components/Button'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hej <code>čuuuus</code> Kačíku!
          </p>
          <a
            className="App-link"
            href="https://pics.me.me/when-your-cat-is-stuck-in-the-wall-and-you-19297039.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            Klikni pro srandu
          </a>
          <Button>Simple</Button>
          <Button primary>Primary</Button>
        </header>
      </div>
    );
  }
}

export default App;
