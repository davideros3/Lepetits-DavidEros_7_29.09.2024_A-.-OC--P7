import { handleTagSelection } from "./tag";

// this is a appliance.js

const getAppliances = (recipes) => {
    let appliancesSet = new Set(); // A set  unique appliances
  
    recipes.forEach((recipe) => {
      appliancesSet.add(recipe.appliance); // Adding each unique appliance to the set
    });
  
    return Array.from(appliancesSet); // Transforming the set into an array of unique appliances
};
  


  export {getAppliances};