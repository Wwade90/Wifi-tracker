/*****************************************************************************/
/* VenueItem: Event Handlers */
/*****************************************************************************/
Template.VenueItem.events({
});

/*****************************************************************************/
/* VenueItem: Helpers */
/*****************************************************************************/
Template.VenueItem.helpers({
	VenueItem: function(){
		return Venues.find({_id: this.params.id});
	}
});

/*****************************************************************************/
/* VenueItem: Lifecycle Hooks */
/*****************************************************************************/


Template.VenueItem.created = function () {
};

Template.VenueItem.rendered = function () {
};

Template.VenueItem.destroyed = function () {
};
