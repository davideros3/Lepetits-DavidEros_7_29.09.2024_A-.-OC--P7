
// This is a ingredients.js

import { handleTagSelection } from "./tag";

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

const buildIngredientsDropdown = (recipes) => {
    const ingredientsList = getIngredients(recipes);
    console.log(ingredientsList);
    const dropdownIngredients = document.getElementById('ingredientsDropdown');

    ingredientsList.forEach((ingredient) => {
        const option = document.createElement('a');
        option.classList.add('dropdown-item');
        option.href = '#';
        option.textContent = ingredient;
        option.addEventListener('click' ,  (e) => { handleTagSelection(e, "ingredient")})
        dropdownIngredients.appendChild(option);
    });

};

export {buildIngredientsDropdown};