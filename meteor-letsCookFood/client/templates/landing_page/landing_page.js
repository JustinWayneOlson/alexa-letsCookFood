Template.landingPage.rendered = function() {
  function getRecipeJson() {
      var apiKey = "72wOanSqYlM4R6EgFAgS229UX0yx4fc9";
      var recipeId = 196149;
      var url = "http://api.bigoven.com/recipe/" + recipeId + "?api_key=" + apiKey;
      $.ajax({
          type: "GET",
          dataType: 'json',
          cache: false,
          url: url,
          success: function (data) {
              console.log(data);
              $("#recipeTitle").html(data.Title);
              $("#instructions").html(data.Instructions);
          }
      });
  }

  getRecipeJson();
}
