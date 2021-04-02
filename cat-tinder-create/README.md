# Cat Tinder Create Functionality

### Challenges from Syllabus
As a developer, I have been commissioned to create an application where a user can see cute cats looking for friends. As a user, I can see a list of cats. I can click on a cat and see more information about that cat. I can also add cats to the list of cats looking for friends. If my work is acceptable to my client, I may also be asked to add the ability to remove a cat from the list as well as edit cat information.

- As a user, I can fill out a form to add a new cat
- As a developer, I can add onChange and value attributes to each input
- As a developer, I can pass the form data to App.js on submit
- As a developer, I can see my new cat logged in the console on submit
- As a user, I can be routed to the index page after I submit the new cat form

**NOTE:** We are still only interacting with mock data so we will not see a new cat added to the collection of cats.


### Cat Tinder Day 3: Process

**Cat Form**
- Add state object to New Cat

```javascript
constructor(props){
  super(props)
  this.state = {
    form:{
      name: "",
      age: "",
      enjoys: ""
    }
  }
}
```

- Add Reactstrap Form and FormGroup tags to CatNew

Example:
```javascript
<Form>
  <FormGroup>
    <Label>Name</Label>
    <Input
      type="text"
      name="name"
    />
  </FormGroup>
  <FormGroup>
    <Label>Age</Label>
    <Input
      type="number"
      name="age"
    />
  </FormGroup>
  <FormGroup>
    <Label>Enjoys</Label>
    <Input
      type="text"
      name="enjoys"
    />
  </FormGroup>
</Form>
```

**Cats in State**
- Add a form object in state
- Add a handleChange method that updates the form in state

Example:
```javascript
handleChange = (e) => {
  // destructuring form out of state
  let { form } = this.state
  form[e.target.name] = e.target.value
  // setting state to the updated form
  this.setState({ form: form })
}
```

- Add onChange and value attributes to each input

**Passing Cats Up the River**
- Add a method to App.js
- Refactor the CatNew route to accept props

Example:
```javascript
createNewCat = (newcat) => {
  console.log(newcat)
}

<Route
  path="/catnew"
  render={ (props) => <CatNew createNewCat={ this.createNewCat }/> }
/>
```

**Submitting Cats**
- Add a handleSubmit method to CatNew
- e.preventDefault to keep the form from clearing unnecessarily

Example:
```javascript
handleSubmit = (e) => {
  // keeps react from refreshing the page unnecessarily
  e.preventDefault()
  this.props.createNewCat(this.state.form)
}
```

- Add a Reactstrap button to the form
- Call the method onSubmit
- Add the Reactstrap import

Example:
```javascript
<Button
  name="submit"
  color="secondary"
  onClick={ this.handleSubmit }
>
  Create a New Profile
</Button>
```

**Redirect**
- Add a success attribute to state set to false
- Add a setState to handleSubmit to update success to true
- Import Redirect from react-router-dom
- Conditional rendering to redirect to "/catindex"

Example:
```javascript
// react-router import
import { Redirect } from 'react-router-dom'

constructor(props){
  super(props)
  this.state = {
    form:{
      name: "",
      age: "",
      enjoys: ""
    },
    // added success attribute
    success: false
  }
}

handleSubmit = (e) => {
  e.preventDefault()
  this.props.createNewCat(this.state.form)
  // added setState
  this.setState({ success: true })
}

<Footer />
// JavaScript code at the bottom of the JSX that will redirect when success is true
{ this.state.success && <Redirect to="/catindex" />}
</React.Fragment>
```
