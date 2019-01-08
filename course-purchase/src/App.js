import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {
  render() {
    var courses = [
      {name:'Complete Web Development',price:199},
      {name:'Complete Javascript',price:299},
      {name:'Python Development',price:99},
      {name:'Complete Front End',price:899},
      {name:'React Basics',price:99},
      {name:'Complete Data Structures ',price:199}
]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to Course-Sales page.
          </p>
        </header>
        <p>
          <Coursesales items = {courses} />
        </p>

      </div>
    );
  }
}

export default App;
