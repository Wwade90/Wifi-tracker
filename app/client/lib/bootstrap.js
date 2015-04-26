Accounts.ui.config({
  passwordSignupFields: Meteor.settings.public.Accounts.config.passwordSignupFields
});

if (Meteor.isClient) {
	Meteor.startup(function() {
		getUserGeolocation();
	  GoogleMaps.load();
	});
}
