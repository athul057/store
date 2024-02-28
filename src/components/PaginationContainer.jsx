import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PaginationContainer = () => {
 const location = useLocation();
 console.log(location);
 const { pathname, search } = location;
 const navigate = useNavigate();

 const handleChange = (item) => {
  const searchParams = new URLSearchParams(search);
  searchParams.set('page', item)
  navigate(`${pathname}?${searchParams.toString()}`)
 }
 const { meta } = useLoaderData();

 const { pageCount, pageSize, page } = meta.pagination;
 return (
  <div className="flex  justify-end text-lg rounded-lg mt-16">
   <button className="bg-neutral-700 px-3 rounded-l-lg font-medium hover:bg-black" onClick={() => {
    let prevPage = page - 1 == -1 ? 0 : page - 1
    handleChange(prevPage);
   }}>
    Prev
   </button>
   <div className="bg-neutral-900 flex flex-row gap-2 font-medium">
    {
     Array.from({ length: pageCount }, (_, index) => {
      return <button key={index} className="px-4 hover:bg-black" style={{ background: page == index + 1 && 'grey' }} onClick={() => handleChange(index + 1)}>
       {index + 1}
      </button>
     })
    }
   </div>
   <button className="bg-neutral-800 px-3 rounded-r-lg font-medium hover:bg-black" onClick={() => {
    let nextPage = page + 1 == pageSize + 1 ? pageSize : page + 1
    handleChange(nextPage);
   }}
   >
    Next
   </button>
  </div>
 )
}
export default PaginationContainer;