import { getProducts, getProductsFromSearch, getProductsFromCategory } from "./modules/fetchFunctions.js";
import{ displayProducts, clearPrevLists} from "./modules/display.ts"

getProducts()
.then(displayProducts);


const form = document.querySelector('#searchForm') as HTMLFormElement;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  clearPrevLists();

  const searchQuery:string = (document.querySelector('#searchQuery') as HTMLInputElement).value.trim();

  getProductsFromSearch(searchQuery)
    .then(displayProducts)
    // .catch(displayError);

  form.reset();
})


const categoryMenu = document.querySelector('#categoryBoxes') as HTMLDivElement;

categoryMenu.addEventListener('click', (event) => {
  event.preventDefault();
  clearPrevLists();

  const category =((event.target as HTMLInputElement).id);

  getProductsFromCategory(category)
    .then(displayProducts)
})