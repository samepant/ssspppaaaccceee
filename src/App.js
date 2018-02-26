import React, { Component } from 'react'
import SpaceOverlay from './spaceOverlay'
import Information from './information.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SpaceOverlay />
        <Information />
      </div>
    );
  }
}

export default App;
