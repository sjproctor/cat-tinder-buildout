require 'rails_helper'

# Documenting the behavior that is expected in the API
RSpec.describe 'Cats', type: :request do

  describe 'GET /cats' do
    it 'gets a list of Cats' do
      # Arrange: there needs to be some data in the db for the response
      # Create a new cat in the Test Database (not the same one as development)
      Cat.create(name: 'Felix', age: 2, enjoys: 'Walks in the park')

      # Act: simulating the get request to the index endpoint
      # Make a request to the API
      get '/cats'

      # Assert: What is the expected outcome
      # Convert the response into a Ruby Hash
      cats = JSON.parse(response.body)

      # Assure that we got a successful response
      expect(response).to have_http_status(200)

      # Assure that we got one result back as expected
      expect(cats.length).to eq 1
      expect(cats['name']). to eq 'Felix'
      expect(cats['age']). to eq 2
      expect(cats['enjoys']). to eq 'Walks in the park'
    end
  end

  # Each test is isolates in that it doesn't know anything about what exists outside this individual test
  describe 'POST /cats' do
    it 'creates a new Cat' do
      # Arrange: building the request with params
      # The params we are going to send with the request
      cat_params = {
        cat: {
          name: 'Buster',
          age: 4,
          enjoys: 'Meow Mix, and plenty of sunshine.'
        }
      }

      # Act: simulating the post request to the create endpoint
      # Send the request to the server with the provided data to create the cat, data must be supplied to the post request
      post '/cats', params: cat_params

      # Assert: on response status and body (content)
      # Look up the cat we expect to be created in the db - the db did the thing that the it was supposed to do
      # Assure that the created cat has the correct attributes
      cat = Cat.first
      expect(cat.name).to eq 'Buster'
      expect(cat.age).to eq 4
      expect(cat.enjoys).to eq 'Meow Mix, and plenty of sunshine.'

      # Assure we get the response back that is expected
      expect(response).to have_http_status(200)
      cat_response = JSON.parse
      expect(cats.length).to eq 1
      expect(cats['name']). to eq 'Buster'
      expect(cats['age']). to eq 4
      expect(cats['enjoys']). to eq 'Meow Mix, and plenty of sunshine.'
    end
  end


  it 'edits a cat' do
    cat_params = {
      cat: {
        name: 'Felix',
        age: 4,
        enjoys: 'Walks in the park.'
      }
    }
    post '/cats', params: cat_params

    cat = Cat.first

    new_cat_params = {
      cat: {
        name: 'Felix',
        age: 2,
        enjoys: 'Walks in the park.'
      }
    }
    patch "/cats/#{cat.id}", params: new_cat_params

    # redefine the variable to reference the same cat initially created
    cat = Cat.find cat.id

    # Assure that we get a success back
    expect(response).to have_http_status(200)

    # Assure that the edited cat has the correct attributes
    expect(cat.age).to eq 2
  end


  it 'deletes a cat' do
    cat_params = {
      cat: {
        name: 'Felix',
        age: 4,
        enjoys: 'Walks in the park.'
      }
    }
    post '/cats', params: cat_params
    cat = Cat.first
    delete "/cats/#{cat.id}"
    expect(response).to have_http_status(200)
    cats = Cat.all
    expect(cats).to be_empty
  end



  it "doesn't create a cat without a name" do
    cat_params = {
      cat: {
        age: 2,
        enjoys: 'Walks in the park'
      }
    }
    # Send the request to the  server
    post '/cats', params: cat_params
    # expect an error if the cat_params does not have a name
    expect(response.status).to eq 422
    # Convert the JSON response into a Ruby Hash
    json = JSON.parse(response.body)
    # Errors are returned as an array because there could be more than one, if there are more than one validation failures on an attribute.
    expect(json['name']).to include "can't be blank"
  end

end
