import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useAxios } from '../../../hooks/useAxios';
import { LoadingButton } from '../../../components/LoadingButton';

/**
 * @todo error
 */

export const ShoppingCartForm = ({ rentalItems }) => {
   const formRef = useRef();
   const [disabledBtn, setDisabledBtn] = useState(false);
   const { fetchData, data, loading, error } = useAxios();

   const reserveTool = async (e) => {
      e.preventDefault();

      const clientData = {
         imie: formRef.current.name.value,
         nazwisko: formRef.current.surname.value,
         email: formRef.current.email.value,
         numer: formRef.current.number.value,
      };

      const productData = [...rentalItems];

      await fetchData({
         method: 'POST',
         url: '/wynajem/rezerwacja',
         data: [productData, clientData],
      });
   };

   // toggle disabled state of btn
   const checkFormValidation = () => {
      if (!rentalItems.length) return setDisabledBtn(false);
      if (!formRef.current.email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return setDisabledBtn(false);
      if (
         formRef.current.name.value.length >= 3 &&
         formRef.current.surname.value.length >= 3 &&
         formRef.current.number.value.length >= 9
      )
         return setDisabledBtn(true);
      else return setDisabledBtn(false);
   };

   useEffect(() => {
      if (!data && !error) return;
      if (error) toast.error(error);
      else toast.success(data?.message);
   }, [data, error]);

   return (
      <form ref={formRef} onChange={checkFormValidation} className='w-full'>
         <label className='label'>Imie:</label>
         <input name='name' type='text' placeholder='Np: Marek' className='inputForm input-error' />
         <label className='label'>Nazwisko:</label>
         <input name='surname' type='text' placeholder='Np: Kowalski' className='inputForm' />
         <label className='label'>Email:</label>
         <input name='email' type='email' placeholder='Np: marek@gmail.com' className='inputForm' />
         <label className='label'>Numer:</label>
         <input name='number' type='number' placeholder='+48' className='inputForm' />
         <div className='mt-6 text-center'>
            {loading ? (
               <LoadingButton className={`w-full`} />
            ) : (
               <button onClick={reserveTool} className={`btn w-full ${!disabledBtn ? 'btn-disabled' : ''}`}>
                  Zarezerwuj
               </button>
            )}
         </div>
      </form>
   );
};
