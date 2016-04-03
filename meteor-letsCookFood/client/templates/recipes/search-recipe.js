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
               $("#recipe-results").append('<div class="row"><div class="container"><h3>' + value.title + '</h3> <img src="' + value.image + '"></img></div></div><div class="row"><div><button name="' + recipe_title + '" class="recipe-link btn btn-success col-md-2" id="' + recipe_id + '">View Full Recipe</button><button class="btn btn-info col-md-2" id="add-favorite">Add To Favorites</button></div></div>');
            });
            $(".recipe-link").click(function(){
                var recipe_id = $(this).attr("id");
                Router.go('viewRecipe', {_recipeId:recipe_id});
            });
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
