import { PopupMessage } from '../../../components/PopupMessage';
import { useAxios } from '../../../hooks/useAxios';

export const CheckAvailability = ({ id }) => {
   const { fetchData, data, error } = useAxios();

   return (
      <>
         {<PopupMessage message={data?.message || error} type={data?.amount === 0 ? false : true} />}
         <p onClick={() => fetchData({ method: 'GET', url: `/wynajem/dostepnosc/${id}` })} className='underline'>
            Sprawdz dostepnosc
         </p>
      </>
   );
};
