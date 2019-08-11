import React, { Component } from 'react';
import logo from './logo.svg';
import '../App.scss';
import { Container } from 'react-bootstrap';
import { Provider } from "react-redux";
import "react-typeit/build/styles.min.css"
import Navbar from '../components/CustomNavbar/index.jsx'

// Sections
var Banner = require('../sections/Banner').default
import AboutMe from '../sections/AboutMe/AboutMe'
import Services from '../sections/Services/Services.jsx'
import Available from '../sections/Available/Available'
import MyWork from '../sections/MyWork/MyWork';
import Testimonials from '../sections/Testimonials/Testimonials'
import ContactMe from '../sections/ContactMe'
import Footer from '../sections/Footer'
// import Store from './redux/reducers'

 

class LandingPage extends Component {
  render() {
    return (
        <div>
          <Navbar/>
          <Banner/>
          <AboutMe id="about-me" className="section"/>
          <Services id="services"/>
          <Available></Available>
          <MyWork className="section" id="work"/>
          <Testimonials></Testimonials>
          <ContactMe className="section"/>
          <Footer/>
        </div>
    );
  }
}


export default LandingPage;
