import { SearchTools } from './Components/SearchTools';
import { Slider } from './Components/Slider';
import { ToolsAssortment } from './Components/ToolsAssortment';
import { Contact } from './Components/Contact';

export const Home = () => {
   return (
      <>
         <Slider />
         <SearchTools />
         <ToolsAssortment />
         <Contact />
      </>
   );
};
