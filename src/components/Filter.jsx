import { Form, Link, useLoaderData, useLocation } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckBox";

const Filter = () => {

 const { meta, params } = useLoaderData();
 const { categories, companies } = meta;
 const location = useLocation();
 console.log(location);

 return (
  <Form className="grid content-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center bg-neutral-800 mt-6 p-8 rounded-lg">
   <FormInput defaultvalue={params.search} label='Search Input' name='search' size='h-6 text-sm pl-5' type='text' />
   <FormSelect label='Select Category' name='category' items={categories} defaultValue={params.category} />
   <FormSelect label='Select Company' name='company' items={companies} defaultValue={params.company} />
   <FormSelect label='Sort by' name='order' items={['a-z', 'z-a', 'high', 'low']} defaultValue={params.order} />
   <FormRange defaultValue={params.range} />
   <FormCheckbox defaultvalue={params.shipping} />
   <button type='submit' className="btn btn-sm btn-secondary self-end">Search</button>
   <Link to='/products' className="btn btn-sm btn-accent self-end">
    Reset
   </Link>
  </Form>
 )
}
export default Filter; 