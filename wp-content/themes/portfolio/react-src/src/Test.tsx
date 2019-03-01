import ReactDOM from 'react-dom'
import React from 'react'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'

interface state {
    open: boolean
}

class Example extends React.Component {
    state ={
        open: false
    }
    render() {
      const { open } = this.state;
      return (
        <h1>hello</h1>
      );
    }
  }

export default Example;