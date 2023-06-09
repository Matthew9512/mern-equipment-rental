export const Overlay = ({ children }) => {
   return (
      <div className='z-50 bg-[#080808bd] absolute top-0 bottom-0 left-0 right-0 '>
         {children}
         <p className='absolute top-1/2 left-1/2 -translate-x-1/2  text-white text-center'>Chwilowo niedostepne</p>
      </div>
   );
};
