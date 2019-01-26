import React , { Component } from 'react';
import icon from '../icon.png';




class Header extends Component {

  render(){

    return(
      <div className = "header">
        {this.props.roomName}
        <img className="icon" src={icon} width="100" height="60" align="right"/>

      </div>
    );
  }
}


export default Header;
