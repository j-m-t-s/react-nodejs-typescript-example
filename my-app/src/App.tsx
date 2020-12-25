import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { UsersPage } from './components/Users/UsersPage';

class App extends Component {

  state = {
  }





  render() {

    return (
      <div className="App">
        <div>stuff goes here</div>
        <UsersPage />
      </div>
    );
  }
}

export default App;
