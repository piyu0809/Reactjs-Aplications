import React , { Component } from 'react';

class SendMessageForm extends Component {



  constructor(props){
    super(props);

    this.state = {
      message: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit =   this.handleSubmit.bind(this);
  }

handleChange(e){

this.setState({
  message: e.target.value
})



}
handleSubmit(e){
e.preventDefault();
console.log(this.state.message);
this.props.sendMessage(this.state.message);

this.setState({
  message: ''
})

}


  render(){
    return(
        <form className = "send-message-form"
          onSubmit = {this.handleSubmit}>
          <input
            type="text"
            onChange = {this.handleChange}
            value={this.state.message}
            placeholder = "Enter your text and hit enter!" />


        </form>

    );
  }
}



export default SendMessageForm;
