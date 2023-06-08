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
               <p className='font-bold uppercase py-4 text-center tracking-wider'>Moj koszyk</p>
               <p>Pusty</p>
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
// import { closeIcon } from '../../utils/icons';
// import { ShoppingCartForm } from './Components/ShoppingCartForm';
// import { ShoppingCartList } from './Components/ShoppingCartList';

// export const ShoppingCart = () => {
//    return (
//       <dialog id='my_modal_1' className='modal items-center'>
//          <form method='dialog' className='modal-box max-w-screen-[500px]'>
//             {/* <form method='dialog' className='modal-box max-w-screen-sm'> */}
//             <div className='modal-action mt-0'>
//                <button className='border-[#077096] outline-none text-[#077096]'>{closeIcon}</button>
//             </div>
//             <ShoppingCartList />
//             <ShoppingCartForm />
//          </form>
//       </dialog>
//    );
// };
