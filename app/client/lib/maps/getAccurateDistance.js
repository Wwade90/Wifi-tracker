/*

Google Maps Distance Matrix

*/
var getAccurateDistance = function(origin, destination){
  var origin1 = new google.maps.LatLng(55.930385, -3.118425);
  var origin2 = "Greenwich, England";
  var destinationA = "Stockholm, Sweden";
  var destinationB = new google.maps.LatLng(50.087692, 14.421150);

  var service = new google.maps.DistanceMatrixService();
  service.getDistanceMatrix(
    {
      origins: [origin1, origin2],
      destinations: [destinationA, destinationB],
      travelMode: google.maps.TravelMode.DRIVING,
      transitOptions: TransitOptions,
      unitSystem: UnitSystem,
      durationInTraffic: Boolean,
      avoidHighways: Boolean,
      avoidTolls: Boolean,
    }, callback);

  function callback(response, status) {
    // See Parsing the Results for
    // the basics of a callback function.
  }
}