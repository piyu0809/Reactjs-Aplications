import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {
  render() {
    var courses = [
      {name:'Complete Web Development Instructor:Hites Chaudhary', price:199, },
      {name:'Complete Javascript', price:299, Instructor: 'Hites Chaudhary'},
      {name:'Python Development', price:99, Instructor: 'Hites Chaudhary'},
      {name:'Complete Front End', price:899, Instructor: 'Hites Chaudhary'},
      {name:'React Basics', price:99, Instructor: 'Hites Chaudhary'},
      {name:'Complete Data Structures ', price:199, Instructor: 'Hites Chaudhary'},
      {name:'Complete Data Structures ', price:199, Instructor: 'Hites Chaudhary'},
      {name:'Complete Data Structures ', price:199, Instructor: 'Hites Chaudhary'},
      {name:'Complete Data Structures ', price:199, Instructor: 'Hites Chaudhary'},
      {name:'Complete Data Structures ', price:199, Instructor: 'Hites Chaudhary'},
      {name:'Complete Data Structures ', price:199, Instructor: 'Hites Chaudhary'}


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
