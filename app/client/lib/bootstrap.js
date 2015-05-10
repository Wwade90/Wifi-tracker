if (Meteor.isClient) {
	Meteor.startup(function() {
		getUserGeolocation();
	  GoogleMaps.load();
	});
}
