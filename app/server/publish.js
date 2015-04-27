/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */

//starts here
Meteor.publish('allNetworks', function(){
	return Networks.find();
});

Meteor.publish('NetworkDetail', function(id){
  return Networks.find(id);
});

Meteor.publish('allUsers', function(){
	return Meteor.users.find();
});

Meteor.publish('allMarkers', function(){
	return Markers.find();
});

Meteor.publish('nearestVenues', function(params){
	var limit = !!params ? params.limit : 50;
	if (params.coordinatess){

		// var filter = {
	
  //     $geoNear: {
  //     	$geometry: {
  //       	type: "Point",
  //       	coordinates: [40.87304, -73.871276],
	 //        distanceField: "distance"
	 //      }
  //     },
  //     limit: limit
		// };
		// var filter = [{
	 //    "location":
	 //     	{ coords:
	 //      	{ $near :
	 //          {
	 //            $geometry: { 
	 //            	type: "Point", 
	 //            	coords: params.coords 
	 //            },
	 //            $minDistance: 1000,
	 //            $maxDistance: 5000
	 //          }
	 //        }
	 //      }
  //   }];
		// return Venues.aggregate(filter);
		return Venues.find({'location.coordinates': 
				{ $near :
          { $geometry :
            { type : "Point" ,
              coordinates: params.coordinates } 
            },
            $maxDistance : 10000
   				} 
   			});	
	} else {
		return Venues.find({}, {limit: limit})
	}
});

// Meteor.publish('nearest-venues', function (latitude, longitude, radius) {
//     var self = this;
//     console.log(latitude, longitude, radius);
//     var handle = Venues.aggregate([
//         {
//             $geoNear: {
//                 near: {type: 'Point', coordinates: [longitude, latitude]},
//                 distanceField: 'distance',
//                 maxDistance: radius,
//                 spherical: true,
//                 sort: -1
//             }
//         }
//     ]).forEach(function(venue) {
//         self.added('nearest-venues', venue._id, {
//             name: venue.name,
//             latitude: venue.location.coords[1],
//             longitude: venue.location.coords[0],
//             distance: Math.round((venue.distance / 1000.0) * 10) / 10
//         });
//     });
// });


Meteor.publish('allVenues', function(params){
	params ? !!params : 50;
	return Venues.find({}, {limit: params});
});

Meteor.publish('VenueDetail', function(id){
  return Venues.find(id);
});

