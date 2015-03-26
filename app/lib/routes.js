Router.onBeforeAction(function() {
  GoogleMaps.load();
  this.next();
}, { only: ['network.item'] });

Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client',
  waitOn: function(){
  	return [
      Meteor.subscribe('allNetworks'),
      Meteor.subscribe('allUsers')
    ];
  }
});

Router.route('/network/:_id', {
  name: 'network.detail',
  controller: 'NetworksController',
  action: 'show',
  where: 'client',
  waitOn: function(){
    return [
      Meteor.subscribe('NetworkDetail', this.params._id),
      Meteor.subscribe('allUsers')
    ];
  }
});

Router.route('/network/create', {
  name: 'network.create',
  controller: 'NetworksController',
  action: 'create',
  where: 'client',
  waitOn: function(){
    return [
      // Meteor.subscribe('NetworkDetail', this.params._id),
      Meteor.subscribe('allUsers')
    ];
  }
});

Router.route('/network/:_id/edit', {
  name: 'network.edit',
  controller: 'NetworksController',
  action: 'edit',
  where: 'client'
});
