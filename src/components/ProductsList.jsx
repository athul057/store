import { Link, useLoaderData } from "react-router-dom"
import { formatPrice } from "../utils";

export const ProductsList = () => {
 const { products } = useLoaderData();


 return (


  <div className="grid mt-6 gap-y-4">
   {products.map((product) => {
    const { id, title, image, price } = product.attributes
    const amount = formatPrice(price)
    return (
     <Link key={products.id} to={`/products/${product.id}`} className="flex p-8 bg-base-100 flex-row shadow-xl rounded-lg gap-y-7 hover:shadow-2xl duration-300 group">
      <figure>
       <img className="h-32 w-32  block rounded-lg object-cover group-hover:scale-100 transition duration-300" src={image} alt={title} />
      </figure>

      <h1 className="tracking-wider items-center font-bold capitalize text-center ml-16">{title}</h1>
      <h1 className="text-secondary text-center font-medium text-sm ml-auto">{amount}</h1>
     </Link>
    )
   })}
  </div >
 )
}