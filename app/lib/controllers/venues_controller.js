VenuesController = RouteController.extend({
  // onBeforeAction: function(){
  //   // getUserGeolocation();
  //   this.next();
  // },

  subscriptions: function () {
    this.subscribe('Venues', this.params._id);
  },

  data: function () {
    return Venues.findOne({_id: this.params._id});
  },

  list: function() {
    //if (Meteor.isClient && !!Session.get('currentUserCoords')){
      this.render('VenueList', {
        waitOn: function(){
          return [
            Meteor.subscribe('allUsers'),
            Meteor.subscribe('nearestVenues', {
              limit: 40,
              coordinates: Session.get('currentUserCoords')
            })
            // Meteor.subscribe('nearestVenues')
          ];
        },
        data: Venues.find({ 'location.coordinates': 
            { $near :
              { $geometry :
                { type : "Point" ,
                  coordinates : Session.get('currentUserCoords') 
                } ,
                $maxDistance : 6000,
                spherical: true
              } 
            }
        })
      })
    //}
  },

  detail: function () {
    this.render('VenueDetail', {
      data: Venues.findOne({_id: this.params._id})
    });
  }, 

  create: function(data){
    this.render('VenueCreate');
  },

  edit: function(){
    this.state.set('isEditing', true);
    this.render('VenueDetail');
  }
});
