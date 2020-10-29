require 'rails_helper'

RSpec.describe Cat, type: :model do

  it 'should validate name' do
    cat = Cat.create(age: 2, enjoys: 'Walks in the park')
    expect(cat.errors[:name]).to_not be_empty
  end

  it 'should validate age' do
    cat = Cat.create(name: 'Felix', enjoys: 'Walks in the park')
    expect(cat.errors[:age]).to_not be_empty
  end

  it 'should validate enjoys' do
    cat = Cat.create(name: 'Felix', age: 2)
    expect(cat.errors[:enjoys]).to_not be_empty
  end

  it 'should have an enjoys attribute with at least 10 characters' do
    cat = Cat.create(name: 'Felix', age: 7, enjoys: 'Walks')
    expect(cat.errors[:enjoys]).to_not be_empty
  end

end
