import { useState } from "react";
import { removeItem, addItem, editItem } from "../features/cart/Cartslice";
import { useDispatch } from "react-redux";


const CartItems = ({ cartItem }) => {

 const [editingItem, setEditingItem] = useState(cartItem);


 const { image, title, price, color, company, amount, cartId } = cartItem;


 const dispatch = useDispatch();
 const removeAnItem = () => {
  dispatch(removeItem(cartItem))
 }


 const handleChange = (e) => {

  const newState = { ...editingItem, amount: e.target.value }
  setEditingItem(newState);

  dispatch(editItem(newState))
 }


 return (
  <section className="flex flex-wrap border-b-2 py-4 gap-y-4 last:border-b-0">
   <img className="h-24 w-24 object-cover rounded-lg sm:h-32 sm:w-32" src={image} alt={title} />
   <div className="ml-16 w-48">
    <h1 className="text-base capitalize font-bold">{title}</h1>
    <h1 className="text-sm font-normal">{company}</h1>
    <div className="text-base">Color : <button className=" w-3 h-3 rounded-full inline" style={{ backgroundColor: color }}></button></div>

   </div>
   <div className="ml-24">
    <label className="text-base capitalize font-bold block" htmlFor="amount"><span>Amount</span></label>
    <select name="amount" value={amount} id="amount" onChange={handleChange} className="w-16 m-auto h-6 my-4 rounded-lg text-sm">
     {
      Array.from({ length: parseInt(amount) + 4 }, (_, index) => {
       return <option key={index}>{index + 1}</option>
      })
     }


    </select>
    <button className="block text-sm text-secondary" onClick={removeAnItem}>Remove</button>

   </div>
   <h1 className="text-base capitalize font-bold ml-auto">
    {`$ ${price} `}
   </h1>

  </section>
 )
}
export default CartItems;