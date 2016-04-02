Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return Meteor.subscribe('shoppingList')
    }
});

Router.route('/', {name: 'landingPage'});
Router.route('/pantry', {name:'pantry'});
Router.route('/recipes', {name:'recipes'});
Router.route('/shoppingList', {name:'shoppingList'});
Router.route('/letsCook', {name:'letsCook'});
