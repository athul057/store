import { useLoaderData } from "react-router-dom";
import { ProductsGrid } from "./ProductsGrid";
import { ProductsList } from "./ProductsList";
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useState } from "react";

const ProdctsContainer = () => {

 const { meta } = useLoaderData();

 const total = meta.pagination.total;

 const [layout, setLayout] = useState('grid');
 return (
  <>
   <div className="mt-4 flex justify-between border-b border-base-300">
    <h1 className="font-bold text-base  pb-6">
     {total} product{total > 1 && 's'}
    </h1>
    <div>
     <div className="grid grid-cols-2 gap-4 ">
      <button className='text-xl' onClick={() => setLayout('grid')}>
       <BsFillGridFill className={layout == 'grid' && 'text-secondary border-secondary'} />
      </button>
      <button className='text-xl' onClick={() => setLayout('list')}>
       <BsList className={layout == 'list' && 'text-secondary'} />
      </button>
     </div>
    </div>
   </div>
   {
    total == 0 ? <h1>Sorry we can' fine any Item</h1> : layout == 'grid' ? <ProductsGrid /> : <ProductsList />
   }
  </>

 )
}
export default ProdctsContainer;