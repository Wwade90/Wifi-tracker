HomeController = RouteController.extend({
  template: 'Home',

  // subscriptions: function() {
  // },
  waitOn: function(){
  	return [
  			Meteor.subscribe('distances'),
  			Meteor.subscribe('nearestVenues', {
					limit : Meteor.settings.public.Defaults.defaultVenueLimit,
					coordinates : !!Session.get('currentUserCoords') ? Session.get('currentUserCoords') : Meteor.settings.public.Defaults.defaultUserCoords, 
					distanceLimit : !!Session.get('currentDistanceLimit') ? Session.get('currentDistanceLimit') : Meteor.settings.public.Defaults.defaultDistanceLimit 
	      }),
        Meteor.subscribe('nearbyLocations', {coords: !!Session.get('currentUserCoords') ? Session.get('currentUserCoords') : Meteor.settings.public.Defaults.defaultUserCoords})
	  ]
  },
  data: function(){
  	return {
  		distances: Distances.find(),
  		venues: Venues.find(
			{ 'coordinates': 
				{
					$near: !!Session.get('currentUserCoords') ? Session.get('currentUserCoords') : Meteor.settings.public.Defaults.defaultUserCoords,
		  		$maxDistance: !!Session.get('currentDistanceLimit') ? Session.get('currentDistanceLimit') : Meteor.settings.public.Defaults.defaultDistanceLimit
				}
			}),
      nearbyLocations: nearbyLocations.find({coords: !!Session.get('currentUserCoords') ? Session.get('currentUserCoords') : Meteor.settings.public.Defaults.defaultUserCoords})
		}
  },
  action: function() {
    if (this.ready())
    	this.render('VenueList');
    else
    	this.render('Loading');
  }
});
