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
import mockCats from './mockCats.js'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      cats: mockCats
    }
  }

  createNewCat = (newcat) => {
    console.log("newcat:", newcat)
  }

  updateCat = (cat, id) => {
    console.log("cat:", cat)
    console.log("id:", id)
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
                  <CatShow cat={ cat } />
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
                    updateCat={ this.updateCat }
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
