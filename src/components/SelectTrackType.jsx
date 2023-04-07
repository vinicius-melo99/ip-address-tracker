import React, { useContext } from 'react'
import ApplicationContext from '../context/ApplicationContext';

const SelectTrackType = () => {
  const { 
    userSelection,
    handleSelect,
  } = useContext(ApplicationContext);

  return (
    <select 
      className="settings"
      value={ userSelection } 
      onChange={ handleSelect }
    >
      <option>IP</option>
      <option>Domain</option>
    </select>
  )
}

export default SelectTrackType