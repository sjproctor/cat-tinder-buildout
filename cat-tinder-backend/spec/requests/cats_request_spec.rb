require 'rails_helper'

RSpec.describe "Cats", type: :request do
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




  # it "edits a cat" do
  #   cat_params = {
  #     cat: {
  #       name: 'Felix',
  #       age: 4,
  #       enjoys: 'Walks in the park.'
  #     }
  #   }
  #   post '/cats', params: cat_params
  #
  #   cat = Cat.first
  #
  #   new_cat_params = {
  #     cat: {
  #       name: 'Felix',
  #       age: 2,
  #       enjoys: 'Walks in the park.'
  #     }
  #   }
  #   patch "/cats/#{cat.id}", params: new_cat_params
  #
  #   # Assure that we get a success back
  #   expect(response).to have_http_status(:ok)
  #
  #   # Assure that the edited cat has the correct attributes
  #   expect(cat.age).to eq 2
  # end


  it "deletes a cat" do
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
    expect(response).to have_http_status(:ok)
    puts cat.valid?
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
