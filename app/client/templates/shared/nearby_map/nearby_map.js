/*****************************************************************************/
/* NearbyMap: Event Handlers */
/*****************************************************************************/
Template.NearbyMap.events({

  'click a[href*=#]:not([href=#])': function(e){
    e.preventDefault();
    if (location.pathname.replace(/^\//,'') == e.currentTarget.pathname.replace(/^\//,'') && location.hostname == e.currentTarget.hostname) {
      var target = $(e.currentTarget.hash);
      target = target.length ? target : $('[name=' + e.currentTarget.hash.slice(1) +']');
      if (target.length) {
        location.hash = e.currentTarget.hash.slice(1);
        target.addClass('active').siblings().removeClass('active');
        $('html,body').animate({
          scrollTop: target.offset().top - target.outerHeight()
        }, 1000);
        return false;
      }
    }
  }

});

/*****************************************************************************/
/* NearbyMap: Helpers */
/*****************************************************************************/
Template.NearbyMap.helpers({
	nearbyMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      return {
        styles: mapStyle,
        disableDefaultUI: true,
        center: new google.maps.LatLng(Session.get('lat'), Session.get('lon')),
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
  GoogleMaps.ready('map', function(map) {
    var infowindow = new google.maps.InfoWindow();

    Venues.find().forEach(function(venue){
      var marker = new google.maps.Marker({
        icon: constants.icons.svg.mapWifi,
        position: new google.maps.LatLng(venue.coordinates[0], venue.coordinates[1]),
        map: map.instance
      });

	    marker.set('title', venue.name);
	    marker.addListener('click', function(e){
        infowindow.setContent(
          [
            '<header>' + venue.name + '</header>',
            '<main>' + venue.address + '</main>',
            '<footer><a href="#' + venue._id + '" data-scroll>'+ TAPi18n.__('uitext.getInfo') +'</a></footer>' 
          ].join(''));
        infowindow.open(map.instance, marker);
      });
      	
		});

		var currentGeolocation = new google.maps.Marker({
      position: new google.maps.LatLng(Session.get('lat'), Session.get('lon')),
      icon: constants.icons.svg.mapGeolocatedPerson,
      map: map.instance,
      title: TAPi18n.__('location.yourLocation')
    });		

    currentGeolocation.addListener('click',function(){
      infowindow.setContent('<header>'+ TAPi18n.__('location.yourLocation') +'</header>');
      infowindow.open(map.instance, currentGeolocation);
    });

    map.instance.addListener(currentGeolocation, 'position_changed', function() {
      map.setCenter(this.getPosition());
      map.fitBounds(this.getBounds());
    });
		
		$(window).on('resize', function(){
			map.instance.setCenter(new google.maps.LatLng(Session.get('lat'), Session.get('lon')));
		});

  });
};

Template.NearbyMap.rendered = function () {
  var target = $(location.hash);
      target = target.length ? target : $('[name=' + location.hash.slice(1) +']');
      if (target.length) {
        target.addClass('active').siblings().removeClass('active');
        $('html,body').animate({
          scrollTop: target.offset().top - target.outerHeight()
        }, 1000);
        return false;
      }
};

Template.NearbyMap.destroyed = function () {
};
