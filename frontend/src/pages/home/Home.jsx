import { SearchTools } from './Components/SearchTools';
import { Slider } from './Components/Slider';
import { ToolsAssortment } from './Components/ToolsAssortment';
import { Contact } from './Components/Contact';
import { LoadingSpinner } from '../../components/LoadingSpinner';

export const Home = () => {
   return (
      <>
         <Slider />
         <SearchTools />
         <ToolsAssortment />
         {/* <LoadingSpinner /> */}
         <Contact />
      </>
   );
};
