import React, { useContext, useEffect, useState } from 'react';
import ApplicationContext from '../context/ApplicationContext';
import { MapContainer, TileLayer, Marker, Circle } from 'react-leaflet';
import { Icon } from 'leaflet';
import IP from '../mocks/ipMock';
import markerIcon from '../../images/icon-location.svg';
import 'leaflet/dist/leaflet.css';
import useGetIpData from '../hooks/useGetIpData';
import Loading from '../components/Loading';
import Swal from 'sweetalert2';
import Header from '../components/Header';

export default function Home() {
  const { 
    ipData, 
    error, 
    loading, 
  } = useContext(ApplicationContext);
  
  // const [appInfo, setAppInfo] = useState(null); 

  const customMarkerIcon = new Icon({
    iconUrl: markerIcon,
    iconSize: [32, 32],
  });

  if(error) {
    Swal.fire({
      icon: 'error',
      title: 'Oopss...',
      html: `Unable to complete the request: ${error}`,
      timer: 4500,
      timerProgressBar: true,
    })
  }

  return (
    <main className="page-view">
      <Header />
      
      <section className="map-container-wraper">
       <section className="map-container">
          { ipData && !loading ? (
          <MapContainer center={[ipData.location.lat, ipData.location.lng]} zoom={15}>
            <TileLayer 
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker 
              position={[ipData.location.lat, ipData.location.lng]}
              icon={customMarkerIcon}
            >
              <Circle
                center={[ipData.location.lat, ipData.location.lng]}
                pathOptions={{
                  color: 'red',
                  fillColor: 'red',
                }}
                radius={350}
              />
            </Marker>
          </MapContainer>) : <Loading /> }
        </section>
      </section>
    </main>
  );
}
