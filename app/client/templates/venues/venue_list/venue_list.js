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
		return Venues.find(
			{ 'coordinates': 
				{
					$near: !!Session.get('currentUserCoords') ? Session.get('currentUserCoords') : Meteor.settings.public.Defaults.defaultUserCoords,
		  		$maxDistance: !!Session.get('currentDistanceLimit') ? Session.get('currentDistanceLimit') : Meteor.settings.public.Defaults.defaultDistanceLimit
				}
			})
	},
	
	venueCount: function(){
		return Venues.find().count();
	},
	i18nVenuesText: function(){
		return TAPi18n.__('location.venues');
	}
});

/*****************************************************************************/
/* VenueList: Lifecycle Hooks */
/*****************************************************************************/
Template.VenueList.created = function () {
};

Template.VenueList.rendered = function () {
	if (!!window.location.hash){
		var hash = !!window.location.hash ? window.location.hash : false;
		Session.set('windowHash', hash);
	}
};

Template.VenueList.destroyed = function () {
};
