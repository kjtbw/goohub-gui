import React, {Component} from 'react';
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
                  <NavItem eventKey={1} href="/calendar">
                    Calendar
                  </NavItem>
                  <NavItem eventKey={2} href="/filter">
                    Filter
                  </NavItem>
                </Nav>
              </Navbar>
            </div>
        );
    }
}
export default MyNavbar;
