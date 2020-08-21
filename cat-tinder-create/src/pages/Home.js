import React, { Component } from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import toast from '../assets/toast.png'
import raisins from '../assets/raisins.png'

class Home extends Component{
  render(){
    return(
      <React.Fragment>
        <Header />
        <div id="home-body">
          <img src={ toast } alt="Close up of a cat nose" className="cat"/>
          <img src={ raisins } alt="Close up of a cat nose" className="cat"/>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}
export default Home
