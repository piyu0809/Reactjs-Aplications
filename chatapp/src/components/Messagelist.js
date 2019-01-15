import React , { Component } from 'react';





class Messagelist extends Component {
  render(){
    return(
      <div className = "Messagelist">
        { this.props.message.map((message,index) => {
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
