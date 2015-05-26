/*****************************************************************************/
/* SelectDistanceFilter: Event Handlers */
/*****************************************************************************/
// var selectFilter = {
// 	elementID: "venue-filter--select-distance",
// 	cssSelector: '#' + this.elementID,
// 	elementLabel: "Distance"
// };
Template.SelectDistanceFilter.events({
	'change #venue-filter--select-distance': function(e){
		Session.set('currentDistanceLimit', $(e.currentTarget).val());
		console.log(Session.get('currentDistanceLimit'));
	}
});

/*****************************************************************************/
/* SelectDistanceFilter: Helpers */
/*****************************************************************************/
Template.SelectDistanceFilter.helpers({
	'elementID' : function() { return  "venue-filter--select-distance" },
	'elementLabel' : function() { return "Distance" },
	'distances': function() { return Distances.find(); },
	'optionSelected' : function(){
		var currentDistanceLimit = Session.get('currentDistanceLimit');
		return this.value === currentDistanceLimit;
	}
});

/*****************************************************************************/
/* SelectDistanceFilter: Lifecycle Hooks */
/*****************************************************************************/
Template.SelectDistanceFilter.created = function () {
	// Session.set('currentVenueLimit', Meteor.settings.public.Defaults.defaultVenueLimit);
	// Session.set('currentDistanceLimit', Meteor.settings.public.Defaults.defaultDistanceLimit);
};

Template.SelectDistanceFilter.rendered = function () {
	// $('#venue-filter--select-distance').trigger("change");
	// console.log(Session.get('currentDistanceLimit'));
};

Template.SelectDistanceFilter.destroyed = function () {
};
