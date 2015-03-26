NetworksController = RouteController.extend({
  subscriptions: function () {

  },

  data: function () {

  },

  show: function () {
    this.render('NetworkDetail', {
      data: Networks.findOne({_id: this.params._id})
    });
  }, 

  edit: function(){
    this.state.set('isEditing', true);
    this.render('TodosDetail');
  }
});
