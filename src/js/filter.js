import { handleTagSelection } from "./tag";
import {getAllRecipes  } from "./recipes";
import { displayCards } from "./cards";

// filter.js
const addFilterCriteria = (tagType, tagName, filterCriteria) => {
    return filterCriteria[tagType].push(tagName)
    
};


export { addFilterCriteria };

const searchRow = document.getElementById("search");


searchRow.addEventListener("input", e => {
 filterProducts();
});


const hasUstensil = (recipe) => {
    console.log(recipe.ustensils); // This can be used for logging or further checks
    return recipe.ustensils; // Returns the utensils for potential use
};
const createdTags = [];
const filterUstensils = () => {
    // If there are created tags, proceed with filtering
    if (createdTags.length > 0) {
        productElements.forEach(productEl => {
            const productUstensilsList = productEl.querySelector(".ustensils-list").textContent.toLowerCase();

            console.log('product ustensils:', productUstensilsList);
            
            // Check if any ustensil tag matches 
            const matches = createdTags.every(tag => {
                if (tag.type === 'ustensils') {
                    return productUstensilsList.includes(tag.name);
                }
                return true; // Ignore other types
            });

            productEl.style.display = matches ? "block" : "none"; // Show or hide based on matches
        });
    } else {
        // If no createdTags, show all products
        productElements.forEach(productEl => {
            productEl.style.display = "block";
        });
    }
    
    // Optional: Collect and log all utensils from recipes
    recipes.forEach(recipe => {
        hasUstensil(recipe); // Log each recipe's utensils if needed
    });
};




const filterProducts = () => {
    // filterUstensils();


    // Get search term
    const searchTerm = searchRow.value.trim().toLowerCase();

    // Get all product elements
    const productElements = document.querySelectorAll(".grid-container");

    // Check if the search term has at least 3 characters
    if (searchTerm.length >= 3) {
        // Loop over product elements and check for matches
        productElements.forEach(productEl => {
            const productName = productEl.querySelector(".card-title").textContent.toLowerCase();
            const ingredientsList = productEl.querySelector(".ingredients-list").textContent.toLowerCase();
            const devicesList = productEl.querySelector(".appliance-list").textContent.toLowerCase();
            const ustensilsList = productEl.querySelector(".ustensils-list").textContent.toLowerCase();
            
            // Check if the product name includes the search term
            if (productName.includes(searchTerm)|| ingredientsList.includes(searchTerm) || devicesList.includes(searchTerm) || ustensilsList.includes(searchTerm)) {
                productEl.style.display = "block"; // Show the product
            } else {
                productEl.style.display = "none"; // Hide the product
            }
        });
    } else {
        // If search term is less than 3 characters, show all products
        productElements.forEach(productEl => {
            productEl.style.display = "block";
        });
    }
}
// Function to filter dropdown items based on search input
const filterDropdownItems = (searchTerm) => {
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    
    dropdownItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchTerm.toLowerCase())) {
            item.style.display = 'block'; // Show the item if it matches the search term
        } else {
            item.style.display = 'none'; // Hide the item if it doesn't match
        }
    });
};

// Add input event listener to the search field
const searchFieldIng = document.querySelector('.search-fieldIngrediens');
searchFieldIng.addEventListener('input', () => {
    if (searchFieldIng.value.length >= 3) {
        filterDropdownItems(searchFieldIng.value);
    } else {
        // Clear the search field and show all dropdown items if less than 3 characters
        filterDropdownItems('');
    }
});

// filter Devices
const searchFieldDev = document.querySelector('.search-fieldDevices');
searchFieldDev.addEventListener('input', () => {
    clearTimeout(timer); // Clear the previous timer
    timer = setTimeout(() => {
    if (searchFieldDev.value.length >= 3) {
        filterDropdownItems(searchFieldDev.value);
    } else {
        // Clear the search field and show all dropdown items if less than 3 characters
        filterDropdownItems('');
    }
},500);
});

// filter Ustensils


let timer;

const searchFieldUst = document.querySelector('.search-fieldUstensils');

// Function to clear the search field
const clearSearchField = () => {
    searchFieldUst.value = '';
    searchFieldDev.value = '';
    searchFieldIng.value = '';
    filterDropdownItems(''); // Clear the search field and show all dropdown items
};

// Event listener for input on the search field
searchFieldUst.addEventListener('input', () => {
    clearTimeout(timer); // Clear the previous timer

    timer = setTimeout(() => {
        if (searchFieldUst.value.length >= 3) {
            filterDropdownItems(searchFieldUst.value);
        } else {
            filterDropdownItems(''); // Clear the search field and show all dropdown items if less than 3 characters
        }
    }, 500); // Adjust the delay (in milliseconds) as needed
});

// Event listener to clear search field when clicking away
document.body.addEventListener('mouseover', (event) => {
    if (!event.target.closest('.search-fieldUstensils')&& 
        !event.target.closest('.search-fieldDevices') && 
        !event.target.closest('.search-fieldIngredients')) {
            clearSearchField(searchFieldUst);
            clearSearchField(searchFieldDev);
            clearSearchField(searchFieldIng);
    }
});

export {filterProducts};








