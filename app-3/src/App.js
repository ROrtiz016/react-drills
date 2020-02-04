import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      word : "",
      list : [
        "popcorn",
        "icecream",
        "cheese",
        "pizza",
        "burgers"
      ]
    }
  }

  handleChange(value){
    this.setState({
      word: value
    })
  }

  render() {
    let foodList = this.state.list.filter((e) => {
      return e.includes(this.state.word)
    }).map((e,i) => {
      return <h2 key={i}>{e}</h2>
    })

    return (
      <div className="App">
        <input placeholder="type" type="text" onChange={(e) => this.handleChange(e.target.value)}/>
        <h3>{foodList}</h3>
      </div>
    );
  }
}

export default App;
