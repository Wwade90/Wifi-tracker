/*****************************************************************************/
/* NetworkCreate: Event Handlers */
/*****************************************************************************/
Template.NetworkCreate.events({
	'keypress #location_streetAddress':function(e){
		setTimeout(function(){
			Session.set('streetAddress', e.currentTarget.value);
			console.log("Approximate street address is: " + Session.get('streetAddress'));
		}, 5000);
	},
	'submit #network_create': function(e){
		e.preventDefault();
		console.log('Submitting form...');
	}
});

/*****************************************************************************/
/* NetworkCreate: Helpers */
/*****************************************************************************/
Template.NetworkCreate.helpers({
	streetAddress: function(){
		return Session.get('streetAddress');
	}
});

/*****************************************************************************/
/* NetworkCreate: Lifecycle Hooks */
/*****************************************************************************/
var getGeolocation = function(){
	if (Meteor.isClient) {
		navigator.geolocation.getCurrentPosition(function(position) {
      Session.set('lat', position.coords.latitude);
      Session.set('lon', position.coords.longitude);

      var address = Meteor.call('reverseGeocode', [Session.get('lat'), Session.get('lon')], 
      	function(error, result){
			    if(error){
			        console.log(error.reason);
			    } else {
			      Session.set('streetAddress', (result[0].streetNumber + " " + result[0].streetName))
			    }
			  }
			);		        
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
