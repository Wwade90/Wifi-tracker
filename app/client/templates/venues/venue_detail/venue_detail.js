/*****************************************************************************/
/* VenueDetail: Event Handlers */
/*****************************************************************************/
Template.VenueDetail.events({
});

/*****************************************************************************/
/* VenueDetail: Helpers */
/*****************************************************************************/
Template.VenueDetail.helpers({
	lat: function() { return Session.get('lat'); },
  lon: function() { return Session.get('lon'); }
});

/*****************************************************************************/
/* VenueDetail: Lifecycle Hooks */
/*****************************************************************************/


Template.VenueDetail.created = function () {
};

Template.VenueDetail.rendered = function () {
};

Template.VenueDetail.destroyed = function () {
};
