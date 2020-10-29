import React, { useState } from 'react'
import {
  Collapse,
  Container,
  Jumbotron,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true)
  const toggleNavbar = () => setCollapsed(!collapsed)
  return(
    <React.Fragment>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Cat Tinder</h1>
          <p className="lead">It's like Tinder but for cats.</p>
          <Navbar light>
              <NavbarToggler onClick={ toggleNavbar } className="mr-2"/>
              <Collapse isOpen={ !collapsed } navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink href="/catindex">See All the Cats</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/catnew">Create a New Cat</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
          </Navbar>
        </Container>
      </Jumbotron>
    </React.Fragment>
  )
}

export default Header
