import React, { Component } from 'react';
import './App.css';
import Chatkit from '@pusher/chatkit';
import Messagelist from './components/Messagelist';
import NewroomForm from './components/NewroomForm';
import Roomlist from './components/Roomlist';
import SendmessageForm from './components/SendmessageForm';

import { tokenUrl, instanceLocator } from './config';


class App extends Component {


constructor(props){
  super(props);

  this.state = {
    messages : [],
    joinableRooms: [],
    joinedRooms: [],
    roomId: null

  };
  this.sendMessage = this.sendMessage.bind(this);
  this.subscribeToRooms = this.subscribeToRooms.bind(this);
  this.getRooms = this.getRooms.bind(this)


}

  componentDidMount() {
     const chatManager = new Chatkit.ChatManager({
         instanceLocator,
         userId: 'piyu',
         tokenProvider: new Chatkit.TokenProvider({
             url: tokenUrl
         })
     })

     chatManager.connect()
     .then(currentUser => {
        this.currentUser = currentUser
        this.getRooms()


       })
 }






subscribeToRooms(roomId){
this.setState({
  messages: []
})
this.currentUser.subscribeToRoom({
      roomId: roomId,
      hooks: {
          onNewMessage: message => {
             this.setState({
               messages: [...this.state.messages, message]
             })
          }
      }
  })
  .then(room => {
    this.setState({
      roomId: room.id
    })
    this.getRooms()
  })


}
getRooms(){
  this.currentUser.getJoinableRooms()
   .then(joinableRooms => {
     this.setState({
       joinableRooms,
       joinedRooms: this.currentUser.rooms
     })
   })
   .catch( err => console.log("error getting joinable rooms", err));
}
 sendMessage(text){

this.currentUser.sendMessage({
  text,
  roomId: this.state.roomId
})


 }
  render() {
    return (
      <div className="app">
        <Roomlist
          subscribeToRooms = {this.subscribeToRooms}
          rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}/>
        <Messagelist message={this.state.messages} />
        <SendmessageForm sendMessage = {this.sendMessage}/>
        <NewroomForm />

      </div>
    );
  }
}

export default App;
