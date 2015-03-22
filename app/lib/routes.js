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

Router.route('/:_id', {
  name: 'network.item',
  controller: 'NetworksController',
  action: 'detail',
  where: 'client',
  waitOn: function(){
    return [
      Meteor.subscribe('NetworkItem', this.params._id),
      Meteor.subscribe('allUsers')
    ];
  }
});
