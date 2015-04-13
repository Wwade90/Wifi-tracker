/*****************************************************************************/
/* Map: Event Handlers */
/*****************************************************************************/
Template.Map.events({
});

/*****************************************************************************/
/* Map: Helpers */
/*****************************************************************************/
Template.Map.helpers({
	networkMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      
      // Map initialization options
      var data = Template.instance().data;
      if (!data)
      	data = { latitude: 0, longitude: 0 };
      
      return {
        center: new google.maps.LatLng(
        	data.latitude, data.longitude
        ),
       	scrollwheel: false,
        zoom: 17
      };
    }
  }

});

/*****************************************************************************/
/* Map: Lifecycle Hooks */
/*****************************************************************************/
var thisMap = {
	init: function(ll){
		var self = this;

		GoogleMaps.ready('networkMap', function(map) {
	    var marker = new google.maps.Marker({
	      position: map.options.center,
	      animation: google.maps.Animation.DROP,
	      map: map.instance
	    });	

	  });
	}, 
	center: function(){
		$(window).trigger('resize');
	}
};

Template.Map.created = function () {
	thisMap.init(Session.get('ll'));
	GoogleMaps.ready('networkMap', function(map) {
		var center;
		function calculateCenter() {
		  center = map.instance.getCenter();
		}
		google.maps.event.addListener(map.instance, 'idle', function() {
		  calculateCenter();
		});
	
		$(window).resize(function(){
			map.instance.setCenter(center);
		});

  });
};

Template.Map.rendered = function () {
};

Template.Map.destroyed = function () {
};
