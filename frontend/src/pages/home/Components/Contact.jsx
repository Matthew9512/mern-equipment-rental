import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
export const Contact = () => {
   return (
      <article className='section flex-col px-16 lg:flex-row lg:gap-24' id='contact'>
         {/* <article className='flex flex-col justify-center py-8 px-16 gap-8 lg:flex-row lg:gap-24' id='contact'> */}
         <div className='flex flex-col gap-3 justify-center items-center lg:items-start'>
            <p>imie nazwisko</p>
            <p>adress</p>
            <p>number</p>
            <p>mail</p>
            <p>facebook</p>
         </div>
         <div className='w-full lg:w-[40%] h-[40vh] z-0'>
            <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%' }} scrollWheelZoom={true}>
               <TileLayer
                  subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url='http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}'
               />
               <Marker position={[51.505, -0.09]}>
                  <Popup>
                     adres siedziby. <br /> Easily customizable.
                  </Popup>
               </Marker>
            </MapContainer>
         </div>
      </article>
   );
};
