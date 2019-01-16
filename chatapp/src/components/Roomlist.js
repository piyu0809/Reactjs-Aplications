import React , { Component } from 'react';



class Roomlist extends Component {
  render(){
    return(
      <div className="rooms-list">
        <ul>
          <h3>Your Rooms</h3>
          {this.props.rooms.map(room =>
          {
            return(
              <li key={room.id} className = "room">
                <a onClick={() => this.props.subscribeToRooms(room.id)}
                  href="#">
                  #{room.name}
                </a>
              </li>
            )

          })}



        </ul>

      </div>
    );
  }
}



export default Roomlist;
