Template.pantryList.helpers({
   listItem: function() {
      return PantryList.find();
   }
});
Template.pantryList.events({
      'click .listAdd': function(e) {
         $('#createListAddPopup').modal({
            keyboard: true,
            show: true
         });
         $('#createListAddPopup').on('shown.bs.modal', function (){
            $('#add_to_pantry').focus();
         })
      },
   'click #save': function(e) {
      var data_to_parse = $('#add_to_pantry').val();
      var array_to_parse = data_to_parse.replace(/ /g, "").split(",");
       //  $.each(array_to_parse, function(index, value){
      var ajax=$.ajax({
                url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/parseIngredients', // The URL to the API. You can get this in the API page of the API you intend to consume
                type: 'POST', // The HTTP Method, can be GET POST PUT DELETE etc
                data: {'ingredientList':'3 eggs', "servings":"2"}, // Additional parameters here
                dataType: 'JSON',
                success: function(data) { console.dir((data.source)); },
                error: function(err) { alert(err); },
                beforeSend: function(xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "DVIsMTrR1PmshMNnKC5T7v9XqFbZp1jPadwjsnQMMeyTlkY0pJ"); // Enter here your Mashape key
             }
            })();
        // });
      listItem={};
      Meteor.call('pantryListInsert', listItem, function(error, result){
         return 0;
      });
      $('#createListAddPopup').modal('hide');
      $('#add_to_pantry').val('');
   },
      'click .deleteItem': function(e) {
         Meteor.call('pantryListDelete', this._id, function(error, result){
            return 0;
         });
      }
});
