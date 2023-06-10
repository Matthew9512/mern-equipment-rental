import { useContext } from 'react';
import { ShoppingCartForm } from './Components/ShoppingCartForm';
import { ShoppingCartList } from './Components/ShoppingCartList';
import { rentalItemsContext } from '../../context/rentalItemsContext';

export const ShoppingCart = () => {
   const { rentalItems, setRentalItems } = useContext(rentalItemsContext);

   return (
      <section className='section flex-col items-center justify-start p-6 mx-auto min-h-screen border-none max-w-screen-sm'>
         {!rentalItems.length ? (
            <div>
               <p className='font-bold uppercase py-4 text-center tracking-wider'>Twoj koszyk</p>
               <p>Nie masz produktów w koszyku.</p>
            </div>
         ) : (
            <>
               <ShoppingCartList rentalItems={rentalItems} setRentalItems={setRentalItems} />
               <ShoppingCartForm rentalItems={rentalItems} />
            </>
         )}
      </section>
   );
};
