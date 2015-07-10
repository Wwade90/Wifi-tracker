/*****************************************************************************/
/* ListNearbyLocations: Event Handlers */
/*****************************************************************************/
Template.ListNearbyLocations.events({
});

Tracker.autorun(function() {  
  if (Session.get('query')) {
    var searchHandle = Meteor.subscribe('nearbyLocations', Session.get('query'));
    Session.set('searching', ! searchHandle.ready());
  }
});

Template.ListNearbyLocations.events({  
  'submit form': function(event, template) {
    event.preventDefault();
    var query = template.$('input[type=text]').val();
    if (query)
      Session.set('query', query);
  }
});

/*****************************************************************************/
/* ListNearbyLocations: Helpers */
/*****************************************************************************/
Template.ListNearbyLocations.helpers({
	locations: function(){
		return nearbyLocations.find();
	},
  distanceFromUser: function(){
    var endPoint = {
      latitude: this.lat,
      longitude: this.lng
    };

    var distanceValueFromUser = calculateDistance(this.distance),
        distanceUnitFromUser = calculateDistance(this.distance);
    var formatted = "<span class='distance-value'>" + distanceValueFromUser[0] + "</span>" + " <span class='distance-unit'>" + distanceUnitFromUser[1] + "</span>";
    return formatted;
  },
	searching: function(){

	}
});

/*****************************************************************************/
/* ListNearbyLocations: Lifecycle Hooks */
/*****************************************************************************/
Template.ListNearbyLocations.created = function () {
};

Template.ListNearbyLocations.rendered = function () {

};

Template.ListNearbyLocations.destroyed = function () {
};
