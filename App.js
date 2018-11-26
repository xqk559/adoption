import React, { Component } from 'react';
import './App.css';
const zips = require('zips');

class App extends Component {
  state = {
    zip: 21822,
    x: 21822
  }

  render() {
    console.log(zips.getByZipCode(this.state.zip))
    console.log(zips.getByZipCode(this.state.zip.city))
    let zipHandler = (event) => {
      this.setState({
        zip: event.target.value
      })
    }
    let buttonHandler = (event) => {
      this.setState({
        x: this.state.zip
      })
    }
    let z = zips.getByZipCode(this.state.x);
    console.log(z);
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
        <p>{this.state.x}</p>
        <p>{this.state.zip}</p>
        <p>{z.city}</p>
      </div>
      </div>
    );
  }
}

export default App;
