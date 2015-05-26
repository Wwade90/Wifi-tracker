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
		var currentDistanceLimit = Session.get('currentDistanceLimit')
		this.value ===  currentDistanceLimit ? "selected" : "";
		// return "selected"
	}
});

/*****************************************************************************/
/* SelectDistanceFilter: Lifecycle Hooks */
/*****************************************************************************/
Template.SelectDistanceFilter.created = function () {
};

Template.SelectDistanceFilter.rendered = function () {
	$('#venue-filter--select-distance option[value="'+ Session.get('currentDistanceLimit') +'"').attr('selected', true);
};

Template.SelectDistanceFilter.destroyed = function () {
};
