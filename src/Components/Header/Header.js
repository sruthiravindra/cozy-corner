import React, { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem
} from "reactstrap";
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <section className='header'>
      <Navbar dark color="primary" sticky='top' expand="md">
        <NavbarBrand className="ms-5" href="/">
          <h2 className="mt-1" style={{ fontSize: '20px' }}><i class="fa fa-solid fa-book"></i> COZY CORNER</h2>
        </NavbarBrand>
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
        <Collapse isOpen={menuOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink className='nav-link' to='/'>
                <i className="fa fa-list fa-lg" /> Books
              </NavLink>
            </NavItem>
          </Nav>
          <Button className='navbar-button'>Login</Button>
          <Button className='navbar-button'>Sign Up</Button>
        </Collapse>
      </Navbar>
    </section>

  );
}

export default Header