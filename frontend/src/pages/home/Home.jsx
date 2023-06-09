import { SearchTools } from './Components/SearchTools';
import { Slider } from './Components/Slider';
import { ToolsAssortment } from './Components/ToolsAssortment';
import { Contact } from './Components/Contact';
import { useEffect, useState } from 'react';
import { LoadingSpinner } from '../../components/LoadingSpinner';

export const Home = () => {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setTimeout(() => {
         setLoading(false);
      }, 1000);
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
