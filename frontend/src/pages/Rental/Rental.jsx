import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ToolsDetails } from './Components/ToolsDetails';
import { BookingAside } from './Components/BookingAside';
import { useAxios } from '../../hooks/useAxios';
import { LoadingSpinner } from '../../components/LoadingSpinner';

export const Rental = () => {
   const { id } = useParams();
   const { fetchData, data, loading, error } = useAxios();

   useEffect(() => {
      fetchData({
         method: 'GET',
         url: `/wynajem/${id}`,
      });
      scrollTo({
         top: 0,
      });
   }, []);

   return (
      <section className='flex flex-col lg:flex-row pt-8 lg:p-20 gap-16'>
         {loading ? (
            <LoadingSpinner loading={loading} />
         ) : error ? (
            <p>{error}</p>
         ) : (
            <>
               <ToolsDetails data={data} />
               <BookingAside data={data} />
            </>
         )}
      </section>
   );
};
