/*****************************************************************************/
/* Map: Event Handlers */
/*****************************************************************************/
Template.Map.events({
});

/*****************************************************************************/
/* Map: Helpers */
/*****************************************************************************/
Template.Map.helpers({
	log: function () {
    console.log(this);
  },
	networkItemMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      var self = Template.instance().data;
      if (self == null){
      	self = {
      		latitude: Session.get('latitude'),
      		longitude: Session.get('longitude')
      	};
      }
      return {
        center: new google.maps.LatLng(
        	self.latitude, self.longitude
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
	init: function(latitude, longitude){
		var self = this;
		GoogleMaps.ready('networkItemMap', function(map) {

			map.options.center.k = latitude;
			map.options.center.D = longitude;

	    var marker = new google.maps.Marker({
	      position: map.options.center,
	      animation: google.maps.Animation.DROP,
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
	  });
	  
	}, 
	center: function(){
		$(window).trigger('resize');
	}
};

Template.Map.created = function () {
};

Template.Map.rendered = function () {
	if (Template.instance().data !== null){
		Session.set('latitude', Template.instance().data.latitude);
		Session.set('longitude', Template.instance().data.longitude);
		thisMap.init(Session.get('latitude'), Session.get('longitude'));	
	}
	
	$('body').scrollTop($('nav').outerHeight());
};

Template.Map.destroyed = function () {
	Session.set('latitude', null);
	Session.set('longitude', null);
};
