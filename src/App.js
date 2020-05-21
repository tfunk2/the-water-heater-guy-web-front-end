import React, { Component } from 'react';
import './App.css';
import HeaderContainer from "./components/containers/HeaderContainer"
import NavBar from "./components/items/NavBar"
import ServicesAndPricing from "./components/containers/ServicesAndPricing"
import Home from "./components/containers/Home"
import ServiceArea from "./components/containers/ServiceArea"
import ContactMe from "./components/containers/ContactMe"
import Testimonials from "./components/containers/Testimonials"
import About from "./components/containers/About"

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
        return <ServiceArea />
      case "contact-me":
        return <ContactMe />
      case "testimonials":
        return <Testimonials />
      case "about":
        return <About />
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
