import React from 'react'
import {Navbar} from 'react-bootstrap'
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
                <p>ROLIK</p>
              </Navbar.Brand>
            </Container>
          </Navbar>
        )
    }
}

export default CustomNavbar