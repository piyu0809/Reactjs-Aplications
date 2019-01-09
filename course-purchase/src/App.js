import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {
  render() {
    var courses = [
      {name:'Deep Learning in Python', Instructor: 'Dawn Ranier', price:199, },
      {name:'An Introduction to Interactive Programming in Python (Part 1)', price:299, Instructor: 'Hites Chaudhary'},
      {name:'Python + SQL + Tableau: Integrating Python, SQL, and Tableau', price:99, Instructor: 'Justin Kive'},
      {name:'Deep Learning A-Z™: Hands-On Artificial Neural Networks', price:899, Instructor: 'Kirill Eremenko'},
      {name:'React Basics', price:99, Instructor: 'Mark Youngblood'},
      {name:'Deep Learning: Advanced NLP and RNNs ', price:199, Instructor: 'María Luz Arcila'},
      {name:'Advanced AI: Deep Reinforcement Learning in Python ', price:199, Instructor: 'Priyanka Hiremath'},
      {name:'Python for Data Science and Machine Learning Bootcamps ', price:199, Instructor: 'Brittany Williams'},
      {name:'Reiki Level I, II and Master/Teacher Program ', price:199, Instructor: 'Meryl Corke'},
      {name:'Animal & Pet Reiki Energy Healing Certification Course ', price:199, Instructor: 'Amar Romascan'},
      {name:'Essential Energy Care for Empaths', price:199, Instructor: 'Mags Eatock'}


]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <mark>
            Welcome to Course-Sales page.
          </mark>
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
