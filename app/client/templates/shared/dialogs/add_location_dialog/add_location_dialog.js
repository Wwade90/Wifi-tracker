/*****************************************************************************/
/* AddLocationDialog: Event Handlers */
/*****************************************************************************/
var nearbyLocationsSub;
Template.AddLocationDialog.events({
	'show.bs.modal #AddLocationDialog': function(){
		if (nearbyLocationsSub)
			nearbyLocationsSub.stop();
		nearbyLocationsSub = Meteor.subscribe('nearbyLocations', {coords: !!Session.get('currentUserCoords') ? Session.get('currentUserCoords') : Meteor.settings.public.Defaults.defaultUserCoords})
	},
	'hidden.bs.modal #AddLocationDialog': function(event, template){
		if (nearbyLocationsSub)
			nearbyLocationsSub.stop();
		template.find('form').reset();
		tempalte.find('a[data-foursquare-id]').removeClass('active');
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
