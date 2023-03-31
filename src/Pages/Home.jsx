import React, { useState } from 'react';

export default function Home() {
  const [center, setCenter] = useState([-23.67782, -23.67782 ]);

  return (
    <div className="page-view">
      <header>
        <h1>IP Address Tracker</h1>
        <div className="input-container">
          <select className="settings">
            <option>IP</option>
            <option>Domain</option>
          </select>
          <input 
            name="domainInput" 
            type="text"
            placeholder="Search for any IP Address or domain" 
          />
          <button className='search-button'/>
        </div>
      </header>
      <div className="map-container">
      </div>
    </div>
  );
}
