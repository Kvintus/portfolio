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
    

    render() {
        return (
          <Navbar bg="dark" variant="dark" expand="md" className={
              (this.state.isTop ? '' : 'after-scroll') + ' navbary'
          }>
            <Container>
              <Navbar.Brand href="#home">
                <img width={45} height={45} className="logo-invert" src={require('./logo.svg')} alt=""/>
                <span className="rest-of-name">
                  OLIK
                </span>
              </Navbar.Brand>
              {/* <div className="nav navbar-nav navbar-right">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#home">About</Nav.Link>
                <Nav.Link href="#home">Work</Nav.Link>
                <Nav.Link href="#home">Resume</Nav.Link>
                <Nav.Link href="#home">Blog</Nav.Link>
                <Nav.Link href="#home">Contact</Nav.Link>
              </div> */}
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Container>
          </Navbar>
        )
    }
}

export default CustomNavbar