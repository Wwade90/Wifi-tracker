/*

getUserGeolocation

1. Grabs current position
2. Sets lat, lon, currentUserCoords
3. Calls reverseGeocode server method

*/

getUserGeolocation = function(){
	if (Meteor.isClient) {
		var locationData = 0,
				userGeolocation;
		navigator.geolocation.getCurrentPosition(function(position) {
      Session.set('lat', position.coords.latitude);
      Session.set('lon', position.coords.longitude);
      Session.set('currentUserCoords', [position.coords.latitude, position.coords.longitude]);
     	// if (error){
		    // 	console.log(error.reason);
		    // 	return false;
		    // } else {
		    //   Session.set('streetAddress', (result[0].streetNumber + " " + result[0].streetName))
		    //   Session.set('userGeolocation', {
		    //   	userId: Meteor.userId(),
		    //   	lat: result[0].latitude,
		    //   	lon: result[0].longitude,
		    //   	coords: [result[0].latitude, result[0].longitude],
		    //   	streetName: result[0].streetName,
		    //   	streetAddress: result[0].streetNumber + " " + result[0].streetName,
		    //   	city: result[0].city,
		    //   	zipcode: result[0].zipcode,
		    //   	state: result[0].state,
		    //   	stateCode: result[0].stateCode,
	     //  		country: result[0].country,
						// countryCode: result[0].countryCode
		    //   });

		    //   return result;
		    // }
			return position.coords;
    },
    function() {
        alert('Position could not be determined.')
    },
    {
        enableHighAccuracy: true
    });
  }
};