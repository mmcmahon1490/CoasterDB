# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Coaster.destroy_all
Park.destroy_all
User.destroy_all

@user = User.create(username: 'admin', email: 'admin@email.com', password: '123456')
@cedarpoint = Park.create(name: 'Cedar Point', location: 'Sandusky, Ohio')
@bluestreak = Coaster.create(name: 'Blue Streak', park:@cedarpoint)
@ccmr = Coaster.create(name: 'Cedar Creek Mine Ride', park:@cedarpoint)
@corkscrew = Coaster.create(name: 'Corkscrew', park:@cedarpoint)
@gatekeeper = Coaster.create(name: 'GateKeeper', park:@cedarpoint)
@gemini = Coaster.create(name: 'Gemini', park:@cedarpoint)
@irondragon = Coaster.create(name: 'Iron Dragon', park:@cedarpoint)
@magnum = Coaster.create(name: 'Magnum XL-200', park:@cedarpoint)
@maverick = Coaster.create(name: 'Maverick', park:@cedarpoint)
@millenniumforce = Coaster.create(name: 'Millennium Force', park:@cedarpoint)
@raptor = Coaster.create(name: 'Raptor', park:@cedarpoint)
@rougarou = Coaster.create(name: 'Rougarou', park:@cedarpoint)
@steelvengeance = Coaster.create(name: 'Steel Vengeance', park:@cedarpoint)
@topthrilldragster = Coaster.create(name: 'Top Thrill Dragster', park:@cedarpoint)
@valravn = Coaster.create(name: 'Valravn', park:@cedarpoint)
@wickedtwister = Coaster.create(name: 'Wicked Twister', park:@cedarpoint)
@wildernessrun = Coaster.create(name: 'Wilderness Run', park:@cedarpoint)
@woodstockexpress = Coaster.create(name: 'Woodstock Express', park:@cedarpoint)
@bluestreak = Coaster.create(name: 'Blue Streak', park:@cedarpoint)

puts "#{Park.count} parks created"
puts "#{Coaster.count} coasters created"