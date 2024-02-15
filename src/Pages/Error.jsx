import { Link, useRouteError } from "react-router-dom";


const Error = () => {

 const error = useRouteError();
 console.log(error);

 if (error.status === 404) {
  return (
   <main className="grid place-items-center px-8 min-h-screen">
    <div className="text-center">
     <p className="text-9xl text-primary font-semibold">404</p>
     <h4 className="text-4xl font-semibold tracking-tight">Page not found</h4>
     <h2 className="text-lg font-semibold tracking-tight mt-4">Sorry we couldn't find the page you are looking for....</h2>
     <div className="mt-6">
      <Link to='/' className="btn btn-primary">
       Back to Home
      </Link>
     </div>
    </div>
   </main>
  )
 }

 return (
  <main className="grid place-items-center px-8 min-h-screen">
   <h4 className="text-4xl font-bold">Oops.....There was an Error....</h4>

  </main>
 )
}
export default Error;