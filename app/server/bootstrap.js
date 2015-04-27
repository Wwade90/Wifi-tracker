if (Meteor.isServer){
	Meteor.startup(function(){
	  console.log(Venues.find().count() + ' venues');
	  console.log(Meteor.users.find().count() + ' users');

	  // Seed Venues database
	  if (Venues.find().count() === 0){
	  	var venues = JSON.parse(Assets.getText('seed_venues.json'));
		  _.each(venues, function(venue) {
		    Meteor.call('addVenue', venue);
		    Meteor.call('addMarker', venue);
		  });

		  Venues._ensureIndex({"location.coordinates": "2dsphere"});
	  }
		
	});
}