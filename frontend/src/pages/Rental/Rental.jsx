import { useParams } from 'react-router-dom';
import { ToolsDetails } from './Components/ToolsDetails';
import { BookingAside } from './Components/BookingAside';
import { useEffect } from 'react';
import { closeIcon } from '../../utils/icons';

export const Rental = () => {
   const { id, toolName } = useParams();
   useEffect(() => {
      scrollTo(
         {
            top: 0,
         },
         []
      );
   });

   return (
      <section className='flex flex-col lg:flex-row pt-8 lg:p-20 gap-16'>
         <ToolsDetails toolName={toolName} />
         <BookingAside toolName={toolName} />
      </section>
   );
};
{
   /* <svg
xmlns='http://www.w3.org/2000/svg'
className='stroke-current shrink-0 h-6 w-6'
fill='none'
viewBox='0 0 24 24'
>
<path
   strokeLinecap='round'
   strokeLinejoin='round'
   strokeWidth='2'
   d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
/>
</svg> */
}
