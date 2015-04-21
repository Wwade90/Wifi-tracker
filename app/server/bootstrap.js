if (Meteor.isServer){
	Meteor.startup(function(){
	  console.log(Networks.find().count() + ' networks');
	  console.log(Meteor.users.find().count() + ' users');

	  // Seed Venues database
	  if (Venues.find().count() === 0){
	  	var venues = JSON.parse(Assets.getText('seed_venues.json'));
		  _.each(venues, function(venue) {
		    // replace this with something like Companions.insert(companion);
		    var result = Meteor.call('addVenue', venue);
		  });
	  }
		
	});
}