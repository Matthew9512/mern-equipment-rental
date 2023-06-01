import { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';
// axios.defaults.baseURL = `http://localhost:8000`;

// const data = {
//    tool: 'radio',
//    id: 2,
//    date: '12-12-12',
// };
// const reserveTool = async () => {
//    const res = await axios.post('/notification', data);
//    console.log(res.data);
// };

export const BookingAside = () => {
   const [value, onChange] = useState([new Date(), new Date()]);
   // let userDates;
   return (
      <>
         <div className='w-2/5 flex flex-col'>
            <div className=''>
               <p>150zl / dobra</p>
               <button className='btn'>dodaj do koszyka</button>
            </div>
            <DateRangePicker onChange={onChange} value={value} />
         </div>
      </>
   );
};
{
   /* <button onClick={reserveTool} className='btn'>
Zarezerwuj
</button> */
}
