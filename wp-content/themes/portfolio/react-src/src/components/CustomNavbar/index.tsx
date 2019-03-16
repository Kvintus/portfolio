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
          <Navbar bg="dark" variant="dark" className={
              (this.state.isTop ? '' : 'after-scroll') + ' navbary'
          }>
            <Container>
              <Navbar.Brand href="#home">
                <img width={45} height={45} className="logo-invert" src={require('./logo.svg')} alt=""/>
                <span className="rest-of-name">
                  OLIK
                </span>
              </Navbar.Brand>
              <Nav.Link href="#home">Home</Nav.Link>
            </Container>
          </Navbar>
        )
    }
}

export default CustomNavbar