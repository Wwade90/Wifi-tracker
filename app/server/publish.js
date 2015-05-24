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
	var limit = !!params ? params.limit : 50;
	if (!!params && !!params.coordinates){
		return Venues.find(
			{ 'location.coordinates': 
				{ $near :
	        { $geometry :
	          { type : "Point" ,
	            coordinates : params.coordinates 
	          },
	         	$maxDistance : Session.get('currentDistanceMax'),
	         	spherical: true
	  			} 
	  		} 	
			}, {limit: limit});	
	} else {
		return Venues.find({}, {limit: limit});
	}
});

Meteor.publish('allVenues', function(params){
	params ? !!params : 50;
	return Venues.find({}, {limit: params});
});

Meteor.publish('VenueDetail', function(id){
  return Venues.find(id);
});

