import React, { Component } from 'react'
import raisins from '../assets/raisins.png'
import toast from '../assets/toast.png'
import kevin from '../assets/kevin.png'

class Home extends Component{
  render(){
    return(
      <React.Fragment>
        <div id="home-body">
          <img src={ raisins } alt="sleepy flat-faced kitty" className="cat" />
          <img src={ kevin } alt="snuggly kitty" className="cat" />
          <img src={ toast } alt="upside down kitty face" className="cat" />
        </div>
      </React.Fragment>
    )
  }
}
export default Home
