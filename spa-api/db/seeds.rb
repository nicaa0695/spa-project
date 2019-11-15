# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
soto = HouseHold.create(name: 'Soto', members: "Emilee Nica")
valles = HouseHold.create(name: 'Valles', members: "Arleen Randy Mary")
dishes = Chore.create(name: 'Dishes', status:'Complete', house_hold:valles)

laundry = Chore.create(name: 'Laundry', status:'Incomplete', house_hold:soto)
