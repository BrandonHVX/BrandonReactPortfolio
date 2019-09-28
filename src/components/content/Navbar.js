import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons'
import {
  Navbar,
  NavDropdown,
  Button,
  Collapse,
  Nav,
  NavItem
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default props => {
  const [isOpen, setOpen] = useState(false)
  const toggle = () => setOpen(!isOpen)

  return (
    <Navbar className="mobile-nav" collapseOnSelect bg="dark" expand="lg">
      Hello
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Nav.Link tag={Link} to={'/page-1'}>
              About
            </Nav.Link>
          </NavItem>
          <NavItem>
            <NavDropdown title="Projects" id="collasible-nav-dropdown">
              <NavDropdown.Item tag={Link} to={'/webdev'}>
                WebDev
              </NavDropdown.Item>
              <NavDropdown.Item tag={Link} to={'/video'}>
                Video
              </NavDropdown.Item>
              <NavDropdown.Item tag={Link} to={'/design'}>
                Design
              </NavDropdown.Item>
              <NavDropdown.Item tag={Link} to={'/motion'}>
                Motion
              </NavDropdown.Item>
            </NavDropdown>
          </NavItem>
          <NavItem>
            <Nav.Link tag={Link} to={'/page-2'}>
              Projects
            </Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link tag={Link} to={'/page-3'}>
              page 3
            </Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link tag={Link} to={'/page-4'}>
              page 4
            </Nav.Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
