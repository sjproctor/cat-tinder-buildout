import React, { Component } from 'react'
import Home from './pages/Home'
import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import NotFound from './pages/NotFound'
// imports routing components
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './App.css'
// import mockCats from './mockCats.js'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      cats: []
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/cats")
    .then(response => {
      // checking for a successfull response
      if(response.status === 200){
         // convert the response to json
         // returns a promise
        return(response.json())
      }
    })
    .then(catsArray => {
      // set the state with the data from the backend into the empty array
      this.setState({ cats: catsArray })
    })
    .catch(errors => {
      console.log("index errors:", errors)
    })
  }

  createNewCat = (newcat) => {
    console.log(newcat)
    return fetch("http://localhost:3000/cats", {
      // converting an object to a string
      body: JSON.stringify(newcat),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json"
      },
      // HTTP verb so the correct endpoint is invoked on the server
      method: "POST"
    })
    .then(response => {
      // if the response is good  - reload the cats
      if(response.status === 200){
        this.componentDidMount()
      } else if(response.status === 422){
        alert("Enjoys needs to be at least 10 characters!")
      }
      return response
    })
    .catch(errors => {
      console.log("create errors:", errors)
    })
  }

  editCat = (editcat, id) => {
    console.log("editcat:", editcat)
    console.log("id:", id)
    return fetch(`http://localhost:3000/cats/${id}`, {
      // converting an object to a string
      body: JSON.stringify(editcat),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json"
      },
      // HTTP verb so the correct endpoint is invoked on the server
      method: "PATCH"
    })
    .then(response => {
      // if the response is good  - reload the cats
      if(response.status === 200){
        return response
      } else if(response.status === 422){
        alert("Enjoys needs to be at least 10 characters!")
      }
    })
    .catch(errors => {
      console.log("edit errors", errors)
    })
  }

  deleteCat = (id) => {
    return fetch(`http://localhost:3000/cats/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => {
      // if the response is good  - reload the cats
      if(response.status === 200){
        this.componentDidMount()
      }
      return response
    })
    .catch(errors => {
      console.log("delete errors:", errors)
    })
  }

  render(){
    return(
      <React.Fragment>
        <Router>
          <Switch>

            {/* Home */}
            <Route exact path="/" component={ Home } />

            {/* Index */}
            <Route
              path="/catindex"
              render={ (props) => <CatIndex
                cats={ this.state.cats }
                /> }
            />

            {/* Show */}
            <Route
              path={"/catshow/:id"}
              render={ (props) => {
                let id = props.match.params.id
                let cat = this.state.cats.find(cat => cat.id === parseInt(id))
                return (
                  <CatShow cat={ cat } deleteCat={ this.deleteCat }/>
                )
              }}
            />

            {/* New */}
            <Route
              path="/catnew"
              render={ (props) => <CatNew createNewCat={ this.createNewCat }/> }
            />

            {/* Edit */}
            <Route
              exact path={"/catedit/:id"}
              render={ (props) => {
                let id = props.match.params.id
                let cat = this.state.cats.find(cat => cat.id === parseInt(id))
                return(
                  <CatEdit
                    editCat={ this.editCat }
                    cat={ cat }
                  />
                )
              }}
            />

            {/* Error Handling */}
            <Route component={ NotFound }/>

          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}
export default App
