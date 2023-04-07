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
        <h4>{ ipData && ipData.ip }</h4>
      </section>
      <section className="info-card">
        <p>LOCATION</p>
        <h4>{ ipData && ( 
          `${ipData.location.region}, ${ipData.location.country}`) }
        </h4>
      </section>
      <section className="info-card">
        <p>TIMEZONE</p>
        <h4>{ ipData && `UTC ${ipData.location.timezone}` }</h4>
      </section>
      <section className="info-card">
        <p>ISP</p>
        <h4>{ ipData && ipData.isp }</h4>
      </section>
    </section> )
}

export default InfoContainer