import { useEffect, useState } from 'react';
import { SearchTools } from './Components/SearchTools';
import { Slider } from './Components/Slider';
import { ToolsAssortment } from './Components/ToolsAssortment';
import { Contact } from './Components/Contact';
import { LoadingSpinner } from '../../components/LoadingSpinner';

export const Home = () => {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setTimeout(() => {
         setLoading(false);
      }, 500);
   }, []);

   return (
      <>
         {loading ? (
            <LoadingSpinner loading={loading} />
         ) : (
            <>
               <Slider />
               <SearchTools />
               <ToolsAssortment />
               <Contact />
            </>
         )}
      </>
   );
};
