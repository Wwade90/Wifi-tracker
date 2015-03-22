NetworksController = RouteController.extend({
  subscriptions: function () {
    // this.subscribe('networks', this.params._id);
    // this.subscribe('networks', function(){
    //   this.ready();
    // });
  },

  data: function () {
    // return Networks.findOne({_id: this.params._id});
    // return Networks.find({});
  },

  detail: function () {
    this.render('NetworkItem', {
      data: Networks.findOne({_id: this.params._id})
    });
  },

  action: function () {
    // You can create as many action functions as you'd like.
    // This is the primary function for running your route.
    // Usually it just renders a template to a page. But it
    // might also perform some conditional logic. Override
    // the data context by providing it as an option in the
    // last parameter.
    this.render('NetworkItem', { /* data: {} */});
  }
});
