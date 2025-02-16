const getUstensils = (recepis) => {
  let ustensilsSet = new Set(); // A set to hold unique ustensils

  recepis.forEach((recipe) => {
    recipe.ustensils.forEach((ustensil) => {
      ustensilsSet.add(ustensil);
    });
  });

  return Array.from(ustensilsSet); // Transforming the set into an array of unique ustensils
};

const filterbyUstensils = (recipes, selectedUstensils) => {
  if (!selectedUstensils.length) {
    return recipes;
  } else {
    const results = recipes.filter((recipe) =>
      selectedUstensils.every((ustensil) => recipe.ustensils.includes(ustensil))
    );

    return results;
  }
};

export { getUstensils, filterbyUstensils };
