import { useSelector } from "react-redux";
import CartItems from "../components/CartItems";



const CartTotal = () => {

 const { cartItems, cartTotal, taxValue, shipping, orderTotal } = useSelector((state) => {
  return state.cartstate;
 })



 return <div className="p-7 border border-neutral-700 bg-base-200/55 rounded-xl font-medium text-sm">
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
}
export default CartTotal;