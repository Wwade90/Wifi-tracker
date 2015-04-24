/*****************************************************************************/
/* VenueList: Event Handlers */
/*****************************************************************************/
Template.VenueList.events({
});

/*****************************************************************************/
/* VenueList: Helpers */
/*****************************************************************************/
Template.VenueList.helpers({
	networks: function(){
		return Networks.find();
	},
	venues: function(){
		return Venues.find();
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
