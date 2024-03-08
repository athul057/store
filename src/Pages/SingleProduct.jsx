import axios from "axios";
import { FeaturedProducts } from "../components";
import { customFetch } from "../utils";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/Cartslice";


export const loader = async (data) => {

 //Through this data we can access the information that we passed through the url see it in the app.jsx products/:id we can acces the information in the /:id throught this data.

 console.log("data is", data);
 const { params } = data;

 //THROUGH THIS params   FUCTION WE CAN ACCESS THE UNIQUE ID OF EVERY PRODUCT  IN THE app.jsx we used the id as the path that's why we using params.id (look in app.jsx the axios path will be 'products/:id' for the single product page )

 const resp = await customFetch(`/products/${params.id}`);

 return { product: resp.data.data };
}
const SingleProduct = () => {


 const dispath = useDispatch();

 //By using useLoaderData() hook we will get thing that we returned from the loader function that I wrote in the above .So here we will get the product that has returned from the loader.

 const { product } = useLoaderData();
 console.log(product);

 const { image, description, title, company, price, colors } = product.attributes;
 const [myColor, setMyColor] = useState(colors[0]);
 const [amount, setAmount] = useState(1);

 const cartProduct = {
  cartId: product.id + myColor,
  amount,
  productId: product.id,
  color: myColor,
  image,
  title,
  company,
  price
 }

 const addToCart = () => {
  dispath(addItem(cartProduct))
 }

 const handleAmount = (e) => {
  setAmount(parseInt(e.target.value))
 }


 return (
  <>
   <div className="mt-4 breadcrumbs">

    <ul>
     <li>
      <Link to='/'>Home</Link>
     </li>
     <li>
      <Link to='/products'>Products</Link>
     </li>
    </ul>

   </div>
   <div className="grid gap-y-8 md:grid-cols-2 mt-4 gap-x-16">
    <img src={image} alt={title} className="h-96 w-full rounded-lg object-cover" />
    <div >
     <h1 className="text-3xl font-bold capitalize">{title}</h1>
     <h4 className="text-xl font-bold">{company}</h4>
     <h1 className="text-lg font-bold mt-3">{price}</h1>
     <p className=" tracking-wide font-normal leading-8 mt-7">{description}</p>
     <h1 className="text-base font-bold mt-4">Colors</h1>
     <div className="flex gap-4">
      {
       colors.map((color, id) => {

        return (
         // <button key={id} className="rounded-full w-3 h-3" style={{ backgroundColor: color }}></button>
         <button key={id} className={`rounded-full w-5 h-5 ${color == myColor ? "border-2 border-secondary" : ""}`} style={{ backgroundColor: color }} onClick={() => setMyColor(color)}></button>

        )
       })
      }
     </div>
     <label htmlFor="amount" className="label">
      <h1 className="text-base font-bold mt-4 tracking-wider">Amount</h1>
     </label>


     <select id='amount' value={amount} onChange={handleAmount} className="w-72 h-8 my-4 rounded-lg border border-primary focus:border-blue-600">
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
     </select>
     <button className="btn btn-secondary block tracking-wider font-medium" onClick={addToCart}>Add to bag</button>


    </div>

   </div>

  </>
 )
}
export default SingleProduct;