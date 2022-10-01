import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
// Don't forget to import Map.css, or else your map will not appear!
import './Map.css';

const Haufe = [45.75951, 21.220871];
let list = [
  { long: 21.220764, lat: 45.777078 },
  { long: 21.223086, lat: 45.775032 },
  { long: 21.242933, lat: 45.745192 },
];

function Map() {
  return (
    <MapContainer 
      center={Haufe} 
      zoom={13} 
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
      />
      <Marker
          position={Haufe}
          icon={new Icon({
            iconUrl: "/pin.svg",
            iconSize: [25, 25]
          })}
        >
        <Popup>
          Haufe Hackaton
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
