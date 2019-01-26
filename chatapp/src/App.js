import React, { Component } from 'react';
import './App.css';
import Chatkit from '@pusher/chatkit';
import Messagelist from './components/Messagelist';
import Header from './components/Header';
import NewroomForm from './components/NewroomForm';
import Roomlist from './components/Roomlist';
import SendmessageForm from './components/SendmessageForm';
import Header1 from './components/Header1';

import { tokenUrl, instanceLocator } from './config';


class App extends Component {


constructor(props){
  super(props);

  this.state = {
    messages : [],
    joinableRooms: [],
    joinedRooms: [],
    roomId: null,
    currentUser: '',
    userId: '',
    roomName: ''

  };
  this.sendMessage = this.sendMessage.bind(this);
  this.subscribeToRooms = this.subscribeToRooms.bind(this);
  this.getRooms = this.getRooms.bind(this);
  this.createRoom = this.createRoom.bind(this)
}

  componentDidMount() {
     const chatManager = new Chatkit.ChatManager({
         instanceLocator,
         userId: 'piyu',
         tokenProvider: new Chatkit.TokenProvider({
             url: tokenUrl
         })
     })
     this.setState({
       userId: 'piyu'
     })

     chatManager.connect()
     .then(currentUser => {
       this.setState({
         currentUser: currentUser
       })
        this.getRooms()
      })
 }

subscribeToRooms(roomId){
this.setState({
  messages: []
})
this.state.currentUser.subscribeToRoom({
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
      roomId: room.id,
      roomName: room.name
    })
    this.getRooms()
  })
}

getRooms(){
  this.state.currentUser.getJoinableRooms()
   .then(joinableRooms => {
     this.setState({
       joinableRooms,
       joinedRooms: this.state.currentUser.rooms
     })
   })
   .catch( err => console.log("error getting joinable rooms", err));
}

 sendMessage(text){
   this.state.currentUser.sendMessage({
     text,
     roomId: this.state.roomId
   })
 }

 createRoom(name){
   this.state.currentUser.createRoom({
     name
   })
   .then(room => this.subscribeToRooms(room.id))
   .catch(err => console.log("Error Creating room", err))
 }

  render() {
    return (
      <div className="app">
        <Header1 />
        <Header
          roomName = {this.state.roomName}
           />
        <Roomlist
          roomId = {this.state.roomId}
          subscribeToRooms = {this.subscribeToRooms}
          rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}/>
        <Messagelist
          userId={this.state.userId}
          currentUser={this.state.currentUser}
          roomId = {this.state.roomId}
          message={this.state.messages} />
        <SendmessageForm
          disabled = {!this.state.roomId}
          sendMessage = {this.sendMessage}/>
        <NewroomForm
          createRoom = {this.createRoom} />
      </div>
    );
  }
}

export default App;
