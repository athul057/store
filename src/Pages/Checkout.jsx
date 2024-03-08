import { useSelector } from "react-redux";
import { CartTotal } from "../components";
import { Form, redirect } from "react-router-dom";
import FormInput from "../components/FormInput";
import { customFetch } from "../utils";
import { clearCart } from "../features/cart/Cartslice";



export const loader = (store) => () => {

 const user = store.getState().userState.user;
 if (!user) {

  return redirect('/login');
 }
 return null;
}




export const action = (store) => async ({ request }) => {
 console.log(request);
 const formData = await request.formData();
 const { name, address } = Object.fromEntries(formData);

 const user = store.getState().userState.user;
 console.log("is ", store.getState().cartstate)
 const { cartItems, cartTotal, itemsInCart, orderTotal } = store.getState().cartstate;



 const info = {
  address,
  cartItems,
  chargeTotal: orderTotal,
  name,
  numItemsInCart: itemsInCart,
  orderTotal: String(orderTotal),
 }



 try {

  const response = await customFetch.post(
   '/orders',
   { data: info },
   {
    headers: {
     Authorization: `Bearer ${user.token}`,
    },
   }
  );
  store.dispatch(clearCart())
  return redirect('/');

 } catch (error) {
  if (error.response.status === 401) {
   return redirect('/login');
  }
  console.log(error);
 }
 return null;

}

const Checkout = () => {



 const { cartItems, cartTotal, taxValue, shipping, orderTotal } = useSelector((state) => {
  return state.cartstate;
 })


 if (cartItems.length == 0) {

  return <section className="min-h-screen flex flex-col items-center justify-center ">
   <h1 className=" text-4xl mb-28">Your cart is empty.....</h1>
  </section>

 }

 return <>
  <h1 className="text-3xl border-b-2 pb-6 mt-4 items-start font-semibold">Place Your Order</h1>
  <div className="grid grid-cols-2 mt-8 gap-8">
   <Form method="POST">
    <h1 className="text-xl font-semibold mb-4">Shipping Information</h1>
    <FormInput label="first name" type="text" name="name" />
    <FormInput label='address' type='text' name='address' />
    <button className="btn w-full mt-4 btn-secondary">Place Your Order</button>
   </Form>
   <CartTotal />
  </div>

 </>
}
export default Checkout;

