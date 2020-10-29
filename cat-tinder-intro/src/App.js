import React, { Component } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'

import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

import './App.css'
import mockCats from './mockCats.js'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      cats: mockCats
    }
  }
  render(){
    return(
      <Router>
        <Header />
          <Switch>
            {/* Home */}
            <Route exact path="/" component={ Home } />
            {/* Index */}
            <Route path="/catindex" component={ CatIndex } />
            {/* Show */}
            <Route path="/catshow/:id" component={ CatShow } />
            {/* New */}
            <Route path="/catnew" component={ CatNew } />
            {/* Edit */}
            <Route path="/catedit/:id" component={ CatEdit } />
            <Route component={ NotFound }/>
          </Switch>
        <Footer />
      </Router>
    )
  }
}
export default App
