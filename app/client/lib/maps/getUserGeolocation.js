/*

getUserGeolocation

Uses a promise to:
1. Grab current position
2. Sets lat, lon, currentUserCoords
3. Calls reverseGeocode server method

*/

function getCurrentPositionDeferred(options) {
  var deferred = $.Deferred();
  navigator.geolocation.getCurrentPosition(deferred.resolve, deferred.reject, options);
  return deferred.promise();
};

getUserGeolocation = function(){
  if (Meteor.isClient) {
    getCurrentPositionDeferred({
      enableHighAccuracy: true
    }).done(function(position) {
      console.log([position.coords.latitude, position.coords.longitude]);
      Session.set('lat', position.coords.latitude);
      Session.set('lon', position.coords.longitude);
      Session.set('currentUserCoords', [position.coords.latitude, position.coords.longitude]);
      currentUserCoords = [position.coords.latitude, position.coords.longitude];
      return currentUserCoords;
    }).fail(function(error) {
    }).always(function() {
    });
  }
}