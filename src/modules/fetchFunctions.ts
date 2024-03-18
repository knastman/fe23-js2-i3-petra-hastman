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

export async function getProductsFilter(price:string): Promise<ProductObject[]>{
  console.log('price and brand filter');
  console.log(price);
  // console.log(brand);
  
  // const url = `https://dummyjson.com/products/?limit=0&select=${brand},${price}`;
  const url = `https://dummyjson.com/products/?limit=0&select=apple`;
  console.log(url);

  const res = await fetch(url);
  const productsData = await res.json();

  return productsData.products as ProductObject[];
}

/*********************************
  GET products after filtering
**********************************/

export async function getProductsFromCategory(category:string): Promise<ProductObject[]>{
  console.log(category);
  
  const url = `https://dummyjson.com/products/category/${category}`;
  console.log(url);

  const res = await fetch(url);
  const productsData = await res.json();

  return productsData.products as ProductObject[];
}



/*********************************
  GET single product 
**********************************/

export async function getSingleProduct(productId:string): Promise<ProductObject[]>{
  
  const url = `https://dummyjson.com/products/${productId}`;
  console.log(url);

  const res = await fetch(url);
  const productsData = await res.json();

  return productsData.products as ProductObject[];
}








