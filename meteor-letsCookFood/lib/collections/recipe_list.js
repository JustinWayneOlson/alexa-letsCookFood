RecipeList = new Mongo.Collection('recipeList');

Meteor.methods({
   recipeListInsert: function(args) {
      var user = Meteor.user();
      var recipeList = _.extend(args, {
         userId: user._id,
         author: user.username,
         submitted: new Date()
      });
      var recipeListId = RecipeList.insert(recipeList);
      return {
         _id: recipeListId
      };
   },
   recipeListDelete: function (args) { RecipeList.remove({
      _id: args
   })
   }
});
