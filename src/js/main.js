// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's Js
import * as bootstrap from "bootstrap";
import { getAllRecipes } from "./recipes.js";
import { getIngredients } from "./ingredients.js";
import { getAppliances } from "./devices.js";
import { displayCards } from "./cards.js";
import { filterProducts } from "./filter.js";
import { getUstensils } from "./ustensils.js";
import { addTagButton } from "./tag.js";

const createdTags = [];



const updateFilterCriteria = (tagName, type) => {
    switch (type) {
        case "ingredient":
            if (!filterCriteria.ingredients.includes(tagName)) {
                filterCriteria.ingredients.push(tagName);
            }
            break;
        case "ustensils":
            if (!filterCriteria.ustensils.includes(tagName)) {
                filterCriteria.ustensils.push(tagName);
            }
            break;
        case "appliance":
            if (!filterCriteria.devices.includes(tagName)) {
                filterCriteria.devices.push(tagName);
            }
            break;
        default:
            
            break;
    }
    // console.log(filterCriteria);
};

export {updateFilterCriteria};
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

const filterbyDevices = (recipes, selectedDevices) => {
  if (!selectedDevices.length) {
    return recipes;
  } else {
    const results = recipes.filter(recipe => 
      selectedDevices.every(appliances =>
        recipe.appliance.includes(appliances)
      )
    );  
    
        return results;
       
  }
  
};

const filterByUstensils = (recipes, selectedUstensils) => {
  if (!selectedUstensils.length) {
    return recipes;
  } else {
    const results = recipes.filter(recipe =>
      selectedUstensils.every(ustensil =>
          recipe.ustensils.includes(ustensil)
      )
    );


  return results;
  };
};


const filterRecipes = () => {
  let results = allRecipes;
  results = filterByUstensils(results, filterCriteria.ustensils);
  results = filterbyIngredients(results, filterCriteria.ingredients);
  results = filterbyDevices(results, filterCriteria.devices);
  


  
  return results;
};

 

const handleTagSelection = (e, type) => {
    const tagName = e.target.textContent;
    

    if (!createdTags.some(tag => tag.name === tagName && tag.type === type)) {
        createdTags.push({ name: tagName, type });
        // console.log(createdTags); 

        // Update filter criteria
        addTagButton(tagName, type);
        updateFilterCriteria(tagName, type);
        const filteredRecipes = filterRecipes();
        displayCards(filteredRecipes);
        
    } else {
      
    }
};

const buildUstensilsDropdown = (recipes) => {
  const ustensilsList = getUstensils(recipes);
  console.log(ustensilsList);
  const dropdownUstensils = document.getElementById("ustensilsDropdown");
  ustensilsList.forEach((ustensil) => {
    const option = document.createElement("a");
    option.classList.add("dropdown-item");
    option.href = "#";
    option.textContent = ustensil;
    option.addEventListener("click", (e) => {
      handleTagSelection(e, "ustensils");
    });
    dropdownUstensils.appendChild(option);
  });
};

const buildIngredientsDropdown = (recipes) => {
  const ingredientsList = getIngredients(recipes);
  console.log(ingredientsList);
  const dropdownIngredients = document.getElementById("ingredientsDropdown");

  ingredientsList.forEach((ingredient) => {
    const option = document.createElement("a");
    option.classList.add("dropdown-item");
    option.href = "#";
    option.textContent = ingredient;
    option.addEventListener("click", (e) => {
      handleTagSelection(e, "ingredient");
    });
    dropdownIngredients.appendChild(option);
  });
};

const buildAppliancedropdown = (recipes) => {
  const appliancesList = getAppliances(recipes);
  const dropdownAppliances = document.getElementById("devicesDropdown");
  console.log(appliancesList);

  appliancesList.forEach((appliance) => {
    const option = document.createElement("a");
    option.classList.add("dropdown-item");
    option.href = "#";
    option.textContent = appliance;
    option.addEventListener("click", (e) => {
      handleTagSelection(e, "appliance");
    });
    dropdownAppliances.appendChild(option);
  });
};

// Initializing the page 
const initializePage = (recipes) => {
  buildUstensilsDropdown(recipes);

  buildIngredientsDropdown(recipes);

  buildAppliancedropdown(recipes);

  displayCards(recipes);
};
// Arrray to store the tags 

const filterCriteria = {
  ingredients: [],
  ustensils: [],
  devices: [],
};


console.log(filterCriteria);

let allRecipes = getAllRecipes();

initializePage(allRecipes);


