import React, { useContext } from 'react'
import ApplicationContext from '../context/ApplicationContext';

const SelectTrackType = () => {
  const { 
    userSelection,
    handleSelect,
  } = useContext(ApplicationContext);

  return (
    <label htmlFor="select-type">
      Type:
      <select
        id="select-type"
        className="settings"
        value={ userSelection } 
        onChange={ handleSelect }
      >
        <option>IP</option>
        <option>Domain</option>
     </select>
    </label>
  )
}

export default SelectTrackType