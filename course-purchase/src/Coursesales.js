import React, { Component } from 'react';




class Coursesales  extends Component {

  sumPrice(price){
    this.setState({total: this.state.total + price});
  }
  constructor(props){
    super(props);

    this.state = {
      total: 0
    };
    this.sumPrice = this.sumPrice.bind(this);
  }
  render(){
      console.log(this.props.items);
      var courses = this.props.items.map((item) => {
        return <Course name = {item.name} price = {item.price} Instructor = {item.Instructor} sumPrice = {this.sumPrice} active = {item.active} />

      });

    return(
      <div>
        <h1>
          Courses for you to buy.
        </h1>
        <div id="courses">
          {courses}
          <p id="total"> Total <b>{this.state.total}</b></p>
        </div>
    </div>
    );
  }
}
export default Coursesales;


class Course  extends Component {
  clicker(){
    var active = !this.state.active;
    this.setState({active: active});
    this.props.sumPrice( active ? this.props.price: -this.props.price);
  }
  constructor(props){
    super(props);

    this.state = {
      active : false
    };
    this.clicker = this.clicker.bind(this);
  }
  render(){
    return(
      <div>
        <p id ="demo"
          onClick={this.clicker}>  {this.props.name} <br /> Instructor: {this.props.Instructor} <b> {this.props.price}</b> </p>

      </div>
    );
  }
}
