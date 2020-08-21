# Cat Tinder Introduction

### Challenges from Syllabus 
As a developer, I have been commissioned to create an application where a user can see cute cats looking for friends. As a user, I can see a list of cats. I can click on a cat and see more information about that cat. I can also add cats to the list of cats looking for friends. If my work is acceptable to my client, I may also be asked to add the ability to remove a cat from the list as well as edit cat information.

- As a developer, I can create a directory in *src* called *pages*
- As a developer, I can create a directory in *src* called *components*
- As a developer, I can create a directory in *src* called *assets*
- As a developer, I can create a file called *Header.j* in the *components* directory
- As a developer, I can create a file called *Footer.j* in the *components* directory
- As a developer, I can create a file called *Home.js* in the *pages* directory
- As a developer, I can create a file called *CatIndex.js* in the *pages* directory
- As a developer, I can create a file called *CatShow.js* in the *pages* directory
- As a developer, I can create a file called *CatNew.js* in the *pages* directory
- As a developer, I can create a file called *CatEdit.js* in the *pages* directory
- As a developer, I can create a file called *NotFound.js* in the *pages* directory
- As a developer, I can add a file to *src* called *mockCats.js* and add an array of cat objects
- As a developer, I can add Reactstrap to my application
- As a developer, I can use Reactstrap to create the header UI
- As a developer, I can use Reactstrap to create the footer UI
- As a developer, I can import the header and footer to all the page components
- As a developer, I can add some styling to the Home component
- As a developer, I can add `react-router-dom` to my application
- As a developer, I can add routes to be able to navigate manually to all pages

### Cat Tinder Day 1: Process

**Create App**
- $ yarn create react-app cat-tinder-frontend
- $ cd cat-tinder-frontend

**File Structure**
- Create assets directory
- Create components directory
  - Header.js
  - Footer.js
- Create pages directory
  - Home.js
  - CatIndex.js
  - CatShow.js
  - CatNew.js
  - CatEdit.js
  - NotFound.js

**Basic Setup**
- Import all files to App.js
- Add necessary React content to all pages
- Import Header.js and Footer.js to all pages

Example:
```javascript
import React, { Component } from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

class CatIndex extends Component{
  render(){
    return(
      <React.Fragment>
        <Header />
        <h2>All the cats</h2>
        <Footer />
      </React.Fragment>
    )
  }
}
export default CatIndex
```

**Mock Cats**
- Create mockCats.js file in src
- Add an array of cat objects

```javascript
let cats = [
  {
    id: 1,
    name: "Mittens",
    age: 5,
    enjoys: "sunshine and warm spots"
  },
  {
    id: 2,
    name: "Raisins",
    age: 4,
    enjoys: "scaring the dogs"
  },
  {
    id: 3,
    name: "Toast",
    age: 1,
    enjoys: "getting all the attention"
  }
]
export default cats
```
- Import mock data file to App.js and set it to state

**Reactstrap**  
- $ yarn add bootstrap
- $ yarn add reactstrap
- Add to src/index.js: import 'bootstrap/dist/css/bootstrap.min.css'
- Add necessary imports and styles to Header and Footer

**Style Home Page**
- Add photos for home page to assets file
- Add content to home page

Example:
```javascript
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
```
- Add stylings to App.css

```css
#footer{
  display: flex;
  justify-content: space-around;
  margin-top: 5rem;
  position: sticky;
}

#home-body{
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin-bottom: 5rem;
}

.cat{
  height: 15rem;
  border: 2px solid black;
}
```

**Routing**
- $ yarn add react-router-dom
- Add imports to App.js

```javascript
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
```

- Set basic routes to all pages
- Show and edit will require params

Example:
```javascript
<Router>
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
</Router>
```
