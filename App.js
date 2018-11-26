import React, { Component } from 'react';
import './App.css';
const zips = require('zips');

class App extends Component {
  state = {
    zip: 0,
  }

  render() {
    console.log(zips.getByZipCode(21822))
    let zipHandler = (event) => {
      this.setState({
        zip: event.target.value
      })
    }
    let x;
    let buttonHandler = (event) => {
      let x=zips.getByZipCode(this.state.zip).city
    }
    return (
      <div className="App">
      <div>
        <img src={require ("./logo.png")} />
        <br></br>
        <img src={require ("./puppy.gif")} height="200" width="200" />
        <img src={require ("./kitten.png")} height="200" width="200" /> 
        <br></br>
        <button onClick={buttonHandler}>Search that shit</button>
        <input type="text" onChange={zipHandler} key="zipinput" />
        <p>{console.log(zips.getByZipCode(21822))}</p>
        <p>{x}</p>
        <p>{this.state.zip}</p>
      </div>
      </div>
    );
  }
}

export default App;
