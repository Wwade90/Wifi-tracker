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
})

