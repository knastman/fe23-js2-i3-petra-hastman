
import {ProductObject} from "./productType.ts";
import {getProductsFromCategory} from "./fetchFunctions.js";
// import { getProducts } from "./modules/fetchFunctions.js";


const productsContainer = document.querySelector('#productContainer') as HTMLDivElement;

/*********************************
  Display products
**********************************/


export function displayProducts(products: ProductObject[]): void{  
  for(const product of products){
    createProductCard(product, productsContainer);
  }

}


/*********************************
  Create product Card
**********************************/

function createProductCard({id, title, thumbnail, description, price, stock, rating, brand, category, }: ProductObject, productsContainer: HTMLDivElement): void {
  const productCard = document.createElement('article');
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const productTitle = document.createElement('h2');
  const productDescription = document.createElement('p');
  const productThumbnail = document.createElement('img');
  const productPrice = document.createElement('p');
  const productStock = document.createElement('p');
  const productRating = document.createElement('p');
  const pBrand = document.createElement('p');
  const pCategory = document.createElement('p');
  const buyButton = document.createElement('button');

  productCard.classList.add('productCard');
  productPrice.classList.add('productPrice');
  pBrand.classList.add('brand');
  pCategory.classList.add('categoryHeader');
  buyButton.classList.add('buyButton');
  
  productTitle.innerText = title;
  productThumbnail.src = thumbnail;
  productDescription.innerText = description;
  productRating.innerText = 'Rating: ' + rating;
  pBrand.innerText = brand;
  pCategory.innerText = category;

  // pCategory.addEventListener('click', (event) => {
  //   event.preventDefault();

  //   console.log(event);
  //   console.log(event.target);
  //   console.log(event.currentTarget);
    
  //   // const category =((event.target as HTMLInputElement).id);
  //   console.log('category i eventlistnern');
  //   console.log(category);

  //   getProductsFromCategory(category)
  //   .then(displayProducts)

  // });

  productPrice.innerText = price + ' $';

  productStock.innerText = 'In stock: ' + stock;
  if (stock<10){
    productStock.classList.add('warning');
    productStock.innerText = `Warning only ${stock} left in stock!`;

  }

  buyButton.innerText = 'Buy product'

  if(category === 'smartphones') {
    productCard.classList.add('categoryMobile');
  }
  else if (category === 'laptops') {
    productCard.classList.add('categoryLaptops');
  }
  else if (category === 'skincare') {
    productCard.classList.add('categorySkincare');
  }
  else if (category === 'fragrances') {
    productCard.classList.add('categoryFragrances');
  }
  else if(category === 'groceries')  {
    productCard.classList.add('categoryGroceries');
  }
  else if((category === 'home-decoration') || (category === 'furniture'))  {
    productCard.classList.add('categoryHome');
  }
  else if((category === 'tops') || (category === 'womens-dresses') || (category === 'womens-shoes') || (category === 'mens-watches') || (category === 'mens-shoes')|| (category === 'mens-shirts')) {
    productCard.classList.add('categoryClothing');
  }

  productCard.append(div1, div2);
  div1.append(productTitle, productThumbnail, productDescription,  productRating ,pBrand, productPrice, pCategory, );
  div2.append(productStock, buyButton);
  productsContainer.append(productCard);
}

export function clearPrevLists():void{
  productsContainer.innerHTML = '';
}
