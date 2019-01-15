import React , { Component } from 'react';


const DUMMY_DATA = [
  {
    senderId: 'Priyanka',
    text: 'Hi How u doing'
  },
  {
    senderId: 'Kalpi',
    text: 'I am glad we met'
  },
  {
    senderId: 'Mina',
    text: 'I think this is bad'
  },
  {
    senderId: 'Pooka',
    text: 'Lets have some fun'
  },
  {
    senderId: 'Mopa',
    text: 'Kill that man'
  }

];


class Messagelist extends Component {
  render(){
    return(
      <div className = "Messagelist">
        { DUMMY_DATA.map((message,index) => {
          return (
            <div key={index} className="message">
              <div className="message-username">{message.senderId}</div>
              <div className="message-text">{message.text}</div>
            </div>
          )
        })
      }
      </div>
    );
  }
}



export default Messagelist;
