import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Container } from 'react-bootstrap';
import { Provider } from "react-redux";
import "react-typeit/build/styles.min.css"
import Navbar from './components/CustomNavbar/index.jsx'

// // Sections
// var Banner = require('./sections/Banner').default
// import AboutMe from './sections/AboutMe/AboutMe'
// import Services from './sections/Services/Services.jsx'
// import Available from './sections/Available/Available'
// import MyWork from './sections/MyWork/MyWork';
// import Testimonials from './sections/Testimonials/Testimonials'
// import ContactMe from './sections/ContactMe'
// import Footer from './sections/Footer'
// // import Store from './redux/reducers'
import LandingPage from './Views/LandingPage'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


 
function LandingPageRoute() {
  return (
    <LandingPage/>
  )
}

function SingleProjectRoute({match}) {
  return (
    <div>
      <h3>{match.params.slug}</h3>
    </div>
  )
}

class App extends Component {
 
  render() {
    return (
      <Router>
        <Route path="/project/:slug" component={SingleProjectRoute}/>
        <Route exact path="/" component={LandingPageRoute}/>
      </Router>
    );
  }
}


export default App;
