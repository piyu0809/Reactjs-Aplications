import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Youtube from './Youtube';

class App extends Component {
  render() {
    return (
      <div className="App">

        <h1>Youtube Fetch</h1>
        <Youtube />
      </div>
    );
  }
}

export default App;
