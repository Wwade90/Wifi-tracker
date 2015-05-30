/*****************************************************************************/
/* Map: Event Handlers */
/*****************************************************************************/
Template.Map.events({
});

/*****************************************************************************/
/* Map: Helpers */
/*****************************************************************************/
Template.Map.helpers({
	lat: function() { return Session.get('lat'); },
  lon: function() { return Session.get('lon'); },
	singleMarkerOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options

      var data = Template.instance().data;
      if (!data){
      	data = { 
          coordinates: [Session.get('lat'), Session.get('lon')]
        };
      }
      return {
        center: new google.maps.LatLng(
        	data.coordinates[0], data.coordinates[1]
        ),
       	scrollwheel: false,
        zoom: 19
      };
    }
  }

});

/*****************************************************************************/
/* Map: Lifecycle Hooks */
/*****************************************************************************/
Template.Map.created = function () {
  // getUserGeolocation();
  GoogleMaps.ready('map', function(map) {
		var marker = new google.maps.Marker({
      position: map.options.center,
      animation: google.maps.Animation.DROP,
      map: map.instance
    });
    
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(Session.get('lat'), Session.get('lon')),
      icon: 'http://maps.gstatic.com/mapfiles/markers2/icon_green.png',
      map: map.instance,
      title: "Your Geolocation"
    });   

		var center;
		function calculateCenter() {
		  center = map.instance.getCenter();
		}
		
		$(window).resize(function(){
			map.instance.setCenter(center);
		});

  });
}

Template.Map.rendered = function () {
};

Template.Map.destroyed = function () {
};
