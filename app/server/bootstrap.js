if (Meteor.isServer){
	Meteor.startup(function(){
	  console.log(Networks.find().count() + ' networks');
	});
}

if (Meteor.isClient) {
	Meteor.startup(function() {
	  GoogleMaps.load();
	});
}