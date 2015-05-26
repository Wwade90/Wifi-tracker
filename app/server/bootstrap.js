if (Meteor.isServer){
	Meteor.startup(function(){
	  console.log(Venues.find().count() + ' venues');
	  console.log(Meteor.users.find().count() + ' users');

	  // Seed Venues database
	  if (Venues.find().count() === 0){
	  	var venues = JSON.parse(Assets.getText('seed_venues.json'));
		  _.each(venues, function(venue) {
		  	venue.location.name = venue.location.name.toTitleCase().trim();
		  	venue.location.address = venue.location.address.toTitleCase().trim();
		  	venue.location.shortName = venue.location.shortName.toTitleCase().trim();
		  	venue.location.city = venue.location.city.toTitleCase().trim();
		    Meteor.call('addVenue', venue);
		    Meteor.call('addMarker', venue);
		  });

		  Venues._ensureIndex({"location.coordinates": "2dsphere"});
	  }
	  if (Distances.find().count() === 0){
	  	var distances = [
		  	{ helper: "within1BlockDistance", name: "Within 1 block", value: 80.4672 },
				{ helper: "within4BlockDistance", name: "Within 4 blocks", value: 321.8688 },
				{ helper: "within1MileDistance", name: "Walking (1 mi.)", value: 1609.34 },
				{ helper: "within2MilesDistance", name: "Biking (2 mi.)", value: 3218.69 },
				{ helper: "within5MilesDistance", name: "Driving (5 mi.)", value: 8046.72 }
			];
			_.each(distances, function(distance) {
		    Distances.insert(distance);
		  });
	  }
		
	});
}