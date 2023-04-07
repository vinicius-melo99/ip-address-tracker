import React, { useContext } from 'react'
import ApplicationContext from '../context/ApplicationContext';
import SelectTrackType from './SelectTrackType';

const InputContainer = () => {

  return (
    <div className="input-container">
      <SelectTrackType />
      <InputContainer />    
    </div>
  )
}

export default InputContainer