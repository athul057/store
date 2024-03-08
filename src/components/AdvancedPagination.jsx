
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const AdvancePagination = () => {
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



   {/* PREVIOUS BUTTON............................. */}

   <button className="bg-neutral-700 px-3 rounded-l-lg font-medium hover:bg-black" onClick={() => {
    let prevPage = page - 1 == -1 ? 0 : page - 1
    handleChange(prevPage);
   }}>
    Prev
   </button>



   <div className="join">

    <button className="px-4 hover:bg-black" onClick={() => handleChange(page)}>
     1
    </button>

    {page == 2 ? <button className="join-item btn" onClick={() => handleChange(page)}>2</button> : <button className="join-item btn" onClick={() => handleChange(page)}>...</button>}

    {page > 2 && page < pageCount - 1 && <button className="join-item btn" onClick={() => handleChange(page)}>{page}</button>}

    {page != pageCount && (page == pageCount - 1 ? <button className="join-item btn" onClick={() => handleChange(page)}>{page}</button> : <button className="join-item btn" onClick={() => handleChange(page)}>...</button>)}

    <button className="px-4 hover:bg-black" onClick={() => handleChange(page)}>
     {pageCount}
    </button>


    {/* <div className="join">

     <button className="join-item btn">1</button>
     <button className="join-item btn">2</button>
     <button className="join-item btn btn-disabled">...</button>
     <button className="join-item btn">99</button>
     <button className="join-item btn">100</button>
    </div> */}


    {/* {
     Array.from({ length: pageCount }, (_, index) => {
      return <button key={index} className="px-4 hover:bg-black" style={{ background: page == index + 1 && 'grey' }} onClick={() => handleChange(index + 1)}>
       {index + 1}
      </button>
     })
    } */
    }
   </div>




   {/* NEXT PAGE........................... */}

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
export default AdvancePagination;