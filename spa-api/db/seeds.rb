# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Chore.delete_all
# HouseHold.delete_all
soto = HouseHold.create(name: 'Soto', members: "Emilee Nica")
cook = HouseHold.create(name: 'Cook', members: "Audrea")
valles = HouseHold.create(name: 'Valles', members: "Arleen Randy Mary")
dishes = Chore.create(name: 'Dishes', status:'Complete', house_hold:valles)
laundry = Chore.create(name: 'Laundry', status:'Incomplete', house_hold:soto)
take_trash = Chore.create(name: 'Take Trash', status:'Incomplete', house_hold:cook)
hillyard = HouseHold.create(name: 'Hillyard', members: "Missy John")
mow_lawn = Chore.create(name: 'Mow Lawn', status:'Incomplete', house_hold:hillyard)
babysit = Chore.create(name: 'Babysit Silas', status:'Incomplete', house_hold:hillyard)
wash_car = Chore.create(name: 'Wash Car', status:'Incomplete', house_hold:soto)
walk_monty = Chore.create(name: 'Walk Monty', status:'Incomplete', house_hold:soto)
