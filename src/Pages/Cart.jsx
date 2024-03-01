import { useSelector } from "react-redux";
import CartItems from "../components/CartItems";

const Cart = () => {

 const { cartItems, cartTotal, taxValue, shipping, orderTotal } = useSelector((state) => {
  return state.cartstate;
 })


 if (cartItems.length == 0) {

  return <section className="min-h-screen flex flex-col items-center justify-center ">
   <h1 className=" text-4xl mb-28">Your cart is empty.....</h1>
  </section>



 }
 return <main>
  <h1 className="mt-8 text-4xl border-b pb-8">Shopping Cart</h1>
  <div className="grid gap-8 mt-6 text-2xl font-normal lg:grid-cols-12">
   <div className="lg:col-span-8">
    {
     cartItems.map((cartItem) => {
      return <CartItems key={cartItem.cartId} cartItem={cartItem} />
     })
    }

   </div>
   <div className="lg:col-span-4 ">
    <div className="p-7 border border-neutral-700 bg-base-200/55 rounded-xl font-medium text-sm">
     <div className="flex justify-between  border-b-2 py-2">
      <h1>SubTotal</h1>
      <h1>{`$${cartTotal}`}</h1>
     </div>
     <div className="flex justify-between  border-b-2 py-2">
      <h1>Shipping</h1>
      <h1>{`$${shipping}`}</h1>
     </div>
     <div className="flex justify-between  border-b-2 py-2">
      <h1>Tax</h1>
      <h1>{`$${taxValue}`}</h1>
     </div>
     <div className="flex justify-between font-bold py-4 text-base">
      <h1>Order Total</h1>
      <h1>{`$${orderTotal}`}</h1>
     </div>
    </div>
    <button className="btn btn-secondary btn-block mt-8 uppercase">Login to checkout</button>



   </div>
  </div>
 </main>
}
export default Cart;