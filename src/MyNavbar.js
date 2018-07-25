import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class MyNavbar extends Component{
    render () {
        return (
            <div>
              <Navbar>
                <Navbar.Header>
                  <Navbar.Brand>
                    <a href="/home">goohub-GUI</a>
                  </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                  <Navbar.Text>
                    <Link to="/calendar">Calendar</Link>&nbsp;
                  </Navbar.Text>
                  <Navbar.Text>
                    <Link to="/Action">Action</Link>&nbsp;
                  </Navbar.Text>
                  <Navbar.Text>
                    <Link to="/filter">Filter</Link>&nbsp;
                  </Navbar.Text>
                </Nav>
              </Navbar>
            </div>
        );
    }
}
export default MyNavbar;
