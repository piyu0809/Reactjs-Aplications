import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ExamPortal from './ExamPortal';
import Login from './Login';
import Auth0Lock from 'auth0-lock';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Timer from './Timer';




class App extends Component {

constructor(props){
  super(props);

  this.state = {
    idToken:'',
    profile: {}

  };
}

 static defaultProps = {
   clientId: 'oOUwAkK4NaR06OVJXtYjHyku22EJfVie',
   domain: 'piyu0809.auth0.com'
 }
componentWillMount(){

this.lock = new Auth0Lock(this.props.clientId, this.props.domain);
this.lock.on('authenticated', (authResult)=>{




  this.lock.getProfile(authResult.accessToken, (error, profile) =>{
    if(error){
      console.log(error);
      return;
    }
  //  console.log(profile);

    this.setProfile(authResult.accessToken,profile);

  });

});




this.getProfile();



//  console.log(authResult);



}
setProfile(idToken,profile){

localStorage.setItem('idToken', idToken);
localStorage.setItem('profile', JSON.stringify(profile));



this.setState({
  idToken: localStorage.getItem('idToken'),
  profile: JSON.parse(localStorage.getItem('profile'))
});

}


getProfile(){
  if(localStorage.getItem('idToken') != null){
    this.setState(
      {
        idToken: localStorage.getItem('idToken'),
        profile: JSON.parse(localStorage.getItem('profile'))
      });

  }
}

showlock(){

  this.lock.show();
}


logout(){

  this.setState({
    idToken: '',
    profile: ''
  }, () => {
    localStorage.removeItem('idToken');
    localStorage.removeItem('profile');
  }
);
}

  render() {

    let gitty;


    if(this.state.idToken){
      gitty = <ExamPortal />


    }
    else{
      gitty = "Login to start your examination. Remember that the timer starts as soon as you logIn ";
    }

    return (
      <div className="App">

        <Header
           lock = {this.lock}
           idToken = {this.state.idToken}
           profile = {this.state.profile}
           onLogout = {this.logout.bind(this)}
           onLogin = {this.showlock.bind(this)}


           />

         {gitty}
     </div>
    );
  }
}

export default App;
