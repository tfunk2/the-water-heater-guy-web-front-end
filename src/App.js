import React, { Component } from 'react';
import './App.css';
import HeaderContainer from "./components/containers/HeaderContainer"
import NavBar from "./components/items/NavBar"

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <NavBar />
      </div>
    )
  }
}

export default App;
