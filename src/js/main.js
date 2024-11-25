// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's Js
import * as bootstrap from 'bootstrap'
import { recipes } from "./recipes.js";
import { buildIngredientsDropdown } from './ingredients.js';
import { buildAppliancedropdown } from './devices.js';
import { buildUstensilsDropdown } from './ustensils.js';
import {displayCards} from './cards.js';
import {filterProducts} from './filter.js';

const initializePage = () => {
    
    buildUstensilsDropdown(recipes);

    buildIngredientsDropdown(recipes);

    buildAppliancedropdown(recipes);

    displayCards(recipes);

    
}
const createdTags = [];

initializePage();

