if (Meteor.isServer){
	Meteor.startup(function(){
	  console.log(Venues.find().count() + ' venues');
	  console.log(Meteor.users.find().count() + ' users');

	  // Seed Venues database
	  if (Venues.find().count() === 0){
	  	var items = JSON.parse(Assets.getText('seed_venues.json'));
		  _.each(items, function(item) {
		  	var network = {},
		  			venue = {},
		  			location = {};
		  	debugger;


		  	if (["",null].indexOf(item.location.name) > -1 || item.location.name.match(/^[0-9]+$/) != null){
		  		venue.name = "Free Hotspot";
		  	} else { 
		  		venue.name = venue.name.toTitleCase().trim();
		  	}

		  	// venue.address = venue.address.toTitleCase().trim();
		  	// venue.shortName = venue.shortName.toTitleCase().trim();
		  	// venue.city = venue.city.toTitleCase().trim();

		  	// network 

		    var venueID = Meteor.call('addVenue', venue);
		    var networkID = Meteor.call('addNetwork', network);

		    Meteor.call('addLocation', venueID);
		    Meteor.call('addNetwork', networkID);
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