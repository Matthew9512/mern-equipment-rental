import { useContext, useRef, useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';
import { calendarIcon } from '../../../utils/icons';
import { rentalItemsContext } from '../../../context/rentalItemsContext';
import { CheckAvailability } from './CheckAvailability';

export const BookingAside = ({ data, id }) => {
   const [dates, setDates] = useState([new Date(), new Date()]);
   const { setRentalItems } = useContext(rentalItemsContext);
   const amountRef = useRef();

   if (!data) return '';

   return (
      <>
         <div className='lg:w-2/5 w-full flex flex-col gap-4 lg:py-4 mx-auto items-center'>
            {/* <div className='lg:w-2/5 w-full flex flex-col gap-4 lg:py-4 mx-auto items-center'> */}
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
               onClick={() =>
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
                  ])
               }
               className={`btn btn-accent mt-6`}
            >
               dodaj do koszyka
            </button>
         </div>
      </>
   );
};
