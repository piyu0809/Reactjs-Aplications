import React , { Component } from 'react';
import Timer from './Timer';
import {Nav,Navbar,NavItem} from 'react-bootstrap';

var firebase = require('firebase');
var uuid = require('uuid');

var config = {
   apiKey: "AIzaSyCuK9I1CoKl_djaWib-26wmNmz5H2ZHL2g",
   authDomain: "usur-8ef92.firebaseapp.com",
   databaseURL: "https://usur-8ef92.firebaseio.com",
   projectId: "usur-8ef92",
   storageBucket: "usur-8ef92.appspot.com",
   messagingSenderId: "1094333389399"
 };
 firebase.initializeApp(config);




class ExamPortal extends Component {
  answerSelected(event){
    var answers = this.state.answers;
    if(event.target.name === 'answer1'){
      answers.answer1 = event.target.value;
    } else if(event.target.name === 'answer2'){
      answers.answer2 = event.target.value;
    } else if(event.target.name === 'answer3'){
      answers.answer3 = event.target.value;
    } else if(event.target.name === 'answer4'){
      answers.answer4 = event.target.value;
    } else if(event.target.name === 'answer5'){
      answers.answer5 = event.target.value;
    } else if(event.target.name === 'answer6'){
      answers.answer6 = event.target.value;
    } else if(event.target.name === 'answer7'){
      answers.answer7 = event.target.value;
    } else if(event.target.name === 'answer8'){
      answers.answer8 = event.target.value;
    } else if(event.target.name === 'answer9'){
      answers.answer9 = event.target.value;
    } else if(event.target.name === 'answer10'){
      answers.answer10 = event.target.value;
    }

    this.setState({answers: answers}, function(){
      console.log(this.state);
    });
  }

  questionSubmit(){
    firebase.database().ref('uSurvey1/'+this.state.uid).set({
      answers: this.state.answers
    });
    console.log("saving answers to database");
    this.setState({isSubmitted: true});
    console.log(this.state.isSubmitted);
  }

  constructor(props){
    super(props);

    this.state = {
      uid: uuid.v1(),
      answers: {
        answer1: '',
        answer2: '',
        answer3: '',
        answer4: '',
        answer5: '',
        answer6: '',
        answer7: '',
        answer8: '',
        answer9: '',
        answer10: ''
      },
      isSubmitted: false
    };
    this.answerSelected = this.answerSelected.bind(this);
    this.questionSubmit = this.questionSubmit.bind(this);
  }

  render(){


    if(this.state.isSubmitted === true){

      var questions = <p>Thank you for submitting .</p>

    }
     var questions = <div>
          <form onSubmit={this.questionSubmit}>
            <div className="card">
              <label>What kind of courses you like the most: </label> <br />
              <label><input type="radio" name="answer1" value="Technology" onChange={this.answerSelected} />Technology</label>
              <label><input type="radio" name="answer1" value="Design" onChange={this.answerSelected} />Design</label>
              <label><input type="radio" name="answer1" value="Marketing" onChange={this.answerSelected} />Marketing</label>
            </div>
            <div className="card">
              <label>you are a: </label> <br />
              <label><input type="radio" name="answer2" value="Student" onChange={this.answerSelected} />Student</label>
              <label><input type="radio" name="answer2" value="in-job" onChange={this.answerSelected} />in-job</label>
              <label><input type="radio" name="answer2" value="looking-job" onChange={this.answerSelected} />looking-job</label>
            </div>
            <div className="card">
              <label>Is online learning helpful:  </label> <br />
              <label><input type="radio" name="answer3" value="yes" onChange={this.answerSelected} />yes</label>
              <label><input type="radio" name="answer3" value="no" onChange={this.answerSelected} />no</label>
              <label><input type="radio" name="answer3" value="maybe" onChange={this.answerSelected} />maybe</label>
            </div>
            <div className="card">
              <label>Is online learning helpful:  </label> <br />
              <label><input type="radio" name="answer4" value="yes" onChange={this.answerSelected} />yes</label>
              <label><input type="radio" name="answer4" value="no" onChange={this.answerSelected} />no</label>
              <label><input type="radio" name="answer4" value="maybe" onChange={this.answerSelected} />maybe</label>
            </div>
            <div className="card">
              <label>Is online learning helpful:  </label> <br />
              <label><input type="radio" name="answer5" value="yes" onChange={this.answerSelected} />yes</label>
              <label><input type="radio" name="answer5" value="no" onChange={this.answerSelected} />no</label>
              <label><input type="radio" name="answer5" value="maybe" onChange={this.answerSelected} />maybe</label>
            </div>
            <div className="card">
              <label>Is online learning helpful:  </label> <br />
              <label><input type="radio" name="answer6" value="yes" onChange={this.answerSelected} />yes</label>
              <label><input type="radio" name="answer6" value="no" onChange={this.answerSelected} />no</label>
              <label><input type="radio" name="answer6" value="maybe" onChange={this.answerSelected} />maybe</label>
            </div>
            <div className="card">
              <label>Is online learning helpful:  </label> <br />
              <label><input type="radio" name="answer7" value="yes" onChange={this.answerSelected} />yes</label>
              <label><input type="radio" name="answer7" value="no" onChange={this.answerSelected} />no</label>
              <label><input type="radio" name="answer7" value="maybe" onChange={this.answerSelected} />maybe</label>
            </div>
            <div className="card">
              <label>Is online learning helpful:  </label> <br />
              <label><input type="radio" name="answer8" value="yes" onChange={this.answerSelected} />yes</label>
              <label><input type="radio" name="answer8" value="no" onChange={this.answerSelected} />no</label>
              <label><input type="radio" name="answer8" value="maybe" onChange={this.answerSelected} />maybe</label>
            </div>
            <div className="card">
              <label>Is online learning helpful:  </label> <br />
              <label><input type="radio" name="answer9" value="yes" onChange={this.answerSelected} />yes</label>
              <label><input type="radio" name="answer9" value="no" onChange={this.answerSelected} />no</label>
              <label><input type="radio" name="answer9" value="maybe" onChange={this.answerSelected} />maybe</label>
            </div>
            <div className="card">
              <label>Is online learning helpful:  </label> <br />
              <label><input type="radio" name="answer10" value="yes" onChange={this.answerSelected} />yes</label>
              <label><input type="radio" name="answer10" value="no" onChange={this.answerSelected} />no</label>
              <label><input type="radio" name="answer10" value="maybe" onChange={this.answerSelected} />maybe</label>
            </div>
            <input className="feedback-button" type="submit" value="submit" onClick={this.questionSubmit}  />
          </form>
        </div>
    return(
      <div className="head">

        <h1>Welcome to Exam Portal</h1>

          <Timer start={Date.now()} /> <br /> <br />




        {questions}
      </div>
    );
  }
}


export default ExamPortal;
