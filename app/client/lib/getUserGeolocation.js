getUserGeolocation = function(){
	if (Meteor.isClient) {
		var locationData = 0,
				userGeolocation;
		navigator.geolocation.getCurrentPosition(function(position) {
      Session.set('lat', position.coords.latitude);
      Session.set('lon', position.coords.longitude);
      
      Meteor.call('reverseGeocode', [Session.get('lat'), Session.get('lon')], function(error, result){
		    if (error){
		    	console.log(error.reason);
		    	return false;
		    } else {
		      Session.set('streetAddress', (result[0].streetNumber + " " + result[0].streetName))
		      Session.set('userGeolocation', {
		      	lat: result[0].latitude,
		      	lon: result[0].longitude,
		      	streetName: result[0].streetName,
		      	streetAddress: result[0].streetNumber + " " + result[0].streetName,
		      	city: result[0].city,
		      	zipcode: result[0].zipcode,
		      	state: result[0].state,
		      	stateCode: result[0].stateCode,
	      		country: result[0].country,
						countryCode: result[0].countryCode
		      });

		      return result;
		    }
			});
			return position.coords;
    });
  }
};