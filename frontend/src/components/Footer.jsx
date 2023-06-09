export const Footer = () => {
   return (
      <footer className='py-4 mt-16 px-24 bg-slate-200'>
         <div className='w-4/5 flex flex-col lg:flex-row gap-6 mx-auto justify-between items-center text-center'>
            <div className='[&>p]:py-2'>
               <p>imie zazwisko</p>
               <p>wypozyczalnia sprzetu</p>
               <p>adress</p>
               <p>numer</p>
               <p>regulamin najmu</p>
               <p>nuznajdz nas: facebookmer</p>
            </div>
            <div className='[&>p]:py-2 text-center'>
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
