/**
 * @todo display when no data
 */

export const ToolsDetails = ({ data }) => {
   if (!data) return '';

   return (
      <article className='w-3/5 mx-auto'>
         <div className='flex flex-col lg:flex-row justify-center lg:justify-between'>
            <img src={`${data?.zdjecia}`} alt='' className='w-96 h-96 pb-12 pr-12 object-cover' />
            <div className=''>
               <p>Parametry techniczne:</p>
               {Object.entries(data?.daneTechniczne).map(([key, value]) => {
                  return (
                     <p key={value._id}>
                        {key}: {value}
                     </p>
                  );
               })}
            </div>
         </div>
         <p>{data?.nazwaProduktu}</p>
         <p>{data?.opis}</p>
      </article>
   );
};
