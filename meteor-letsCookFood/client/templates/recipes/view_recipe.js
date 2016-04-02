Template.viewRecipe.rendered = function()
{
   recipe_id = Router.current().params._recipeId;
   var url="https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/" + recipe_id + "/information?includeNutrition=true" + "&mashape-key=pzNnTT0Geimshk4zTvFtsrAINqiHp1YEhgojsnngmYNQaIZoom";
   $.ajax({
      type: "GET",
      dataType: 'json',
      cache: false,
      url: url,
      success: function (data)
      {
         console.log(data);
         recipe=data;
         $("#recipe").append('<h3>' + data.title + '</h3>');
         $("#recipe").append('<img src="' + data.image + '"></img>');
      }
   });
}
