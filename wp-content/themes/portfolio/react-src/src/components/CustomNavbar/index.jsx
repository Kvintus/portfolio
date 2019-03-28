import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import './style.scss'
import { Container } from 'react-bootstrap';

class CustomNavbar extends React.Component {
    state = {
      isTop: true,
    }
    componentDidMount() {
        document.addEventListener('scroll', () => {
          const isTop = window.scrollY < (100 - 70);
          if (isTop !== this.state.isTop) {
              this.setState({ isTop })
          }
        });
    }
    
    scrollToCustom(section) {
      let element = document.getElementById(section);
      window.scrollTo(0, element.offsetTop - 56)
    }

    render() {
        return (
          <Navbar bg="dark" variant="dark" expand="md" className={
              (this.state.isTop ? '' : 'after-scroll') + ' navbary'
          }>
            <Container>
              <Navbar.Brand href="#home">
                <img width={45} height={45} className="logo-invert" src={require('./robustthickest.svg')} alt=""/>
                <span className="rest-of-name" onClick={() => this.scrollToCustom('#about-me')}>
                  OLIK
                </span>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                  <span onClick={() => this.scrollToCustom('caro-banner')} className="nav-link">Home</span>
                    <span onClick={() => this.scrollToCustom('about-me')} className="nav-link">About</span>
                    <span onClick={() => this.scrollToCustom('work')} className="nav-link">Work</span>
                    <span onClick={() => this.scrollToCustom('resume')} className="nav-link">Resume</span>
                    <span onClick={() => this.scrollToCustom('contact-me')} className="nav-link">Contact</span>
                  </Nav>
                </Navbar.Collapse>
            </Container>
            
          </Navbar>
        )
    }
}

export default CustomNavbar