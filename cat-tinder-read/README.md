# Cat Tinder Read Functionality

### Challenges from Syllabus
As a developer, I have been commissioned to create an application where a user can see cute cats looking for friends. As a user, I can see a list of cats. I can click on a cat and see more information about that cat. I can also add cats to the list of cats looking for friends. If my work is acceptable to my client, I may also be asked to add the ability to remove a cat from the list as well as edit cat information.

- As a developer, I can pass the cat mock data in state to my index component
- As a user, I can see a page that lists of all the cat names
- As a developer, I can refactor the show route to pass the param of id for one cat
- As a developer, I can see a page featuring all the information for one cat
- As a user, I can click on a cat name and be taken to a page that shows me all the information about that cat


### Cat Tinder Day 2: Process

**Cat Index Routing**
- Refactor the static route to a dynamic route to accept attributes passed to the CatIndex component
- Pass the mock data from state to the CatIndex

Example:
```javascript
<Route
  path="/catindex"
  render={ (props) => <CatIndex
    cats={ this.state.cats }
    /> }
/>
```

**Cat Index Component**
- Import Reactstrap components to add styling for the CatIndex component
- Map over the array being passed as props and access all the cat names

Example:
```javascript
import { Card, CardTitle, Col } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class CatIndex extends Component{
  render(){
    // logging to check for cats getting passed to CatIndex
    console.log(this.props.cats)
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
                    <h4>{ cat.name }</h4>
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
```

**Cat Show Routing**
- Refactor static routes to accept attributes
- Use match.params from React-router to pass the correct id to the route param

Example:
```javascript
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
```

**Cat Show Component**
- Import Reactstrap components to add styling for the CatShow component
- Using dot notation to display information about a single cat

Example:
```javascript
import { Card, CardTitle, CardText, Col } from 'reactstrap'

class CatShow extends Component{
  render(){
    return(
      <React.Fragment>
        <Header />
        <Col sm="6" id="show-body">
          <Card body >
            <CardTitle>Hi, my name is { this.props.cat.name }!</CardTitle>
            <CardText>I am { this.props.cat.age } years old. I enjoy { this.props.cat.enjoys }.</CardText>
          </Card>
        </Col>
        <Footer />
      </React.Fragment>
    )
  }
}
export default CatShow
```

**Linking Cat Index to Cat Show**
- Using NavLink from React-router to create the link that will call upon the router in App.js and

Example:
```javascript
import { NavLink } from 'react-router-dom'


<CardTitle>
  <h4>
    <NavLink
      to={`/catshow/${cat.id}`}
    >
      { cat.name }
    </NavLink>
  </h4>
</CardTitle>
```
