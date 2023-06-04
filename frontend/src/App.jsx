import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Rental } from './pages/Rental/Rental';
import { Error } from './pages/Error';
import { ServerDown } from './pages/ServerDown';
import { Layout } from './components/Layout';

export const App = () => {
   return (
      // <main className='container mx-auto min-h-screen'>
      <main className='max-w-screen-2xl mx-auto min-h-screen text-gray-800 bg-slate-50'>
         <BrowserRouter>
            <Routes>
               <Route element={<Layout />}>
                  <Route path='/' element={<Home />}></Route>
                  <Route path='/wynajem/:toolName/:id' element={<Rental />}></Route>
                  {/* <Route path='/szukaj/:category' element={< />}></Route> */}
               </Route>
               <Route path='/server-down' element={<ServerDown />}></Route>
               <Route path='/*' element={<Error />}></Route>
            </Routes>
         </BrowserRouter>
      </main>
   );
};
