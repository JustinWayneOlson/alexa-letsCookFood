Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});

Router.route('/', {name: 'landingPage'});
Router.route('/shoppingList', {name:'shoppingList'});
