Template.recipes.rendered = function(){
   query_results=[];
   $.getJSON("/query_fields.json", function(data){
         query_results=data;

      $.each(query_results, function(index, value)
      {
         $("#query-fields").append('<li value="' + index+ '" class="dropdown_item" id="' + value.value + '"><a>' + value.name + '</a></li>');
      });

      $(".dropdown_item").click(function(){
         if(query_results[$(this).attr("value")].options != "none")
         {
            form_options="";
            $.each(query_results[$(this).attr("value")].options, function(index, value)
               {
                  form_options+='<option value="' + value + '">' + value + '</option>';
               });
            $("#query-parameters").append('<div value="' + $(this).attr("value") + '" class="row"><h4>' + $(this).text() + '</h4><select name="'+$(this).attr("id") + '" >' + form_options + '</select</div>');
         }
         else
         {
         $("#query-parameters").append('<div value="' + $(this).attr("value") + '" class="row"><h4>' + $(this).text() + '</h4><input name="' + $(this).attr("id") + '" type="text"> ' + query_results[$(this).attr("value")].format + '</div>');
         }
      });



   });

}
   function getRecipeJson() {
      var apiKey = "pzNnTT0Geimshk4zTvFtsrAINqiHp1YEhgojsnngmYNQaIZoom";
      var url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?" + endpoint + "&mashape-key=" + apiKey;
      console.log(url);
      $.ajax({
         type: "GET",
         dataType: 'json',
         cache: false,
         url: url,
         success: function (data) {
            console.log(data);
            $.each(data.results, function(index, value)
            {
               recipe_id=value.id;
               recipe_title=value.title;
               recipe_title=recipe_title.replace(/\s+/g, '-').toLowerCase();
               $("#recipe-results").append('<div class="container-fluid"><h3>' + value.title + '</h3> <img src="' + value.image + '"></img><button name="' + recipe_title + '" class="recipe-link btn btn-success" id="' + recipe_id + '">View Full Recipe</button><button class="btn btn-info" id="add-favorite">Add To Favorites</button></div>');
            });
            $(".recipe-link").click(function(){
                var recipe_id = $(this).attr("id");
                Router.go('viewRecipe', {_recipeId:recipe_id});
            });
            $("#add-favorite").click(function(){
               var recipe = {
                  "name":$(this).attr("name"),
                  "id":$(this).attr("id")
               };
               Meteor.call('recipeListInsert', recipe, function(error, results){
                  return 0;
               });
            });
            /*$(".recipe-link").click(function(){
               recipe_information=$(this).attr("id");
               var recipe_url="https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/extract?forceExtraction=false&url=http%3A%2F%2Fwww.melskitchencafe.com%2F" + recipe_endpoint + "%2F&mashape-key=" + apiKey;
               console.log(recipe_url);
               $.ajax({
                  type: "GET",
                  dataType: 'json',
                  cache: false,
                  url: recipe_url,
                  success: function (data)
                  {
                     recipe_conent=data;
                     console.log(data);
                  }

               });

            });*/
         }
      });

   }
Template.recipes.events({
   'click #submit-query': function(e){
      endpoint=$("form").serialize();
      getRecipeJson();
   },

   'click .recipe-link': function(e){
     $(".recipe-link").click(function(){
         console.log($(this).attr("id"));
     });
   }
});
