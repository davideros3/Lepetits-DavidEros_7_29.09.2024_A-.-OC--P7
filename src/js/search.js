// const filterBySearchTerm = (results, searchTerm) => {
//     console.log("searchTerm", searchTerm);
    
// return results;
// };

// export { filterBySearchTerm };
const filterBySearchTerm = (results, searchTerm) => {
    if (searchTerm) {
      return results.filter(recipe =>
        // Check if searchTerm matches recipe name or description
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
  
        // Check if searchTerm matches any ingredient
        recipe.ingredients.some(recipeIngredient =>
          recipeIngredient.ingredient.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
  
        // Check if searchTerm matches any utensil
        recipe.ustensils.some(ustensil =>
          ustensil.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
  
        // Check if searchTerm matches appliance (either as string or array)
        (typeof recipe.appliance === 'string' && recipe.appliance.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (Array.isArray(recipe.appliance) && recipe.appliance.some(appliance =>
          appliance.toLowerCase().includes(searchTerm.toLowerCase())
        ))
      );
    }
    return results;
  };

  export { filterBySearchTerm };

  