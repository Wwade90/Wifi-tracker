/*****************************************************************************/
/* ListNearbyLocations: Event Handlers */
/*****************************************************************************/
var autofillForm = function(container, object){
  var form = container.find('form');
     /*
      • name
      • categories
      • tags
      • address
    */
  var venueData = {
    name: object.data.name,
    formattedAddress : object.data.location.formattedAddress.join(', '),
    latitude: object.data.location.lat,
    longitude: object.data.location.lng
  }
  form
    .find('#location_name').val(venueData.name).end()
    .find('#location_address').val(venueData.formattedAddress).end()
    .find('#location_latitude').val(venueData.latitude).end()
    .find('#location_longitude').val(venueData.longitude);
  debugger;
};

Template.ListNearbyLocations.events({
  'click [href="#tab--form-addVenue"]': function(event){
    event.preventDefault();
    $('[href="#tab--form-addVenue"]').tab('show');
  },
  'click a[role="tab"]': function(event){
    event.preventDefault();
    $(event.currentTarget).tab('show');
  },
  'click [data-foursquare-id]': function(event, template){
    var venueId = event.currentTarget.dataset.foursquareId;
    var getVenue = Meteor.call('getVenue', venueId, function(error, response){
      if (!error){
        var foursquareVenue = response.data.response.venue;
        $('[href="#tab--form-addVenue"]').tab('show');
        autofillForm($('#tab--form-addVenue'), {type: 'venue', data: foursquareVenue});
      }
      else {
        console.error(error);
      }
    });
  }
});

Tracker.autorun(function() {  
  if (Session.get('query')) {
    var searchHandle = Meteor.subscribe('nearbyLocations', Session.get('query'));
    Session.set('searching', ! searchHandle.ready());
  }
});

// Template.ListNearbyLocations.events({  
//   'submit form': function(event, template) {
//     event.preventDefault();
//     var query = template.$('input[type=text]').val();
//     if (query)
//       Session.set('query', query);
//   }
// });

/*****************************************************************************/
/* ListNearbyLocations: Helpers */
/*****************************************************************************/
Template.ListNearbyLocations.helpers({
  i18nAddLocationText: function(){
    return TAPi18n.__('uitext.add.i_want_to_add_my_own');
  },
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
