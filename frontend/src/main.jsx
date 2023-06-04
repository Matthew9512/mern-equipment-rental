import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import './index.css';
import { RentalItemsContextProvider } from './context/rentalItemsContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <RentalItemsContextProvider>
         <App />
      </RentalItemsContextProvider>
   </React.StrictMode>
);
