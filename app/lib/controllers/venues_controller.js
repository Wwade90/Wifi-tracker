VenuesController = RouteController.extend({
  subscriptions: function () {
    this.subscribe('Venues', this.params._id);
  },

  data: function () {
    return Venues.findOne({_id: this.params._id});
  },

  list: function() {
    this.render('VenueList', {
      data: this.subscribe('nearestVenues', {
        limit: 40,
        coordinates: Session.get('currentUserCoords')
      })
    });
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
