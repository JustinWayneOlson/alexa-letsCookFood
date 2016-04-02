my_data={};
Template.searchRecipe.events({
'click #search-button': function(e) {
   var recipeKeyword = $("#recipe_search").val();
  function getRecipeJson() {
      var apiKey = "72wOanSqYlM4R6EgFAgS229UX0yx4fc9";
      var recipeId = 196149;
      var url = "http://api.bigoven.com/recipes?pg=1&rpp=25&any_kw=" + recipeKeyword + "&api_key=" + apiKey;
      $.ajax({
          type: "GET",
          dataType: 'json',
          cache: false,
          url: url,
          success: function (data) {
             console.log(data);
             my_data=data;
          }
      });
  }
  getRecipeJson();
}
});
