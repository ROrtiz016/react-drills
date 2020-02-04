import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      food : [
        "sandwich",
        "cake",
        "popcorn"
      ]
    }
  }
  render() {
    let foodToDisplay = this.state.food.map((food) => {
      return (<div>
        <h3>{food}</h3>
      </div>)
    })

    return (
      <div className="App">
        {foodToDisplay}  
      </div>
    );
  }
}

export default App;
