import React, { useContext } from 'react'
import ApplicationContext from '../context/ApplicationContext';
import InfoContainer from './InfoContainer';
import SelectTrackType from './SelectTrackType';
import Title from './Title';
import InputContainer from './InputContainer';

const Header = () => {
  return (
    <header>
      <Title title="IP Address Tracker" />
      <InputContainer /> 
      <InfoContainer />
    </header>
  )
}

export default Header