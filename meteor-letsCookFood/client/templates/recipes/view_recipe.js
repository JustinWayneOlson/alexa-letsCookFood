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
         recipe=data;
            recipe_link=data.sourceUrl;
            recipe_link=recipe_link.replace(/\//g, "%2F");
            url="https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/extract?forceExtraction=false&url=" + recipe_link + "&mashape-key=pzNnTT0Geimshk4zTvFtsrAINqiHp1YEhgojsnngmYNQaIZoom";
            $.ajax({
               type: "GET",
               cache: false,
               dataTyle: 'json',
               url: url,
               success: function(data)
               {
                  recipe_info=$.extend(data,recipe);
                  $("#recipe").append('<button class="btn btn-primary" id="add-shopping">Add To Shopping</button>');
                  $("#recipe").append('<button class="btn btn-info" id="add-favorite">Add To Favorites</button>');
                  $("#recipe").append('<h3>' + recipe_info.title + '</h3>');
                  $("#recipe").append('<img src="' + recipe_info.image + '"></img>');
                  $("#recipe").append(recipe_info.instructions);
                  $("#recipe").append('<p>' + recipe_info.sourceName + '</p>');
                  $("#recipe").append('<div id="ingredientContainer">' + recipe_info.sourceName + '</div>');
                  ingredients=data.extendedIngredients;
                  ingred_img=[];
                  $.each(ingredients, function(index,value) {
                     $.ajax({
                        url:"https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/visualizeIngredients",
                        data: {'ingredientList':value.name,'defaultCss':"unchecked","measure":"us","servings":"1","view":"grid"},
                        dataType:'HTML',
                        type:"POST",
                        success: function(data){$("#ingredientContainer").append(data);},
                        error: function(err){console.log(err);},
                        beforeSend: function(xhr){
                        xhr.setRequestHeader("X-Mashape-Authorization","pzNnTT0Geimshk4zTvFtsrAINqiHp1YEhgojsnngmYNQaIZoom");
                              }
                     });
                  });
                  $("#add-favorite").click(function(){
                      Meteor.call('recipeListInsert', recipe_info, function(error, results){
                        return 0;
                     });
                  });
                  $("#add-shopping").click(function(){
                     $.each(recipe_info.extendedIngredients, function(index,value){
                      Meteor.call('shoppingListInsert', value , function(error, results){
                        return 0;
                      });
                     });
                  });
               }
         });
      }
   });
}
