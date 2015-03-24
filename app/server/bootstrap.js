Meteor.startup(function(){
	//,
  // onBeforeAction: function(){
  //   console.log(Networks.find().count() + ' Networks already in db.');
  //   if (Networks.find().count() == 0){
  //     console.log("No networks. Seeding database...");
      
      // _(20).times(function(){
      //   // Seed fake networks.
      //   Networks.insert({
      //     name: Fake.word() + "'s Network",
      //     address: Fake.word() + ' ' + 
      //       Fake.fromArray(['Street', 'Road', 'Lane', 'Way', 'Avenue']),
      //     createdAt: new Date().toDateString()
      //   });
      // });

  
  
      
      console.log(Networks.find().count() + ' networks');
  //   }
  //   this.ready();
  // }
});