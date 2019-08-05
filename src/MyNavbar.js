import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

class MyNavbar extends Component{
    render () {
        return (
            <div>
              <Navbar bg="light">
                <Navbar.Brand href="/home">goohub-gui</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/calendar">calendar</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
        );
    }
}
export default MyNavbar;
