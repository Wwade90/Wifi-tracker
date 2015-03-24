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
      var self = this;

      return {
        center: new google.maps.LatLng(
        	this.latitude, this.longitude
        ),
        zoom: 15
      };
    }
  }
});

/*****************************************************************************/
/* Map: Lifecycle Hooks */
/*****************************************************************************/
var thisMap = {
	init: function(){
		var self = this;
		GoogleMaps.ready('networkItemMap', function(map) {
	    var marker = new google.maps.Marker({
	      position: map.options.center,
	      map: map.instance
	    });
	    Session.set('center', map.options.center);
	    var instance = map.instance;
				
			function calculateCenter(){
				if (instance){
					Session.set('center', instance.getCenter());
				}
			}
			
			self.center(GoogleMaps.maps.networkItemMap);
	  });
	}, 
	center: function(map){
		$(window).resize(function() {
		  map.instance.setCenter(
		  	new google.maps.LatLng(
		  		map.options.center.k,
					map.options.center.D
				)
	  	);
	  	console.log('=> triggered resize');
		}).trigger('resize');
	}
};

Template.Map.created = function () {
};

Template.Map.rendered = function () {
	thisMap.init();
	
	$('body').scrollTop($('nav').outerHeight());
};

Template.Map.destroyed = function () {
};
