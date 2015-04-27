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
