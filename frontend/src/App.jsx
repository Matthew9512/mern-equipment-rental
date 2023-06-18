import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Home } from './pages/Home/Home';
import { Rental } from './pages/Rental/Rental';
import { Error } from './pages/Error';
import { ServerDown } from './pages/ServerDown';
import { Layout } from './components/Layout';
import { ShoppingCart } from './pages/ShoppingCart/ShoppingCart';
import { Statute } from './pages/Statute';
import { checkIcon, closeIcon } from './utils/icons';

export const App = () => {
   const toasterOptions = {
      style: {
         color: '#fafafa',
         fontWeight: 100,
      },
      success: {
         icon: checkIcon,
         style: {
            background: '#15803d',
         },
      },
      error: {
         icon: closeIcon,
         style: {
            background: '#dc2626',
         },
      },
   };

   return (
      <main className='max-w-screen-2xl mx-auto min-h-screen text-gray-800 bg-neutral-50'>
         <Toaster toastOptions={toasterOptions} />
         <BrowserRouter>
            <Routes>
               <Route element={<Layout />}>
                  <Route path='/' element={<Home />}></Route>
                  <Route path='/wynajem/:nazwaProduktu/:id' element={<Rental />}></Route>
                  <Route path='/koszyk' element={<ShoppingCart />}></Route>
                  <Route path='/regulamin' element={<Statute />}></Route>
               </Route>
               <Route path='/server-down' element={<ServerDown />}></Route>
               <Route path='/*' element={<Error />}></Route>
            </Routes>
         </BrowserRouter>
      </main>
   );
};
