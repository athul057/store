import { NavLink } from "react-router-dom";
import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import NavLinks from "./NavLinks";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/user/Userslice";


const Navbar = () => {
 const dispatch = useDispatch();

 const handleTheme = () => {

  dispatch(toggleTheme());

 }


 const amount = useSelector((state) => state.cartstate.itemsInCart);
 console.log(amount);
 return (
  <nav className="bg-base-200">
   <div className="navbar align-element">
    <div className="navbar-start">
     {/* TITLE */}
     <NavLink to='/' className='hidden lg:flex btn btn-primary text-3xl items-center'>C</NavLink>

     {/* LINKS ON SMALL SCREEN */}
     {/* DROP DOWN */}




     <div className="dropdown lg:hidden">
      <label tabIndex={0} className="btn btn-ghost m-1"><FaBarsStaggered className="h-6 w-6" /></label>
      <ul tabIndex={0} className="dropdown-content z-[1] menu menu-sm p-2 shadow bg-base-200 rounded-box w-52">
       <NavLinks />
      </ul>
     </div>



    </div>
    <div className="navbar-center hidden lg:flex gap-2">


     {/* menu menu-horizontal */}
     {/* LINKS ON BIGSCREEN */}

     <ul className="menu menu-horizontal px-1">
      {/* <ul className="px-1"> */}


      <NavLinks />
     </ul>
    </div>
    <div className="navbar-end">
     {/* DARK MODE AND LIGHT MODE */}

     <label className="swap swap-rotate">

      {/* this hidden checkbox controls the state */}
      <input type="checkbox" onChange={handleTheme} />

      {/* sun icon */}
      <BsSunFill className="swap-on fill-current w-5 h-5" />
      {/* moon icon */}
      <BsMoonFill className="swap-off fill-current w-5 h-5" />

     </label>



     {/* CART LINK */}

     <div className="relative">
      <NavLink to='/cart' className='btn btn-ghost btn-circle btn-md'><BsCart3 className="h-6 w-6" />
       <span className="absolute -top-1 -end-1 bg-secondary w-6 h-6 rounded-lg flex items-center justify-center border-gray-200 text-xs font-bold text-white">{amount}</span></NavLink>

      {/* CAN BE USED IN DAISY UI INDICATOR...... */}

     </div>
    </div>
   </div>

  </nav>
 )
}
export default Navbar;