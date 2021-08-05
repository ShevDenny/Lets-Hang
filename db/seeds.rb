puts 'Clearing old data...'
User.destroy_all
User.reset_pk_sequence
Location.destroy_all
Location.reset_pk_sequence
Event.destroy_all
Event.reset_pk_sequence
UserEvent.destroy_all
UserEvent.reset_pk_sequence
FavLocation.destroy_all
FavLocation.reset_pk_sequence

location = Location.create(name: "Monkey Bar", address:"123 Main Rd", city: "San Francisco", category: "bar", img_url: "", description:"drinky drinks", hours:"10-4", groups:true, outdoor:false, date:true)