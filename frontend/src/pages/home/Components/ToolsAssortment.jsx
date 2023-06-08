import { useEffect } from 'react';
import { ToolsCategory } from './ToolsCategory';
import { ToolsList } from './ToolsList';
import { useAxios } from '../../../hooks/useAxios';

export const ToolsAssortment = () => {
   const { fetchData, data, loading, error } = useAxios();

   useEffect(() => {
      fetchData({
         method: 'GET',
         url: '/szukaj/wyroznione',
      });
   }, []);

   return (
      <section className='px-16' id='oferta'>
         <ToolsCategory fetchData={fetchData} />
         <ToolsList data={data} loading={loading} error={error} />
      </section>
   );
};
