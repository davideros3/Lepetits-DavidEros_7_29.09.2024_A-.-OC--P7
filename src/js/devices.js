import { handleTagSelection } from "./tag";

// this is a appliance.js

const getAppliances = (recipes) => {
    let appliancesSet = new Set(); // A set  unique appliances
  
    recipes.forEach((recipe) => {
      appliancesSet.add(recipe.appliance); // Adding each unique appliance to the set
    });
  
    return Array.from(appliancesSet); // Transforming the set into an array of unique appliances
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
  


  export {getAppliances, filterbyDevices};