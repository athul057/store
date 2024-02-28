import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const links = [
 { id: 1, url: '/', text: 'home' },
 { id: 2, url: 'about', text: 'about' },
 { id: 3, url: 'products', text: 'products' },
 { id: 4, url: 'cart', text: 'cart' },
 { id: 5, url: 'checkout', text: 'checkout' },
 { id: 6, url: 'orders', text: 'orders' },
];



const NavLinks = () => {
 const user = useSelector((state) => state.userState.user);
 return (
  <>
   {links.map((link) => {
    {
     if ((link.url == 'cart' || link.url == 'checkout') && !user) {
      return null;
     }
    }
    return (
     <li key={link.id}>
      <NavLink className='active:bg-green-500 capitalize' to={link.url}>
       {link.text}
      </NavLink>
     </li>


     // <NavLink to={link.url} className='capitalize' key={link.id}>{link.text}</NavLink>
    )
   })}

  </>
 )
}
export default NavLinks;