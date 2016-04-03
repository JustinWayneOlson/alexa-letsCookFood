Template.shoppingList.helpers({
  listItem: function() {
    return ShoppingList.find();
  }
});
Template.shoppingList.helpers({
  listItem: function() {
    return PantryList.find();
  }
});

Template.shoppingList.events({
  'click .listAdd': function(e) {
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
         Meteor.call('pantryListInsert', value, function(error, result) {
            return 0;
         });
         Meteor.call('shoppingListDelete', this._id, function(error, result) {
            return 0;
         });
      });
   },
  'click #save': function(e) {
   var listItem = {
     name: $('#name').val(),
     amount: $('#quantity').val(),
     notes: $('#notes').val()
   };
   Meteor.call('shoppingListInsert', listItem, function(error, result) {
     return 0;
   });
      $('#createListAddPopup').modal('hide');
      $('#name').val('');
      $('#quantity').val('');
      $('#notes').val('');
 },
 'click .deleteItem': function(e) {
   Meteor.call('shoppingListDelete', this._id, function(error, result) {
     return 0;
   });
 }
});
