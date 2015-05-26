/*****************************************************************************/
/* VenueList: Event Handlers */
/*****************************************************************************/
Template.VenueList.events({

});

/*****************************************************************************/
/* VenueList: Helpers */
/*****************************************************************************/
Template.VenueList.helpers({
	venues: function(){
    return Venues.find();
		// return Venues.find(
  //     { 'location.coordinates': 
  //       { 
  //         $near : !!Session.get('currentUserCoords') ? Session.get('currentUserCoords') : Meteor.settings.public.Defaults.defaultUserCoords
  //       }   
  //     }
      // , {
      //   limit: Session.get('defaultVenueLimit') ? Session.get('defaultVenueLimit') : Meteor.settings.public.Defaults.defaultVenueLimit
      // }
    //)
	},
	venueCount: function(){
		return Venues.find().count();
	}
});

/*****************************************************************************/
/* VenueList: Lifecycle Hooks */
/*****************************************************************************/
Template.VenueList.created = function () {
};

Template.VenueList.rendered = function () {
};

Template.VenueList.destroyed = function () {
};
