import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chatkit from '@pusher/chatkit';
import Messagelist from './components/Messagelist';
import NewroomForm from './components/NewroomForm';
import Roomlist from './components/Roomlist';
import SendmessageForm from './components/SendmessageForm';

import { tokenUrl, instanceLocator } from './config';


class App extends Component {


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
         currentUser.subscribeToRoom({
             roomId: 19642928, 
             hooks: {
                 onNewMessage: message => {
                     console.log('message.text: ', message.text);
                 }
             }
         })
     })
 }
  render() {
    return (
      <div className="App">
        <Roomlist />
        <Messagelist />
        <SendmessageForm />
        <NewroomForm />

      </div>
    );
  }
}

export default App;
