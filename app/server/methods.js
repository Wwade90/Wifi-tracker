/*****************************************************************************/
/* Server Only Methods */
/*****************************************************************************/
Meteor.methods({
	foursquare: function(){
		var urlPrefix = 'https://api.foursquare.com/v2/venues/';
		var timeStamp = (function(){ return (new Date()).toISOString().slice(0,10).replace(/-/g,"");})();
		var auth = (function(){ return '&client_id='+ Meteor.settings.apiServices.foursquare.appId +'&client_secret='+ Meteor.settings.apiServices.foursquare.secret +'&v='})();
		
		var query = function(params){
			return {
				intent: params[0],
				formatted: params[0] + '?' + params[1],
				params: {
					key: params[1].split('=')[0],
					value: params[1].split('=')[1]
				}
			};
		}
		var url = function(){
			var params = [];
			for (var i=0; i < arguments.length; i++) {
	      params.push(arguments[i]);
	    }
			var string = urlPrefix + query(params) + auth() + timeStamp;
			console.log(string);
			return string;
		};

		var get = function(){
			var params = [];
			for (var i=0; i < arguments.length; i++) {
	      params.push(arguments[i]);
	    }
	    console.log('Params: ', params);
	    console.log('Getting: ', urlPrefix + query(params).formatted + auth + timeStamp);
	    var response = HTTP.get(urlPrefix + query(params).formatted + auth + timeStamp);

	    console.log(response);
	    return response;
		};

		return {
			url : url,
			get: get,
			query: query
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
	getVenues: function(latLng){
		console.log("Fetching venues for [" + latLng +"]");
		Meteor.call('foursquare').get('search', 'll=' + latLng.toString(), function(e, r){
			if (!e)
				return r;
			else {
				return e;
			}
		});
	}

});
