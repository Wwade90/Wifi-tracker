/*****************************************************************************/
/* VenueFilter: Event Handlers */
/*****************************************************************************/
Template.VenueFilter.events({
});

/*****************************************************************************/
/* VenueFilter: Helpers */
/*****************************************************************************/
Template.VenueFilter.helpers({
	'within1BlockDistance': function(){
		return 80.4672;
	},
	'within4BlockDistance': function(){
		return 321.8688;
	},
	'within2MilesDistance': function(){
		return 321.8688;
	},
	'within4MilesDistance': function(){
		return 321.8688;
	}

});

/*****************************************************************************/
/* VenueFilter: Lifecycle Hooks */
/*****************************************************************************/
Template.VenueFilter.created = function () {
};

Template.VenueFilter.rendered = function () {
};

Template.VenueFilter.destroyed = function () {
};
