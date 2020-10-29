import React, { Component } from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap'
import { Redirect } from 'react-router-dom'

class CatEdit extends Component{
  constructor(props){
    super(props)
    // small amount of state to manage the form
    this.state = {
      form:{
        name: this.props.cat.name,
        age: this.props.cat.age,
        enjoys: this.props.cat.enjoys
      },
      success: false
    }
  }

  handleChange = (e) => {
    // destructuring form out of state
    let { form } = this.state
    form[e.target.name] = e.target.value
    // setting state to the updated form
    this.setState({ form: form })
  }

  handleSubmit = (e) => {
    // keeps react from refreshing the page unnecessarily
    e.preventDefault()
    // a function call being passed from App.js
    this.props.updateCat(this.state.form, this.props.cat.id)
    this.setState({ success: true })
  }

  render(){
    return(
      <React.Fragment>
        <Header />
        <h2>Update Cat Information</h2>
        <Form>
          <FormGroup>
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              onChange={ this.handleChange }
              value={ this.state.form.name }
            />
          </FormGroup>
          <FormGroup>
            <Label>Age</Label>
            <Input
              type="number"
              name="age"
              onChange={ this.handleChange }
              value={ this.state.form.age }
            />
          </FormGroup>
          <FormGroup>
            <Label>Enjoys</Label>
            <Input
              type="text"
              name="enjoys"
              onChange={ this.handleChange }
              value={ this.state.form.enjoys }
            />
          </FormGroup>
          <Button
            name="submit"
            color="secondary"
            onClick={ this.handleSubmit }
          >
            Edit Cat Profile
          </Button>
        </Form>
        <Footer />
        { this.state.success &&
          <Redirect
            to={ `/catshow/${this.props.cat.id}` }
          />
        }
      </React.Fragment>
    )
  }
}
export default CatEdit
