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

class CatNew extends Component{
  constructor(props){
    super(props)
    this.state = {
      form:{
        name: "",
        age: "",
        enjoys: ""
      },
      success: false
    }
  }

  handleChange = (event) => {
    // destructuring form out of state
    let { form } = this.state
    form[event.target.name] = event.target.value
    this.setState({ form: form })
  }

  handleSubmit = (event) => {
    // keeps react from refreshing the page unnecessarily
    event.preventDefault()
    this.props.createNewCat(this.state.form)
    this.setState({ success: true })
  }

  render(){
    return(
      <>
        <Header />
        <h2>Add a New Cat Friend</h2>
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
            Create a New Profile
          </Button>
        </Form>
        <Footer />
        { this.state.success && <Redirect to="/catindex" /> }
      </>
    )
  }
}
export default CatNew
