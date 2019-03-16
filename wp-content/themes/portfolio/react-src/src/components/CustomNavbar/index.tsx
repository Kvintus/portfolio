import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import './style.scss'
import { Container } from 'react-bootstrap';

class CustomNavbar extends React.Component {
    state = {
      isTop: false,
    }
    componentDidMount() {
        // document.addEventListener('scroll', () => {
        //   const isTop = window.scrollY < (100 - 56);
        //   if (isTop !== this.state.isTop) {
        //       this.setState({ isTop })
        //   }
        // });
    }
    

    render() {
        return (
          <Navbar bg="dark" variant="dark" className={
              (this.state.isTop ? 'transparent-bg' : '') + ' navbary'
          }>
            <Container>
              <Navbar.Brand href="#home">
                <img width={50} height={50} className="logo-invert" src={require('./logo.svg')} alt=""/>
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