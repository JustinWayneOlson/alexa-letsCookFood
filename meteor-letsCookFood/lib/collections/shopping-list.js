shopping-list = new Mongo.Collection('shopping-list');

Meteor.methods({
   shopping-list-insert: function(shopping-list-item){
      var user = Meteor.user();
      var subject = _.extend(shopping-list-item, {
         userId: user._id,
         author: user.username,
         submitted: Date()
      });

      var item-id =
   }
});
