import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../features/user/Userslice";
import { clearCart } from "../features/cart/Cartslice";

const Header = () => {
 const navigate = useNavigate();
 const user = useSelector((state) => state.userState.user)

 const dispatch = useDispatch();
 const handleLogout = () => {
  navigate('/')
  dispatch(clearCart())
  dispatch(logoutUser())

 }

 return (
  <header className="bg-neutral py-2">
   <div className="px-8 max-w-6xl flex justify-center sm:justify-end">


    {
     user ? <div className="flex gap-x-4 ">
      <h1>Hello,</h1><h1 className="capitalize">{user.username}</h1>
      <button className="bg-transparent text-secondary uppercase text-xs px-3 border-2 border-secondary font-normal py-1 rounded-lg" onClick={handleLogout}>logout</button>
     </div> : <div className="flex justify-center gap-x-6 items-center">



      <Link to='/login' className="link link-hover text-xs sm:text-sm">Sign in/Guest</Link>
      <Link to='/register' className="link link-hover text-xs sm:text-sm">Create Account</Link>
     </div>
    }



   </div>
  </header>
 )
}
export default Header;