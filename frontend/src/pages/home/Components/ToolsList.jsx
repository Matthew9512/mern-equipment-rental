import { Link } from 'react-router-dom';
import { LoadingSpinner } from '../../../components/LoadingSpinner';

export const ToolsList = ({ data, loading, error }) => {
   if (!data) return <p>{error}</p>;

   return (
      <>
         <p className='pt-8 sectionTitle' id='toolsList'>
            {data.at(0)?.kategoriaProduktu}
         </p>
         <article className='section relative'>
            {loading ? (
               <LoadingSpinner loading={loading} />
            ) : error ? (
               <p>{error}</p>
            ) : (
               data.map((value) => {
                  return (
                     <div key={value?._id} className='card group w-[20rem] h-[26rem] bg-base-100 hover:shadow-xl'>
                        <figure>
                           <img
                              src={`${value?.zdjecia}`}
                              className='object-cover group-hover:scale-110 duration-300'
                              alt=''
                           />
                        </figure>
                        <div className='card-body p-4'>
                           <h2 className='card-title'>{value?.nazwaProduktu}</h2>
                           <p>cena: {value?.cena}/doba</p>
                           <p>kaucja: {value?.kaucja}</p>
                           <p>wynajmij</p>
                           <div className='card-actions justify-end mt-4'>
                              <Link to={`/wynajem/${value?.nazwaProduktu}/${value._id}`} className='btn'>
                                 wypozycz
                              </Link>
                           </div>
                        </div>
                     </div>
                  );
               })
            )}
         </article>
      </>
   );
};
