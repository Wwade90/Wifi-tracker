

// Is the below subscription not necessary?
HomeController = RouteController.extend({
  layoutTemplate: 'MasterLayout',

  subscriptions: function() {
  	
  },

  action: function() {
    this.render('Home');
  }
});
