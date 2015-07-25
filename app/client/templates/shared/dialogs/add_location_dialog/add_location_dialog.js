/*****************************************************************************/
/* AddLocationDialog: Event Handlers */
/*****************************************************************************/
Template.AddLocationDialog.events({
	'show.bs.modal #AddLocationDialog': function(){
		console.log('modal callback');
	} 
});

/*****************************************************************************/
/* AddLocationDialog: Helpers */
/*****************************************************************************/
Template.AddLocationDialog.helpers({
	// locations: function(){
 //    return Template.instance().nearbyLocations.get();
 //  }
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
