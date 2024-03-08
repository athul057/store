import { useLoaderData } from "react-router-dom";
import { PaginationContainer } from "../components";
import { customFetch } from "../utils";
import AdvancePagination from "../components/AdvancedPagination";



export const loader = (store) => async ({ request }) => {


 console.log(store);
 const { user } = store.getState().userState;
 console.log(user);



 const params = Object.fromEntries([...new URL(request.url).searchParams.entries()])
 console.log(params);
 const resp = await customFetch('/orders', {
  params,
  headers: {
   Authorization: `Bearer ${user.token}`
  }
 })
 console.log("resp is ", resp);
 const { data: products, meta } = resp.data;

 return { products, meta, params };
}


const Orders = () => {

 const { products } = useLoaderData();
 console.log("prod is", products);

 return <section>
  <div className="overflow-x-auto">
   <table className="table">
    {/* head */}
    <thead>
     <tr>
      <th></th>
      <th>Name</th>
      <th>Address</th>
      <th>Products</th>
      <th>Amount</th>
     </tr>
    </thead>
    <tbody>
     {/* row */}

     {
      products.map((product, index) => {
       console.log(product);
       const { name, address, orderTotal, numItemsInCart: items } = product.attributes;
       return (<tr className="bg-base-200">
        <th>{index}</th>
        <td>{name}</td>
        <td>{address}</td>
        <td>{orderTotal}</td>
        <td>{items}</td>
       </tr>)
      })
     }

    </tbody>
   </table>
  </div>
  <AdvancePagination />

 </section>

}
export default Orders;