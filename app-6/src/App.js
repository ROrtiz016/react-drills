import React, { Component } from 'react';
import Todo from './Todo'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      task: "",
      list: []
    }
  }

  handleTask(value){
    this.setState({
      task: value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input placeholder="Enter new task" type="text" onChange={(e) => this.handleTask(e.target.value)}/>
        <button onClick={() => this.handleAdd()}>Add</button>
      </div>
    );
  }
}

export default App;
