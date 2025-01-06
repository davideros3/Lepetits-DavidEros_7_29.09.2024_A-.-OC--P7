

const getUstensils = (recepis) => {
    let ustensilsSet = new Set(); // A set to hold unique ustensils
  
    recepis.forEach((recipe) => {
      recipe.ustensils.forEach((ustensil) => {
        ustensilsSet.add(ustensil); // Adding each unique ustensil to the set
      });
    });
  
    return Array.from(ustensilsSet); // Transforming the set into an array of unique ustensils
};
  

export {getUstensils};  
  