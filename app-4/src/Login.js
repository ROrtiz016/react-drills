import React, { Component } from 'react';
import './App.css';

class Login extends Component {
  constructor(){
    super()
    this.state ={
      username: "",
      password: ""
    }
  }

  handleUser(value){
    this.setState({
      username: value
    })
  }

  handlePass(value){
    this.setState({
      password: value
    })
  }

  handleLogin(){
    alert(`Username: ${this.state.username} Password: ${this.state.password}`)
  }

  render() {
    return (
      <div className="App">
        <input placeholder='username' type="text" onChange={(e) => this.handleUser(e.target.value)} />
        <input placeholder='password' type="text" onChange={(e) => this.handlePass(e.target.value)} />
        <button onClick={() => this.handleLogin()}>Login</button>
      </div>
    );
  }
}

export default Login;
