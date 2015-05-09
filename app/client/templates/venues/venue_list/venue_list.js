/*****************************************************************************/
/* VenueList: Event Handlers */
/*****************************************************************************/
Template.VenueList.events({
});

/*****************************************************************************/
/* VenueList: Helpers */
/*****************************************************************************/
Template.VenueList.helpers({
	venues: function(){
		// return Venues.find({}, {
		// 		$geoNear: {
		// 			near: {
		// 				type: "Point",
		// 				coordinates: Session.get('currentUserCoords')
		// 			},
		// 			// distanceField: "distance",
		// 			// maxDistance: 500,
		// 			// query: options,
		// 			spherical: true
		// 		}
		// 	}
		// );
		// return Venues.find(
		// 	{ 'location.coordinates': 
		// 		{ 
		// 			$near: [Session.get('currentUserCoords')[0], Session.get('currentUserCoords')[1]] //,
		// 			// $maxdistance:10/69
		// 		}
		// 	});
		return Venues.find();
	},
	venueCount: function(){
		return Venues.find().count();
	},
	nearestVenues: function(){
		return Venues.find();
	}
});

/*****************************************************************************/
/* VenueList: Lifecycle Hooks */
/*****************************************************************************/
Template.VenueList.created = function () {

};

Template.VenueList.rendered = function () {
};

Template.VenueList.destroyed = function () {
};
