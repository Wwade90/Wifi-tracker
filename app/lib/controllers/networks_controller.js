NetworksController = RouteController.extend({
  subscriptions: function () {
    this.subscribe('networks', this.params._id);
  },

  data: function () {
    return Networks.findOne({_id: this.params._id});
  },

  detail: function () {
    this.render('NetworkDetail', {
      data: Networks.findOne({_id: this.params._id})
    });
  }, 

  create: function(data){
    this.render('NetworkCreate');
  },

  edit: function(){
    this.state.set('isEditing', true);
    this.render('NetworkDetail');
  }
});
