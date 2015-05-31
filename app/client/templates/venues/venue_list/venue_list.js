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
		return Venues.find({ 
            'coordinates': 
              { 
                $near : !!Session.get('currentUserCoords') ? Session.get('currentUserCoords') : Meteor.settings.public.Defaults.defaultUserCoords 
              } 
          });
	},
	venueCount: function(){
		return Venues.find({ 
            'coordinates': 
              { 
                $near : !!Session.get('currentUserCoords') ? Session.get('currentUserCoords') : Meteor.settings.public.Defaults.defaultUserCoords 
              } 
          }).count();
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
