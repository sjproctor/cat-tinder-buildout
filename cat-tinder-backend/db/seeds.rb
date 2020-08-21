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
