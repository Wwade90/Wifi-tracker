/*****************************************************************************/
/* Server Only Methods */
/*****************************************************************************/
Meteor.methods({
	foursquare: function(params){
		var urlPrefix = 'https://api.foursquare.com/v2/venues/';
		var timeStamp = (function(){ return (new Date()).toISOString().slice(0,10).replace(/-/g,"");})();
		var auth = (function(){ return '&client_id='+ Meteor.settings.apiServices.foursquare.appId +'&client_secret='+ Meteor.settings.apiServices.foursquare.secret +'&v='})();

		var get = function(){
	    console.log('Getting: ', urlPrefix + params + auth + timeStamp);
	    var response = HTTP.get(urlPrefix + params + auth + timeStamp);
	    return response;
		};
		return {
			get: get
		}
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
	},
	addVenue: function(venue){
		if (Meteor.user())
			venue.userId = Meteor.userId();
		venue.createdAt = new Date;
		venue.location.coordinates = [venue.location.lat, venue.location.lon];
		var newVenue = Venues.insert(venue);
		console.log(venue);
		return newVenue;
	},
	addLocation: function(venue, network){
		
	},
	getVenues: function(latLng){
		console.log("Fetching venues for [" + latLng +"]");
		var coords = latLng;
		Meteor.call('foursquare', 'search?ll=' + coords, function(e, r){
			if (!e){
				return r;
			}
			else{
				return e;
			}
		});
	}

});
