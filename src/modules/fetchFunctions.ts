import {ProductObject} from "./productType.ts";

/*********************************
  GET all products
**********************************/
// const baseUrl = 'https://dummyjson.com/products';

export async function getProducts(): Promise<ProductObject[]>{
  const url = 'https://dummyjson.com/products?limit=0';

  const res = await fetch(url);
  const productsData = await res.json();

  return productsData.products as ProductObject[];
}

/*********************************
  GET products from search
**********************************/

export async function getProductsFromSearch(searchQuery:string): Promise<ProductObject[]>{
  const url = `https://dummyjson.com/products/search?q=${searchQuery}`;
  console.log(url);

  const res = await fetch(url);
  const productsData = await res.json();

  return productsData.products as ProductObject[];
}


/*********************************
  GET products from category
**********************************/

export async function getProductsFromCategory(category:string): Promise<ProductObject[]>{
  const url = `https://dummyjson.com/products/category/${category}`;
  console.log(url);

  const res = await fetch(url);
  const productsData = await res.json();

  return productsData.products as ProductObject[];
}





/*********************************
  Product type
**********************************/

// type ProductObject = {
//   id:number;
//   title: string,
//   description: string
//   brand: string,
//   price:number, 
//   // rating:number,
//   // stock:number,
//   thumbnail: string,
//   // category: string
//   category: 'laptops' | 'smartphones' | 'skincare' | 'fragrances' | 'groceries' | 'home-decoration' | 'furniture' | 'tops' | 'womens-dresses' | 'womens-shoes'
// }





