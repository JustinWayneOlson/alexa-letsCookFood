PantryList = new Mongo.Collection('pantryList');

Meteor.methods({
   pantryListInsert: function(args) {
      var user = Meteor.user();
      var pantryList = _.extend(args, {
         userId: user._id,
         author: user.username,
         submitted: new Date()
      });
      var pantryListId = PantryList.insert(pantryList);
      return {
         _id: pantryListId
      };
   },
   pantryListDelete: function (args) {
      PantryList.remove({
      _id: args
   })
   }
});
