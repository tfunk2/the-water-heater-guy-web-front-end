import React, { Component } from 'react';
import './App.css';
import HeaderContainer from "./components/containers/HeaderContainer"
import NavBar from "./components/items/NavBar"
import ServicesAndPricing from "./components/containers/ServicesAndPricing"
import Home from "./components/containers/Home"

class App extends Component {

  state = {
    activeTab: "home"
  }

  setActiveTab = (tabClicked) => {
    this.setState({ activeTab: tabClicked })
  }

  activePage = () => {
    switch(this.state.activeTab) {
      case "home":
        return <Home />
      case "services-and-pricing":
        return <ServicesAndPricing />
      case "service-area":
        return <></>
      case "contact-me":
        return <></>
      case "testimonials":
        return <></>
      case "about":
        return <></>
      default:
        return <></> // Home page?
    }
  }

  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <NavBar setActiveTab={this.setActiveTab} />
        {this.activePage()}
      </div>
    )
  }
}

export default App;
