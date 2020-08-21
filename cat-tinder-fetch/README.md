# Cat Tinder Fetch Functionality
As a developer, I have been commissioned to create an application where a user can see cute cats looking for friends. As a user, I can see a list of cats. I can click on a cat and see more information about that cat. I can also add cats to the list of cats looking for friends. If my work is acceptable to my client, I may also be asked to add the ability to remove a cat from the list as well as edit cat information.

### Challenges from Syllabus: Read
- As a developer, I can get the cats from the database and set the array in state
- As a user, I can see all the cats
- As a user, I can see the information for just one cat

### Challenges from Syllabus: Create
- As a developer, I can update the `createNewCat` method to post information to the database
- As a user, I can create a new cat
- As a user, I can see my new cat in the cat list

### Challenges from Syllabus: Update
- As a developer, I can update the `editCat` method to update information in the database
- As a user, I can edit an existing cat
- As a user, I can see the information for my edited cat

### Challenges from Syllabus: Delete
- As a developer, I can create a `deleteCat` method that will remove a cat from the database
- As a developer, I can pass the method to the CatShow component
- As a user, I can navigate to the page of one specific cat and see a delete button
- As a user, I can click the button see all the cats with the specific cat removed

### Cat Tinder Day 5: Process

**Cat Read Fetch**
- Remove mockCats import
- Update cats in state to be an empty array
- Wrap a fetch call in a componentDidMount()

Example:
```javascript
constructor(props){
  super(props)
  this.state = {
    // remove the mock cats and start with an empty array
    cats: []
  }
}

componentDidMount(){
  fetch("http://localhost:3000/cats")
  .then(response => {
    // checking for a successful response
    if(response.status === 200){
       // convert the response to json
       // returns a Promise
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
```

**Cat Create Fetch**
- Update createNewCat method to make a fetch and post new cat

Example:
```javascript
createNewCat = (newcat) => {
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
    }
    return response
  })
  .catch(errors => {
    console.log("create errors:", errors)
  })
}
```

**Cat Edit Fetch**
- Update editCat method to make a fetch and update existing cat

Example:
```javascript
editCat = (editcat, id) => {
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
      this.componentDidMount()
    }
    return response
  })
  .catch(errors => {
    console.log("edit errors", errors)
  })
}
```

**Cat Delete Fetch**
- Create a method to make a fetch request to delete a cat from the database

Example:
```javascript
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
```

- Add a button in the show page to call the delete method onClick and reroute to the index page

Example:
```javascript
<NavLink
  to={"/catindex"}
>
  <Button color="secondary" onClick={ () => this.props.deleteCat(this.props.cat.id) }>
    Delete Cat Profile
  </Button>
</NavLink>
```
