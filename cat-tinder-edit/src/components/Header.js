import React, { Component } from 'react'
import {
  Collapse,
  Container,
  Jumbotron,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavbarToggler
} from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Header extends Component{
  constructor(props){
    super(props)
    this.state = {
      collapsed: true
    }
  }
  toggleNavbar = () => {
    this.state.collapsed === true ?
    this.setState({ collapsed: false }) :
    this.setState({ collapsed: true })
  }
  render(){
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Cat Tinder</h1>
            <p className="lead">It's like Tinder, but for cats.</p>
          </Container>
          <div>
            <Navbar color="faded" light>
              <NavbarBrand href="/" className="mr-auto"></NavbarBrand>
              <NavbarToggler onClick={ this.toggleNavbar } className="mr-2" />
              <Collapse isOpen={!this.state.collapsed} navbar>
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
      </React.Fragment>
    )
  }
}

export default Header
