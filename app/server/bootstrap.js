if (Meteor.isServer){
	Meteor.startup(function(){
	  console.log(Networks.find().count() + ' networks');
	  console.log(Meteor.users.find().count() + ' users');
	});
}