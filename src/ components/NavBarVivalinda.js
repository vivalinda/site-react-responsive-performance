import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  } from 'reactstrap';
  import logo from '../static/logo.svg'

export default class NavBarVivalinda extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="navme" fixed="top" dark expand="md">
          <NavbarBrand href="/">
          <img 
              alt="Vivalinda"
               src={logo}
               className="logo"
               width="150px"
               height="auto"
               />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Parcerias</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://fb.com/vivalindaoficial">Fraquias</NavLink>
              </NavItem>
              <NavItem>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
