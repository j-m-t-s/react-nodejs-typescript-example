import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { SneakersPage } from './components/Sneakers/SneakersPage';

class App extends Component {

  state = {
  }





  render() {

    return (
      <div className="App">
        <div>stuff goes here</div>
        <SneakersPage />
      </div>
    );
  }
}

export default App;
