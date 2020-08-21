import React, { useState }  from 'react'
// import necessary components from reactstrap
import {
  Collapse,
  Container,
  Jumbotron,
  Nav,
  Navbar,
  NavbarBrand,
  NavLink,
  NavItem,
  NavbarToggler
} from 'reactstrap'

// creating a functional component
const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true)
  const toggleNavbar = () => setCollapsed(!collapsed)
  return (
    <div>
      {/* copied from reactstrap Jumbotron and Navbar */}
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Cat Tinder</h1>
          <p className="lead">It's like Tinder, but for cats.</p>
        </Container>
        <div>
          <Navbar color="faded" light>
            <NavbarBrand href="/" className="mr-auto"></NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink to="/catindex">See All the Cats</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/catnew">Add a Cat</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </Jumbotron>
    </div>
  )
}

export default Header
