import { useParams } from 'react-router-dom';
import { ToolsDetails } from './Components/ToolsDetails';
import { BookingAside } from './Components/BookingAside';

export const Rental = () => {
   const { id } = useParams();
   return (
      <section className='flex flex-col lg:flex-row pt-8 lg:p-20 gap-16 bg-red-100'>
         <ToolsDetails />
         <BookingAside />
      </section>
   );
};
