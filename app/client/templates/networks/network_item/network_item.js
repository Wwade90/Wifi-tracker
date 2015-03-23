/*****************************************************************************/
/* NetworkItem: Event Handlers */
/*****************************************************************************/
Template.NetworkItem.events({
});

/*****************************************************************************/
/* NetworkItem: Helpers */
/*****************************************************************************/
Template.NetworkItem.helpers({
	NetworkItem: function(){
		console.log(Router.current().params);
		return Networks.find({_id: this.params._id});
	},
	networkItemMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(-37.8136, 144.9631),
        zoom: 8
      };
    }
  }
});

/*****************************************************************************/
/* NetworkItem: Lifecycle Hooks */
/*****************************************************************************/
Template.NetworkItem.created = function () {
	GoogleMaps.ready('networkItemMap', function(map) {
    // Add a marker to the map once it's ready
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });
  });
};

Template.NetworkItem.rendered = function () {
};

Template.NetworkItem.destroyed = function () {
};
