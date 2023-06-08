import { useContext, useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';
import { calendarIcon } from '../../../utils/icons';
import { rentalItemsContext } from '../../../context/rentalItemsContext';

/**
 * @todo display when no data
 */

export const BookingAside = ({ data }) => {
   const [dates, setDates] = useState([new Date(), new Date()]);
   const { setRentalItems } = useContext(rentalItemsContext);

   if (!data) return '';

   return (
      <>
         <div className='lg:w-2/5 w-full flex flex-col gap-4 lg:py-4 mx-auto items-center'>
            <p>{data?.cena}zl / dobra</p>
            <p>{data?.kaucja}zl kaucji</p>
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
