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
	},
	distanceFromUser: function(){
		if (!!Session.get('currentUserCoords')){
			var venue = Venues.find({_id: this._id});
			var startPoint = {
				latitude: Session.get('currentUserCoords')[0],
				longitude: Session.get('currentUserCoords')[1]
			};
			var endPoint = {
				latitude: this.location.coordinates[0],
				longitude: this.location.coordinates[1]
			};

			var distance = geolib.getDistance(startPoint, endPoint);
			
			return calculateDistance(distance);
		}
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
