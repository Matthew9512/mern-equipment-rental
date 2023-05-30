import { useMemo, useState } from 'react';
import debounce from 'lodash.debounce';
import { SearchedListTools } from './SearchedListTools';

export const SearchTools = () => {
   const [showDropdown, setShowDropdown] = useState(false);
   const searchTool = (e) => {
      // hide drop list if length is less than 2
      if (e.target.value.length < 2) return setShowDropdown(false);

      console.log(`searchTool`);
      setShowDropdown(true);
   };

   const debouncedSearchTools = useMemo(() => debounce(searchTool, 1000), []);
   return (
      <article className='form-control w-4/5 mx-auto py-8 relative'>
         <div className='input-group'>
            <input
               onChange={debouncedSearchTools}
               type='text'
               placeholder='Znajdz narzedzia'
               className='input focus:outline-none w-full'
            />
            <button className='btn btn-square disabled'>
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
               >
                  <path
                     strokeLinecap='round'
                     strokeLinejoin='round'
                     strokeWidth='2'
                     d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
               </svg>
            </button>
         </div>
         <SearchedListTools showDropdown={showDropdown} />
      </article>
   );
};
