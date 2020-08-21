# Cat Tinder Backend
As a developer, I have been commissioned to create an application where a user can see cute cats looking for friends. As a user, I can see a list of cats. I can click on a cat and see more information about that cat. I can also add cats to the list of cats looking for friends. If my work is acceptable to my client, I may also be asked to add the ability to remove a cat from the list as well as edit cat information.

## Challenge: Cat Tinder API Setup
- As a developer, I can create a new Rails application with a Postgresql database
- As a developer, I can add a resource for Cat that has a name, and age, and what the cat enjoys
- As a developer, I can create a testing suite in my Rails application
- As a developer, I can run my test suite and see pending tests

$ rails new cat-tinder-backend -d postgresql -T
$ rails db:create
$ bundle add rspec-rails
$ rails generate rspec:install
$ rails g resource cat name:string age:integer enjoys:text
$ rails db:migrate


## Challenge: Cat Tinder API Seeds
- As a developer, I can add cat seeds to the `seeds.rb` file
- As a developer, I can run the rails command to add cats to database

```ruby
cats = [
  {
    name: 'Moe',
    age: 11,
    enjoys: 'begging for food'
  },
  {
    name: 'Curly',
    age: 4,
    enjoys: 'sleeping on your face'
  },
  {
    name: 'Larry',
    age: 6,
    enjoys: 'sitting on your keyboard'
  }
]

# loop through the array and create each cat attribute
cats.each do |attributes|
  Cat.create attributes
  puts "creating cat #{attributes}"
end
```

$ rails db:seed


## Challenge: Cat Tinder API Endpoints
- As a developer, I can add an index request spec to my application
```ruby
it "gets a list of Cats" do
  # Create a new cat in the Test Database (not the same one as development)
  Cat.create(name: 'Felix', age: 2, enjoys: 'Walks in the park')
  # Make a request to the API
  get '/cats'
  # Convert the response into a Ruby Hash
  cats = JSON.parse(response.body)
  # Assure that we got a successful response
  expect(response).to have_http_status(:ok)
  # Assure that we got one result back as expected
  expect(cats.length).to eq 1
end
```
- As a developer, I can add an index endpoint to my application
```ruby
def index
  cats = Cat.all
  render json: cats
end
```
- As a developer, I can add a create request spec to my application
```ruby
it "creates a new Cat" do
  # The params we are going to send with the request
  cat_params = {
    cat: {
      name: 'Buster',
      age: 4,
      enjoys: 'Meow Mix, and plenty of sunshine.'
    }
  }
  # Send the request to the server
  post '/cats', params: cat_params
  # Assure that we get a success back
  expect(response).to have_http_status(:ok)
  # Look up the cat we expect to be created in the Database
  cat = Cat.first
  # Assure that the created cat has the correct attributes
  expect(cat.name).to eq 'Buster'
end
```
- As a developer, I can add a create endpoint to my application
```ruby
def create
  cat = Cat.create(cat_params)
  render json: cat
end
```
- As a developer, I can add a update endpoint to my application
```ruby
def update
  cat = Cat.find(params[:id])
  render json: cat
end
```
- As a developer, I can add a destroy endpoint to my application
```ruby
def destroy
  cat = Cat.find(params[:id])
  render json: cat  
end
```
- Check endpoints in postman

## Challenge: Cat Tinder API Validations
- As a developer, I can add the appropriate model specs that will ensure an incomplete cat throws an error
```ruby
it "should validate name" do
  cat = Cat.create
  expect(cat.errors[:name]).to_not be_empty
end

it "should validate age" do
  cat = Cat.create
  expect(cat.errors[:age]).to_not be_empty
end

it "should validate enjoys" do
  cat = Cat.create
  expect(cat.errors[:enjoys]).to_not be_empty
end
```
- As a developer, I can add the appropriate model validations to ensure the user submits a name, an age, and what the cat enjoys
```ruby
validates :name, :age, :enjoys, presence: true
```
- As a developer, I can add the appropriate request spec that will look for a 422 error if the validations are not met
```ruby
it "creates a new Cat" do
  # The params we are going to send with the request
  cat_params = {
    cat: {
      name: 'Buster',
      age: 4,
      enjoys: 'Meow Mix, and plenty of sunshine.'
    }
  }

  # Send the request to the server
  post '/cats', params: cat_params

  # Assure that we get a success back
  expect(response).to have_http_status(:ok)

  # Look up the cat we expect to be created in the Database
  cat = Cat.first

  # Assure that the created cat has the correct attributes
  expect(cat.name).to eq 'Buster'
end
```
- As a developer, I can add the appropriate request validations to ensure the API is sending useful information to the frontend developer
```ruby
def create
  cat = Cat.create(cat_params)
  if cat.valid?
    render json: cat
   else
    render json: cat.errors, status: :unprocessable_entity
    # This can also be written as:
    # render json: cat.errors, status: 422
   end
end
```
- As a developer, I can add a validation to assure that the enjoys value is at least 10 characters long
```ruby
validates :enjoys, length: { minimum: 10 }
```

## Challenge: Cat Tinder API CORS
- As a developer, I can enable my controller to accept requests from outside applications
```ruby
class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
end
```
- As a developer, I can add the CORS gem to my Rails application
**Gemfile**
```ruby
gem 'rack-cors', :require => 'rack/cors'
```
- As a developer, I can add the `cors.rb` file to my application
Add **cors.rb** to **config/initializers/**
```ruby
# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'  # <- change this to allow requests from any domain while in development.

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
```
$ bundle install
restart server if running
