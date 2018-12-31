import React , { Component } from 'react';
import timer from './timer.gif';


class Timer extends Component {

  componentDidMount(){
    this.timer = setInterval(this.ticker,1000);
  }
  ticker(){
    this.setState({clock:new Date - this.props.start})
  }
  constructor(props){
    super(props);

    this.state = {
      clock: 0
    };
    this.ticker = this.ticker.bind(this);
  }
  render(){
    var clock = Math.round((((3600 - Math.round(this.state.clock / 1000))/3600)*60));

    return(

      <div>
        <time><img src={timer} className="timer" /> {clock}
              Minutes left. </time>

      </div>
    );
  }
}

export default Timer;
