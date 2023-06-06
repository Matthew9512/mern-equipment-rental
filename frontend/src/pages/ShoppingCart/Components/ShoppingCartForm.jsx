import { useContext, useEffect, useRef, useState } from 'react';
import { rentalItemsContext } from '../../../context/rentalItemsContext';
import { useAxios } from '../../../hooks/useAxios';
import { LoadingButton } from '../../../components/LoadingButton';
import { closeIcon } from '../../../utils/icons';

/**
 * @todo kaucja?
 * @todo error
 */

export const ShoppingCartForm = () => {
   const usernameRef = useRef();
   const surnameRef = useRef();
   const emailRef = useRef();
   const numberRef = useRef();
   const [disabledBtn, setDisabledBtn] = useState(false);
   const { rentalItems } = useContext(rentalItemsContext);
   const { fetchData, data, loading, ready, error } = useAxios();
   console.log(rentalItems);

   const reserveTool = async (e) => {
      e.preventDefault();
      console.log(`reserved`);
      return;
      const formData = {
         username: usernameRef.current.value,
         surname: surnameRef.current.value,
         email: emailRef.current.value,
         number: numberRef.current.value,
         toolName: rentalItems.at(0).toolName,
         price: rentalItems.at(0).cena,
         wynajem: rentalItems.at(0).wynajem,
         zwrot: rentalItems.at(0).zwrot,
      };

      await fetchData({
         method: 'POST',
         url: '/reserve-tools',
         data: formData,
      });
      console.log(data);
   };

   // toggle disabled state of btn
   const checkFormValidation = () => {
      if (!emailRef.current.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return setDisabledBtn(false);
      if (
         usernameRef.current.value.length >= 3 &&
         surnameRef.current.value.length >= 3 &&
         numberRef.current.value.length >= 3
      )
         return setDisabledBtn(true);
      else return setDisabledBtn(false);
   };

   useEffect(() => {
      // error msg
   }, [ready]);

   return (
      <div onChange={checkFormValidation} className='form-control relative'>
         {/* {ready ? (
            <div className='flex bg-green-300 p-4 items-center rounded-lg gap-4 fixed top-12 left-1/2 -translate-x-1/2 w-[20rem] animate z-10 h-0 overflow-hidden'>
               {closeIcon}
               <span>Error! Task failed successfully.</span>
            </div>
         ) : (
            ''
         )} */}
         <label className='label'>
            <span className='label-text'>Imie:</span>
         </label>
         <input
            ref={usernameRef}
            type='text'
            placeholder='Np: Marek'
            className='input input-bordered w-full placeholder:italic placeholder:opacity-60'
         />
         <label className='label'>
            <span className='label-text'>Nazwisko:</span>
         </label>
         <input
            ref={surnameRef}
            type='text'
            placeholder='Np: Kowalski'
            className='input input-bordered w-full placeholder:italic placeholder:opacity-60'
         />
         <label className='label'>
            <span className='label-text'>Email:</span>
         </label>
         <input
            ref={emailRef}
            type='email'
            placeholder='Np: marek@gmail.com'
            className='input input-bordered w-full placeholder:italic placeholder:opacity-60'
         />
         <label className='label'>
            <span className='label-text'>Numer:</span>
         </label>
         <input
            ref={numberRef}
            type='number'
            placeholder='+48'
            className='input input-bordered w-full placeholder:italic placeholder:opacity-60'
         />
         {loading ? (
            <LoadingButton />
         ) : (
            <button onClick={reserveTool} className={`btn mt-6 ${!disabledBtn ? 'btn-disabled' : ''}`}>
               Zarezerwuj
            </button>
         )}
      </div>
   );
};
