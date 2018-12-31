import React , { Component } from 'react';
import logo from './logo.svg';
import {Nav,Navbar,NavItem} from 'react-bootstrap';





class Header extends Component {


  onLogin(){
    this.props.onLogin();
  }

  onLogout(){
    this.props.onLogout();
  }
  render(){
    let page;
    if(this.props.idToken){
      page = <NavItem className="NavItem" onClick={this.onLogout.bind(this)} href="#">
        Logout
      </NavItem>
    }
    else{
      page =  <NavItem className="NavItem" onClick={this.onLogin.bind(this)} href="#">
        LogIn
      </NavItem>
    }


    return(
    <Navbar className="nav">
      <Navbar.Header>
        <Navbar.Brand>
          <img src={logo} className="App-logo" alt="logo" />

        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        {page}
      </Nav>
    </Navbar>
    );
  }
}



export default Header;
