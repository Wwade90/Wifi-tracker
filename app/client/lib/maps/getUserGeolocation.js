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
      console.log("Geolocation: ", [position.coords.latitude, position.coords.longitude]);
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