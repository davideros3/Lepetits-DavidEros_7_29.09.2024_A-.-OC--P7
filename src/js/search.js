const filterBySearchTerm = (results, searchTerm) => {
    if (!searchTerm) return results;
  
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    let filteredResults = [];
  
    for (let recipe of results) {
      if (
        recipe.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        recipe.description.toLowerCase().includes(lowerCaseSearchTerm) ||
        recipe.appliance.toLowerCase().includes(lowerCaseSearchTerm)
      ) {
        filteredResults.push(recipe);
        continue; 
      }
  
      // Check in ingredients
      for (let { ingredient } of recipe.ingredients) {
        if (ingredient.toLowerCase().includes(lowerCaseSearchTerm)) {
          filteredResults.push(recipe);
          break;
        }
      }
  
      // Check in utensils
      for (let ustensil of recipe.ustensils) {
        if (ustensil.toLowerCase().includes(lowerCaseSearchTerm)) {
          filteredResults.push(recipe);
          break;
        }
      }
    }
  
    return filteredResults;
  };




export { filterBySearchTerm };
