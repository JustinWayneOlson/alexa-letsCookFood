Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'});

Router.route('/', {name: 'landingPage'});
Router.route('/pantryList', {
   name:'pantryList',
   data: function() { return PantryList.find();},
  waitOn: function() {
    return Meteor.subscribe('pantryList');
    }

});

Router.route('/recipes', {
   name:'recipes',
   data: function() { return RecipeList.find();}
});

Router.route('/shoppingList', {
   name:'shoppingList',
   data: function() { return ShoppingList.find();},
  waitOn: function() {
    return Meteor.subscribe('shoppingList');
    }

});

Router.route('/letsCook', {
   name:'letsCook',
   data: function() { return PantryList.find();}
});

Router.route('/recipes/:_recipeId', {
   name:'viewRecipe',
   data: function() { return RecipeList.find(); }
});
