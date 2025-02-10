const filterBySearchTerm = (results, searchTerm) => {
  console.log("searchTerm", searchTerm);
  
  if (!searchTerm) return results;

  return results.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.appliance.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.ingredients.some(({ ingredient }) =>
      ingredient.toLowerCase().includes(searchTerm.toLowerCase())
    ) ||
    recipe.ustensils.some((ustensil) =>
      ustensil.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
};




export { filterBySearchTerm };
