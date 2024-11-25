// display cards.js
const displayCards = (recipes) => {
    const productsEl = document.querySelector(".cardfOfrecepi");
    recipes.map((item, index) => {
        const productEl = document.createElement("div");
        productEl.className = "grid-container";
        productEl.style.display = "block";
        productEl.innerHTML = `
            <div class="card">
                <section src="..." class="card-img-top" alt="..."></section>
                <div class="card-body">
                    <h4 class="card-title">${item.name}</h4>
                    <div class="cardTime">
                        <i class="fa-regular fa-clock"></i> ${item.time} min
                    </div>
                    <ul class="ingredients-list">
                        ${item.ingredients.map(ingredient => `
                            <li><strong>${ingredient.ingredient} :</strong> ${ingredient.quantity} ${ingredient.unit || ''}</li>
                        `).join('')}
                    </ul>
                    <p class="card-text" style="font-size: 12px;">${item.description}</p>
                    <p class="appliance-list" style="font-size: 0px; width: 0em; display: none;">${item.appliance}</p>
                    <p class="ustensils-list" style="font-size: 0px; width: 0em; display: none;">${item.ustensils}</p>
                </div>
            </div>
        `;

        productsEl.appendChild(productEl);

    })
};

export { displayCards };
// const ShoppingCart = (() => {
//   // DOM Elements
//   const productsEl = document.querySelector(".cardfOfrecepi");

//   // Generate product list
//   const generateProductList = () => {
//       recipes.forEach(item => {
//           const productEl = document.createElement("div");
//           productEl.className = "grid-container";
//           productEl.style.display = "block";
//           productEl.innerHTML = `
//               <div class="card">
//                   <section src="..." class="card-img-top" alt="..."></section>
//                   <div class="card-body">
//                       <h4 class="card-title">${item.name}</h4>
//                       <div class="cardTime">
//                           <i class="fa-regular fa-clock"></i> ${item.time} min
//                       </div>
//                       <ul class="ingredients-list">
//                           ${item.ingredients.map(ingredient => `
//                               <li><strong>${ingredient.ingredient} :</strong> ${ingredient.quantity} ${ingredient.unit || ''}</li>
//                           `).join('')}
//                       </ul>
//                       <p class="card-text" style="font-size: 12px;">${item.description}</p>
//                       <p class="appliance-list" style="font-size: 12px; width: 15em; display: none;">${item.appliance}</p>
//                       <p class="ustensils-list" style="font-size: 12px; width: 15em; display: none;">${item.ustensils}</p>
//                   </div>
//               </div>
//           `;

//           productsEl.appendChild(productEl);
//       });
//   };

//   // Initialize the application
//   const init = () => {
//       generateProductList();
//   };

//   return {
//       init
//   };
// ;

// // Start the application


