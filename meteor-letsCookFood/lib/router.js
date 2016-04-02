Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return Meteor.subscribe('shoppingList')
    }
});

Router.route('/', {name: 'landingPage'});
Router.route('/pantryList', {
   name:'pantryList',
   data: function() { return PantryList.find();}
});

Router.route('/recipes', {
   name:'recipes',
   data: function() { return RecipeList.find();}
});

Router.route('/shoppingList', {
   name:'shoppingList',
   data: function() { return ShoppingList.find();}
});

Router.route('/letsCook', {
   name:'letsCook',
   data: function() { return PantryList.find();}
});

Router.route('/recipes/:_recepeName', {
   name:'viewRecipe',
   data: function() { return RecipeList.find(); }
});
