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
        styles: mapStyle,
        disableDefaultUI: true,
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: true,
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
  GoogleMaps.ready('map', function(map) {
		var marker = new google.maps.Marker({
      position: map.options.center,
      animation: google.maps.Animation.DROP,
      map: map.instance
    });
    
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(Session.get('lat'), Session.get('lon')),
      icon: constants.icons.svg["map-star"],
      map: map.instance,
      title: TAPi18n.__('location:yourLocation')
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
