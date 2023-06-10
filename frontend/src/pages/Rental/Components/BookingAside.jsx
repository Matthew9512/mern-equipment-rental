import { useContext, useRef, useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';
import { calendarIcon } from '../../../utils/icons';
import { rentalItemsContext } from '../../../context/rentalItemsContext';
import { CheckAvailability } from './CheckAvailability';

export const BookingAside = ({ data, id }) => {
   const [dates, setDates] = useState([new Date(), new Date()]);
   const { rentalItems, setRentalItems } = useContext(rentalItemsContext);
   const amountRef = useRef();

   // add item to shopping cart or remove
   const toggleCartItems = (e) => {
      console.log(e.target.textContent);
      if (e.target.textContent === 'Usun z koszyka') {
         const filterLS = rentalItems.filter((value) => value.id != id);
         return setRentalItems(filterLS);
      }
      setRentalItems((prev) => [
         ...prev,
         {
            id: data?._id,
            cena: data?.cena,
            kaucja: data?.kaucja,
            ilosc: +amountRef?.current.value,
            nazwaProduktu: data?.nazwaProduktu,
            zdjecia: data?.zdjecia,
            wynajem: dates.at(0).toLocaleDateString('en-GB'),
            zwrot: dates.at(1).toLocaleDateString('en-GB'),
         },
      ]);
   };

   if (!data) return '';

   return (
      <div className='lg:w-2/5 w-full flex flex-col gap-4 lg:py-4 mx-auto items-center'>
         <p>{data?.cena}zl / dobra</p>
         <p>{data?.kaucja}zl kaucji</p>
         <CheckAvailability id={id} />
         <label className='label'>
            <span className='label-text'>Ilosc produktu :</span>
         </label>
         <input
            ref={amountRef}
            min={1}
            defaultValue={1}
            max={data?.ilosc}
            type='number'
            placeholder='Np: 1'
            className='input border-[#077096] outline-none placeholder:italic placeholder:opacity-60 w-[350px]'
         />
         <DateRangePicker
            calendarIcon={calendarIcon}
            openCalendarOnFocus={true}
            onChange={setDates}
            minDate={new Date()}
            value={dates}
            format='dd/MM/yyyy'
         />
         <button
            onClick={toggleCartItems}
            className={`btn btn-accent mt-6 ${data?.ilosc === 0 && 'btn-disabled'}`}
            disabled={data?.ilosc === 0}
         >
            {rentalItems.some((value) => value.id === id) ? 'Usun z koszyka' : 'Dodaj do koszyka'}
         </button>
         {data?.ilosc === 0 && (
            <p className='text-center'>
               Produkt chwilowo niedostepny, <br /> przewidywalna dostawa: {data?.dostepnyOd}
            </p>
         )}
      </div>
   );
};
