import { filterRecipes } from "./filter.js";








// console.log(createdTags);
// const addTagButton = (tagName, type) => {
//   // Create a new button element
//   const newTag = document.createElement("button");
//   newTag.textContent = tagName;

//   // Add the appropriate class based on the type
//   switch (type) {
//     case "ingredient":
//       newTag.classList.add("btn", "ingredientsTag");
//       break;
//     case "ustensils":
//       newTag.classList.add("btn", "ustensilsTag");
//       break;
//     case "appliance":
//       newTag.classList.add("btn", "applianceTag");
//       break;
//     default:
//       newTag.classList.add("btn"); // Fallback in case of an unknown type
//       break;
//   }
  
 
  

  
//   createdTags.push({ name: tagName, type: type });
//   console.log(createdTags); // Log the array after adding
  
//   // Create a close (X) button
//   const closeButtonSpot = document.createElement("span");
//   closeButtonSpot.classList.add("button-close-container");

//   const closeButton = document.createElement("button");
//   closeButton.classList.add("btn-close", "button-close");
//   closeButton.type = "button";
//   closeButton.setAttribute("aria-label", "Close");
//   closeButton.addEventListener("click", () => {
//     newTag.remove(); // Remove the button when the close button is clicked
//     // Remove the tag from the createdTags array
//     createdTags.splice(
//       createdTags.findIndex((tag) => tag.name === tagName && tag.type === type),
//       1
//     );
   
    
    
//   });

//   closeButtonSpot.appendChild(closeButton);
//   newTag.appendChild(closeButtonSpot);
//   document.getElementById("outputContainer").appendChild(newTag);
  
// };
