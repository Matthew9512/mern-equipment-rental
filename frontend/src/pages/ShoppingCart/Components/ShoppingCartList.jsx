import { useContext } from 'react';
import { rentalItemsContext } from '../../../context/rentalItemsContext';
import { deleteIcon } from '../../../utils/icons';

export const ShoppingCartList = () => {
   const { rentalItems, setRentalItems } = useContext(rentalItemsContext);

   const removeItem = (e) => {
      const id = e.target.closest('#parent').dataset.id;
      const filterLS = rentalItems.filter((value) => value.id != id);
      setRentalItems(filterLS);
   };

   console.log(rentalItems);
   return (
      <div className='w-full'>
         <p className='font-bold uppercase py-4 text-center tracking-wider'>Moj koszyk</p>
         {rentalItems.map((value) => {
            return (
               <div
                  key={value.id}
                  id='parent'
                  data-id={value.id}
                  className='flex items-start justify-between border-l-4 border-[#0a83ae] my-6 pl-4'
               >
                  <div className='flex gap-12'>
                     <img src={`${value?.zdjecia}`} alt='tool' className='w-24 h-24 rounded-md' />
                     <div>
                        <p>cena: {value?.cena}</p>
                        <p>kaucja: {value?.kaucja}</p>
                        <p>nazwa: {value?.nazwaProduktu}</p>
                        <p>wynajem: {value?.wynajem}</p>
                        <p>zwrot: {value?.zwrot}</p>
                     </div>
                  </div>
                  <div onClick={removeItem}>{deleteIcon}</div>
               </div>
            );
         })}
      </div>
   );
};
