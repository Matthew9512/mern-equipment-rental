import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout = () => {
   return (
      <>
         <div className='drawer drawer-end'>
            <input id='my-drawer-4' type='checkbox' className='drawer-toggle' />
            <div className='drawer-content'>
               <Navbar />
               <Outlet />
               <Footer />
               <div className='drawer-side'>
                  <label htmlFor='my-drawer' className='drawer-overlay'></label>
                  <ul className='menu p-4 w-80 h-full bg-base-200 text-base-content'>
                     {/* Sidebar content here */}
                     <li>
                        <a>Sidebar Item 1</a>
                     </li>
                     <li>
                        <a>Sidebar Item 2</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </>
   );
};
