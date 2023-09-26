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
import {Button} from 'reactstrap';

const Header = ()=>{
  const [menuOpen,setMenuOpen] = useState(false);
  return(
      <Navbar dark color="primary" sticky='top' expand="md">
        <NavbarBrand className="ms-5" href="/">
          <h2 className="mt-1" style={{ fontSize: '20px' }}><i class="fa fa-solid fa-book"></i> Travel Organizer</h2>
        </NavbarBrand>
        <NavbarToggler onClick={()=>setMenuOpen(!menuOpen)}/>
        <Collapse isOpen={menuOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink className='nav-link' to='/'>
                <i className="fa fa-home fa-lg"/> Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link' to='/'>
                <i className="fa fa-list fa-lg"/> Books 
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link' to='/'>
                <i className="fa fa-info fa-lg"/> About 
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link' to='/'>
                <i className="fa fa-address-card fa-lg"/> Contact  
              </NavLink>
            </NavItem>
          </Nav>
          <Button className='navbar-button'>Borrow</Button>
        </Collapse>
    </Navbar>
  );
}

export default Header