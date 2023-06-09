import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { LoadingSpinner } from '../../../components/LoadingSpinner';

export const DropdownToolsList = ({ data, error, loading, showDropdown, setShowDropdown }) => {
   const dropRef = useRef();

   // toggle drop menu vis when user clicks outside of drop menu when menu is vis
   useEffect(() => {
      if (!showDropdown) return;

      const handleOusideClick = (e) => {
         if (!e.target.classList.contains('input')) setShowDropdown(false);
         // if (!dropRef.current.contains(e.target)) setShowDropdown(false);
      };

      document.addEventListener('click', handleOusideClick);

      return () => document.removeEventListener('click', handleOusideClick);
   }, [showDropdown]);

   if (!data && !error) return '';

   return (
      <article
         ref={dropRef}
         className={`${
            !showDropdown ? 'hidden' : ''
         } flex flex-wrap items-center justify-center rounded-xl shadow-xl w-full max-h-96 min-h-[12rem] p-4 overflow-y-scroll overflow-hidden z-50 absolute top-[70%] bg-slate-100 `}
      >
         {loading ? (
            <LoadingSpinner loading={loading} />
         ) : error ? (
            <p>{error}</p>
         ) : (
            data.map((value) => {
               return (
                  <Link
                     to={`/wynajem/${value?.nazwaProduktu}/${value?._id}`}
                     key={value._id}
                     // wartosc width to specific
                     className='flex w-1/2 h-40 p-4'
                  >
                     <img className='mr-6' src={`${value.zdjecia}`} alt={`${value?.nazwaProduktu}`} />
                     <div className='flex flex-col justify-center'>
                        <p>{value?.nazwaProduktu}</p>
                        <p>{value?.cena}</p>
                        <p>{value?.kaucja}</p>
                     </div>
                  </Link>
               );
            })
         )}
      </article>
   );
};
