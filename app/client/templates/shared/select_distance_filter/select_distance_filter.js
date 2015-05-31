/*****************************************************************************/
/* SelectDistanceFilter: Event Handlers */
/*****************************************************************************/
Template.SelectDistanceFilter.events({
	'change #venue-filter--select-distance': function(e){
		Session.set('currentDistanceLimit', $('#venue-filter--select-distance :selected').val());
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
		var currentDistanceLimit = !!Session.get('currentDistanceLimit') ? Session.get('currentDistanceLimit') : Meteor.settings.public.Defaults.defaultDistanceLimit;
		return this.value ===  currentDistanceLimit;
	}
});

/*****************************************************************************/
/* SelectDistanceFilter: Lifecycle Hooks */
/*****************************************************************************/
Template.SelectDistanceFilter.created = function () {
};

Template.SelectDistanceFilter.rendered = function () {
	var currentDistanceLimit = !!Session.get('currentDistanceLimit') ? Session.get('currentDistanceLimit') : Meteor.settings.public.Defaults.defaultDistanceLimit;
	$(this.find('#venue-filter--select-distance')).val(currentDistanceLimit)
};

Template.SelectDistanceFilter.destroyed = function () {
};
