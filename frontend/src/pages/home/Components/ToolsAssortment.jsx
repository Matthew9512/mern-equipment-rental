import { ToolsCategory } from './ToolsCategory';
import { ToolsList } from './ToolsList';
import { useAxios } from '../../../hooks/useAxios';

export const ToolsAssortment = () => {
   const { fetchData, data, loading, error } = useAxios();

   return (
      <section className='px-16' id='oferta'>
         <ToolsCategory fetchData={fetchData} />
         <ToolsList data={data} loading={loading} error={error} />
      </section>
   );
};
