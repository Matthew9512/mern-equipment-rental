import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Navbar } from './components/Navbar';

export const App = () => {
   return (
      <main className='container mx-auto bg-slate-900 text-white h-screen'>
         <BrowserRouter>
            <Navbar />
            <Routes>
               <Route path='/' element={<Home />}></Route>
            </Routes>
         </BrowserRouter>
      </main>
   );
};
