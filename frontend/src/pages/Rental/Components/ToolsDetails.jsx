/**
 * @todo display when no data
 */

export const ToolsDetails = ({ data }) => {
   if (!data) return '';

   return (
      <article className='w-full flex flex-col lg:w-3/5 mx-auto p-4 lg:pl-16'>
         <div className='flex flex-col xl:flex-row justify-center items-center lg:items-start'>
            <img
               src={`${data?.zdjecia}`}
               alt='zdjecie produktu'
               className='w-96 h-96 pb-12 object-cover rounded-md lg:pr-8'
            />
            <div className='overflow-x-auto'>
               <p className='font-bold pb-4'>Parametry techniczne:</p>
               <table className='table w-96 lg:w-80 max-h-96 overflow-y-scroll'>
                  {Object.entries(data?.daneTechniczne).map(([key, value]) => {
                     return (
                        <tr key={value._id} className='bg-base-200'>
                           <th className='max-w-sm truncate first-letter:uppercase'>{key}</th>
                           <td>{value}</td>
                        </tr>
                     );
                  })}
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
// /**
//  * @todo display when no data
//  */

// export const ToolsDetails = ({ data }) => {
//    if (!data) return '';

//    return (
//       <article className='w-3/5 mx-auto'>
//          <div className='flex flex-col lg:flex-row justify-center lg:justify-between'>
//             <img src={`${data?.zdjecia}`} alt='product-image' className='w-96 h-96 pb-12 pr-12 object-cover' />
//             <div className=''>
//                <p>Parametry techniczne:</p>
//                {Object.entries(data?.daneTechniczne).map(([key, value]) => {
//                   return (
//                      <p key={value._id}>
//                         {key}: {value}
//                      </p>
//                   );
//                })}
//             </div>
//          </div>
//          <p>{data?.nazwaProduktu}</p>
//          <p>{data?.opis}</p>
//       </article>
//    );
// };
