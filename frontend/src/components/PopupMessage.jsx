import { checkIcon, closeIcon } from '../utils/icons';

export const PopupMessage = ({ message, type }) => {
   return (
      <div className='fixed top-6 z-50 left-1/2 -translate-x-1/2'>
         <figure
            className={`translate-y-6 invisible opacity-0 w-max rounded-md animate-fadeIn ${
               type ? 'success' : 'error'
            } ${message ? '' : 'hidden'}`}
         >
            <div className='flex gap-2 items-center py-4 px-4'>
               <span className='h-6 w-6 mr-1'>{type ? checkIcon : closeIcon}</span>
               {message}
            </div>
         </figure>
      </div>
   );
};
//
