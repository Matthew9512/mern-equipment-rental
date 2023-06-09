import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ToolsDetails } from './Components/ToolsDetails';
import { BookingAside } from './Components/BookingAside';
import { useAxios } from '../../hooks/useAxios';
import { LoadingSpinner } from '../../components/LoadingSpinner';

export const Rental = () => {
   const { id } = useParams();
   const navigate = useNavigate();
   const { fetchData, data, loading, error } = useAxios();

   useEffect(() => {
      if (!id.match(/^[0-9a-fA-F]{24}$/)) return navigate('*');
      fetchData({
         method: 'GET',
         url: `/wynajem/${id}`,
      });
      scrollTo({
         top: 0,
      });
   }, []);

   return (
      <section className='flex flex-col lg:flex-row lg:p-20 '>
         {loading ? (
            <LoadingSpinner loading={loading} />
         ) : error ? (
            <p>{error}</p>
         ) : (
            <>
               <ToolsDetails data={data} />
               <BookingAside data={data} id={id} />
            </>
         )}
      </section>
   );
};
