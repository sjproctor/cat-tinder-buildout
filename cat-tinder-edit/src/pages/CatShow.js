import React, { Component } from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import { Button, Card, CardTitle, CardText, Col } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class CatShow extends Component{
  render(){
    return(
      <React.Fragment>
        <Header />
        <Col sm="6" id="show-body">
          <Card body >
            <CardTitle>Hi, my name is { this.props.cat.name }!</CardTitle>
            <CardText>I am { this.props.cat.age } years old. I enjoy { this.props.cat.enjoys }.</CardText>
            <NavLink
              to={`/catedit/${this.props.cat.id}`}
            >
              <Button color="secondary">
                Edit Cat Profile
              </Button>
            </NavLink>
          </Card>
        </Col>
        <Footer />
      </React.Fragment>
    )
  }
}
export default CatShow
