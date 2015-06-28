/*****************************************************************************/
/* Server Only Methods */
/*****************************************************************************/
Meteor.methods({
	foursquare: function(params){
		var urlPrefix = 'https://api.foursquare.com/v2/venues/';
		var timeStamp = (function(){ return (new Date()).toISOString().slice(0,10).replace(/-/g,"");})();
		var auth = (function(){ return '&client_id='+ Meteor.settings.apiServices.foursquare.appId +'&client_secret='+ Meteor.settings.apiServices.foursquare.secret +'&v='})();

    console.log('Getting: ', urlPrefix + params + auth + timeStamp);
    var response = HTTP.get(urlPrefix + params + auth + timeStamp);
    return response;	
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
	},
	insertNetwork: function(network){
		if (Meteor.user())
			network.userId = Meteor.userId();
		network.createdAt = new Date;
		var newNetwork = Networks.insert(network);
		return newNetwork;
	},
	insertVenue: function(venue){
		if (Meteor.user())
			venue.userId = Meteor.userId();
		venue.createdAt = new Date;
		var newVenue = Venues.insert(venue);
		return newVenue;
	},
	insertLocation: function(venueID, networkID){
		var location = {
			venueId: venueID,
			networkId: networkID,
			createdAt: new Date,
		};
		if (Meteor.user())
			location.userId = Meteor.userId();
		var newLocation = Locations.insert(location);
		console.log(location);
		return newLocation;
	},
	getVenues: function(latLng){
		console.log("Fetching venues for [" + latLng +"]");
		var coords = latLng;
		var result = Meteor.call('foursquare', 'search?ll=' + coords);
		return result;
	}

});
