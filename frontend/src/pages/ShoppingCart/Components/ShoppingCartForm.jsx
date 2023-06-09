import { useRef, useState } from 'react';
import { useAxios } from '../../../hooks/useAxios';
import { LoadingButton } from '../../../components/LoadingButton';
import { PopupMessage } from '../../../components/PopupMessage';

/**
 * @todo kaucja?
 * @todo error
 */

export const ShoppingCartForm = ({ rentalItems }) => {
   const usernameRef = useRef();
   const surnameRef = useRef();
   const emailRef = useRef();
   const numberRef = useRef();
   const [disabledBtn, setDisabledBtn] = useState(false);
   const { fetchData, data, loading, error } = useAxios();

   const reserveTool = async (e) => {
      e.preventDefault();
      console.log(`reserved`);

      const formData = {
         id: rentalItems.at(0).id,
         imie: usernameRef.current.value,
         nazwisko: surnameRef.current.value,
         email: emailRef.current.value,
         numer: numberRef.current.value,
         ilosc: rentalItems.at(0).ilosc,
         wynajem: rentalItems.at(0).wynajem,
         zwrot: rentalItems.at(0).zwrot,
      };

      await fetchData({
         method: 'POST',
         url: '/wynajem/rezerwacja',
         data: formData,
      });
   };

   // toggle disabled state of btn
   const checkFormValidation = () => {
      if (!rentalItems.length) return setDisabledBtn(false);
      if (!emailRef.current.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return setDisabledBtn(false);
      if (
         usernameRef.current.value.length >= 3 &&
         surnameRef.current.value.length >= 3 &&
         numberRef.current.value.length >= 9
      )
         return setDisabledBtn(true);
      else return setDisabledBtn(false);
   };

   return (
      <div onChange={checkFormValidation} className='w-full'>
         {<PopupMessage message={data?.message || error} type={data?.message ? true : false} />}
         <label className='label'>
            <span className='label-text'>Imie:</span>
         </label>
         <input ref={usernameRef} type='text' placeholder='Np: Marek' className='inputForm input-error' />
         <label className='label'>
            <span className='label-text'>Nazwisko:</span>
         </label>
         <input ref={surnameRef} type='text' placeholder='Np: Kowalski' className='inputForm' />
         <label className='label'>
            <span className='label-text'>Email:</span>
         </label>
         <input ref={emailRef} type='email' placeholder='Np: marek@gmail.com' className='inputForm' />
         <label className='label'>
            <span className='label-text'>Numer:</span>
         </label>
         <input ref={numberRef} type='number' placeholder='+48' className='inputForm' />
         <div className='mt-6 text-center'>
            {loading ? (
               <LoadingButton className={`w-full`} />
            ) : (
               <button onClick={reserveTool} className={`btn w-full ${!disabledBtn ? 'btn-disabled' : ''}`}>
                  Zarezerwuj
               </button>
            )}
         </div>
      </div>
   );
};
