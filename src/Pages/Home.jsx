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

export default function Home() {
  const { 
    ipData, 
    error, 
    loading, 
    userInput, 
    userSelection,
    handleUserInput,
    handleSelect,
    handleSearch
  } = useContext(ApplicationContext);
  
  const [appInfo, setAppInfo] = useState(null); 

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
    <div className="page-view">
      <header>
        <h1>IP Address Tracker</h1>
        <div className="input-container">
          <select 
            className="settings"
            value={userSelection} 
            onChange={ handleSelect }
          >
            <option>IP</option>
            <option>Domain</option>
          </select>
          <input 
            name="userInput" 
            type="text"
            placeholder={
              userSelection === "IP" ? (
              "Search for any valid IP Address ex: 165.132.87.10")
              : "Search for any valid domain ex: www.google.com"
            }
            onChange={ handleUserInput }
            onKeyDown={({ key }) => {
              if(key === 'Enter' && userInput.length > 0) handleSearch()
            }}
            value={ userInput }
            maxLength={ userSelection === "IP" ? "15"
                        : "100" }
          />
          <button className='search-button'
            onClick={ handleSearch }
            disabled={ !userInput.length > 0 }
          />
        </div>
        <div className="ip-info-container">
            <div className="info-card">
              <p>IP ADDRESS</p>
              <h4>{ ipData && ipData.ip }</h4>
            </div>
            <div className="info-card">
              <p>LOCATION</p>
              <h4>{ ipData && ( 
                `${ipData.location.region}, ${ipData.location.country}`) }
              </h4>
            </div>
            <div className="info-card">
              <p>TIMEZONE</p>
              <h4>{ ipData && `UTC ${ipData.location.timezone}` }</h4>
            </div>
            <div className="info-card">
              <p>ISP</p>
              <h4>{ ipData && ipData.isp }</h4>
            </div>
        </div>
      </header>
      <div className="map-container">

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
      </div>
    </div>
  );
}
