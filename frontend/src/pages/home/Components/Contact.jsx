import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
export const Contact = () => {
   return (
      <article className='flex'>
         <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus mollitia eligendi atque ad dolorum,
            laborum aliquam aperiam minus ab iure.
         </p>

         <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            style={{ height: '40vh', width: '60vw' }}
            scrollWheelZoom={true}
         >
            <TileLayer
               subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
               url='http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}'
            />
            {/* <TileLayer
               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
               url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            /> */}
            <Marker position={[51.505, -0.09]}>
               <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
               </Popup>
            </Marker>
         </MapContainer>
      </article>
   );
};
