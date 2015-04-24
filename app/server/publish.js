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

Meteor.publish('markers', function(){
	return Markers.find();
});

Meteor.publish('allVenues', function(params){
	params ? !!params : 100;
	return Venues.find({}, {limit: 100});
});

Meteor.publish('VenueDetail', function(id){
  return Venues.find(id);
});

