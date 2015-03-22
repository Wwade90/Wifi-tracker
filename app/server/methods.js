/*****************************************************************************/
/* Server Only Methods */
/*****************************************************************************/
Meteor.methods({
  /*
   * Example:
   *
   * '/app/items/insert': function (item) {
   * }
   */
	logString: function (myString) {
		console.log(myString);
	},
	'insertNetwork': function(network){
		Networks.insert(network);
	}
});
