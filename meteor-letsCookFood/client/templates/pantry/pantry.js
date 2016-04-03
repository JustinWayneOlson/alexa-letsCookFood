Template.pantryList.helpers({
   pantrylistItem: function() {
      return PantryList.find();
   }
});
Template.pantryList.helpers({
   shoppinglistItem: function() {
      return ShoppingList.find();
   }
});

Template.pantryList.events({
      'click .pantrylistAdd': function(e) {
         $('#createListAddPopup').modal({
            keyboard: true,
            show: true
         });
         $('#createListAddPopup').on('shown.bs.modal', function (){
            $('#name').focus();
         })
      },
   'click .addToShoppingCart': function(e) {
         Meteor.call('shoppingListInsert', this._id, function(error, result){
            return 0;
         });

         Meteor.call('pantryListDelete', this._id, function(error, result){
            return 0;
         });
   },
   'click #save': function(e) {
      var pantrylistItem = {
            name: $('#name').val(),
            amount: $('#amount').val(),
         };
         Meteor.call('pantryListInsert', pantrylistItem, function(error, result){
            return 0;
         });
      $('#createListAddPopup').modal('hide');
      $('#name').val('');
      $('#amount').val('');
      },
      'click .deleteItem': function(e) {
         Meteor.call('pantryListDelete', this._id, function(error, result){
            return 0;
         });
      }
});
