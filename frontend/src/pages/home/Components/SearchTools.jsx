import { useMemo, useState } from 'react';
import debounce from 'lodash.debounce';
import { DropdownToolsList } from './DropdownToolsList';
import { useAxios } from '../../../hooks/useAxios';
import { searchIcon } from '../../../utils/icons';

export const SearchTools = () => {
   const [showDropdown, setShowDropdown] = useState(false);
   const { fetchData, data, loading, error } = useAxios();

   // search products by name
   const searchTool = async (e) => {
      // hide drop list if length is less than 3
      if (e.target.value.length < 3) return setShowDropdown(false);
      setShowDropdown(true);
      await fetchData({
         method: 'GET',
         url: `/szukaj/q?nazwaProduktu=${e.target.value}`,
      });
   };

   const debouncedSearchTools = useMemo(() => debounce(searchTool, 1000), []);

   return (
      <article className='form-control w-4/5 mx-auto py-16 relative'>
         <div className='input-group'>
            <input
               onChange={debouncedSearchTools}
               type='text'
               placeholder='Znajdz narzedzia'
               className='input focus:outline-none w-full'
            />
            <div className='btn btn-square disabled'>{searchIcon}</div>
         </div>
         <DropdownToolsList
            data={data}
            error={error}
            loading={loading}
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
         />
      </article>
   );
};
