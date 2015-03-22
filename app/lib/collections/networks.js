/*global Meteor */
/*global _ */

Networks = new Mongo.Collection('networks');

if (Meteor.isServer) {
  Networks.allow({
    insert: function (userId, doc) {
      return true; //userId === doc.userId;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true; // userId === doc.userId;
    },

    remove: function (userId, doc) {
      return true; // userId === doc.userId;
    }
  });
}

if (Networks.find().count() === 0){
  console.log("No networks. Seeding database...");
  
  var network = function(){
    return {
      name: Fake.word() + "'s Network",
      address: Fake.word() + ' ' + 
        Fake.fromArray(['Street', 'Road', 'Lane', 'Way', 'Avenue']),
      createdAt: new Date().toDateString()
    };
  };
  _(20).times(function(){
    // Seed fake networks.
    Networks.insert(network());
  });
  
  console.log(Networks.find().count() + ' networks');
}
