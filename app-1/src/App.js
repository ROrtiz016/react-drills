import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      message: ""
    }
  }

  handleChange(value){
    this.setState({
      message: value
    })
  }

  render() {
    return (
      <div className="App">
        <input className='message-input' type="text" placeholder="type a message" onChange={(e) => this.handleChange(e.target.value)}/>
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}

export default App;
