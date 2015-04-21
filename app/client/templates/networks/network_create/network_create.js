/*****************************************************************************/
/* NetworkCreate: Event Handlers */
/*****************************************************************************/
Template.NetworkCreate.events({
	'click #location_name': function(){
		var coords = [Session.get('lat'), Session.get('lon')];
  	var venues = Meteor.call('getVenues', coords, function (e, r) {
  		if (!e)
		  	return r;
		  else
		  	return e;
  	});
  },
	'keypress #location_address':function(e){
		setTimeout(function(){
			Session.set('streetAddress', e.currentTarget.value);
			console.log("Approximate street address is: " + Session.get('streetAddress'));
		}, 5000);
	},
	'submit #network_create': function(e, tmpl){
		e.preventDefault();
		var venue = {
			'name': tmpl.find('#location_name').val,
			'network':{
				'ssid': tmpl.find('#network_name').val,
				'password': tmpl.find('#network_password').val,
				'isPublic': tmpl.find('#network_isPublic').checked,
				'verified': false
			},
			'location': {
				'name': tmpl.find('#location_name').val,
				'lat': Session.get('lat'),
				'lon': Session.get('lon'),
				'streetAddress': tmpl.find('#location_address').val,
				'address': Session.get('locationData')
			}
		}
		Meteor.call('addVenue', venue)
		// Networks.insert(network);
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
	},
	venues: function(){
		return Session.get('localVenues');
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
