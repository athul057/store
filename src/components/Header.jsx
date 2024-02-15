import { Link } from "react-router-dom";

const Header = () => {
 return (
  <header className="bg-neutral py-2">
   <div className="px-8 max-w-6xl flex justify-center sm:justify-end">
    <div className="flex justify-center gap-x-6 items-center">
     <Link to='/login' className="link link-hover text-xs sm:text-sm">Sign in/Guest</Link>
     <Link to='/register' className="link link-hover text-xs sm:text-sm">Create Account</Link>
    </div>

   </div>
  </header>
 )
}
export default Header;