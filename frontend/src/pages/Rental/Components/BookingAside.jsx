import { useContext, useRef, useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';
import { calendarIcon } from '../../../utils/icons';
import { rentalItemsContext } from '../../../context/rentalItemsContext';

/**
 * @todo kaucja
 */

export const BookingAside = ({ toolName }) => {
   const [dates, setDates] = useState([new Date(), new Date()]);
   const { setRentalItems } = useContext(rentalItemsContext);
   const priceRef = useRef();

   return (
      <>
         <div className='lg:w-2/5 w-full flex flex-col gap-4 mx-auto items-center'>
            <p ref={priceRef}>150zl / dobra</p>
            <p ref={priceRef}>50zl kaucji</p>
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
                        price: priceRef.current.textContent,
                        toolName,
                        startDate: dates.at(0).toLocaleDateString('en-GB'),
                        endDate: dates.at(1).toLocaleDateString('en-GB'),
                     },
                  ])
               }
               className={`btn btn-accent`}
            >
               dodaj do koszyka
            </button>
         </div>
      </>
   );
};
