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
          <NavbarToggler id="button1" aria-label="Botão Menu" aria-pressed="false" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink id="link1" role="link" aria-label="Parcerias" aria-labelledby="link1" href="/components/">Parcerias</NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="link2" role="link" aria-label="Franquias" aria-labelledby="link2"  href="https://fb.com/vivalindaoficial">Franquias</NavLink>
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
