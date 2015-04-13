/*****************************************************************************/
/* Server Only Methods */
/*****************************************************************************/
Meteor.methods({
  /*
   * Example:
   *
   * '/app/items/insert': function (item) {
   * }
   */
	logString: function (myString) {
		console.log(myString);
	},
	insertNetwork: function(network){
		Networks.insert(network);
	},
	geoCode: function(address){
		console.log(address);
		var geo = GeoCoder();
		var result = geo(address);
		return result;
	},
	reverseGeocode: function(latLng){
		var geo = new GeoCoder();
		var result = geo.reverse(latLng[0], latLng[1]);
		return result;
	}

});
