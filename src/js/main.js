// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's Js
import * as bootstrap from "bootstrap";
import { getAllRecipes } from "./recipes.js";
import { getIngredients } from "./ingredients.js";
import { getAppliances } from "./devices.js";
import { displayCards } from "./cards.js";
import { filterRecipes } from "./filter.js";
import { getUstensils } from "./ustensils.js";
import { filterBySearchTerm } from "./search.js";

const addTagButton = (tagName, type) => {
  // Create a new button element
  const newTag = document.createElement("button");
  newTag.textContent = tagName;

  // Add the appropriate class based on the type
  switch (type) {
    case "ingredient":
      newTag.classList.add("btn", "ingredientsTag");
      break;
    case "ustensils":
      newTag.classList.add("btn", "ustensilsTag");
      break;
    case "appliance":
      newTag.classList.add("btn", "applianceTag");
      break;
    default:
      newTag.classList.add("btn");
      break;
  }

  // Add close functionality
  creatingTagsClose(newTag, tagName, type);

  // Append the new tag to the output container
  document.getElementById("outputContainer").appendChild(newTag);
};

const creatingTagsClose = (newTag, tagName, type) => {
  // Create a close (X) button
  const closeButtonSpot = document.createElement("span");
  closeButtonSpot.classList.add("button-close-container");

  const closeButton = document.createElement("button");
  closeButton.classList.add("btn-close", "button-close");
  closeButton.type = "button";
  closeButton.setAttribute("aria-label", "Close");
  closeButton.addEventListener("click", (e) => {
    removeTag(newTag, tagName, type);
  });

  closeButtonSpot.appendChild(closeButton);
  newTag.appendChild(closeButtonSpot);
};

const removeTag = (newTag, tagName, type) => {
  newTag.remove();

  removeFilterCriteria(tagName, type);
};

const removeFilterCriteria = (tagName, type) => {
  switch (type) {
    case "ingredient":
      filterCriteria.ingredients = filterCriteria.ingredients.filter(
        (ingredient) => ingredient !== tagName
      );
      break;
    case "ustensils":
      filterCriteria.ustensils = filterCriteria.ustensils.filter(
        (ustensil) => ustensil !== tagName
      );
      break;
    case "appliance":
      filterCriteria.devices = filterCriteria.devices.filter(
        (device) => device !== tagName
      );
      break;
    default:
      break;
  }

  const results = filterRecipes(filterCriteria);
  displayCards(results);
};

const addFilterCriteria = (tagName, type) => {
  let newtags = false;
  switch (type) {
    case "ingredient":
      if (!filterCriteria.ingredients.includes(tagName)) {
        newtags = true;
        filterCriteria.ingredients.push(tagName);
      }
      break;
    case "ustensils":
      if (!filterCriteria.ustensils.includes(tagName)) {
        newtags = true;
        filterCriteria.ustensils.push(tagName);
      }
      break;
    case "appliance":
      if (!filterCriteria.devices.includes(tagName)) {
        newtags = true;
        filterCriteria.devices.push(tagName);
      }
      break;
    default:
      break;
  }
  if (newtags) {
    addTagButton(tagName, type);
  }
};

const handleTagSelection = (e, type, filterCriteria) => {
  const tagName = e.target.textContent;
  addFilterCriteria(tagName, type);
  filterRecipes(filterCriteria);
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
      handleTagSelection(e, "ustensils", filterCriteria);
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
      handleTagSelection(e, "ingredient", filterCriteria);
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
      handleTagSelection(e, "appliance", filterCriteria);
    });
    dropdownAppliances.appendChild(option);
  });
};

const checkSearchInput = (searchTerm) => {
  if (searchTerm.length >= 3) {
    filterCriteria.searchTerm = searchTerm;
    
  } else {
    filterCriteria.searchTerm = "";
   
  }
  filterRecipes(filterCriteria);
};

const initilazeSearchInput = () => {
  const searchRow = document.getElementById("search");
  searchRow.addEventListener("input", (e) => {
    checkSearchInput(e.target.value);
  });
};
// Initializing the page
const initializePage = (recipes) => {
  buildUstensilsDropdown(recipes);

  buildIngredientsDropdown(recipes);

  buildAppliancedropdown(recipes);

  initilazeSearchInput(recipes);

  displayCards(recipes);
};
// Arrray to store the tags

const filterCriteria = {
  ingredients: [],
  ustensils: [],
  devices: [],
  searchTerm: "",
};

console.log(filterCriteria);

let allRecipes = getAllRecipes();

initializePage(allRecipes);
