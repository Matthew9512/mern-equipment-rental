import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useAxios } from '../../../hooks/useAxios';

export const CheckAvailability = ({ id }) => {
   const { fetchData, data } = useAxios();

   useEffect(() => {
      if (!data) return;
      if (data?.amount === 0) toast.error(data?.message);
      else toast.success(data?.message);
   }, [data]);

   return (
      <p onClick={() => fetchData({ method: 'GET', url: `/wynajem/dostepnosc/${id}` })} className='underline h-max'>
         Sprawdz dostepnosc
      </p>
   );
};
