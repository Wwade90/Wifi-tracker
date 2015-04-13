/*****************************************************************************/
/* NetworkCreate: Event Handlers */
/*****************************************************************************/
Template.NetworkCreate.events({
	'submit #network_create': function(e){
		e.preventDefault();
		console.log('Submitting form...');
	}
});

/*****************************************************************************/
/* NetworkCreate: Helpers */
/*****************************************************************************/
Template.NetworkCreate.helpers({
});

/*****************************************************************************/
/* NetworkCreate: Lifecycle Hooks */
/*****************************************************************************/
var geolocationInterval,
		getGeolocation = function(){
			if (Meteor.isClient) {
				navigator.geolocation.getCurrentPosition(function(position) {
		        Session.set('lat', position.coords.latitude);
		        Session.set('lon', position.coords.longitude);
		    });
		  }
		};
Template.NetworkCreate.created = function () {
	getGeolocation();
};

Template.NetworkCreate.rendered = function () {
};

Template.NetworkCreate.destroyed = function () {
};
