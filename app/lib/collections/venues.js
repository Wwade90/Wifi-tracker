Venues = new Mongo.Collection('venues');


// if (Meteor.isServer) {
//   Venues.allow({
//     insert: function (userId, doc) {
//       return false;
//     },

//     update: function (userId, doc, fieldNames, modifier) {
//       return false;
//     },

//     remove: function (userId, doc) {
//       return false;
//     }
//   });

//   Venues.deny({
//     insert: function (userId, doc) {
//       return true;
//     },

//     update: function (userId, doc, fieldNames, modifier) {
//       return true;
//     },

//     remove: function (userId, doc) {
//       return true;
//     }
//   });
// }


