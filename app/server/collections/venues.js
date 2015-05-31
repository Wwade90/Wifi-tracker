
Meteor.startup(function () {  
	Venues._ensureIndex({"location": "2dsphere"});
});