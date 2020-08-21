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
              exact path={"/catshow/:id"}
              render={ (props) => {
                let id = props.match.params.id
                let cat = this.state.cats.find(cat => cat.id === parseInt(id))
                return (
                  <CatShow
                    cat={ cat }
                  />
                )
              }}
            />

            {/* New */}
            <Route path="/catnew" component={ CatNew } />

            {/* Edit */}
            <Route path="/catedit/:id" component={ CatEdit } />

            {/* Error Handling */}
            <Route component={ NotFound }/>

          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}
export default App
