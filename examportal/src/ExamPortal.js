import React , { Component } from 'react';
import Timer from './Timer';
import {Nav,Navbar,NavItem} from 'react-bootstrap';




class ExamPortal extends Component {
  render(){
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
              <label><input type="radio" name="answer3" value="yes" onChange={this.answerSelected} />yes</label>
              <label><input type="radio" name="answer3" value="no" onChange={this.answerSelected} />no</label>
              <label><input type="radio" name="answer3" value="maybe" onChange={this.answerSelected} />maybe</label>
            </div>
            <div className="card">
              <label>Is online learning helpful:  </label> <br />
              <label><input type="radio" name="answer3" value="yes" onChange={this.answerSelected} />yes</label>
              <label><input type="radio" name="answer3" value="no" onChange={this.answerSelected} />no</label>
              <label><input type="radio" name="answer3" value="maybe" onChange={this.answerSelected} />maybe</label>
            </div>
            <div className="card">
              <label>Is online learning helpful:  </label> <br />
              <label><input type="radio" name="answer3" value="yes" onChange={this.answerSelected} />yes</label>
              <label><input type="radio" name="answer3" value="no" onChange={this.answerSelected} />no</label>
              <label><input type="radio" name="answer3" value="maybe" onChange={this.answerSelected} />maybe</label>
            </div>
            <div className="card">
              <label>Is online learning helpful:  </label> <br />
              <label><input type="radio" name="answer3" value="yes" onChange={this.answerSelected} />yes</label>
              <label><input type="radio" name="answer3" value="no" onChange={this.answerSelected} />no</label>
              <label><input type="radio" name="answer3" value="maybe" onChange={this.answerSelected} />maybe</label>
            </div>
            <div className="card">
              <label>Is online learning helpful:  </label> <br />
              <label><input type="radio" name="answer3" value="yes" onChange={this.answerSelected} />yes</label>
              <label><input type="radio" name="answer3" value="no" onChange={this.answerSelected} />no</label>
              <label><input type="radio" name="answer3" value="maybe" onChange={this.answerSelected} />maybe</label>
            </div>
            <div className="card">
              <label>Is online learning helpful:  </label> <br />
              <label><input type="radio" name="answer3" value="yes" onChange={this.answerSelected} />yes</label>
              <label><input type="radio" name="answer3" value="no" onChange={this.answerSelected} />no</label>
              <label><input type="radio" name="answer3" value="maybe" onChange={this.answerSelected} />maybe</label>
            </div>
            <div className="card">
              <label>Is online learning helpful:  </label> <br />
              <label><input type="radio" name="answer3" value="yes" onChange={this.answerSelected} />yes</label>
              <label><input type="radio" name="answer3" value="no" onChange={this.answerSelected} />no</label>
              <label><input type="radio" name="answer3" value="maybe" onChange={this.answerSelected} />maybe</label>
            </div>
            <input className="feedback-button" type="submit" value="submit" />
          </form>
        </div>
    return(
      <div className="head">

        <h1>Welcome to Exam Portal</h1>

          <Timer start={Date.now()}  /> <br /> <br />



        {questions}
      </div>
    );
  }
}


export default ExamPortal;
