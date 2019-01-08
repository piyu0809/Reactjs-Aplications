import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js
class App extends Component {


  constructor(props){
    super(props);

    this.state = {
      input: '/*Add Your jsx here */',
      output: '',
      err: ''
    };
  }
  update(e){
    let code = e.target.value;
    try{
      this.setState({
        output: window.Babel
        .transform(code, { presets: ['es2015', 'react']})
        .code,

        err: ''
      })


    }
    catch(err){
      this.setState({
        err: err.message
      })
    }

  }
  render() {





    return (
      <div className="App">
        <div className="head">
        <header className="App-header">
          JSX COMPILER
        </header>
        <h1>
          {this.state.err}
        </h1>
      </div>
          <div className="Container">
            <textarea onChange={this.update.bind(this)}
              defaultValue= {this.state.input} />
            <pre>
              {this.state.output}
            </pre>
          </div>
      </div>
    );
  }
}

export default App;
