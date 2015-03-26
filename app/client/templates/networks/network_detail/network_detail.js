/*****************************************************************************/
/* NetworkItem: Event Handlers */
/*****************************************************************************/
Template.NetworkItem.events({
});

/*****************************************************************************/
/* NetworkItem: Helpers */
/*****************************************************************************/
Template.NetworkItem.helpers({
	NetworkItem: function(){
		return Networks.find({_id: this.params.id});
	}
});

/*****************************************************************************/
/* NetworkItem: Lifecycle Hooks */
/*****************************************************************************/


Template.NetworkItem.created = function () {
};

Template.NetworkItem.rendered = function () {
};

Template.NetworkItem.destroyed = function () {
};
