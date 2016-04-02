ShoppingList = new Mongo.Collection('shoppingList');

Meteor.methods({
  shoppingListInsert: function(args) {
    var user = Meteor.user();
    var shoppingList = _.extend(args, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });
    var shoppingListId = ShoppingList.insert(shoppingList);
    return {
      _id: shoppingListId
    };
  },
  shoppingListDelete: function(args) {
    ShoppingList.remove({
      _id: args
    })
  }
});
