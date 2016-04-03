Template.shoppingList.helpers({
  shoppinglistItem: function() {
    return ShoppingList.find();
  }
});
Template.shoppingList.helpers({
  pantrylistItem: function() {
    return PantryList.find();
  }
});

Template.shoppingList.events({
  'click .shoppinglistAdd': function(e) {
   $('#createListAddPopup').modal({
     keyboard: true,
     show: true
   });
   $('#createListAddPopup').on('shown.bs.modal', function () {
      $('#name').focus();
   })
 },
   'click .moveAllToPantry': function(e) {
      $.each(ShoppingList.find().fetch(), function(index,value){
         Meteor.call('pantryListInsert', this._id , function(error, result) {
            return 0;
         });
         Meteor.call('shoppingListDelete', this._id, function(error, result) {
            return 0;
         });
      });
   },
  'click #save': function(e) {
   var shoppinglistItem = {
     name: $('#name').val(),
     amount: $('#amount').val(),
   };
   Meteor.call('shoppingListInsert', shoppinglistItem, function(error, result) {
     return 0;
   });
      $('#createListAddPopup').modal('hide');
      $('#name').val('');
      $('#amount').val('');
 },
 'click .deleteItem': function(e) {
   Meteor.call('shoppingListDelete', this._id, function(error, result) {
     return 0;
   });
 }
});
