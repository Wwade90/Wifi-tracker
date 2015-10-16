/*****************************************************************************/
/* Server Only Methods */
/*****************************************************************************/
Meteor.methods({
	/* ——————————————————————————
	FOURSQUARE API */
	foursquare: function(params){
		// if (! Meteor.userId()){
		// 	throw new Meteor.Error(704, 'not-authorized');
		// }

		var urlPrefix = 'https://api.foursquare.com/v2/venues/';
		var timeStamp = (function(){ return (new Date()).toISOString().slice(0,10).replace(/-/g,"");})();
		var auth = (function(){ return '&client_id='+ Meteor.settings.apiServices.foursquare.appId +'&client_secret='+ Meteor.settings.apiServices.foursquare.secret +'&v='})();

    // console.log('Getting: ', urlPrefix + params + auth + timeStamp);
    var response = HTTP.get(urlPrefix + params + auth + timeStamp);
    return response;
	},
	getCategories: function(){
		try{
			var categories = Meteor.call('foursquare', 'categories?');
			return categories;
		} catch (error){
			console.error(error.reason);
			return error.reason;
		}
	},
	getVenues: function(latLng){
		var venues = Meteor.call('foursquare', 'search?ll=' + latLng);
		return venues;
	},
	getVenue: function(id){
		// console.log(id);
		var venue = Meteor.call('foursquare', id + '?');
		// console.log(venue);
		return venue;
	},
	getPage: function(url){
		try{  return HTTP.get(url); }
		catch (error){ throw new Meteor.Error(400, "HTTP request for " + url + " failed."); }
	},
	/*———————————————————————————*/
	geoCode: function(address){
		// if (! Meteor.userId()){
		// 	throw new Meteor.Error(704, 'not-authorized');
		// }

		// console.log(address);
		var geo = GeoCoder();
		var result = geo(address);
		return result;
	},
	reverseGeocode: function(latLng){
		// if (! Meteor.userId()){
		// 	throw new Meteor.Error(704, 'not-authorized');
		// }

		var geo = new GeoCoder();
		var result = geo.reverse(latLng[0], latLng[1]);
		return result;
	},
	insertNetwork: function(network){
		// if (! Meteor.userId()){
		// 	throw new Meteor.Error(704, 'not-authorized');
		// }

		if (Meteor.user())
			network.userId = Meteor.userId();
		network.createdAt = new Date;
		var newNetwork = Networks.insert(network);
		return newNetwork;
	},
	insertVenue: function(venue){
		// if (! Meteor.userId()){
		// 	throw new Meteor.Error(704, 'not-authorized');
		// }

		if (Meteor.user())
			venue.userId = Meteor.userId();
		venue.createdAt = new Date;
		var newVenue = Venues.insert(venue);
		return newVenue;
	},
	insertLocation: function(venueID, networkID){
		// if (! Meteor.userId()){
		// 	throw new Meteor.Error(704, 'not-authorized');
		// }

		var location = {
			venueId: venueID,
			networkId: networkID,
			createdAt: new Date,
		};
		if (Meteor.user())
			location.userId = Meteor.userId();
		var newLocation = Locations.insert(location);
		// console.log(location);
		return newLocation;
	}

});
