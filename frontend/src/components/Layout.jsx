import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ShoppingCart } from '../pages/ShoppingCart/ShoppingCart';

export const Layout = () => {
   return (
      <>
         <Navbar />
         <ShoppingCart />
         <Outlet />
         <Footer />
      </>
   );
};
