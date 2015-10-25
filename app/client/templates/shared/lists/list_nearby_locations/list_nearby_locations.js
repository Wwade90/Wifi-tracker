/* JSHint Template: false */
/* JSHint TAPi18n: false */
/* JSHint calculateDistance: false */
/*****************************************************************************/
/* ListNearbyLocations: Event Handlers */
/*****************************************************************************/
var resetForm = function(form){
  console.log('Resetting this form!');
  console.log(form);
};
var autofillForm = function(container, response){
   /*
    • name
    • categories
    • tags
    • address
  */
  var $form = container.find('form');
  var venueData = {
      name: response.data.name,
      $formattedAddress : response.data.location.formattedAddress.join(', '),
      latitude: response.data.location.lat,
      longitude: response.data.location.lng,
      categories: _.pluck(response.data.categories, 'name')
    };
    // categoriesTemplate = [
    //
    // ];

  // $form
var autofillForm = function(container, object){
     /*
      • name
      • categories
      • tags
      • address
    */
  var form = container.find('form'),
      venueData = {
        name: object.data.name,
        formattedAddress : object.data.location.formattedAddress.join(', '),
        latitude: object.data.location.lat,
        longitude: object.data.location.lng,
        categories: _.pluck(object.data.categories, 'name')
      };

  form
    .find('#location_name').val(venueData.name)
      .prop('disabled', true).end()
    .find('#location_address').val(venueData.formattedAddress)
      .prop('disabled', true).end()
    .find('#location_latitude').val(venueData.latitude)
      .prop('disabled', true).end()
    .find('#location_longitude').val(venueData.longitude)
      .prop('disabled', true).end()
    .find('#location_categories').val(venueData.categories)
      .prop('disabled', true).end();
};
  // var newCategories = [];
  var newCategoryTemplate;
  venueData.categories.forEach(function(category){
     newCategoryTemplate = "<option value="+ category +" selected>"+ category +"</option>";
    // newCategories.push();
    $('#location_categories').append(newCategoryTemplate).val(category).trigger('chosen:updated');
  });

  if (!$form.find('.alert').length){
    var alertTemplate = [
      '<div class="alert alert-info alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><div class="alert-body"></div></div>'
    ].join('\n');

    $form.append(alertTemplate);
    var alertEl = $form.find('.alert'),
        alertBody = alertEl.find('.alert-body');

    alertBody.text('This is just a test');
  }

};

Template.ListNearbyLocations.events({
  'click [href="#tab--form-addVenue"]': function(event){
    event.preventDefault();
    // Show the add venue form tab
    $('[href="#tab--form-addVenue"]').tab('show');
    $('#network_create').trigger('reset');

    if ($(event.currentTarget).data('trigger').indexOf('resetForm') > -1){
      // If link has data-attribute to reset form, make it so
      resetForm($form);
    }
  },
  'click a[role="tab"]': function(event){
    event.preventDefault();
    $(event.currentTarget).tab('show');
  },
  'click [data-foursquare-id]': function(event){
    var venueId = event.currentTarget.dataset.foursquareId;
    Meteor.call('getVenue', venueId, function(error, response){
      if (!error){
        var foursquareVenue = response.data.response.venue;
        $('[href="#tab--form-addVenue"]').tab('show');
        autofillForm($('#tab--form-addVenue'), {type: 'venue', data: foursquareVenue});
        $(event.currentTarget).addClass('active').siblings().removeClass('active');
      }
      else {
        console.error(error.message);
        alert('Could not retrieve response from server. Reason: ' + error.message);
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
  getCategories: function(){
    var categories = Meteor.call('getCategories', function(error, response){
      if (!error){
        console.log(response.data.response.categories);
        return response.data.response.categories;
      } else {
        console.error(error);
        return "Could not retrieve categories."
      }
    });
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
