import { useContext } from 'react';
import { rentalItemsContext } from '../../../context/rentalItemsContext';

/**
 * @todo KEY
 */

export const ShoppingCartList = () => {
   const { rentalItems } = useContext(rentalItemsContext);
   console.log(rentalItems);
   return (
      <div className='w-full'>
         <p className='font-bold uppercase py-4 text-center tracking-wider'>Moj koszyk</p>
         {rentalItems.map((value, i) => {
            return (
               <div key={i} className='flex gap-12 border-l-4 border-[#0a83ae] my-6 pl-4'>
                  <p src='' alt='tool' className='w-10 h-10'>
                     image
                  </p>
                  <div>
                     <p>{value?.price}</p>
                     <p>{value?.toolName}</p>
                     <p>wynajecie: {value?.startDate}</p>
                     <p>zwrot: {value?.endDate}</p>
                  </div>
               </div>
            );
         })}
      </div>
   );
};
