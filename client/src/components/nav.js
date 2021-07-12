import React from 'react'
import {Link, BrowserRouter as Router } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Navigation extends React.Component {
    render(){
        return(
        <Navbar variant="light" bg="dark" sticky="top">
        <Navbar.Brand><Link style={brandStyle} to="/">A<span style={little}>surion</span> O<span style={little}>pen</span> S<span style={little}>ource</span></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
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
    "text-decoration": "none"
  }

const linkStyle = {
  color: "blueviolet",
  "font-size": "150%",
}

const cardStyle = {
  "margin-top": "15px",
}
const little = {
  "font-size": "70%",
}