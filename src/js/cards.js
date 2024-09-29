import { recepis } from "./recipes.js";

// console.log(recepis);



const ShoppingCart = (function($) {
    
    // DOM Elements
    const productsEl = document.querySelector(".cardfOfrecepi")

    
        
    
    // Here I have used template strings 
    const generateProductList = function() {
      recepis.forEach(function(item) {
        const productEl = document.createElement("div");
        productEl.className = "grid-container";
        productEl.innerHTML = `
                                    <div class="card">
                                    <section src="..." class="card-img-top" alt="..."></section>
                                        <div class="card-body">
                                          <h4 class="card-title">${item.name}</h4>
                                          <div class="cardTime"><i class="fa-regular fa-clock"></i> ${item.time} min </div>
                                          <p class="card-text" style= "font-size: 10px;">${item.ingredients}</p>
                                          <p class="card-text" style= "font-size: 12px; width: 15em;">${item.description}</p>
                          
                                        </div>
                                      </div>
                                
                                `;
                               
        productsEl.appendChild(productEl);
      });
    }
    

    // This functon starts the whole application
    const init = function() {
      generateProductList();
      
    }
    
    // 
    return {
      init: init
    };
    
    // 
  })(jQuery);
  
  ShoppingCart.init();