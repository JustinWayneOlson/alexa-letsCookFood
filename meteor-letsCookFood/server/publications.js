Meteor.publish('shoppingList', function(){
   return ShoppingList.find({userId: this.userId});
});
