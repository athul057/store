import { Outlet, useNavigation } from "react-router-dom";
import { Header, Loading, Navbar } from "../components";

const Home = () => {
 const loading = useNavigation();
 const state = loading.state == 'loading';
 return (
  <>

   <Header />
   <Navbar />
   {
    state ? <Loading /> : <section className="align-element">
     <Outlet />
    </section>
   }


  </>


 )

}
export default Home;