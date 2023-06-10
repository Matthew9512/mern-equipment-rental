import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export const Contact = () => {
   return (
      <article className='section justify-center flex-col px-16 lg:flex-row lg:gap-24' id='contact'>
         <div className='flex flex-col gap-3 justify-center items-center lg:items-start'>
            <p>Marcel Kubiak</p>
            <p>Kwietniki 31, 59-411 Paszowice</p>
            <p>691 354 695</p>
            <p>wypozyczalniakubiak@gmail.com</p>
            <p>FACEBOOK</p>
            <p>GODZINY</p>
         </div>
         <div className='w-full lg:w-[40%] h-[40vh] z-0'>
            <MapContainer center={[50.972995, 16.1321325]} zoom={13} style={{ height: '100%' }} scrollWheelZoom={true}>
               <TileLayer
                  subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url='http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}'
               />
               <Marker position={[50.972995, 16.1321325]}>
                  <Popup>
                     Adres siedziby <br /> Godziny otwarcia
                  </Popup>
               </Marker>
            </MapContainer>
         </div>
      </article>
   );
};
