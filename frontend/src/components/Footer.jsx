export const Footer = () => {
   return (
      <footer className='flex flex-col lg:flex-row gap-6 items-center justify-between text-center py-4 mt-16 px-24 bg-slate-200'>
         <div className='flex flex-col gap-2'>
            <p> imie zazwisko</p>
            <p> wypozyczalnia sprzetu</p>
            <p> adress</p>
            <p>numer</p>
            <p>regulamin najmu</p>
            <p>nuznajdz nas: facebookmer</p>
         </div>
         <p className='opacity-70'>
            {new Date().getFullYear()} nazwa <br /> Realizacja: portfolio
         </p>
      </footer>
   );
};
