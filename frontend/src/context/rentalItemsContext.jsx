import { createContext, useEffect, useState } from 'react';

export const rentalItemsContext = createContext();

export const RentalItemsContextProvider = ({ children }) => {
   const [rentalItems, setRentalItems] = useState(() => {
      const lsItems = localStorage.getItem('rental__items');
      if (!lsItems) return [];

      return JSON.parse(lsItems);
   });

   useEffect(() => {
      localStorage.setItem('rental__items', JSON.stringify(rentalItems));
   }, [rentalItems]);

   return <rentalItemsContext.Provider value={{ rentalItems, setRentalItems }}>{children}</rentalItemsContext.Provider>;
};
