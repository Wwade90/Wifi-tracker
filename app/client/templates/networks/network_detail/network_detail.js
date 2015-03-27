/*****************************************************************************/
/* NetworkDetail: Event Handlers */
/*****************************************************************************/
Template.NetworkDetail.events({
});

/*****************************************************************************/
/* NetworkDetail: Helpers */
/*****************************************************************************/
Template.NetworkDetail.helpers({
	NetworkDetail: function(){
		return Networks.find({_id: this.params.id});
	}
});

/*****************************************************************************/
/* NetworkDetail: Lifecycle Hooks */
/*****************************************************************************/


Template.NetworkDetail.created = function () {
};

Template.NetworkDetail.rendered = function () {
};

Template.NetworkDetail.destroyed = function () {
};
