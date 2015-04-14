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
	'submit #network_create': function(e, tmpl){
		e.preventDefault();
		var network = {
			userId: Meteor.userId(),
			createdAt: new Date,
			network_name: tmpl.find('#network_name').val,
			network_password: tmpl.find('#network_password').val,
			location_name: tmpl.find('#location_name').val,
			location_address: Session.get('locationData'),
			isPublic: tmpl.find('#network_isPublic').checked
		}
		Networks.insert(network);
		tmpl.find('form').reset();
	}
});

/*****************************************************************************/
/* NetworkCreate: Helpers */
/*****************************************************************************/
Template.NetworkCreate.helpers({
	streetAddress: function(){
		return Session.get('streetAddress');
	},
	locationData: function(){
		return Session.get('locationData');
	}
});

/*****************************************************************************/
/* NetworkCreate: Lifecycle Hooks */
/*****************************************************************************/
var getGeolocation = function(){
	if (Meteor.isClient) {
		var locationData = 0;
		navigator.geolocation.getCurrentPosition(function(position) {
      Session.set('lat', position.coords.latitude);
      Session.set('lon', position.coords.longitude);
      
      var address = Meteor.call('reverseGeocode', [Session.get('lat'), Session.get('lon')], function(error, result){
		    if (error){
		    	return alert(error.reason);
		    } else {
		      Session.set('streetAddress', (result[0].streetNumber + " " + result[0].streetName))
		      locationData = {
		      	latitude: result[0].latitude,
		      	longitude: result[0].longitude,
		      	streetName: result[0].streetName,
		      	city: result[0].city,
		      	zipcode: result[0].zipcode,
		      	state: result[0].state,
		      	stateCode: result[0].stateCode,
	      		country: result[0].country,
						countryCode: result[0].countryCode
		      };
		      Session.set('locationData', locationData);
		    }
			});
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
