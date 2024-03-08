import { PaginationContainer, ProductsContainer, Filter } from "../components";

import { customFetch } from "../utils"


export const loader = async ({ request }) => {

 console.log("reeq is ", request);

 //..........................................................
 // const paramss = new URL(request.url).searchParams;
 // const search = paramss.get('search');
 // console.log(search);
 //...........................................................



 const params = Object.fromEntries([...new URL(request.url).searchParams.entries()])

 //https://strapi-store-server.onrender.com/api/products?page=2  for getting "?page-2" these we will do like this.....

 const resp = await customFetch('/products', { params });

 const { data: products, meta } = resp.data;

 return { products, meta, params };
}
const Products = () => {



 return <>
  <Filter />
  <ProductsContainer />
  <PaginationContainer />
 </>
}
export default Products