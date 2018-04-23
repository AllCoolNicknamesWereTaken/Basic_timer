import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from './Counter';

class App extends Component {
  success() {
    alert('sukces1');
    console.log("sukces");
  }

  render() {
    return (
      <div className="App">
        <Counter from={62} to={0} onSuccess={this.success}/>
      </div>
    );
  }
}// spr aktualny czas, czas powstania last time, apdate, spr jaki jest atualny czas i zaktualizowac request animation frames

export default App;
