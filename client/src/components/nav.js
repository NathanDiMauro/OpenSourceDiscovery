import React from 'react'
import {Link, BrowserRouter as Router } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Navigation extends React.Component {
    render(){
        return(
        <Navbar variant="light" bg="dark" sticky="top">
        <Navbar.Brand><Link style={brandStyle} to="/">Asurion Open Source Discovery</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link><Link style={linkStyle} to="/">Home</Link></Nav.Link>
              <Nav.Link><Link style={linkStyle} to="/users">Users</Link></Nav.Link>
              <Nav.Link><Link style={linkStyle} to="/contact">Contact</Link></Nav.Link>
              <Nav.Link><Link style={linkStyle} to="/projects">Projects</Link></Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>)
    }
}
export default Navigation

const brandStyle = {
    color: "blueviolet",
    "font-size": "200%",
  }

const linkStyle = {
  color: "blueviolet",
  "font-size": "150%",
}