Meteor.publish('shopping-list', function(){
   return shopping-list.find({userId: this.userId});
});
