
// This is a ingredients.js

import { handleTagSelection } from "./main";

const getIngredients = (recipes) => {
    let ingredientsSet = new Set(); // unique ingredients
    console.log(ingredientsSet)
    recipes.forEach((recipe) => {
      recipe.ingredients.forEach((element) => {
        ingredientsSet.add(element.ingredient); // Adding each unique ingredient to the set
        
      });
    });
  
    return Array.from(ingredientsSet); // Transforming the set into an array of unique ingredients
};

const filterbyIngredients = (recipes, selectedIngredients) => {
  if (!selectedIngredients.length) {
      return recipes; // Return all recipes if no ingredients are selected
  } else {
      const results = recipes.filter(recipe =>
          selectedIngredients.every(ingredient =>
              recipe.ingredients.some(recipeIngredient => recipeIngredient.ingredient === ingredient)
          )
      );
      
      return results; 
  }
};



export {getIngredients, filterbyIngredients};