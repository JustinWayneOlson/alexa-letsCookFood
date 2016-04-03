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
