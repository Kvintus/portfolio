import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, Button, Navbar, Collapse, NavDropdown, Form, Nav, FormControl, Jumbotron, Carousel } from 'react-bootstrap';
import Test from './Test'

class App extends Component {
  styles = {
    navbar: {
      height:  'calc(100vh - 56px)'
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar bg="dark" expand="lg" variant="dark" className="navbary">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse >
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="carouselly">

        <Carousel >
          <Carousel.Item style={this.styles.navbar} className="test">
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
        <h3>Peter alyurop</h3>
      </div>
    );
  }
}

export default App;
