/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */

//starts here
Meteor.publish('allNetworks', function(){
	return Networks.find();
});

Meteor.publish('NetworkDetail', function(id){
  return Networks.find(id);
});

Meteor.publish('allUsers', function(){
	return Meteor.users.find();
});

Meteor.publish('allMarkers', function(){
	return Markers.find();
});

Meteor.publish('nearestVenues', function(params){
	if (!!params && !!params.coordinates && !!params.limit){
		return Venues.find(
			{ 'location.coordinates': 
				{ $near :
	        { $geometry :
	          { type : "Point",
	            coordinates : params.coordinates 
	          },
	         	$maxDistance : Math.round(params.distanceLimit),
	         	spherical : true
	  			} 
	  		} 	
			}, {limit: params.limit});	
	} 
});

Meteor.publish('distances', function(){
	return Distances.find();
})

Meteor.publish('allVenues', function(params){
	params ? !!params : Meteor.settings.public.Defaults.defaultVenueLimit;
	return Venues.find({}, {limit: params});
});

Meteor.publish('VenueDetail', function(id){
  return Venues.find(id);
});

