// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's Js
import * as bootstrap from 'bootstrap'
import { recepis } from "./recipes.js";
import { ShoppingCart } from "./cards.js";



// console.log(recepis);

// let showCard = {};

// showCard = array.from(recepis.recepis);

// console.log(showCard())

// Ingredients Dropdown
// ***************************************************************************************************

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

$('.dropdown-toggle').dropdown()

const uniqueIngredientsList = getIngredients(recepis);

const dropdownIngredients = document.getElementById('ingredientsDropdown');

uniqueIngredientsList.forEach((ingredient) => {
  const option = document.createElement('a');
  option.classList.add('dropdown-item');
  option.href = '#';
  option.textContent = ingredient;
  dropdownIngredients.appendChild(option);
});

console.log(uniqueIngredientsList)

// **********************************************************************


// Appliances ////////////////////////////////////////////////////////

const getAppliances = (recipes) => {
  let appliancesSet = new Set(); // A set  unique appliances

  recipes.forEach((recipe) => {
    appliancesSet.add(recipe.appliance); // Adding each unique appliance to the set
  });

  return Array.from(appliancesSet); // Transforming the set into an array of unique appliances
};

const appliancesList = getAppliances(recepis);

const dropdownAppliances = document.getElementById('devicesDropdown');

appliancesList.forEach((appliance) => {
  const option = document.createElement('a');
  option.classList.add('dropdown-item');
  option.href = '#';
  option.textContent = appliance;
  dropdownAppliances.appendChild(option);
});

console.log(appliancesList);


// Ustensils

// Get the dropdown toggle element



const getUstensils = (recipes) => {
  let ustensilsSet = new Set(); // A set to hold unique ustensils

  recipes.forEach((recipe) => {
    recipe.ustensils.forEach((ustensil) => {
      ustensilsSet.add(ustensil); // Adding each unique ustensil to the set
    });
  });

  return Array.from(ustensilsSet); // Transforming the set into an array of unique ustensils
};

const ustensilsList = getUstensils(recepis);

const dropdownUstensils = document.getElementById('ustensilsDropdown');

ustensilsList.forEach((ustensil) => {
  const option = document.createElement('a');
  option.classList.add('dropdown-item');
  option.href = "#";
  option.textContent = ustensil;
  dropdownUstensils.appendChild(option);
});

console.log(ustensilsList);





// Ingrediens////////////////////////////////////////////////////////////////

// const getIngredients = (recepis) => {
//   let ingredients = [];

//   recepis.forEach((recipe) => {
  
//     recipe.ingredients.forEach(element => ingredients.push(element.ingredient))
    
//   });

//   return ingredients;
// };

// const ingredientsList = getIngredients(recepis);
// console.log(ingredientsList)


// const getUniqueIngredients = (recipes) => {
//   let ingredientsSet = new Set(); // A magical set to hold unique ingredients

//   recipes.forEach((recipe) => {
//     recipe.ingredients.forEach((element) => {
//       ingredientsSet.add(element.ingredient); // Adding each unique ingredient to the set
//     });
//   });

//   return Array.from(ingredientsSet); // Transforming the set into an array of unique ingredients
// };

// const uniqueIngredientsList = getUniqueIngredients(recepis);
// console.log(uniqueIngredientsList);


// show cards //////