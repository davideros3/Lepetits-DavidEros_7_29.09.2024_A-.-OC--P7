import { handleTagSelection } from "./tag";

const getUstensils = (recipes) => {
    let ustensilsSet = new Set(); // A set to hold unique ustensils
  
    recipes.forEach((recipe) => {
      recipe.ustensils.forEach((ustensil) => {
        ustensilsSet.add(ustensil); // Adding each unique ustensil to the set
      });
    });
  
    return Array.from(ustensilsSet); // Transforming the set into an array of unique ustensils
};
  
  
const buildUstensilsDropdown = (recipes) => {
    const ustensilsList = getUstensils(recipes);
    const dropdownUstensils = document.getElementById('ustensilsDropdown');
    console.log(ustensilsList)
    
    ustensilsList.forEach((ustensil) => {
      const option = document.createElement('a');
      option.classList.add('dropdown-item');
      option.href = "#";
      option.textContent = ustensil;
      option.addEventListener('click' ,  (e) => { handleTagSelection(e, "ustensils")})
      dropdownUstensils.appendChild(option);
    });
  };

export {buildUstensilsDropdown};  
  