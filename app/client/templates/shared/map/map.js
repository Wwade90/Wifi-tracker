/*****************************************************************************/
/* Map: Event Handlers */
/*****************************************************************************/
Template.Map.events({
});

/*****************************************************************************/
/* Map: Helpers */
/*****************************************************************************/
Template.Map.helpers({
	networkItemMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      var self = Template.instance().data;

      return {
        center: new google.maps.LatLng(
        	self.latitude, self.longitude
        ),
        zoom: 17
      };
    }
  }
});

/*****************************************************************************/
/* Map: Lifecycle Hooks */
/*****************************************************************************/
var thisMap = {
	init: function(latitude, longitude){
		var self = this;
		GoogleMaps.ready('networkItemMap', function(map) {

			map.options.center.k = latitude;
			map.options.center.D = longitude;

	    var marker = new google.maps.Marker({
	      position: map.options.center,
	      map: map.instance
	    });

	    var mapInstance = map.instance;
			
			console.log('map starting?');
			$(window).resize(function(e) {
				var centerLatLng = new google.maps.LatLng(
		  		Session.get('latitude'),
					Session.get('longitude')
				);
			  map.instance.setCenter(centerLatLng);
		  	console.log('=> triggered resize');
			});
			self.center(GoogleMaps.maps.networkItemMap);
			$(window).on('resize', function (e) {
	        e.stopPropagation();
	    });
	  });
	  
	}, 
	center: function(){
		$(window).trigger('resize');
	}
};

Template.Map.created = function () {
};

Template.Map.rendered = function () {
	var self = Template.instance().data;
	Session.set('latitude', self.latitude);
	Session.set('longitude', self.longitude);
	
	thisMap.init(Session.get('latitude'), Session.get('longitude'));
	
	$('body').scrollTop($('nav').outerHeight());
};

Template.Map.destroyed = function () {
	Session.set('latitude', null);
	Session.set('longitude', null);
};
