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
@bluestreak = Coaster.create(name: 'Blue Streak', make: 'Philadelphia Toboggan Company', model: 'Wooden', height: 78, speed: 40, inversions: 0, park:@cedarpoint)
@ccmr = Coaster.create(name: 'Cedar Creek Mine Ride', make: 'Arrow', model: 'Mine Train', height: 48 , speed: 42, inversions: 0, park:@cedarpoint)
@corkscrew = Coaster.create(name: 'Corkscrew', make: 'Arrow', model: 'Custom Looping Coaster', height: 85, speed: 48, inversions: 3, park:@cedarpoint)
@gatekeeper = Coaster.create(name: 'GateKeeper', make: 'B&M', model: 'Wing', height: 170, speed: 67, inversions: 6, park:@cedarpoint)
@gemini = Coaster.create(name: 'Gemini', make: 'Arrow', model: 'Racing', height: 125, speed: 60, inversions: 0, park:@cedarpoint)
@irondragon = Coaster.create(name: 'Iron Dragon', make: 'Arrow', model: 'Suspended', height: 76, speed: 40, inversions: 0, park:@cedarpoint)
@magnum = Coaster.create(name: 'Magnum XL-200', make: 'Arrow', model: 'Hyper', height: 205, speed: 72, inversions: 0, park:@cedarpoint)
@maverick = Coaster.create(name: 'Maverick', make: 'Intamin', model: 'Blitza', height: 105, speed: 70, inversions: 0, park:@cedarpoint)
@millenniumforce = Coaster.create(name: 'Millennium Force', make: 'Intamin', model: 'Giga', height: 305, speed: 93, inversions: 0, park:@cedarpoint)
@raptor = Coaster.create(name: 'Raptor', make: 'B&M', model: 'Inverted', height: 137, speed: 57, inversions: 6, park:@cedarpoint)
@rougarou = Coaster.create(name: 'Rougarou', make: 'B&M', model: 'Floorless', height: 145, speed: 60, inversions: 4, park:@cedarpoint)
@steelvengeance = Coaster.create(name: 'Steel Vengeance', make: 'Rocky Mountain Construction', model: 'IBox', height: 205, speed: 74, inversions: 4, park:@cedarpoint)
@topthrilldragster = Coaster.create(name: 'Top Thrill Dragster', make: 'Intamin', model: 'Accelerator', height: 420, speed: 120, inversions: 0, park:@cedarpoint)
@valravn = Coaster.create(name: 'Valravn', make: 'B&M', model: 'Dive', height: '223 ', speed: 75, inversions: 3, park:@cedarpoint)
@wickedtwister = Coaster.create(name: 'Wicked Twister', make: 'Intamin', model: 'Impulse', height: 215, speed: 72, inversions: 0, park:@cedarpoint)
@wildernessrun = Coaster.create(name: 'Wilderness Run', make: 'Intamin', model: 'Childrens', height: 19, speed: 6, inversions: 0, park:@cedarpoint)
@woodstockexpress = Coaster.create(name: 'Woodstock Express', make: 'Vekoma', model: 'Junior', height: 43, speed: 29, inversions: 0, park:@cedarpoint)

@bgw = Park.create(name: 'Busch Gardens Williamsburg', location: 'Williamssburg, Virginia')
@alpengeist = Coaster.create(name: 'Alpengeist', make: 'B&M', model: 'Inverted', height: 195, speed: 67, inversions: 6, park:@bgw)

@kentuckykingdom = Park.create(name: 'Kentucky Kingdom', location: 'Louisville, Kentucky')
@lightningrun = Coaster.create(name: 'Lightning Run', make: 'Chance', model: 'Hyper GT-X', height: 100, speed: 55, inversions: 0, park:@kentuckykingdom)

@dollywood = Park.create(name: 'Dollywood', location: 'Pigeon Forge, Tennessee')
@lightningrod = Coaster.create(name: 'Lightning Rod', make: 'Rocky Mountain Construction', model: 'Topper Track', height: 165, speed: 73, inversions: 0, park:@dollywood)

@sfne = Park.create(name: 'Six Flags New England', location: 'Agawam, Massachusetts')
@superman = Coaster.create(name: 'Superman the Ride', make: 'Intamin', model: 'Mega', height: 208, speed: 77, inversions: 0, park:@sfne)
@wickedcyclone = Coaster.create(name: 'Wicked Cyclone', make: 'Rock Mountain Construction', model: 'IBox', height: 109, speed: 55, inversions: 3, park:@sfne)




puts "#{Park.count} parks created"
puts "#{Coaster.count} coasters created"

# git add .
# git commit 
# git push heroku main
# heroku run rails db:seed