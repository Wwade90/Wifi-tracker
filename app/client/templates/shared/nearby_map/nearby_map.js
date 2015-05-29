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
	    var coords = [Session.get('lat'), Session.get('lon')]	
      return {
        center: new google.maps.LatLng(coords[0],coords[1]),
       	scrollwheel: false,
        zoom: 14
      };
    }
  }
});

/*****************************************************************************/
/* NearbyMap: Lifecycle Hooks */
/*****************************************************************************/
Template.NearbyMap.created = function () {
	// getUserGeolocation();
  GoogleMaps.ready('map', function(map) {
    var infowindow = new google.maps.InfoWindow();
  	
    Venues.find().forEach(function(doc){
			
      var marker = new google.maps.Marker({
	      position: new google.maps.LatLng(doc.location.lat, doc.location.lon),
	      map: map.instance
	    });

	    marker.set('title', doc.location.name);
	    marker.addListener('click',function(){
        window.location.hash = '#t_' + doc._id;
        infowindow.setContent(
          [
            '<header>' + doc.location.name + '</header>',
            '<main>' + doc.location.address + '</main>',
            '<footer><a href="venues/' + doc._id + '">Go Here</a></footer>' 
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
