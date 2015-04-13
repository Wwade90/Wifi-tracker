if (Meteor.isServer){
	Meteor.startup(function(){
	  console.log(Networks.find().count() + ' networks');
	});
}