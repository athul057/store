import { Link, useLoaderData } from "react-router-dom"
import { formatPrice } from "../utils";

export const ProductsGrid = () => {
 const { products } = useLoaderData();


 return (
  <div className="grid gap-4  my-6 md:grid-cols-2 lg:grid-cols-3 ">
   {products.map((product, index) => {
    const { id, title, image, price } = product.attributes
    const amount = formatPrice(price)
    return (
     <Link key={index} to={`/products/${product.id}`} className="bg-base-100 shadow-xl rounded-lg gap-4">
      <figure>
       <img className="h-64  block rounded-lg w-full md:h-48 object-cover" src={image} alt={title} />
      </figure>

      <h1 className="tracking-wider items-center font-bold capitalize text-center">{title}</h1>
      <h1 className="text-secondary text-center font-medium text-sm">{amount}</h1>
     </Link>
    )
   })}
  </div >
 )
}