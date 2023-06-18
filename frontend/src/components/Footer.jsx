import { Link } from 'react-router-dom';

export const Footer = () => {
   return (
      <footer className='py-4 mt-16 px-24 bg-slate-200'>
         <div className='w-4/5 flex flex-col lg:flex-row gap-6 mx-auto justify-between items-center text-center'>
            <div className='[&>p]:py-2'>
               <p>Marcel Kubiak</p>
               <p>Kwietniki 31, 59-411 Paszowice</p>
               <p>691 354 695</p>
               <p>wypozyczalniakubiak@gmail.com</p>
               <p>FACEBOOK</p>
               <p>GODZINY</p>
            </div>
            <div className='[&>p]:py-2 text-center'>
               <Link to={'/regulamin'} className='opacity-70 hover:cursor-pointer'>
                  Regulamin
               </Link>
               <p className='opacity-70'>
                  {new Date().getFullYear()} nazwa <br /> Realizacja: portfolio
               </p>
               <a href='https://www.flaticon.com' title='Designed by Freepik - Flaticon' className='underline'>
                  Designed by Freepik - Flaticon
               </a>
            </div>
         </div>
      </footer>
   );
};
