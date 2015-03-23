NetworksController = RouteController.extend({
  subscriptions: function () {

  },

  data: function () {

  },

  show: function () {
    // You can create as many action functions as you'd like.
    // This is the primary function for running your route.
    // Usually it just renders a template to a page. But it
    // might also perform some conditional logic. Override
    // the data context by providing it as an option in the
    // last parameter.
    this.render('NetworkItem', {
      data: Networks.findOne({_id: this.params._id})
    });
  }, 

  edit: function(){
    this.state.set('isEditing', true);
    this.render('TodosDetail');
  }
});
