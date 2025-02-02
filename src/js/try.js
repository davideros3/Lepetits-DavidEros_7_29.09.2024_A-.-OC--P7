

const searchRow = document.getElementById("search");

searchRow.addEventListener("input", e => {
    searchFunction();
   });
   
   const filterRecipes = (filterCriteria) => {
       let results = getAllRecipes(); 
       results = filterByUstensils(results, filterCriteria.ustensils);
       results = filterbyIngredients(results, filterCriteria.ingredients);
       results = filterbyDevices(results, filterCriteria.devices);
       results = searchingInput(results);
       return results;
   };
   const searchFunction = (recipes) => {
       // Trim and lowercase the search term
       searchTerm = searchTerm.trim().toLowerCase();
   
       // Check if the search term has at least 3 characters
       if (searchTerm.length >= 3) {
           // Filter recipes based on the search term
           const searchingInput = recipes.filter(recipe => {
               const productName = recipe.name.toLowerCase();
               const ingredientsList = recipe.ingredients.map(ingredient => ingredient.ingredient.toLowerCase()).join(" ");
               const devicesList = recipe.appliance.toLowerCase();
               const ustensilsList = recipe.ustensils.join(" ").toLowerCase();
               console.log(ingredientsList);
   
               // Check if the search term matches any of the recipe properties
               return (
                   productName.includes(searchTerm) ||
                   ingredientsList.includes(searchTerm) ||
                   devicesList.includes(searchTerm) ||
                   ustensilsList.includes(searchTerm)
               );
           });
   
           // Update the DOM with the filtered recipes
           return results;
       } else {
          return recipes;
       }
   };