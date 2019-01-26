import React , { Component } from 'react';




class Header extends Component {

  render(){

    return(
      <div className = "header">
        {this.props.roomName}
      </div>
    );
  }
}


export default Header;
