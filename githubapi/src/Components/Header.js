import React , { Component } from 'react';

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
      page = <NavItem onClick={this.onLogout.bind(this)} href="#">
        Logout
      </NavItem>
    }
    else{
      page =  <NavItem onClick={this.onLogin.bind(this)} href="#">
        LogIn
      </NavItem>
    }


    return(
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>

            Github Searcher
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
