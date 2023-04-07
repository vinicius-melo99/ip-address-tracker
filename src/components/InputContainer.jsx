import React, { useContext } from 'react'
import ApplicationContext from '../context/ApplicationContext';
import SelectTrackType from './SelectTrackType';
import InputData from './InputData';

const InputContainer = () => {

  return (
    <section className="input-container">
      <SelectTrackType />
      <InputData />    
    </section>
  )
}

export default InputContainer