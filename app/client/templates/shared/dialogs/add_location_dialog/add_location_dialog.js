/*****************************************************************************/
/* AddLocationDialog: Event Handlers */
/*****************************************************************************/
Template.AddLocationDialog.events({
	'click [data-foursquare-id]': function(event, template){
		Meteor.call('getVenue', event, function (error, result) {
			if (!error){
				console.log(result);
			} else {
				console.error(error);
			}
		});
	},
	'shown.bs.modal #AddLocationDialog': function(){
		console.log('modal callback');
	} 
});

/*****************************************************************************/
/* AddLocationDialog: Helpers */
/*****************************************************************************/
Template.AddLocationDialog.helpers({
	locations: function(){
    return Template.instance().nearbyLocations.get();
  }
});

/*****************************************************************************/
/* AddLocationDialog: Lifecycle Hooks */
/*****************************************************************************/
Template.AddLocationDialog.created = function () {
};

Template.AddLocationDialog.rendered = function () {
};

Template.AddLocationDialog.destroyed = function () {
};
