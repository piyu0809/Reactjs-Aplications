import React , { Component } from 'react';

import ReactDom from 'react-dom';




class Messagelist extends Component {
  componentWillUpdate(){
    const node = ReactDom.findDOMNode(this);
    this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 200 >= node.scrollHeight;

  }

  componentDidUpdate(){
    if(this.shouldScrollToBottom){
      const node = ReactDom.findDOMNode(this);
      node.scrollTop = node.scrollHeight
    }
  }



  render(){
    if(!this.props.roomId){
      return(
                <div className="message-list">
                     <div className="join-room">
                         &larr; Join a room!
                     </div>
                </div>
               )
             }
    return(
      <div className = "message-list">
        { this.props.message.map((message,index) => {
          const user = this.props.userId === message.senderId ? "me":message.senderId;
          return(
            <div key={index} className="message">
            <div className="message-username">{user}</div>
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
