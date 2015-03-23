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
