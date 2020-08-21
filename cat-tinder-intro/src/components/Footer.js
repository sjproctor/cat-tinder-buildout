import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'

class Footer extends Component{
  render(){
    return(
      <React.Fragment>
        <div id="footer">
          <Nav>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/catindex">All the Cats</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/catnew">Add a New Cat</NavLink>
            </NavItem>
          </Nav>
        </div>
      </React.Fragment>
    )
  }
}
export default Footer
