import React, { Component } from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import { Card, CardTitle, CardText, Col } from 'reactstrap'

class CatShow extends Component{
  render(){
    return(
      <>
        <Header />
        <Col sm="6" id="show-body">
          <Card body >
            <CardTitle>Hi, my name is { this.props.cat.name }!</CardTitle>
            <CardText>I am { this.props.cat.age } years old. I enjoy { this.props.cat.enjoys }.</CardText>
          </Card>
        </Col>
        <Footer />
      </>
    )
  }
}
export default CatShow
