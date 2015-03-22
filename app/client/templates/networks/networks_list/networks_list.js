/*****************************************************************************/
/* NetworksList: Event Handlers */
/*****************************************************************************/
Template.NetworksList.events({
});

/*****************************************************************************/
/* NetworksList: Helpers */
/*****************************************************************************/
Template.NetworksList.helpers({
	networks: function(){
		return Networks.find();
	}
});

/*****************************************************************************/
/* NetworksList: Lifecycle Hooks */
/*****************************************************************************/
Template.NetworksList.created = function () {
};

Template.NetworksList.rendered = function () {
};

Template.NetworksList.destroyed = function () {
};
