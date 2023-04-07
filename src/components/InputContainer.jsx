import React, { useContext } from 'react'
import ApplicationContext from '../context/ApplicationContext';
import SelectTrackType from './SelectTrackType';
import InputData from './InputData';

const InputContainer = () => {

  return (
    <div className="input-container">
      <SelectTrackType />
      <InputData />    
    </div>
  )
}

export default InputContainer