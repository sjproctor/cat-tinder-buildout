# Cat Tinder Edit Functionality

### Challenges from Syllabus
As a developer, I have been commissioned to create an application where a user can see cute cats looking for friends. As a user, I can see a list of cats. I can click on a cat and see more information about that cat. I can also add cats to the list of cats looking for friends. If my work is acceptable to my client, I may also be asked to add the ability to remove a cat from the list as well as edit cat information.

- As a user, I can fill out a form to edit an existing cat
- As a developer, I can add onChange and value attributes to each input
- As a developer, I can pass the form data to App.js on submit
- As a developer, I can see my updated cat logged in the console on submit
- As a user, I can see a button on my show page that will take me to the edit page for that particular cat
- As a user, I can be routed to the show page after I submit the edited cat form

**NOTE:** We are still only interacting with mock data so we will not see a new cat added to the collection of cats.


### Cat Tinder Day 3: Process

**Cat Edit Form**
- Add Reactstrap Form and FormGroup tags to CatEdit

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
- Refactor the CatEdit route to accept props

Example:
```javascript
editCat = (editcat, id) => {
  console.log("editcat:", editcat)
  console.log("id:", id)
}

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
```

**Submitting Cats**
- Add a handleSubmit method to CatEdit
- e.preventDefault to keep the form from clearing unnecessarily
- Call the method from App.js and pass the form object and id of the cat

Example:
```javascript
handleSubmit = (e) => {
  // keeps react from refreshing the page unnecessarily
  e.preventDefault()
  // a function call being passed from App.js
  this.props.editCat(this.state.form, this.props.cat.id)
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
  Edit Cat Profile
</Button>
```

**Getting to the Edit Page**
- Create a button in CatShow that will allow you to edit the cat

```javascript
<NavLink
  to={`/catedit/${this.props.cat.id}`}
>
  <Button color="secondary">
    Edit Cat Profile
  </Button>
</NavLink>
```

**Redirect**
- Add a success attribute to state set to false
- Add a setState to handleSubmit to update success to true
- Import Redirect from react-router-dom
- Conditional rendering using string interpolation to redirect to "catshow/${this.props.cat.id}"

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
  this.props.editCat(this.state.form, this.props.cat.id)
  // added setState
  this.setState({ success: true })
}

<Footer />
// JavaScript code at the bottom of the JSX that will redirect when success is true
{ this.state.success &&
  <Redirect
    to={ `/catshow/${this.props.cat.id}` }
  />
}
</React.Fragment>
```
