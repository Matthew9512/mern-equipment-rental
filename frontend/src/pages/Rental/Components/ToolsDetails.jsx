import { LoadingSpinner } from '../../../components/LoadingSpinner';

export const ToolsDetails = ({ data }) => {
   if (!data) return <LoadingSpinner />;

   return (
      <article className='w-full flex flex-col lg:w-3/5 mx-auto py-4 lg:pl-16'>
         <div className='flex flex-col xl:flex-row justify-center items-center lg:items-start'>
            <img
               src={`${data?.zdjecia}`}
               alt='zdjecie produktu'
               className='w-96 h-96 pb-12 object-cover rounded-md lg:pr-8'
            />
            <div className='max-h-[21em] overflow-y-scroll'>
               <p className='font-bold pb-4'>Parametry techniczne:</p>
               <table className='table w-96 lg:w-[340px]'>
                  <tbody>
                     {Object.entries(data?.daneTechniczne).map(([key, value]) => {
                        return (
                           <tr key={key} className='bg-base-200'>
                              <th className='max-w-[350px] first-letter:uppercase'>{key}</th>
                              <td className='text-end'>{value}</td>
                           </tr>
                        );
                     })}
                  </tbody>
               </table>
            </div>
         </div>
         <div className='w-96 lg:w-full mx-auto py-16  lg:p-3'>
            <p className='font-bold text-lg first-letter:uppercase'>{data?.nazwaProduktu}</p>
            <p>
               <span className='font-bold'>Opis: </span>
               {data?.opis}
            </p>
         </div>
      </article>
   );
};
