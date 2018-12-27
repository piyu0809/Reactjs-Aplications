import React , { Component } from 'react';



//getprofile



class Search extends Component {

  submit(event){
    event.preventDefault();
    let value = this.refs.username.value;
    this.props.searchprofile(value);
    this.refs.username.value = '';
  }

  render(){
    return(
      <section className='search-box'>
        <form onSubmit={this.submit.bind(this)}>
          <label><input type="search" ref="username" placeholder="Type username and hit enter..." /></label>
        </form>
      </section>
    );
  }
}



export default Search;
