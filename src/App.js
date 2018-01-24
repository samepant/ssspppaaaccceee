import React, { Component } from 'react'
import CranbrookSite from './cranbrookSite'
import SpaceOverlay from './spaceOverlay'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CranbrookSite />
        <SpaceOverlay />
      </div>
    );
  }
}

export default App;
