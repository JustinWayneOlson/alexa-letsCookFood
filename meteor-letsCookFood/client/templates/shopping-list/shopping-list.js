Template.shoppingList.events({
   'click #add-shopping-ingredient': function(e){
      var ingredient = {
         name = $("#item").val();
         quantity = $('#item-quantity').val();
      };

      Meteor.call('shopping-ingredient-insert'), ingredient, function(error, result)
      {
         return 0;
      });
   }
});
