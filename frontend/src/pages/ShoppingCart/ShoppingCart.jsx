import { closeIcon } from '../../utils/icons';
import { ShoppingCartForm } from './Components/ShoppingCartForm';
import { ShoppingCartList } from './Components/ShoppingCartList';

export const ShoppingCart = () => {
   return (
      <dialog id='my_modal_1' className='modal items-center'>
         <form method='dialog' className='modal-box max-w-screen-sm'>
            <div className='modal-action mt-0'>
               <button className='border-[#077096] border outline-none rounded-full p-2 text-[#077096] '>
                  {closeIcon}
               </button>
            </div>
            <ShoppingCartList />
            <ShoppingCartForm />
         </form>
      </dialog>
   );
};
// import { ShoppingCartForm } from './Components/ShoppingCartForm';
// import { ShoppingCartList } from './Components/ShoppingCartList';

// export const ShoppingCart = () => {
//    return (
//       <section className='flex flex-col items-center justify-center py-8 w-[350px] mx-auto'>
//          <ShoppingCartList />
//          <ShoppingCartForm />
//       </section>
//    );
// };
