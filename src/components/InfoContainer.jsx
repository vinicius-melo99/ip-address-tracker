import React, { useContext } from 'react'
import ApplicationContext from '../context/ApplicationContext';

const InfoContainer = () => {
  const { 
    ipData,
  } = useContext(ApplicationContext);
  return (
    <section className="ip-info-container">
      <section className="info-card">
        <p>IP ADDRESS</p>
        <span>{ ipData && ipData.ip }</span>
      </section>
      <section className="info-card">
        <p>LOCATION</p>
        <span>{ ipData && ( 
          `${ipData.location.region}, ${ipData.location.country}`) }
        </span>
      </section>
      <section className="info-card">
        <p>TIMEZONE</p>
        <span>{ ipData && `UTC ${ipData.location.timezone}` }</span>
      </section>
      <section className="info-card">
        <p>ISP</p>
        <span>{ ipData && ipData.isp }</span>
      </section>
    </section> )
}

export default InfoContainer