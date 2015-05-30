if (Meteor.isServer){
	Meteor.startup(function(){
	  console.log(Venues.find().count() + ' venues');
	  console.log(Meteor.users.find().count() + ' users');

	  // Seed Venues database
	  if (Venues.find().count() === 0){
	  	var items = JSON.parse(Assets.getText('seed_venues.json'));
		  _.each(items, function(item) {
		  	var network  = {},
		  			venue    = {},
		  			location = {};

		  	// handle dirty seed data
		  	if (["",null].indexOf(item.location.name) > -1 || item.location.name.match(/^[0-9]+$/) != null){
		  		venue.name = "Free Hotspot";
		  	} else { 
		  		venue.name = item.location.name.trim();
		  	}

		  	// venue
		  	venue.address = item.location.address.trim();
		  	venue.type = item.location.type.trim();
		  	venue.city = item.location.city.toTitleCase().trim();
		  	venue.coordinates = [item.location.lat, item.location.lon];
		  	
		  	// network 
		  	network.name = item.network.name.trim();
		  	network.isPublic = item.network.isPublic;
				network.password = item.network.password;
				network.verified = item.network.verified;

				// add to collections and join at locations
		    var venueID = Meteor.call('insertVenue', venue);
		    var networkID = Meteor.call('insertNetwork', network);
		    var locationID = Meteor.call('insertLocation', venueID, networkID);

		    console.log('Location '+ locationID + ' added, connecting venue ' + venueID + ' to ' + networkID);

		  });

		  Venues._ensureIndex({"coordinates": "2dsphere"});
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