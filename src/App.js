import React, { Component } from 'react';
import logo from './logo.svg';
import Channelcloud from './channelcloud';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simple Number Cloud</h1>
        </header>
        <p className="App-intro">
          Work in progress.
        </p>
        <Channelcloud />
      </div>
    );
  }
}

export default App;
