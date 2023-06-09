import { Link } from 'react-router-dom';
import { LoadingSpinner } from '../../../components/LoadingSpinner';
import { Overlay } from '../../../components/Overlay';

export const ToolsList = ({ data, loading, error }) => {
   if (!data) return <p>{error}</p>;

   return (
      <>
         <p className='pt-8 sectionTitle' id='toolsList'>
            {data.at(0)?.kategoriaProduktu || 'Wyroznione produkty'}
         </p>
         <article className='section justify-center relative min-h-[25em]'>
            {loading ? (
               <LoadingSpinner loading={loading} />
            ) : error ? (
               <p>{error}</p>
            ) : (
               data.map((value) => {
                  return (
                     <div
                        key={value?._id}
                        className='card group w-[20rem] h-[28rem] bg-base-100 overflow-hidden hover:shadow-xl'
                     >
                        {!value?.ilosc ? <Overlay /> : ''}
                        <figure>
                           <img
                              src={`${value?.zdjecia}`}
                              className='object-cover group-hover:scale-110 duration-300'
                              alt='zdjecie produktu'
                           />
                        </figure>
                        <div className='card-body p-4'>
                           <h2 className='card-title'>{value?.nazwaProduktu}</h2>
                           <p>cena: {value?.cena}/doba</p>
                           <p>kaucja: {value?.kaucja}</p>
                           <p>wynajmij</p>
                           <div className='card-actions justify-end mt-8'>
                              <Link
                                 to={`/wynajem/${value?.nazwaProduktu
                                    .toString()
                                    .replaceAll(' ', '-')
                                    .replaceAll('/', '-')}/${value._id}`}
                                 className='btn'
                              >
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
