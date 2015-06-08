VenuesController = RouteController.extend({
  // index: function() {
  // 	this.wait([
  //      Meteor.subscribe('distances'),
  //      Meteor.subscribe('nearestVenues', {
  //        limit : Meteor.settings.public.Defaults.defaultVenueLimit,
  //        coordinates : !!Session.get('currentUserCoords') ? Session.get('currentUserCoords') : Meteor.settings.public.Defaults.defaultUserCoords, 
  //        distanceLimit : !!Session.get('currentDistanceLimit') ? Session.get('currentDistanceLimit') : Meteor.settings.public.Defaults.defaultDistanceLimit 
  //      })
  //   ]);
    
  //   if (this.ready()) {
  //     this.render('VenueList', {
  //       data: function() { 
  //         return Venues.find({ 
  //           'coordinates': 
  //             { 
  //               $near : !!Session.get('currentUserCoords') ? Session.get('currentUserCoords') : Meteor.settings.public.Defaults.defaultUserCoords,
  //               $maxDistance: !!Session.get('currentDistanceLimit') ? Session.get('currentDistanceLimit') : Meteor.settings.public.Defaults.defaultDistanceLimit,
  //             } 
  //         })
  //       }
  //     });
  //   } else {
  //     this.render('Loading');
  //   }
  // },

  detail: function () {
  	this.wait([
      Meteor.subscribe('VenueDetail', this.params._id),
    ]);
    this.render('VenueDetail', {
      data: Venues.findOne({_id: this.params._id})
    });
  }, 

  // create: function(data){
  //   this.render('VenueCreate');
  // }

  /*edit: function(){
    this.state.set('isEditing', true);
    this.render('VenueDetail');
  }*/
});
