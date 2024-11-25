import { handleTagSelection } from "./tag";

// this is a appliance.js

const getAppliances = (recipes) => {
    let appliancesSet = new Set(); // A set  unique appliances
  
    recipes.forEach((recipe) => {
      appliancesSet.add(recipe.appliance); // Adding each unique appliance to the set
    });
  
    return Array.from(appliancesSet); // Transforming the set into an array of unique appliances
};
  
const buildAppliancedropdown = (recipes) => {
    const appliancesList = getAppliances(recipes)
    const dropdownAppliances = document.getElementById('devicesDropdown');
    console.log(appliancesList);
  
    appliancesList.forEach((appliance) => {
    const option = document.createElement('a');
    option.classList.add('dropdown-item');
    option.href = '#';
    option.textContent = appliance;
    option.addEventListener('click' ,  (e) => { handleTagSelection(e, "appliance")})
    dropdownAppliances.appendChild(option);
  });
  
};

  export {buildAppliancedropdown};