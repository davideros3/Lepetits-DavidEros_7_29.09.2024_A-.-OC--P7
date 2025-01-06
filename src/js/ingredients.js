
// This is a ingredients.js

import { handleTagSelection } from "./main";

const getIngredients = (recipes) => {
    let ingredientsSet = new Set(); // unique ingredients
  
    recipes.forEach((recipe) => {
      recipe.ingredients.forEach((element) => {
        ingredientsSet.add(element.ingredient);
        // ingredientsSet.add(element.unit);
        // ingredientsSet.add(element.quantity); // Adding each unique ingredient to the set
      });
    });
  
    return Array.from(ingredientsSet); // Transforming the set into an array of unique ingredients
};



export {getIngredients};