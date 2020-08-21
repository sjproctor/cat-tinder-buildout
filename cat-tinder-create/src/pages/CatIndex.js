import React, { Component } from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
// import necessary components from reactstrap
import { Card, CardTitle, Col } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class CatIndex extends Component{
  render(){
    return(
      <React.Fragment>
        <Header />
        <h2>Meet the Cats!</h2>
        <br />
          <Col sm="6">
            { this.props.cats.map((cat, index) => {
              return (
                <Card body key={ index }>
                  <CardTitle>
                    <h4>
                      <NavLink
                        to={`/catshow/${cat.id}`}
                      >
                        { cat.name }
                      </NavLink>
                    </h4>
                  </CardTitle>
                </Card>
              )
            })}
          </Col>
        <Footer />
      </React.Fragment>
    )
  }
}
export default CatIndex
