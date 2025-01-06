// display cards.js
const displayCards = (recipes) => {
    
    console.log(recipes); 
    const productsEl = document.querySelector(".cardfOfrecepi");
    productsEl.innerHTML = '';
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
                            <li><strong>${ingredient.ingredient} :</strong> ${ingredient.quantity ? ingredient.quantity : ''} ${ingredient.unit ? ingredient.unit : ''}</li>
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


