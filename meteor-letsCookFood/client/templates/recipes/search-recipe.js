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
};

Template.recipes.events({
   'click #submit-query': function(e){
      endpoint=$("form").serialize();
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
               console.log("penis");
               console.log(data);
               $.each(data.results, function(index, value)
               {
                  recipe_title=value.title;
                  recipe_title=recipe_title.replace(/\s+/g, '-').toLowerCase();
                  $("#recipe-results").append('<div class="container-fluid"><h4">' + value.title + '<h4> <img src="' + value.image + '"></img><button class="recipe-link btn btn-success" id="' + recipe_title + '">View Full Recipe</button></div>');
               });
               $(".recipe-link").click(function(){
                  recipe_details=$(this).attr("id");
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

         });
     }
   });
}

      getRecipeJson();
      }
});

