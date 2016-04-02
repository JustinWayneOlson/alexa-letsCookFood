Meteor.publish('shoppingList', function(){
   return ShoppingList.find({userId: this.userId});
});

Meteor.publish('pantryList', function(){
   return PantryList.find({userId: this.userId});
});

Meteor.publish('recipeList', function(){
   return RecipeList.find({userId: this.userId});
});

Meteor.publish('ingredients', function(){
   return Ingredients.find({userId: this.userId});
});
