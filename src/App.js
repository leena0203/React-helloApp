import React from 'react';
import './App.css';
import logo from './assets/BridgeLabz New Logo.svg';

class App extends React.Component{
  url = 'https://www.bridgelabz.com'
  constructor(){
    super()
    this.state={
      body: 'Hello All to BridgeLabz'
    }
  }

  //onclick event
  onClick = ($event) => {
    console.log("save button is clicked!" , $event);
    window.open(this.url, "_blank");
  }
  render(){
    return(
      <div>
        <h1>{this.state.body}</h1>
        <img src ={logo} onClick={this.onClick}
        alt ="Logo" />
      </div>
    );
  }
}

export default App;
