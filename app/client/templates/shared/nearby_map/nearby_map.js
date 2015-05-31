/*****************************************************************************/
/* NearbyMap: Event Handlers */
/*****************************************************************************/
Template.NearbyMap.events({
});

/*****************************************************************************/
/* NearbyMap: Helpers */
/*****************************************************************************/
Template.NearbyMap.helpers({
	nearbyMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(Session.get('lat'), Session.get('lon')),
       	scrollwheel: false,
        zoom: 14,
        disableDefaultUI: true
      };
    }
  }
});

/*****************************************************************************/
/* NearbyMap: Lifecycle Hooks */
/*****************************************************************************/
Template.NearbyMap.created = function () {
  GoogleMaps.ready('map', function(map) {
  	map.instance.setOptions({styles: mapStyle});
    var infowindow = new google.maps.InfoWindow();
    Venues.find().forEach(function(venue){
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(venue.coordinates[0], venue.coordinates[1]),
        map: map.instance
      });

	    marker.set('title', venue.name);
	    marker.addListener('click', function(){
        window.location.hash = '#t_' + venue._id;
        infowindow.setContent(
          [
            '<header>' + venue.name + '</header>',
            '<main>' + venue.address + '</main>',
            '<footer><a href=" venues/' + venue._id + '">Go Here</a></footer>' 
          ].join(''));
        infowindow.open(map.instance, marker);
      });
      	
		});

		var currentGeolocation = new google.maps.Marker({
      position: new google.maps.LatLng(Session.get('lat'), Session.get('lon')),
      icon: 'http://maps.gstatic.com/mapfiles/markers2/icon_green.png',
      map: map.instance,
      title: "Your Geolocation"
    });		

    currentGeolocation.addListener('click',function(){
      infowindow.setContent('<header>You are Here</header>');
      infowindow.open(map.instance, currentGeolocation);
    });
		
		$(window).on('resize', function(){
			map.instance.setCenter(new google.maps.LatLng(Session.get('lat'), Session.get('lon')));
		});

  });
};

Template.NearbyMap.rendered = function () {
};

Template.NearbyMap.destroyed = function () {
};
