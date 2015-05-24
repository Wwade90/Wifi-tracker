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
		// return Venues.find(
  //           { 'location.coordinates': 
  //             { $near :
  //               { $geometry :
  //                 { type : "Point" ,
  //                   coordinates : Session.get('currentUserCoords') 
  //                 },
  //                 $maxDistance : 6000,
  //                 spherical: true
  //               } 
  //             }   
  //           }, {limit: 10})
		return Venues.find({}, {limit: Session.get('currentVenueLimit')});
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
