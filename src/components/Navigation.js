import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import NetlifyAuth from './NetlifyAuth';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const user = this.props.user || 'Login';

    return (
      <div>
        <Navbar color="dark" light expand="md">
          <NavbarBrand className='text-white' href="/">CanvasBase</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className='text-white' href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='text-white' href="/search">Search</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='text-white' href="https://github.com/jontiritilli/canvasbase.git" target='_blank' rel='noreferrer noopener'>GitHub</NavLink>
              </NavItem>
              <NetlifyAuth />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;

Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}
NavbarBrand.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}