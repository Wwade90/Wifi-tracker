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
			var toMi = function(distance){ return distance * 0.00062137 };
			var toFt = function(distance){ return Math.round((distance + 0.00001) * 100) / 100};
			var toBlocks = function(distance){ return Math.round((toMi(distance) * 20.0000400001) * 100) / 100 };
			var calculateDistance = function(distance){
				if (Math.round(toMi(distance)) <= 0){
					return toBlocks(distance) <= 1.5 ? toFt(distance) + " ft" : toBlocks(distance) + " blocks";
				} else { 
					return (Math.round(toMi(distance) * 100) / 100) + " mi";//return Math.round(toMi(distance)) + " mi";
				}
			};
			//var toKM = Math.round(distance * 0.001);
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
