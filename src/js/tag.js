// Array to store the names of created tags
const createdTags = []; // Change to store objects with name and type

const addTag = (tagName, type) => {
    // Check if the tag name already exists in the createdTags array
    if (!createdTags.some(tag => tag.name === tagName && tag.type === type)) {
        createdTags.push({ name: tagName, type: type }); // Store as an object
        
        // Create a new button element
        const newTag = document.createElement('button');
        newTag.textContent = tagName;
        
        // Add the appropriate class based on the type
        switch (type) {
            case 'ingredient':
                newTag.classList.add('btn', 'ingredientsTag');
                break;
            case 'ustensils':
                newTag.classList.add('btn', 'ustensilsTag');
                break;
            case 'appliance':
                newTag.classList.add('btn', 'applianceTag');
                break;
            default:
                newTag.classList.add('btn'); // Fallback in case of an unknown type
                break;
        }
        
        // Create a close (X) button
        const closeButtonSpot = document.createElement('span');
        closeButtonSpot.classList.add('button-close-container');
        
        const closeButton = document.createElement('button');
        closeButton.classList.add('btn-close', 'button-close');
        closeButton.type = 'button';
        closeButton.setAttribute('aria-label', 'Close');
        closeButton.addEventListener('click', () => {
            newTag.remove(); // Remove the button when the close button is clicked
            // Remove the tag from the createdTags array
            createdTags.splice(createdTags.findIndex(tag => tag.name === tagName && tag.type === type), 1);
            filterProductsTags(); // Re-filter the products
        });
        
        closeButtonSpot.appendChild(closeButton);
        newTag.appendChild(closeButtonSpot);
        document.getElementById('outputContainer').appendChild(newTag);
        filterProductsTags(); // Re-filter the products
    }
};

export const handleTagSelection = (e, type) => {
    const tagName = e.target.textContent;
    
    console.log(type)
    addTag(tagName, type);
};



function filterProductsTags() {
    const productElements = document.querySelectorAll(".grid-container");

    if (createdTags.length > 0) {
        productElements.forEach(productEl => {
            const dropdownIngredients = document.getElementById('ingredientsDropdown');
            const ingredientsList = productEl.querySelector(".ingredients-list").textContent.toLowerCase();
            const appliancesList = productEl.querySelector(".appliance-list").textContent.toLowerCase();
            const ustensilsList = productEl.querySelector(".ustensils-list").textContent.toLowerCase();
            console.log(ustensilsList);
            // Check if any tag matches 
            const matches = createdTags.every(tag => {
                switch (tag.type) {
                    case 'ingredient':
                        return ingredientsList.includes(tag.name);
                    case 'appliance':
                        return appliancesList.includes(tag.name);
                    case 'ustensils':
                        return ustensilsList.includes(tag.name);
                
                }
            });

            productEl.style.display = matches ? "block" : "none";
        });
    } else {
        productElements.forEach(productEl => {
            productEl.style.display = "block";
        });
    }
}





// const createdTags = [];

// const addTag = (tagName, type) => {
// // Check if the tag name already exists in the createdTags array
// if (!createdTags.includes(tagName)) {
//     createdTags.push(tagName); // Add the tag name to the createdTags array
    
//     // Create a new button element
//     const newTag = document.createElement('button');
//     newTag.textContent = tagName;
//     // newTag.classList.add('btn', 'ingredientsTag')
//        // Add the appropriate class based on the type
//        switch (type) {
//         case 'ingredient':
//             newTag.classList.add('btn', 'ingredientsTag');
//             break;
//         case 'ustensils':
//             newTag.classList.add('btn', 'ustensilsTag');
//             break;
//         case 'appliance':
//             newTag.classList.add('btn', 'applianceTag');
//             break;
//         default:
//             newTag.classList.add('btn'); // Fallback in case of an unknown type
//             break;
//     }
   
   
    
//     // Create a close (X) button
//     const closeButtonSpot = document.createElement('span');
//     closeButtonSpot.classList.add('button-close-container');
    
//     const closeButton = document.createElement('button');
//     closeButton.classList.add('btn-close','button-close');
//     closeButton.type = 'button';
//     closeButton.setAttribute('aria-label', 'Close');
//     closeButton.addEventListener('click', () => {
//         newTag.remove(); // Remove the button when the close button is clicked
//         // Remove the tag name from the createdTags array
//         createdTags.splice(createdTags.indexOf(tagName), 1);
//         filterProductsTags(tagName);
        
        
//     });
    
//     closeButtonSpot.appendChild(closeButton);
//     newTag.appendChild(closeButtonSpot);
//     document.getElementById('outputContainer').appendChild(newTag);
//     filterProductsTags(tagName);
     
// }
// };

// export const handleTagSelection = (e, type) => {
//     const tagName = e.target.textContent;
    
//     console.log(type)
//     addTag(tagName, type);
    
//     // filterByTag(tagName);
    
// };
// function filterProductsTags() {
//     // Get all product elements
//     const productElements = document.querySelectorAll(".grid-container");

//     // Check if there are any tags created
//     if (createdTags.length > 0) {
//         // Loop over product elements and check for matches
//         productElements.forEach(productEl => {
//             const productName = productEl.querySelector(".card-title").textContent.toLowerCase();
//             const ingredientsList = productEl.querySelector(".ingredients-list").textContent.toLowerCase();
//             const devicesList = productEl.querySelector(".appliance-list").textContent.toLowerCase();
//             const ustensilsList = productEl.querySelector(".ustensils-list").textContent.toLowerCase();

//             // Check if any tag matches the product details
//             const matches = createdTags.some(tag => 
//                 productName.includes(tag) || 
//                 ingredientsList.includes(tag) || 
//                 devicesList.includes(tag) || 
//                 ustensilsList.includes(tag)
//             );

//             // Show or hide the product based on matches
//             productEl.style.display = matches ? "block" : "none";
//         });
//     } else {
//         // If no tags are created, show all products
//         productElements.forEach(productEl => {
//             productEl.style.display = "block";
//         });
//     }
// }

// console.log('Created Tags:', createdTags);
















// const tagRow = document.getElementById("outputContainer");


// const filterProductsTags = e => {

//     // Get all product elements
//     const productElements = document.querySelectorAll(".grid-container");
//     const productEl = document.createElement("div");

//     // Check if the search term has at least 3 characters
//     productElements.forEach(productEl => {
//         const productName = productEL.textContent.toLowerCase();
//         const matches = createdTags.some(tag => productName.includes(tag.toLowerCase()));

//         if (matches) {
//             product.style.display = ''; // Show the card
//         } else {
//             product.style.display = 'none'; // Hide the card
//         }
//         });
// }