Template.recipes.rendered = function(){
       query_results = [{"name":"Cuisine","value":"cuisine","description":"cuisine","options":["african","chinese","japanese","korean","vietnamese","thai","indian","british","irish","french","italian","mexican","spanish","middle eastern","jewish","american","cajun","southern","greek","german","nordic","eastern european","caribbean","latin american"],"format":"string"},{"name":"Diet","value":"diet","description":"Specific Diet","options":["pescetarian","lacto vegetarian","ovo vegetarian","vegan","paleo","primal","vegetarian"],"format":"string"},{"name":"Exclude Ingredients","value":"excludeIngredients","description":"Exclude Ingredients","options":"none","format":"string"},{"name":"Include Ingredients","value":"includeIngredients","description":"Ingredients to Include","options":"none","format":"string"},{"name":"Intolerances","value":"Intolerances","description":"Exclude recipes that might harm those with these intolerances","options":["dairy","egg","gluten","peanut","sesame","seafood","shellfish","soy","sulfite","tree nut","wheat"],"format":"string"},{"name":"Limit License","value":"limitLicense","description":"Only uncopyrighted recipes","options":["true","false"],"format":"bool"},{"name":"Max Calories","value":"maxCalories","description":"Maximum Calories in recipe","options":"none","format":"int"},{"name":"Max Carbs","value":"maxCarbs","description":"Max Carbs in recipe in grams","options":"none","format":"int"},{"name":"Max Fat","value":"maxFat","description":"Maximum Fat in recipe in grams","options":"none","format":"int"},{"name":"Max Protein","value":"maxProtein","description":"Maximum Protein in recipe in grams","options":"none","format":"int"},{"name":"Min Calories","value":"minCalories","description":"Minimum Calories in recipe","options":"none","format":"int"},{"name":"Min Carbs","value":"minCarbs","description":"Minimum Carbs in recipe in grams","options":"none","format":"int"},{"name":"Min Fat","value":"minFat","description":"Minimum Fat in recipe in grams","options":"none","format":"int"},{"name":"Min Protein","value":"minProtein","description":"Minimum Protein in recipe in grams","options":"none","format":"int"},{"name":"Number","value":"number","description":"Number of results to return","options":"none","format":"int"},{"name":"Offset","value":"offset","description":"Number of results to skip","options":"none","format":"int"},{"name":"Query","value":"query","description":"Search term, ex: burger","options":"none","format":"string"},{"name":"Max or Min ingredients","value":"ranking","description":"Max ingredients(1) or Min ingredients(2) listed first","options":["1","2"],"format":"int"},{"name":"Type","value":"type","description":"Type of recipe","options":["main course","side dish","dessert","appetizer","salad","bread","breakfast","soup","beverage","sauce","drink"],"format":"string"}];

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
};
Template.recipes.events({
   'click #submit-query': function(e){
      endpoint="https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?" + $("form").serialize() + "&mashape-key=pzNnTT0Geimshk4zTvFtsrAINqiHp1YEhgojsnngmYNQaIZoom"
   console.log(endpoint);
   }
});
