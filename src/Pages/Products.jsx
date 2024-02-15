import { PaginationContainer, ProductsContainer, Filter } from "../components";

import { customFetch } from "../utils"


export const loader = async ({ request }) => {


 //..........................................................
 // const params = new URL(request.url).searchParams;
 // const search = params.get('search');
 // console.log(search);
 //...........................................................



 const params = Object.fromEntries([...new URL(request.url).searchParams.entries()])


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